import { useWindowSize } from 'react-use';

export const useMobile = () => {
  const { width } = useWindowSize();
  return width < 1024;
};
