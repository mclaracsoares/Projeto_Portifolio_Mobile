import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function Voltar() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={() => router.replace('/')} style={styles.button}>
        <Text style={styles.text}>← Voltar para Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  button: {
    padding: 5,
  },
  text: {
    color: '#800080',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center', // ← Centraliza horizontalmente
  },
});
