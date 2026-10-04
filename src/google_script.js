/**
 * Web app endpoint for React contact form.
 * Customize: RECIPIENT_EMAIL, ALLOWED_ORIGIN, validation rules as needed.
 */

const RECIPIENT_EMAIL = 'denyskorolkov@premavision.net'; // <-- Customize recipient email
const ALLOWED_ORIGIN = '*'; // <-- Customize allowed origin (use '*' for all origins)

// Anti-spam config.
// Bots found this endpoint directly (it's a public URL sitting in a public
// GitHub repo) and started replaying the *old* legacy payload shape
// (name/email/projectType/message) straight at it, skipping the site
// entirely. These checks don't stop a targeted attacker who reads the
// current bundle, but they kill generic replay bots that only know the
// old field shape and don't send FORM_GUARD.
const FORM_GUARD_TOKEN = 'kp-guard-2026-08'; // must match hidden field sent by the real forms
const RATE_LIMIT_PER_EMAIL_PER_HOUR = 3;
const RATE_LIMIT_GLOBAL_PER_MINUTE = 20;

/**
 * Optional handler for OPTIONS preflight.
 */
function doOptions(e) {
  return buildResponse_(200, { success: true, info: 'Preflight placeholder.' });
}

/**
 * Main POST handler for contact form submissions.
 * Expects JSON body (new form):
 * {
 *   name: string;          // required
 *   email: string;         // required
 *   company?: string;
 *   budgetRange?: string;
 *   projectBrief?: string;
 *   howFound?: string;
 * }
 * 
 * Backwards compatible with legacy payload:
 * {
 *   name: string;          // required
 *   email: string;         // required
 *   projectType?: string;
 *   message?: string;
 * }
 */
function doPost(e) {
  try {
    console.log('doPost event:', JSON.stringify(e));

    if (!e || !e.postData || !e.postData.contents) {
      return buildResponse_(400, { success: false, error: 'Missing request body.' });
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (errParse) {
      console.log('JSON parse error:', errParse);
      return buildResponse_(400, { success: false, error: 'Invalid JSON body.' });
    }

    console.log('Parsed payload:', JSON.stringify(data));

    var validationError = validatePayload_(data);
    if (validationError) {
      return buildResponse_(400, { success: false, error: validationError });
    }

    // Bot check. Return a fake success so scripts blindly replaying the old
    // payload shape don't get a signal to adjust — but never send the email.
    if (isLikelySpam_(data)) {
      console.log('Rejected as spam (silent):', JSON.stringify(data));
      return buildResponse_(200, { success: true });
    }

    var rateLimitError = checkRateLimit_(String(data.email || '').trim());
    if (rateLimitError) {
      console.log('Rate limited:', rateLimitError);
      return buildResponse_(200, { success: true }); // silent, same reasoning as above
    }

    var name = String(data.name || '').trim();
    var email = String(data.email || '').trim();

    // New form fields
    var company = data.company ? String(data.company).trim() : '';
    var budgetRange = data.budgetRange ? String(data.budgetRange).trim() : '';
    var projectBrief = data.projectBrief ? String(data.projectBrief).trim() : '';
    var howFound = data.howFound ? String(data.howFound).trim() : '';

    // Legacy fields support
    var projectType = data.projectType ? String(data.projectType).trim() : '';
    var message = data.message ? String(data.message).trim() : '';

    var timestamp = new Date().toISOString();

    // Build email
    var subject = projectType
      ? '\uD83D\uDCEC New Site Inquiry: ' + projectType
      : '\uD83D\uDCEC New Project Quote Request';
    
    var htmlBody = buildHtmlEmail_(name, email, company, budgetRange, projectBrief, howFound, projectType, message, timestamp);
    
    var plainBody = 
      'New inquiry from ' + name + ' (' + email + ')\n\n' +
      (company ? 'Company: ' + company + '\n' : '') +
      (budgetRange ? 'Budget range: ' + budgetRange + '\n' : '') +
      (howFound ? 'How they found us: ' + howFound + '\n' : '') +
      (projectType ? 'Project type: ' + projectType + '\n' : '') +
      (message ? '\nMessage:\n' + message + '\n' : '') +
      (projectBrief ? '\nProject brief:\n' + projectBrief + '\n' : '') +
      'Timestamp: ' + timestamp;

    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody,
      replyTo: email
    });

    console.log('Email sent for inquiry from:', email);
    return buildResponse_(200, { success: true });
  } catch (err) {
    console.log('Unhandled error in doPost:', err);
    return buildResponse_(500, { success: false, error: 'Internal server error.' });
  }
}

/**
 * Build beautiful HTML email
 */
function buildHtmlEmail_(name, email, company, budgetRange, projectBrief, howFound, projectType, message, timestamp) {
  var escape = function (str) {
    return String(str || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
  
  var escapedName = escape(name);
  var escapedEmail = escape(email);
  var escapedCompany = escape(company);
  var escapedBudgetRange = escape(budgetRange);
  var escapedHowFound = escape(howFound);
  var escapedProjectType = escape(projectType);
  var escapedMessage = escape(message).replace(/\n/g, '<br>');
  var escapedProjectBrief = escape(projectBrief).replace(/\n/g, '<br>');
  var dateStr = new Date(timestamp || new Date().toISOString()).toLocaleString('en-US', { timeZone: 'America/New_York' });
  
  return '<!DOCTYPE html>' +
    '<html><head><meta charset="UTF-8"></head>' +
    '<body style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f5f5f5;">' +
    '<div style="max-width: 600px; margin: 0 auto; padding: 20px;">' +
    '<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0;">' +
    '<h1 style="margin: 0; font-size: 24px;">\uD83D\uDCEC New Inquiry</h1>' +
    '<p style="margin: 10px 0 0; opacity: 0.9;">Premavision contact form</p>' +
    '</div>' +
    '<div style="background: #fff; padding: 30px; border: 1px solid #e0e0e0; border-top: none;">' +
    '<div style="margin-bottom: 20px;">' +
    '<div style="font-weight: 600; color: #667eea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">From</div>' +
    '<div style="font-size: 16px; color: #333;">' + escapedName + '</div>' +
    '</div>' +
    '<div style="margin-bottom: 20px;">' +
    '<div style="font-weight: 600; color: #667eea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Email</div>' +
    '<div style="font-size: 16px;"><a href="mailto:' + escapedEmail + '" style="color: #667eea;">' + escapedEmail + '</a></div>' +
    '</div>' +
    (projectType ? '<div style="margin-bottom: 20px;">' +
    '<div style="font-weight: 600; color: #667eea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Project Type</div>' +
    '<div style="font-size: 16px; color: #333;">' + escapedProjectType + '</div>' +
    '</div>' : '') +
    (company ? '<div style="margin-bottom: 20px;">' +
    '<div style="font-weight: 600; color: #667eea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Company</div>' +
    '<div style="font-size: 16px; color: #333;">' + escapedCompany + '</div>' +
    '</div>' : '') +
    (budgetRange ? '<div style="margin-bottom: 20px;">' +
    '<div style="font-weight: 600; color: #667eea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Budget Range</div>' +
    '<div style="font-size: 16px; color: #333;">' + escapedBudgetRange + '</div>' +
    '</div>' : '') +
    (howFound ? '<div style="margin-bottom: 20px;">' +
    '<div style="font-weight: 600; color: #667eea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">How they found us</div>' +
    '<div style="font-size: 16px; color: #333;">' + escapedHowFound + '</div>' +
    '</div>' : '') +
    (message ? '<div style="margin-bottom: 20px;">' +
    '<div style="font-weight: 600; color: #667eea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Message</div>' +
    '<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea;">' + (escapedMessage || '<em>Not provided</em>') + '</div>' +
    '</div>' : '') +
    '<div style="margin-bottom: 20px;">' +
    '<div style="font-weight: 600; color: #667eea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Project Brief</div>' +
    '<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea;">' + (escapedProjectBrief || '<em>Not provided</em>') + '</div>' +
    '</div>' +
    '<a href="mailto:' + escapedEmail + '?subject=Re%3A%20Project%20Quote%20Request" style="display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 15px;">Reply to ' + escapedName + '</a>' +
    '</div>' +
    '<div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px; font-size: 12px; color: #888; border: 1px solid #e0e0e0; border-top: none;">' +
    '<strong>Received:</strong> ' + dateStr + ' EST<br>' +
    '<strong>Source:</strong> Premavision project quote form' +
    '</div>' +
    '</div>' +
    '</body></html>';
}

/**
 * Heuristic spam detection for generic replay bots.
 * Not meant to stop a targeted attacker — just the blind scripts currently
 * hitting this endpoint with the legacy payload shape.
 */
function isLikelySpam_(data) {
  // 1. Honeypot: real forms never fill this hidden field. Bots that
  //    autofill every field they see will trip it.
  if (data.website) return true;

  // 2. Form guard: real forms send this constant in a hidden field.
  //    A script replaying only {name, email, projectType, message} won't
  //    have it at all.
  if (String(data.formGuard || '') !== FORM_GUARD_TOKEN) return true;

  // 3. Content signature match: current spam wave sends a message body
  //    that's nothing but a phone number (10-15 digits, no letters).
  var body = String(data.message || data.projectBrief || '').trim();
  if (body && /^[\d\s().+-]{7,20}$/.test(body)) return true;

  return false;
}

/**
 * Cheap rate limiting via CacheService (max 6h TTL, good enough here —
 * legitimate submissions are rare, so short windows are plenty).
 */
function checkRateLimit_(email) {
  var cache = CacheService.getScriptCache();

  var normalizedEmail = normalizeEmail_(email);
  var emailKey = 'rl_email_' + normalizedEmail;
  var emailCount = Number(cache.get(emailKey) || 0) + 1;
  cache.put(emailKey, String(emailCount), 3600); // 1h
  if (emailCount > RATE_LIMIT_PER_EMAIL_PER_HOUR) {
    return 'Per-email limit exceeded: ' + normalizedEmail;
  }

  var minuteKey = 'rl_global_' + Math.floor(Date.now() / 60000);
  var minuteCount = Number(cache.get(minuteKey) || 0) + 1;
  cache.put(minuteKey, String(minuteCount), 120); // 2 min, well past the 1-min bucket
  if (minuteCount > RATE_LIMIT_GLOBAL_PER_MINUTE) {
    return 'Global per-minute limit exceeded.';
  }

  return null;
}

/**
 * Strips Gmail dot-tricks (a.b.c@gmail.com === abc@gmail.com) so the same
 * bot can't dodge the per-email rate limit by inserting dots.
 */
function normalizeEmail_(email) {
  var parts = String(email || '').toLowerCase().trim().split('@');
  if (parts.length !== 2) return String(email || '').toLowerCase().trim();
  var local = parts[0];
  var domain = parts[1];
  if (domain === 'gmail.com' || domain === 'googlemail.com') {
    local = local.split('+')[0].replace(/\./g, '');
  }
  return local + '@' + domain;
}

/**
 * Validation rules for incoming payload.
 */
function validatePayload_(data) {
  if (!data) return 'Missing payload.';

  var name = String(data.name || '').trim();
  var email = String(data.email || '').trim();

  if (!name) return 'Name is required.';
  if (!email) return 'Email is required.';

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) return 'Email format is invalid.';

  return null;
}

/**
 * Build JSON response.
 */
function buildResponse_(statusCode, obj) {
  var payload = JSON.stringify(obj);
  return ContentService.createTextOutput(payload).setMimeType(ContentService.MimeType.JSON);
}