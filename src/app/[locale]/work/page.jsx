import WorkPage from '@/app/work/page';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function LocalizedWorkPage() {
  return <WorkPage />;
}
