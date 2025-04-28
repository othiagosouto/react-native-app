import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';

import { Fab } from '../../components/Fab';
import { Searchbar } from '../../components/Searchbar';
import { useLotteriesList } from '../../hooks/useLotteries';

import { LotteriesList } from './components/LotteriesList';
import { Title } from './components/Title';

export const Home = () => {
  const [searchText, setSearchText] = useState('');
  const toast = useToast();
  const { data, isLoading, isError } = useLotteriesList();
  const navigation = useNavigation();
  const onLotteryAdded = () => {
    toast.show('New lottery added successfully!');
  };
  const handleAddLottery = () => {
    navigation.navigate('AddLottery', { onLotteryAdded: onLotteryAdded });
  };
  const filteredItems = data?.filter(
    (item) => item.name.toLowerCase().search(searchText.toLowerCase()) !== -1
  );

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Lotteries" />
      <Searchbar onTextChange={setSearchText} style={styles.searchBar} />
      <LotteriesList
        isError={isError}
        items={filteredItems ? filteredItems : []}
        searchText={searchText}
      />
      {isLoading ? <ActivityIndicator style={styles.loading} /> : undefined}
      <Fab action={handleAddLottery} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'center',
    flex: 1,
  },
  searchBar: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  loading: {
    position: 'absolute',
    start: '50%',
    top: '50%',
  },
});
