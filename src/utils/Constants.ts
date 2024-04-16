export default class Constants {
  static PUBLIC_ROUTES = ['/'];

  static COOKIES = {
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
  };

  static NAVBAR_LINK = [
    { href: '/users', label: 'User Management' },
    { href: '/companies', label: 'Company Management' },
  ];
}
