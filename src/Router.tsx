
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AuthScreen, LogoutScreen } from './screens';
import { AppContext } from './context';
import { useContext } from 'react';


const Drawer  =  createDrawerNavigator()

export  function Router() {
  const {data, set} = useContext(AppContext)
  

  
  return(
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='' screenOptions={
            {
                headerTitle: "SpaceTraders",
                headerTintColor:'#D97706',
                drawerActiveTintColor: '#D97706',
                drawerInactiveTintColor: '#796706',
                drawerContentStyle:{
                    backgroundColor: '#220135'
                },
                headerStyle:
                {
                    backgroundColor:'#220135',
                    borderColor:'#220135',
                    borderRadius: 15,
                },
                headerShadowVisible:false,

                headerBackgroundContainerStyle:{
                    backgroundColor:'#190028'
                }
            }}>
    {
        data.isLogged === true
        ?(
            <>
                    <Drawer.Screen
                    name='Home'
                    // @ts-ignore
                    getComponent={()=> require('./screens').HomeScreen}
                    
                    />
                    <Drawer.Screen
                    name='Loans'
                    getComponent={()=> require('./screens').LoansScreen}
                    
                    />
                    <Drawer.Screen
                    name='Ships'
                    getComponent={()=> require('./screens').ShipsScreen}
                    
                    />
                    <Drawer.Screen
                    name='Logout'
                    // @ts-ignore
                    component={LogoutScreen}
                    
                    />
                
            </>
        )
        :(
            <>
                <Drawer.Screen
                name='Auth'
                // @ts-ignore
                component={AuthScreen}
                options={{headerShown:false }}
                />
                <Drawer.Screen
                name='Login'
                // @ts-ignore
                getComponent={()=> require('./screens').LoginScreen}
                options={{headerShown:false}}
                />

                <Drawer.Screen
                name='Register'
                // @ts-ignore
                getComponent={()=> require('./screens').RegisterScreen}
                options={{headerShown:false, unmountOnBlur:true}}
                />
            
                
            </>
        )
    }
        </Drawer.Navigator>
    </NavigationContainer>
  )
}
