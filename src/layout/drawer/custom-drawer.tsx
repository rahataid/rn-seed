import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerItems, items } from './config';

type CustomDrawerContentProps = DrawerContentComponentProps;

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ navigation }) => {
  const handleButtonPress = (item: DrawerItems) => () => {
    if (item.screen) {
      navigation.navigate(item.screen, item.params);
    } else if (item.onPress) {
      item.onPress();
    }
  };

  const renderDrawerItems = items.map((item: DrawerItems) => (
    <View style={styles.container} key={item.name}>
      <TouchableOpacity onPress={handleButtonPress(item)} style={styles.button}>
        <Text style={styles.buttonText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  ));

  return <View style={styles.container}>{renderDrawerItems}</View>;
};

const styles = StyleSheet.create({
  container: {
    top: 20,
    left: '5%',
    width: '90%',
  },
  button: {
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  switchText: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default CustomDrawerContent;
