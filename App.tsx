
import { createDrawerNavigator } from '@react-navigation/drawer'
import {  AppProvider } from './src/context';
import { Router } from './Router';


const Drawer  =  createDrawerNavigator()

export default function App() {

  
  return(
    <AppProvider>
      <Router/>
    </AppProvider>
  )
}
