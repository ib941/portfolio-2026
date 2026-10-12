import AboutPage from '@/app/about/page';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function LocalizedAboutPage() {
  return <AboutPage />;
}
