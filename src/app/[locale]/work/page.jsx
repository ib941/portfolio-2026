import WorkPage from '@/app/work/page';
import { pageMetadata } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, 'work');
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function LocalizedWorkPage() {
  return <WorkPage />;
}
