import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../components/Button';
import { TextInputApp } from '../../components/TextInputApp';
import { useLotteriesRegistered } from '../../hooks/useLotteryRegister';
import { storeLotteriesRegistered } from '../../store/storeLotteriesRegistered';
import type { LotteryRegisterItem } from '../../types';

export const RegisterLottery = () => {
  const navigation = useNavigation();
  const { toggle } = storeLotteriesRegistered();
  const route = useRoute();
  const lotteriesIds: string[] = route.params.items;
  const onSuccess: () => void = route.params.onSuccess;
  const handleSucces = () => {
    toggle(lotteriesIds);
    onSuccess();
    navigation.goBack();
  };
  const [name, setName] = useState('');
  const { mutate, isError, isPending } = useLotteriesRegistered(handleSucces);

  const handleMutate = () => {
    const items: LotteryRegisterItem[] = lotteriesIds.map(
      (id): { id: string; name: string } => ({
        name: name,
        id: id,
      })
    );
    mutate(items);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Register To lotteries</Text>
      <TextInputApp
        placeholder="Enter your name"
        text={name}
        setText={setName}
        style={styles.input}
      />
      <Button
        label="Register"
        disabled={name.length === 0}
        loading={isPending}
        onClick={handleMutate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    flexDirection: 'column',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  input: {
    padding: 16,
    marginStart: 30,
    marginEnd: 30,
  },
});
