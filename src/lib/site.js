export const siteUrl = 'https://portfolio-2026-dusky-one.vercel.app';
export const locales = ['en', 'ar'];

export function pageMetadata(locale, page = '') {
  const arabic = locale === 'ar';
  const labels = arabic
    ? { '': 'إبراهيم الكبسي — مطور ويب ومصمم أنظمة', work: 'أعمال مختارة', about: 'من أنا', contact: 'تواصل معي' }
    : { '': 'Ibrahim Alkabsi — Creative Web Developer & Systems Architect', work: 'Selected Work', about: 'About Ibrahim', contact: 'Contact Ibrahim' };
  const descriptions = arabic
    ? { '': 'تطبيقات ويب متقدمة، وأنظمة تجارة مؤتمتة، وتجارب رقمية متقنة من إبراهيم الكبسي.', work: 'استكشف مشاريع إبراهيم في تطوير الويب، ومتاجر سلة، والتوجيه البصري.', about: 'تعرف على خبرات إبراهيم الكبسي في تطوير الويب والأتمتة والتجارة الإلكترونية.', contact: 'تواصل مع إبراهيم الكبسي لمناقشة مشاريع الويب والتجارة الإلكترونية والتوجيه البصري.' }
    : { '': 'Engineering high-performance web applications, automated commerce systems, and fluid digital experiences.', work: 'Explore Ibrahim’s web platforms, Salla storefronts, and commercial visual direction.', about: 'Discover Ibrahim Alkabsi’s experience in web engineering, automation, and e-commerce.', contact: 'Contact Ibrahim Alkabsi about web development, e-commerce, and visual direction projects.' };
  const suffix = page ? `/${page}` : '';
  const canonical = `${siteUrl}/${locale}${suffix}`;
  return {
    title: labels[page], description: descriptions[page],
    alternates: { canonical, languages: { en: `${siteUrl}/en${suffix}`, ar: `${siteUrl}/ar${suffix}`, 'x-default': `${siteUrl}/en${suffix}` } },
    openGraph: { title: labels[page], description: descriptions[page], url: canonical, siteName: 'Ibrahim Alkabsi', type: 'website', locale: arabic ? 'ar_SA' : 'en_US', alternateLocale: arabic ? 'en_US' : 'ar_SA', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Ibrahim Alkabsi — Creative Web Developer & Systems Architect' }] },
    twitter: { card: 'summary_large_image', title: labels[page], description: descriptions[page], images: ['/opengraph-image'] },
  };
}
