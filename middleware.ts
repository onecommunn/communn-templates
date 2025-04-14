import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const subdomain = host.split('.')[0];

  if (subdomain && subdomain !== 'www' && subdomain !== 'localhost') {
    const url = request.nextUrl.clone();
    url.pathname = `/_sites/${subdomain}${url.pathname}`; // ✅ your folder path
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|static|.*\\..*).*)'],
};
