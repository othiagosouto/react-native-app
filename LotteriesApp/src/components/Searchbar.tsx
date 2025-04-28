import { useState } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, TextInput } from 'react-native';

interface SearchbarProps {
  style?: StyleProp<ViewStyle>;
  onTextChange: (text: string) => void;
}

export const Searchbar = ({ style, onTextChange }: SearchbarProps) => {
  const [text, setText] = useState('');
  const handleTextChange = (newText: string) => {
    setText(newText);
    onTextChange(newText);
  };
  return (
    <TextInput
      style={[styles.searchContainer, style]}
      placeholder="Search for lottteries"
      value={text}
      onChangeText={handleTextChange}
    />
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    borderWidth: 1,
    borderColor: '#E1E1E0',
    borderRadius: 4,
    padding: 8,
    height: 40,
    backgroundColor: '#FFF',
    color: 'black',
  },
});
