import { NextResponse, NextRequest } from "next/server";
import { locales } from "./data/locales";
 
const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}` || PUBLIC_FILE.test(request.nextUrl.pathname)
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = "fr"
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|logo|assets|menu).*)',
  ],
}