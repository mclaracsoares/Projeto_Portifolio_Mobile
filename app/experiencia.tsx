import { ScrollView, Text, View } from 'react-native';
import { Voltar } from '../componentes/Voltar';
import { styles } from '../componentes/styles';

export const options = { title: 'Experiência Profissional' };

export default function Experiencia() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Voltar />
      <Text style={styles.title}>Experiência Profissional</Text>

      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Text style={styles.subTitle}>Freelancer</Text>
          <Text style={styles.text}>
            Atuação como Analista de Dados Freelancer, em projetos de treinamento de IA, análise de dados e desenvolvimento de soluções inteligentes.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subTitle}>Objetivo Profissional</Text>
          <Text style={styles.text}>
            Buscando uma oportunidade na área de Ciência de Dados, com foco em Python, SQL e desenvolvimento de soluções inteligentes. Valorizo ambientes colaborativos e de constante aprendizado.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
