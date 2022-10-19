import { StatusBar } from "react-native";
import { useFonts, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import Routes from "./src/routes";
import Loading from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
  })

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </>
  )
}
