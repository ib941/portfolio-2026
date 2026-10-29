import AboutPage from '@/app/about/page';
import { pageMetadata } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, 'about');
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function LocalizedAboutPage() {
  return <AboutPage />;
}
