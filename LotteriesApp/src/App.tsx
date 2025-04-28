import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { AddLotteryScreen } from './pages/AddLotteryScreen';
import { LotteriesScreen } from './pages/LotteriesScreen';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LotteriesScreen"
            component={LotteriesScreen}
            options={{ title: '' }}
          />
          <Stack.Screen name="AddLotteryScreen" component={AddLotteryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
