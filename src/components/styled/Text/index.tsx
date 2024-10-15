import {
    Text as RNText,
    StyleProp,
    TextStyle,
} from 'react-native';

import { IProps, Weights } from '@/components/styled/Text/index.d';

const FAMILY_BY_WEIGHT: Record<Weights, string> = {
    semibold: 'Semibold',
    medium: 'Medium',
    regular: 'Regular',
};

function Text({
    children,
    color = '#000000',
    size = 16,
    weight = 'regular',
    style,
}: IProps) {
    const baseStyles: StyleProp<TextStyle> = {
        color,
        fontSize: size,
        fontFamily: FAMILY_BY_WEIGHT[weight],
    };

    return (
        <RNText style={[baseStyles, style]}>
            {children}
        </RNText>
    )
}

export default Text;
