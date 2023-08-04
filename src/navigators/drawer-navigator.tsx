import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigationProp } from '@react-navigation/native';
import React from 'react';
import CustomDrawerContent from '../layout/drawer/custom-drawer';
// import { RootStackParamList } from '../types'; // Create this type if it doesn't exist
import { ApplicationStackParamList } from '../../@types/navigation';
import BottomTabsNavigator from './bottom-tabs-navigator';

type DrawerNavigatorProps = {
  navigation: DrawerNavigationProp<ApplicationStackParamList, 'Main Drawer'>;
};

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC<DrawerNavigatorProps> = ({ navigation }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} navigation={navigation} />}
    >
      <Drawer.Screen name="Home" component={BottomTabsNavigator} />
      {/* Add more drawer screens as needed */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
