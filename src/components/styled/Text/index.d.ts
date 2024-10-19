import { TextStyle } from 'react-native';
import { StyleProp } from 'react-native';

export interface IProps {
    children: React.ReactNode;
    color?: string;
    size?: number;
    weight?: Weights;
    style?: StyleProp<TextStyle>;
}

export type Weights = 'regular' | 'medium' | 'semibold';
