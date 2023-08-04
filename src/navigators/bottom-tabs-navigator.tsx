import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { PATHS } from '../routes/paths';
import { Example } from '../screens';

const Tab = createBottomTabNavigator();

const getScreenOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: styles.tabBar,
    tabBarLabelStyle: { fontSize: 20, fontWeight: 'bold' },
  };
};

interface TabBarItemProps {
  label: string;
  icon: string;
  onPress: () => void;
  isFocused: boolean;
}

const TabBarItem: FC<TabBarItemProps> = ({ label, icon, onPress, isFocused }) => (
  <TouchableOpacity
    accessibilityRole="button"
    accessibilityState={isFocused ? { selected: true } : {}}
    onPress={onPress}
    style={[
      styles.tabItem,
      isFocused && styles.tabItemFocused, // Apply additional style for focused tab
    ]}
  >
    <Icon name={icon} size={25} color={isFocused ? '#673ab7' : '#222'} />
    <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
  </TouchableOpacity>
);

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <TabBarItem
            key={index}
            label={label}
            icon={options.tabBarIcon || 'circle'}
            onPress={onPress}
            isFocused={isFocused}
            style={
              label === 'Scan' // Apply custom styles for the tab with label 'Scan'
                ? { flex: 2, marginHorizontal: 10, borderRadius: 30 }
                : {} // For other tabs, use default styles
            }
          />
        );
      })}
    </View>
  );
}

const BottomTabsNavigator: FC = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} screenOptions={getScreenOptions()}>
      <Tab.Screen
        name={PATHS.HOME}
        component={Example}
        options={{
          headerShown: false,
          tabBarLabel: PATHS.HOME,
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'home' : 'homeo'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={PATHS.SETTINGS}
        component={Example}
        options={{
          tabBarLabel: PATHS.QRSCAN,
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'cog' : 'cogs'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={PATHS.PROFILE}
        component={Example}
        options={{
          tabBarLabel: PATHS.PROFILE,
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'cog' : 'cogs'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: '5%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 20, // Apply a slight border radius to soften the edges
  },
  tabItemFocused: {
    backgroundColor: '#e6e6e6', // Change the background color for the focused tab
  },
  tabBar: {
    // Additional tabBar styles here
  },
});

export default BottomTabsNavigator;
