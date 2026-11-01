import { StatusBar, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import gameHtml from "./game/gameHtml";

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0d1328" />
      <WebView
        style={styles.root}
        originWhitelist={["*"]}
        source={{ html: gameHtml, baseUrl: "https://heartvsfeather.app/" }}
        javaScriptEnabled
        domStorageEnabled
        scrollEnabled={false}
        bounces={false}
        overScrollMode="never"
        contentInsetAdjustmentBehavior="never"
        automaticallyAdjustContentInsets={false}
        allowsBackForwardNavigationGestures={false}
        setSupportMultipleWindows={false}
        textZoom={100}
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0d1328" },
});
