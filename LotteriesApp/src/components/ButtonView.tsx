import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

interface ButtonViewProps {
  label: string;
  onClick: () => void;
  loading?: boolean;
  disabled: boolean;
}

export const ButtonView = ({
  loading,
  label,
  onClick,
  disabled,
}: ButtonViewProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      accessibilityRole="button"
      style={[styles.buttonContainer, disabled && styles.buttonDisabled]}
      onPress={onClick}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={[styles.buttonText, disabled && styles.textDisabled]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  buttonDisabled: {
    backgroundColor: '#A9A9A9',
  },
  textDisabled: {
    color: '#ccc',
  },
});
