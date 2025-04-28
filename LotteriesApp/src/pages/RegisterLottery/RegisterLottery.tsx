import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TextInputApp } from '../../components/TextInputApp';

export const RegisterLottery = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Register To lotteries</Text>
      <TextInputApp
        placeholder="Enter your name"
        text={name}
        setText={setName}
        style={styles.input}
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
