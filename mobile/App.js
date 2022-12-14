import { StatusBar } from "react-native";
import { useFonts, Poppins_700Bold, Poppins_600SemiBold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { AuthProvider } from "./src/contexts/authContext";

import Routes from "./src/routes";
import Loading from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  return (
    <AuthProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </AuthProvider>
  )
}
