export default class Constants {
  static PUBLIC_ROUTES = ['/'];

  static COOKIES = {
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
  };

  static NAVBAR_LINK = [
    { href: '/manage/users', label: 'User' },
    { href: '/manage/companies', label: 'Company' },
    { href: '/manage/constants', label: 'Constant' },
  ];

  static PAGINATION_NUMBER = [10, 20, 30];

  static SYSTEM_ROLE = {
    USER: 'user',
    COMPANY: 'company',
    CONSTANT: 'constant',
  };

  static VALUE = {
    TRUE: 'true',
  };

  static PREFIX = {
    LANGUAGE: '06',
  };

  static SERVER_CODE = {
    EXPIRED_TOKEN: 'ERR_TOK0102',
  };
}
