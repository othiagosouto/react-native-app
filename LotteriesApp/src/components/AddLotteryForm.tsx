import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { useAddLottery } from '../hooks/useAddLottery';

import { ButtonView } from './ButtonView';
import { TextInputView } from './TextInputView';

interface LotteryFormProps {
  onSuccess: () => void;
}

export const AddLotteryForm = ({ onSuccess }: LotteryFormProps) => {
  const { mutate, error, isPending } = useAddLottery(onSuccess);
  const [lotteryName, setLotteryName] = useState('');
  const [lotteryPrize, setLotteryPrize] = useState('');
  const [lotteryNameError, setLotteryNameError] = useState<string | undefined>(
    ''
  );
  const [lotteryPrizeError, setLotteryPrizeError] = useState<
    string | undefined
  >('');
  const isValid = lotteryName.length >= 4 && lotteryPrize.length >= 4;
  const onSubmit = () => {
    mutate({ name: lotteryName, prize: lotteryPrize });
  };
  const handleLotteryNameError = () => {
    setLotteryNameError(
      lotteryName.length < 4 ? 'Name must be at least 4 characters' : undefined
    );
  };
  const handleLotteriPrizeError = () => {
    setLotteryPrizeError(
      lotteryPrize.length < 4 ? 'You must add a value for prize' : undefined
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Add a new lottery</Text>

      <TextInputView
        placeholder="Lottery name"
        error={lotteryNameError}
        text={lotteryName}
        setText={setLotteryName}
        onBlur={handleLotteryNameError}
      />

      <TextInputView
        placeholder="Lottery Prize"
        error={lotteryPrizeError}
        text={lotteryPrize}
        setText={setLotteryPrize}
        onBlur={handleLotteriPrizeError}
      />
      <ButtonView
        disabled={!isValid}
        loading={isPending}
        label="Add"
        onClick={onSubmit}
        error={error?.message}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
    justifyContent: 'center',
    gap: 33,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
