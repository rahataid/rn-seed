import { PATHS } from '../../routes/paths';

export type DrawerItems = {
  name: string;
  icon: string;
  screen: string;
  params?: any;
  onPress?: () => void;
};

export const items: DrawerItems[] = [
  {
    name: PATHS.HOME,
    icon: 'home',
    screen: PATHS.HOME,
  },
  {
    name: PATHS.SETTINGS,
    icon: 'home',
    screen: PATHS.SETTINGS,
  },
];
