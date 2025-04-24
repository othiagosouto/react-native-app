import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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

  return (
    <View>
      <Text style={styles.title}>Lotteries App</Text>
      {component}
      <Fab />
    </View>
  );
};

const Fab = () => {
  return (
    <TouchableOpacity accessibilityRole="button" style={styles.fab}>
      <FontAwesome6 name="plus" size={24} color="white" iconStyle="solid" />
    </TouchableOpacity>
  );
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
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
