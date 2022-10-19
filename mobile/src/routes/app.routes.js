import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingPage from '../components/LandingPage';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}