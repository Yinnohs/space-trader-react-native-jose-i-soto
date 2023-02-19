
import { createDrawerNavigator } from '@react-navigation/drawer'
import {  AppProvider, UserProvider } from './src/context';
import { Router } from './src/Router';


const Drawer  =  createDrawerNavigator()

export default function App() {

  
  return(
    <AppProvider>
      <UserProvider>
          <Router/>
      </UserProvider>
    </AppProvider>
  )
}
