import { isAuthenticated, matchPattern } from '@/utils';
import Constants from '@/utils/Constants';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const requestPathname = request.nextUrl.pathname;
  if (checkPublicRoutes(requestPathname)) return NextResponse.next();

  if (!isAuthenticated()) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

function checkPublicRoutes(path: string) {
  for (let idx = 0; idx < Constants.PUBLIC_ROUTES.length; idx++) {
    const pattern = Constants.PUBLIC_ROUTES[idx];
    if (matchPattern(path, pattern)) return true;
  }
  return false;
}
