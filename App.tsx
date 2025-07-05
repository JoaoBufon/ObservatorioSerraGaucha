import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import LoginScreen from './Login';
import CadastroEmpreendimento from './CadastroEmpreendimento';
import { Image, StyleSheet } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

interface CustomDrawerContentProps extends DrawerContentComponentProps { }

function CustomDrawerContent(props: CustomDrawerContentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        source={require('./logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function DrawerNavigator() {
  return (

    <Drawer.Navigator initialRouteName="Empreendimentos"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Empreendimentos" component={CadastroEmpreendimento} />
      <Drawer.Screen name="Evento" component={CadastroEmpreendimento} />
      <Drawer.Screen name="Municipio" component={CadastroEmpreendimento} />
      <Drawer.Screen name="Roteiro" component={CadastroEmpreendimento} />
      <Drawer.Screen name="Região" component={CadastroEmpreendimento} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainDrawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 160,
    marginBottom: 10,
    alignSelf: 'center',
  }
});