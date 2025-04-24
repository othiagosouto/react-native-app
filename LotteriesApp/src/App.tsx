import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { LotteriesScreen } from './pages/LotteriesScreen';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.fullPage}>
        <LotteriesScreen />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  fullPage: {
    flex: 1,
  },
});
