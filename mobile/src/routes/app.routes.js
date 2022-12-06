import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from "@expo/vector-icons/Ionicons";

import Home from './../pages/Home';
import Details from './../pages/Details';
import Favorites from '../pages/Favorites';

import { useFavorites } from '../contexts/favoriteContext';
import { THEME } from '../theme';

const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

const TabRoutes = () => {
    const { favorites } = useFavorites();

    return (
        <TabStack.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                fontSize: THEME.FONT_SIZE.SM,
                fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
            },
            tabBarStyle: {
                padding: 2,
                borderTopWidth: 0,
            }
        }}>
            <TabStack.Screen name="Navegar" component={Home} options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return (
                            <Ionicons name="compass" color={color} size={size} />
                        );
                    }
                    return <Ionicons name="compass-outline" color={color} size={size} />;
                }
            }} />
            <TabStack.Screen name="Favoritos" component={Favorites} options={{
                tabBarBadge: favorites.length,
                tabBarBadgeStyle: {
                    backgroundColor: THEME.COLORS.BARBADGE.RED,
                    color: THEME.COLORS.BARBADGE.WHITE,
                    fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
                    fontSize: THEME.FONT_SIZE.SM,
                },
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return (
                            <Ionicons name="star" color={color} size={size} />
                        );
                    }
                    return <Ionicons name="star" color={color} size={size} />;
                }
            }} />
        </TabStack.Navigator>
    );
}

export default function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabStack" component={TabRoutes} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}