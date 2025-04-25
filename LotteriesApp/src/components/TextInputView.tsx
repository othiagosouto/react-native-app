import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View, TextInput, Text } from 'react-native';

interface TextInputViewProps {
  placeholder: string;
  error?: string;
  text: string;
  setText: (value: string) => void;
  onBlur: () => void;
  style?: StyleProp<ViewStyle>;
}

export const TextInputView = ({
  text,
  setText,
  placeholder,
  error,
  onBlur,
  style,
}: TextInputViewProps) => {
  return (
    <View style={[style && styles.column]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={setText}
        style={styles.input}
        onBlur={onBlur}
        value={text}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  input: {
    fontSize: 20,
    lineHeight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E0',
  },
  button: {
    alignContent: 'flex-start',
    borderColor: 'black',
    borderWidth: 1,
  },
  error: {
    color: 'red',
    fontSize: 12,
    paddingTop: 4,
  },
});
