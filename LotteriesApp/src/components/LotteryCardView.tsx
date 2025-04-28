import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { Lottery } from '../types';

interface LotteryCardViewProps {
  selected: boolean;
  disabled: boolean;
  lottery: Lottery;
  onClick: (id: string) => void;
}
export const LotteryCardView = ({
  disabled,
  selected,
  lottery,
  onClick,
}: LotteryCardViewProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      accessibilityRole="button"
      onPress={() => onClick(lottery.id)}
    >
      <View
        style={[
          styles.container,
          selected && styles.selected,
          disabled && styles.disabled,
        ]}
      >
        <Text style={styles.headline}>{lottery.name}</Text>
        <Text style={styles.supportingText}>{lottery.prize}</Text>
        <Text style={styles.supportingText}>{lottery.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 8,
    gap: 5,
    padding: 16,
  },
  icon: {},
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headline: {
    textAlign: 'left',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: '#191C1B',
  },
  supportingText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: '#444746',
  },
  disabled: {
    backgroundColor: '#A9A9A9',
  },
  selected: {
    borderColor: 'blue',
    borderWidth: 1,
  },
});
