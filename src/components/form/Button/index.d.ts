import { StyleProp, ViewStyle } from 'react-native';

export interface IProps {
    children: string;
    disabled?: boolean;
    onClick?: () => void;
    style?: StyleProp<ViewStyle>;
}
