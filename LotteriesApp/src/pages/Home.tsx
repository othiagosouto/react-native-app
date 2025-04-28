import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { useNavigation } from '@react-navigation/native';
import {
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
        <Fab navigate={() => handleAddLottery()} />
      </View>
    </SafeAreaView>
  );
};

interface FabProps {
  navigate: () => void;
}

const Fab = ({ navigate }: FabProps) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={styles.fab}
      onPress={() => navigate()}
    >
      <FontAwesome6 name="plus" size={24} color="white" iconStyle="solid" />
    </TouchableOpacity>
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 9,
    bottom: 30,
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
