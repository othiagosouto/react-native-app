import type { ViewStyle } from 'react-native';
import { requireNativeComponent } from 'react-native';

const CustomButton = requireNativeComponent(
  'RNCustomButton'
) as unknown as React.FC<{
  title?: string;
  onPressed?: (event: any) => void;
  disabled: boolean;
  style: ViewStyle;
}>;
export default CustomButton;
