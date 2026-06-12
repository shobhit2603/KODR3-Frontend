import { NextResponse } from "next/server";

export function middleware(req) {
  const sessionToken = req.cookies.get("sessionToken")?.value;
  const { pathname } = req.nextUrl;

  const isAuthPage = pathname === "/login" || pathname === "/register";

  const isApiRoute = pathname.startsWith("/api");

  const isPublicAsset = pathname.includes(".") || pathname.startsWith("/_next");

  if (isApiRoute || isPublicAsset) {
    return NextResponse.next();
  }
  if (!sessionToken && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (sessionToken && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
