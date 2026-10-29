import ContactPage from '@/app/contact/page';
import { pageMetadata } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, 'contact');
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function LocalizedContactPage() {
  return <ContactPage />;
}
