import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeScreen, LoginScreen, ProfileScreen, RegisterScreen } from './src/screens';


const Drawer  =  createDrawerNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>

      <Drawer.Screen
          name='Home'
          component={HomeScreen}
          options={{headerTitle:""}}
        />

      <Drawer.Screen
          name='Login'
          component={LoginScreen}
          options={{headerTitle:""}}

        />

        <Drawer.Screen
          name='Register'
          component={RegisterScreen}
          options={{headerTitle:""}}
        />
        
        <Drawer.Screen
          name='Profile'
          component={ProfileScreen}
          options={{headerTitle:""}}
        />
      
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
