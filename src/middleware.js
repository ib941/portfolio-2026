import { NextResponse } from 'next/server';

const locales = ['en', 'ar'];
const defaultLocale = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Bypass internal next files, api routes, and static assets
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/public') ||
    pathname === '/opengraph-image' ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already has a supported locale prefix (/en or /ar)
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    const currentLocale = pathname.split('/')[1];
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-portfolio-locale', currentLocale);
    const response = NextResponse.next({ request: { headers: requestHeaders } });
    response.cookies.set('NEXT_LOCALE', currentLocale, {
      path: '/',
      maxAge: 31536000,
      sameSite: 'lax',
    });
    return response;
  }

  // Retrieve saved locale from cookie or fall back to default
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const locale = locales.includes(savedLocale) ? savedLocale : defaultLocale;

  // Redirect to localized path (e.g., / -> /en, /work -> /en/work)
  const targetPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = targetPath;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
