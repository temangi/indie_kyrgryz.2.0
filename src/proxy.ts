import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "indiekyrgyz.com";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") ?? "";
  const hostNoPort = host.split(":")[0]?.toLowerCase() ?? "";
  const isProd = process.env.NODE_ENV === "production";
  const proto = request.headers.get("x-forwarded-proto");

  let pathname = url.pathname;
  const hadTrailingSlash = pathname !== "/" && pathname.endsWith("/");
  if (hadTrailingSlash) {
    pathname = pathname.replace(/\/+$/, "") || "/";
  }

  const needsCanonicalHost =
    isProd && (hostNoPort === `www.${CANONICAL_HOST}` || proto === "http");

  if (!needsCanonicalHost && !hadTrailingSlash) {
    return NextResponse.next();
  }

  if (needsCanonicalHost) {
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
  }

  url.pathname = pathname;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    /*
     * Skip internals and static files so the proxy does not run on every asset.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff2?|txt|xml|json|webmanifest)).*)",
  ],
};
