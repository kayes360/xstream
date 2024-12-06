import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let locales = ["bn", "en"];
let defaultLocale = "en";

function getLocale(request) {
  const langCookie = request.cookies.get('lang')?.value; // Check the lang cookie
  if (langCookie && locales.includes(langCookie)) {
    return langCookie; // Use the language from the cookie if available
  }

  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  let languages = new Negotiator({ headers }).languages(); 
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const pathName = request.nextUrl.pathname;

  if (pathName === "/") {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/videos`, request.url));
  }

  const pathnameIsMissing = locales.every(
    (locale) => !pathName.startsWith(`/${locale}`) && pathName !== `/${locale}`
  );
  if (pathnameIsMissing) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathName}`, request.url)
    );
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
