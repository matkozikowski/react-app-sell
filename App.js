import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, Switch, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ListScreen from './app/screens/ListScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';


export default function App() {
  const [imageUri, setImageUrl] = useState();



  return <Screen>
    <ImageInput 
      imageUri={imageUri} 
      onChangeImage={uri => setImageUrl(uri)}
    />
    </Screen>;
}
