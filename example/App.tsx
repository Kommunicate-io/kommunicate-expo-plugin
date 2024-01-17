import { StyleSheet, Text, View } from 'react-native';

import * as KommunicateExpoPlugin from 'kommunicate-expo-plugin';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{KommunicateExpoPlugin.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
