import { StatusBar } from "expo-status-bar";
import { I18nextProvider, useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import i18n from "./assets/i18n/i18n";

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Main />
    </I18nextProvider>
  );
}

const Main = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('welcome_message')}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
