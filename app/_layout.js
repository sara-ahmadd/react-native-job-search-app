import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [loaded] = useFonts({
    DMSans: require("./../assets/fonts/DMSans-Regular.ttf"),
    DMSansMed: require("./../assets/fonts/DMSans-Medium.ttf"),
    DMSansBold: require("./../assets/fonts/DMSans-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
