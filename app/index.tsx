import { Text, View, StyleSheet } from "react-native";
import News from "../components/News";

export default function Index() {
  return (
    <View style={styles.container}>
      <News />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
