import { FlatList, StyleSheet, Text, View } from 'react-native';

import { EmptyMessage } from '../../../components/EmptyMessage';
import { LotteryCardView } from '../../../components/LotteryCardView';
import { storeLotteriesRegistered } from '../../../store/storeLotteriesRegistered';
import type { Lottery } from '../../../types';

interface LotteriesListProps {
  isError: boolean;
  items: Lottery[];
  searchText: string;
  isSelected: (value: string) => boolean;
  onClick: (id: string) => void;
}

export const LotteriesList = ({
  items,
  searchText,
  isError,
  isSelected,
  onClick,
}: LotteriesListProps) => {
  const { isRegistered } = storeLotteriesRegistered();
  if (isError) {
    return <Text> error loading the list </Text>;
  } else {
    return (
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <LotteryCardView
            lottery={item}
            selected={isSelected(item.id)}
            disabled={isRegistered(item.id)}
            onClick={onClick}
          />
        )}
        contentContainerStyle={styles.lotteriesList}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View style={styles.footer} />}
        ListEmptyComponent={<EmptyMessage searchText={searchText} />}
      />
    );
  }
};

const styles = StyleSheet.create({
  lotteriesList: {
    marginTop: 8,
    marginHorizontal: 16,
    paddingBottom: '10%',
  },
  footer: {
    height: 33,
  },
});
