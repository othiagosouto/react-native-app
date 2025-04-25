import { useNavigation, useRoute } from '@react-navigation/native';

import { AddLotteryForm } from '../components/AddLotteryForm';

export const AddLotteryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const onLotteryAdded: () => void = route.params.onLotteryAdded;

  const handleBack = () => {
    navigation.goBack();
    onLotteryAdded();
  };

  return <AddLotteryForm onSuccess={handleBack} />;
};
