import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';

interface ButtonViewProps {
  label: string;
  onClick: () => void;
  error?: string;
  loading?: boolean;
  disabled: boolean;
}

export const ButtonView = ({
  loading,
  label,
  error,
  onClick,
  disabled,
}: ButtonViewProps) => {
  return (
    <View style={styles.column}>
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
      {error ? (
        <Text style={styles.error}>Failed to fetch information</Text>
      ) : undefined}
    </View>
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
  column: {
    flexDirection: 'column',
  },
  error: {
    color: 'red',
    fontSize: 14,
    paddingTop: 5,
    textAlign: 'center',
  },
});
