export default class Constants {
  static PUBLIC_ROUTES = ['/', '/manage/users'];

  static COOKIES = {
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
  };

  static NAVBAR_LINK = [
    { href: '/manage/users', label: 'User Management' },
    { href: '/manage/companies', label: 'Company Management' },
  ];
}
