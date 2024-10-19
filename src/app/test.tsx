import Button from '@/components/form/Button';
import Text from '@/components/styled/Text';
import { TONES } from '@/constants/notes';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

function Test() {
    const [displayed, setDisplayed] = useState(false);
    const [step, setStep] = useState(0);
    const [progress, setProgress] = useState(100);

    const router = useRouter();
    const params = useLocalSearchParams();

    const timer = useRef(Number(params.timer) || 0);
    const timerRef = useRef<NodeJS.Timeout>();

    function handleSubmit() {
        if (displayed === false) {
            setDisplayed(true);

            if (params.mode === 'timer') {
                clearTimeout(timerRef.current);
            }

            return;
        }

        if (params.mode === 'timer') {
            setProgress(100);
            timer.current = Number(params.timer) || 0;
            updateTimer();
        }

        generateRandomStep();
        setDisplayed(false);
    }

    function generateRandomStep() {
        const random = Math.random() * 7;

        const rounded = Math.floor(random) + 1;

        setStep(rounded);
    }

    function updateTimer() {
        timerRef.current = setTimeout(() => {
            const newValue = timer.current - 1;
            timer.current = newValue;

            setProgress(newValue / Number(params.timer) * 100);

            if (newValue > 0) {
                updateTimer();
            }
        }, 1000);
    }

    useEffect(() => {
        generateRandomStep();

        if (params.mode === 'timer') {
            updateTimer();
        }
    }, []);

    useEffect(() => {
        if (params.mode === 'timer' && progress === 0) {
            handleSubmit();
        }
    }, [progress]);

    return (
        <SafeAreaView style={styles.container}>
            <GestureHandlerRootView>
                <ScrollView contentContainerStyle={styles.content}>
                    <View style={styles.header}>
                        <Text color='#ffffff' weight='medium' size={18}>
                            Campo harmônico
                        </Text>

                        <Pressable
                            onPress={() => router.dismissAll()}
                            style={styles.note}
                        >
                            <Text color='#ffffff' size={18} weight='semibold'>
                                {params.note}
                            </Text>
                        </Pressable>
                    </View>

                    {params.mode === 'timer' && (
                        <View style={styles.timer}>
                            <View
                                style={[
                                    styles.progress,
                                    {width: `${progress}%`},
                                ]}
                            />
                        </View>
                    )}

                    <View style={styles.card}>
                        <Text color='#ffffff' size={24} weight='semibold'>
                            {(displayed === true ?
                                `${TONES[String(params.note)]?.[step]}` :
                                `${step}º grau`
                            )}
                        </Text>
                    </View>

                    <View style={styles.spacer} />

                    <Button
                        onClick={handleSubmit}
                        style={[
                            styles.submitButton,
                            displayed === false && styles.secondaryButton
                        ]}
                    >
                        {displayed === true ? 'Sortear' : 'Mostrar'}
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
        flex: 1,
        paddingVertical: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 24,
    },
    note: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#3A8D7F',
        borderRadius: 8,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5C7378',
        height: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 80,
    },
    submitButton: {
        marginHorizontal: 24,
    },
    secondaryButton: {
        backgroundColor: '#393939',
    },
    spacer: {
        flexGrow: 1,
    },
    timer: {
        height: 8,
        borderRadius: 100,
        backgroundColor: '#393939',
        marginHorizontal: 24,
        marginTop: 40,
        overflow: 'hidden',
    },
    progress: {
        backgroundColor: '#3A8D7F',
        flex: 1,
    },
});

export default Test;
