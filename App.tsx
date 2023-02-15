
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AuthScreen} from './src/screens';
import { UserContext, UserProvider } from './src/context';
import { useContext } from 'react';
import { Router } from './Router';


const Drawer  =  createDrawerNavigator()

export default function App() {
  const {data, set} = useContext(UserContext)

  
  return(
    <UserProvider>
      <Router/>
    </UserProvider>
  )
}
