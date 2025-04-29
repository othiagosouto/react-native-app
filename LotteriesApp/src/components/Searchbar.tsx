import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { useState } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

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
    <View style={styles.row}>
      <TextInput
        style={[styles.searchContainer, style]}
        placeholder="Search for lottteries"
        value={text}
        onChangeText={handleTextChange}
      />
      <TouchableOpacity>
        <FontAwesome6
          style={styles.icon}
          name={text.length === 0 ? 'magnifying-glass' : 'xmark'}
          size={20}
          color="black"
          iconStyle="solid"
          onPress={() => handleTextChange('')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    borderWidth: 1,
    flex: 1,
    borderColor: '#E1E1E0',
    borderRadius: 4,
    padding: 8,
    height: 40,
    backgroundColor: '#FFF',
    color: 'black',
    paddingEnd: 35,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 30,
    top: '22%',
  },
});
