import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "indiekyrgyz.com";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") ?? "";

  const hostNoPort = host.split(":")[0]?.toLowerCase() ?? "";

  if (
    process.env.NODE_ENV === "production" &&
    hostNoPort === `www.${CANONICAL_HOST}`
  ) {
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  const { pathname } = url;
  if (pathname !== "/" && pathname.endsWith("/")) {
    url.pathname = pathname.replace(/\/+$/, "") || "/";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Skip internals and static files so middleware does not run on every asset.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff2?|txt|xml|json|webmanifest)).*)",
  ],
};
