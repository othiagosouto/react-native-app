import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { useNavigation } from '@react-navigation/native';
import {
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useToast } from 'react-native-toast-notifications';

import { Fab } from '../components/Fab';
import { LotteryCardView } from '../components/LotteryCardView';
import { useLotteriesList } from '../hooks/useLotteries';

export const Home = () => {
  const toast = useToast();
  const { data, isLoading, refetch } = useLotteriesList();
  const navigation = useNavigation();
  const onLotteryAdded = () => {
    refetch();
  };
  const handleAddLottery = () => {
    navigation.navigate('AddLottery', { onLotteryAdded: onLotteryAdded });
    toast.show('New lottery added successfully!');
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
      <View style={styles.screenContainer}>
        <Title />
        {component}
        <Fab action={handleAddLottery} />
      </View>
    </SafeAreaView>
  );
};

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Lotteries</Text>
      <FontAwesome6
        name="dice-six"
        size={36}
        color="black"
        iconStyle={'solid'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 32,
    flex: 1,
    flexDirection: 'column',
  },
  cardList: {
    paddingBottom: 110,
  },
  loading: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    gap: 5,
    marginBottom: 8,
  },
});
