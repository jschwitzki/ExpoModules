import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MapView, Permissions } from 'expo';

import MapScreen from './screens/MapScreen';
import Cleiton from './screens/StatusBar';
import Calendario from './screens/Calendar';
import VideoThumbnail from './screens/VideoThumbnails';
import Bateria from './screens/Battery';
import Giroscopio from './screens/Gyroscope';
import MyPager from './screens/MyPager';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('MapScreen')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="MapScreen" component={MapScreen} />
        <Drawer.Screen name="VideoThumbnail" component={VideoThumbnail} />
        <Drawer.Screen name="Bateria" component={Bateria} />
        <Drawer.Screen name="Giroscopio" component={Giroscopio} />
        <Drawer.Screen name="MyPager" component={MyPager} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}