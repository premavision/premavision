import React, { createContext, useContext } from 'react';
import { normalizePath } from './site';

/* A router small enough to read in one go. Every route is also a real
 * prerendered HTML file, so links work without JavaScript; with it, clicks
 * swap the page in place and keep scroll and focus sensible. */

interface RouterValue {
  path: string;
  navigate: (to: string) => void;
}

export const RouterContext = createContext<RouterValue>({ path: '/', navigate: () => {} });
export const useRouter = () => useContext(RouterContext);

const isPlainLeftClick = (e: React.MouseEvent) =>
  e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.defaultPrevented;

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { path, navigate } = useRouter();
  const [base, hash] = to.split('#');
  const internal = to.startsWith('/') && !to.startsWith('//');
  const href = internal ? normalizePath(base) + (hash ? `#${hash}` : '') : to;
  const current = internal && normalizePath(base) === path && !hash;

  return (
    <a
      href={href}
      aria-current={current ? 'page' : undefined}
      onClick={(e) => {
        onClick?.(e);
        if (!internal || !isPlainLeftClick(e)) return;
        if (normalizePath(base) === path && hash) return; // same page anchor: let the browser scroll
        e.preventDefault();
        navigate(href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
