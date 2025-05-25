import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { Voltar } from '../componentes/Voltar';
import { styles } from '../componentes/styles';

export const options = { title: 'Contato' };

export default function Contato() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Voltar />
      <Text style={styles.title}>Contato</Text>

      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Text style={styles.subTitle}>Email</Text>
          <Pressable onPress={() => Linking.openURL('mailto:claracsoares10@gmail.com')}>
            <Text style={styles.link}>claracsoares10@gmail.com</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.subTitle}>Telefone</Text>
          <Pressable onPress={() => Linking.openURL('tel:+5581988388899')}>
            <Text style={styles.link}>(81) 98838-8899</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.subTitle}>LinkedIn</Text>
          <Pressable onPress={() => Linking.openURL('https://linkedin.com/in/maria-clara-soares')}>
            <Text style={styles.link}>linkedin.com/in/maria-clara-soares</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
