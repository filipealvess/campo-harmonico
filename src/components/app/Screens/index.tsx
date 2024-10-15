import { Stack } from 'expo-router';

function Screens() {
    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={{headerShown: false}}
            />

            <Stack.Screen
                name='mode'
                options={{headerShown: false}}
            />
        </Stack>
    );
}

export default Screens;
