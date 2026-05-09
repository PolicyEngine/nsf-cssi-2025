'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/application', label: 'Application' },
  { href: '/checklist', label: 'Checklist' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/performance', label: 'Performance' },
  { href: '/budget', label: 'Budget' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/integration', label: 'Integration' },
  { href: '/research', label: 'Research' },
  { href: '/references', label: 'References' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <>
      <Link className="logo" href="/" aria-label="PolicyEngine Home">
        PolicyEngine
      </Link>
      <ul className="nav-links">
        {links.map((link) => {
          const isActive =
            link.href === '/'
              ? pathname === '/'
              : pathname.startsWith(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
