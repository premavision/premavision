// Project Quote Form Submission
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz_GoEC59kgIodnUtfuQFOmrdCV7rGm3p-lMMKXCAcknr5fFVX2h8vUxk4nvc7iQD68/exec';

async function submitQuoteForm(formData) {
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        // Используем тот формат, который гарантированно работает
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        // Базовые поля из твоего примера
        name: formData.name,
        email: formData.email,
        // Дополнительные поля, которые уже есть в форме
        company: formData.company,           // Компания
        budgetRange: formData.budgetRange,   // Бюджет (dropdown)
        projectBrief: formData.projectBrief, // Описание проекта
        howFound: formData.howFound          // Как нашли нас?
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Форма успешно отправлена!');
      return { success: true, message: result.message };
    } else {
      console.error('❌ Ошибка валидации:', result.error);
      return { success: false, error: result.error };
    }
    
  } catch (error) {
    console.error('❌ Ошибка отправки:', error);
    return { success: false, error: 'Ошибка сети. Попробуйте позже.' };
  }
}

// Пример использования:
const formData = {
  name: 'Иван Иванов',
  email: 'ivan@example.com',
  company: 'Example Corp',
  budgetRange: '$10,000 - $50,000',
  projectBrief: 'Нужна разработка нового сайта...',
  howFound: 'Google Search'
};

submitQuoteForm(formData).then(result => {
  if (result.success) {
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  } else {
    alert(`Ошибка: ${result.error}`);
  }
});
