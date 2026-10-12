import ContactPage from '@/app/contact/page';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function LocalizedContactPage() {
  return <ContactPage />;
}
