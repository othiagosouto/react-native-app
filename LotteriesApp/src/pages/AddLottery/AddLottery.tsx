import { useNavigation, useRoute } from '@react-navigation/native';

import { AddLotteryForm } from './components/AddLotteryForm';

export const AddLottery = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const onLotteryAdded: () => void = route.params.onLotteryAdded;

  const handleSuccess = () => {
    navigation.goBack();
    onLotteryAdded();
  };

  return <AddLotteryForm onSuccess={handleSuccess} />;
};
