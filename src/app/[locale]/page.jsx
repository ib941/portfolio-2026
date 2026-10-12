import HomePage from '@/app/page';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function LocalizedHomePage() {
  return <HomePage />;
}
