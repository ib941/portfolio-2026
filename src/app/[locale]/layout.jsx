import { notFound } from 'next/navigation';
import { locales } from '@/lib/site';
export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  return children;
}
