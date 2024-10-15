import Text from '@/components/styled/Text';
import { Pressable, StyleSheet } from 'react-native';

import {IProps} from '@/components/form/Button/index.d';

function Button({
    children,
    disabled = false,
    onClick,
    style,
}: IProps) {
    return (
        <Pressable
            style={[styles.container, disabled && styles.disabled, style]}
            disabled={disabled}
            onPress={onClick}
        >
            <Text
                color='#ffffff'
                weight='semibold'
                size={18}
                style={styles.text}
            >
                {children}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        borderRadius: 8,
        backgroundColor: '#3A8D7F',
    },
    text: {
        textTransform: 'uppercase',
    },
    disabled: {
        opacity: 0.5,
    },
});

export default Button;
