import Button from '@/components/form/Button';
import Text from '@/components/styled/Text';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

function Mode() {
    const [mode, setMode] = useState<'manual' | 'timer'>('manual');
    const [timer, setTimer] = useState(5);

    const router = useRouter();
    const params = useLocalSearchParams();

    function handleSubmit() {
        const query = `note=${params.note}&mode=${mode}&timer=${timer}`;

        router.push(`/test?${query}`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <GestureHandlerRootView>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text
                        color='#ffffff'
                        size={24}
                        style={styles.title}
                    >
                        Selecione o modo de sorteio
                    </Text>

                    <View style={styles.buttons}>
                        <Pressable
                            onPress={() => setMode('manual')}
                            style={[styles.button, mode !== 'manual' && styles.disabled]}
                        >
                            <Text style={styles.text}>
                                Manual
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={() => setMode('timer')}
                            style={[styles.button, mode !== 'timer' && styles.disabled]}
                        >
                            <Text style={styles.text}>
                                Temporizador
                            </Text>
                        </Pressable>
                    </View>

                    {mode === 'timer' && (
                        <View style={styles.inputWrapper}>
                            <Text color='#ffffff' size={18}>
                                A cada
                            </Text>

                            <TextInput
                                style={styles.input}
                                placeholder='0'
                                placeholderTextColor='rgba(255,255,255,0.35)'
                                keyboardType='numeric'
                                value={timer.toString()}
                                onChangeText={value => setTimer(Number(
                                    value.replace(/\D/g, '')
                                ))}
                            />

                            <Text color='#ffffff' size={18}>
                                segundos
                            </Text>
                        </View>
                    )}

                    <Button
                        onClick={handleSubmit}
                        style={styles.submitButton}
                    >
                        Selecionar
                    </Button>
                </ScrollView>
            </GestureHandlerRootView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2F2F2F',
        flex: 1,
    },
    content: {
        paddingVertical: 40,
    },
    title: {
        marginHorizontal: 24,
        marginBottom: 40,
        textAlign: 'center',
    },
    buttons: {
        gap: 16,
        marginHorizontal: 24,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        backgroundColor: '#5C7378',
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
    inputWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16,
        marginHorizontal: 24,
        marginTop: 24,
    },
    input: {
        width: 64,
        height: 40,
        backgroundColor: '#393939',
        borderWidth: 2,
        borderColor: '#5C7378',
        borderRadius: 8,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontFamily: 'Medium',
        color: '#ffffff'
    },
});

export default Mode;
