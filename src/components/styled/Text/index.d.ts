import { TextStyle } from 'react-native';
import { StyleProp } from 'react-native';

export interface IProps {
    children: string;
    color?: string;
    size?: number;
    weight?: Weights;
    style?: StyleProp<TextStyle>;
}

export type Weights = 'regular' | 'medium' | 'semibold';
