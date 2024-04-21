import { matchPattern } from '@/utils';
import Constants from '@/utils/Constants';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const requestPathname = request.nextUrl.pathname;
  const isAuthenticated = cookies().get(Constants.COOKIES.ACCESS_TOKEN);

  if (requestPathname === Constants.PUBLIC_ROUTES[0] && isAuthenticated) {
    return NextResponse.redirect(
      new URL(Constants.NAVBAR_LINK[0].href, request.url),
    );
  }

  if (checkPublicRoutes(requestPathname)) {
    return NextResponse.next();
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(
      new URL(Constants.PUBLIC_ROUTES[0], request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};

function checkPublicRoutes(path: string) {
  for (let idx = 0; idx < Constants.PUBLIC_ROUTES.length; idx++) {
    const pattern = Constants.PUBLIC_ROUTES[idx];
    if (matchPattern(path, pattern)) return true;
  }
  return false;
}
