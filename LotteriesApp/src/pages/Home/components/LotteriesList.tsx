import { FlatList, StyleSheet } from 'react-native';

import type { Lottery } from '../../../types';

import { EmptyMessage } from '../../../components/EmptyMessage';
import { LotteryCardView } from '../../../components/LotteryCardView';

interface LotteriesListProps {
  items: Lottery[];
  searchText: string;
}

export const LotteriesList = ({ items, searchText }: LotteriesListProps) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <LotteryCardView lottery={item} />}
      contentContainerStyle={styles.lotteriesList}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<EmptyMessage searchText={searchText} />}
    />
  );
};

const styles = StyleSheet.create({
  lotteriesList: {
    marginTop: 8,
    marginHorizontal: 16,
    paddingBottom: 0,
  },
});
