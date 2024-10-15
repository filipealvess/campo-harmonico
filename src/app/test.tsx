import Button from '@/components/form/Button';
import Text from '@/components/styled/Text';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

function Test() {
    const [displayed, setDisplayed] = useState(false);

    const router = useRouter();
    const params = useLocalSearchParams();

    function handleSubmit() {
        if (displayed === true) {
            setDisplayed(false);
            return;
        }

        setDisplayed(true);
    }

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
                                C
                            </Text>
                        </Pressable>
                    </View>

                    {params.mode === 'timer' && (
                        <View style={styles.timer}>
                            <View
                                style={[
                                    styles.progress,
                                    {width: '50%'},
                                ]}
                            />
                        </View>
                    )}

                    <View style={styles.card}>
                        <Text color='#ffffff' size={24} weight='semibold'>
                            1º grau
                        </Text>
                    </View>

                    <View style={styles.spacer} />

                    <Button
                        onClick={handleSubmit}
                        style={styles.submitButton}
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
