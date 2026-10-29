import HomePage from '@/app/page';
import { pageMetadata } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, '');
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function LocalizedHomePage() {
  return <HomePage />;
}
