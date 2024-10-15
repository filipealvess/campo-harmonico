import Screens from '@/components/app/Screens';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        Regular: require('../assets/fonts/Montserrat-Regular.ttf'),
        Medium: require('../assets/fonts/Montserrat-Medium.ttf'),
        Semibold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <Screens />
        </>
    );
}
