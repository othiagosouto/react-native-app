import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View, TextInput, Text } from 'react-native';

interface TextInputAppProps {
  placeholder: string;
  error?: string;
  text: string;
  setText: (value: string) => void;
  onBlur: () => void;
  style?: StyleProp<ViewStyle>;
}

export const TextInputApp = ({
  text,
  setText,
  placeholder,
  error,
  onBlur,
  style,
}: TextInputAppProps) => {
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
  error: {
    color: 'red',
    fontSize: 12,
    paddingTop: 4,
  },
});
