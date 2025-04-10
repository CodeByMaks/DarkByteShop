import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const lang = request.cookies.get('lang')?.value || 'en';
  const response = NextResponse.next();
  response.cookies.set('lang', lang);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
