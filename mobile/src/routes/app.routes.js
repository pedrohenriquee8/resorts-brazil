import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Registro from '../pages/Registro';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registro" component={Registro} />
        </Stack.Navigator>
    )
}