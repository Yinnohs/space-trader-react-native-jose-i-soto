
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AuthScreen} from './src/screens';
import { UserContext, UserProvider } from './src/context';
import { useContext } from 'react';


const Drawer  =  createDrawerNavigator()

export  function Router() {
  const {data, set} = useContext(UserContext)

  
  return(
    <NavigationContainer>
     
        <Drawer.Navigator initialRouteName='' screenOptions={{headerShown:false}}>
    {
        data.isLogged === true
        ?(
            <>
                <Drawer.Screen
                name='Home'
                // @ts-ignore
                getComponent={()=> require('./src/screens').HomeScreen}
                options={{headerTitle:"",}}
                />
                <Drawer.Screen
                name='Profile'
                getComponent={()=> require('./src/screens').ProfileScreen}
                options={{headerTitle:""}}
                />
            </>
        )
        :(
            <>
                <Drawer.Screen
                name='Auth'
                // @ts-ignore
                component={AuthScreen}
                options={{headerTitle:""}}
                />
                <Drawer.Screen
                name='Login'
                // @ts-ignore
                getComponent={()=> require('./src/screens').LoginScreen}
                options={{headerTitle:""}}
                />

                <Drawer.Screen
                name='Register'
                // @ts-ignore
                getComponent={()=> require('./src/screens').RegisterScreen}
                options={{headerTitle:"", unmountOnBlur:true}}
                />
            
                
            </>
        )
    }
        

       

        

         
        
        </Drawer.Navigator>
    </NavigationContainer>
  )
}
