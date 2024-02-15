export const formatPathName = (path: string) => {
  if (path === 'home') {
    return '/';
  }
  return `/${path}`;
};
