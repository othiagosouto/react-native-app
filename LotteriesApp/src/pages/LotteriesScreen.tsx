import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import { LotteryCardView } from '../components/LotteryCardView';
import { useLotteriesList } from '../hooks/useLotteries';

export const LotteriesScreen = () => {
  const { data, isLoading, isError } = useLotteriesList();

  const component = isLoading ? (
    <ActivityIndicator style={styles.loading} />
  ) : (
    <FlatList
      style={styles.cardList}
      data={data}
      renderItem={({ item }) => <LotteryCardView lottery={item} />}
      keyExtractor={(item) => item.id}
    />
  );

  return component;
};

const styles = StyleSheet.create({
  cardList: {
    marginStart: 16,
    marginEnd: 16,
    marginTop: 8,
  },
  loading: {
    justifyContent: 'center',
    flex: 1,
  },
});
