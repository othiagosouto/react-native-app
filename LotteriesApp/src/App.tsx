import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ToastProvider } from 'react-native-toast-notifications';

import { AddLottery } from './pages/AddLottery/AddLottery';
import { Home } from './pages/Home/Home';
import { RegisterLottery } from './pages/RegisterLottery/RegisterLottery';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen name="AddLottery" component={AddLottery} />
            <Stack.Screen
              name="RegisterLottery"
              component={RegisterLottery}
              options={{ presentation: 'modal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </ToastProvider>
  );
};
