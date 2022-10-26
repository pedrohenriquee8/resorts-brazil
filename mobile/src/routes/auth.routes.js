import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Registro from '../pages/Registro';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="LandingPage" component={LandingPage} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Registro" component={Registro} />
        </AuthStack.Navigator>
    );
}