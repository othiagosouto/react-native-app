import { useNavigation } from '@react-navigation/native';
import {
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Fab } from '../components/Fab';
import { LotteryCardView } from '../components/LotteryCardView';
import { useLotteriesList } from '../hooks/useLotteries';

export const Home = () => {
  const { data, isLoading, refetch } = useLotteriesList();
  const navigation = useNavigation();
  const onLotteryAdded = () => {
    refetch();
  };
  const handleAddLottery = () => {
    navigation.navigate('AddLottery', { onLotteryAdded: onLotteryAdded });
  };

  const component = isLoading ? (
    <ActivityIndicator style={styles.loading} />
  ) : (
    <FlatList
      data={data}
      renderItem={({ item }) => <LotteryCardView lottery={item} />}
      contentContainerStyle={styles.cardList}
      keyExtractor={(item) => item.id}
    />
  );

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Lotteries App</Text>
        {component}
        <Fab action={handleAddLottery} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardList: {
    marginStart: 16,
    marginEnd: 16,
    marginTop: 8,
    paddingBottom: 110,
  },
  loading: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
});
