import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface FabProps {
  action: () => void;
}

export const Fab = ({ action }: FabProps) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={styles.fab}
      onPress={() => action()}
    >
      <FontAwesome6 name="plus" size={24} color="white" iconStyle="solid" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 9,
    bottom: 30,
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
