import { ScrollView, Text, View } from 'react-native';
import { Voltar } from '../componentes/Voltar';
import { styles } from '../componentes/styles';

export const options = { title: 'Formação Acadêmica' };

export default function Formacao() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Voltar />
      <Text style={styles.title}>Formação Acadêmica</Text>

      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Text style={styles.subTitle}>Bacharelado</Text>
          <Text style={styles.text}>
            Ciência da Computação — Universidade Católica de Pernambuco (5º período, em andamento)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
