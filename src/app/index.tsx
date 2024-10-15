import Button from '@/components/form/Button';
import Text from '@/components/styled/Text';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Index() {
    const [note, setNote] = useState('');

    const router = useRouter();

    function handleSubmit() {
        const query = `note=${note}`;

        router.push(`/mode?${query}`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text
                color='#ffffff'
                size={24}
                style={styles.title}
            >
                Selecione o campo harmônico
            </Text>

            <View style={styles.buttons}>
                <View style={styles.row}>
                    <Pressable
                        onPress={() => setNote('C')}
                        style={[styles.button, note !== 'C' && styles.disabled]}
                    >
                        <Text style={styles.text}>
                            C
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => setNote('D')}
                        style={[styles.button, note !== 'D' && styles.disabled]}
                    >
                        <Text style={styles.text}>
                            D
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.row}>
                    <Pressable
                        onPress={() => setNote('E')}
                        style={[styles.button, note !== 'E' && styles.disabled]}
                    >
                        <Text style={styles.text}>
                            E
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => setNote('F')}
                        style={[styles.button, note !== 'F' && styles.disabled]}
                    >
                        <Text style={styles.text}>
                            F
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.row}>
                    <Pressable
                        onPress={() => setNote('G')}
                        style={[styles.button, note !== 'G' && styles.disabled]}
                    >
                        <Text style={styles.text}>
                            G
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => setNote('A')}
                        style={[styles.button, note !== 'A' && styles.disabled]}
                    >
                        <Text style={styles.text}>
                            A
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.row}>
                    <Pressable
                        onPress={() => setNote('B')}
                        style={[styles.button, note !== 'B' && styles.disabled]}
                    >
                        <Text style={styles.text}>
                            B
                        </Text>
                    </Pressable>

                    <View style={styles.hiddenButton} />
                </View>
            </View>

            <Button
                disabled={note === ''}
                style={styles.submitButton}
                onClick={handleSubmit}
            >
                Selecionar
            </Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2F2F2F',
        flex: 1,
    },
    title: {
        marginTop: 40,
        marginHorizontal: 24,
        marginBottom: 40,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        gap: 8,
    },
    buttons: {
        gap: 8,
        marginHorizontal: 24,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 56,
        backgroundColor: '#5C7378',
        borderRadius: 8,
    },
    hiddenButton: {
        flex: 1,
        height: 56,
        backgroundColor: '#393939',
        borderRadius: 8,
    },
    text: {
        fontSize: 24,
        fontFamily: 'Semibold',
        color: '#ffffff',
    },
    disabled: {
        opacity: 0.5,
    },
    submitButton: {
        marginHorizontal: 24,
        marginTop: 40,
    },
});

export default Index;
