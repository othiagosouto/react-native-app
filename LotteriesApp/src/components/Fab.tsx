import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface FabProps {
  action: () => void;
}

export const Fab = ({ action }: FabProps) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={styles.container}
      onPress={() => action()}
    >
      <FontAwesome6 name="plus" size={24} color="white" iconStyle="solid" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
