import { config } from "@tamagui/config/v3";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createTamagui, TamaguiProvider } from "tamagui";

const tamaguiConfig = createTamagui(config);

const App = () => {
  // @ts-ignore
  const [loaded] = useFonts({
    // @ts-ignore
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    // @ts-ignore
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TamaguiProvider config={tamaguiConfig}>
        <Text>Hello World</Text>
      </TamaguiProvider>
    </SafeAreaView>
  );
};

export default App;
