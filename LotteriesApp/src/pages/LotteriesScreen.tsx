import { ActivityIndicator, FlatList, Text } from 'react-native';

import { useLotteriesList } from '../hooks/useLotteries';

export const LotteriesScreen = () => {
  const { data, isLoading, isError } = useLotteriesList();

  const component = isLoading ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(item) => item.id}
    />
  );

  return component;
};
