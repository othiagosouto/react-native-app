import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { AddLottery } from './pages/AddLottery';
import { Home } from './pages/Home';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: '' }} />
          <Stack.Screen name="AddLottery" component={AddLottery} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
