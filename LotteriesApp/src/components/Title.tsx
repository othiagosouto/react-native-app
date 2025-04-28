import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface TitleProps {
  text: string;
  style?: StyleProp<ViewStyle>;
}

export const Title = ({ text, style }: TitleProps) => {
  return (
    <View style={[styles.titleContainer, style]}>
      <Text style={styles.title}>{text}</Text>
      <FontAwesome6
        name="dice-six"
        size={36}
        color="black"
        iconStyle={'solid'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    marginRight: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 32,
  },
});
