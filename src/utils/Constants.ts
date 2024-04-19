export default class Constants {
  static PUBLIC_ROUTES = ['/'];

  static COOKIES = {
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
  };

  static NAVBAR_LINK = [
    { href: '/manage/users', label: 'User Management' },
    { href: '/manage/companies', label: 'Company Management' },
  ];

  static PAGINATION_NUMBER = [10, 20, 30];

  static SYSTEM_ROLE = {
    USER: 'user',
  };

  static SERVER_CODE = {
    EXPIRED_TOKEN: 'ERR_TOK0102',
  };
}
