import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import New from '../pages/New';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(

        <AppDrawer.Navigator
            drawerStyle={{
                backgroundColor: '#8A2BE2',
            }}
            drawerContentOptions={{
                labelStyle:{
                    fontWeight: 'bold'
                },
                activeTintColor: '#FFF',
                activeBackgroundColor: '#00b94a',
                inactiveBackgroundColor: '#4B0082',
                inactiveTintColor: '#DDD',
                itemStyle:{
                    marginVertical: 5,
                }
            }}
        >

            <AppDrawer.Screen name="Home" component={Home} />
            <AppDrawer.Screen name="Registrar" component={New} />
            <AppDrawer.Screen name="Perfil" component={Profile} />

        </AppDrawer.Navigator>

    );
}

export default AppRoutes;