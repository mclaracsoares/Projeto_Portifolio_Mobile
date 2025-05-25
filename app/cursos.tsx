import { ScrollView, Text, View } from 'react-native';
import { Voltar } from '../componentes/Voltar';
import { styles } from '../componentes/styles';

export const options = { title: 'Cursos' };

const cursos = [
  'Ciência de Dados Impressionador — Hashtag (Cursando)',
  'CS50 — Harvard University',
  'Front-End com React, HTML, CSS e JS — Udemy',
  'PHP, MySQL, CodeIgniter e Laravel — Udemy',
  'SQL para Análise de Dados — Udemy',
  'Python, Java, C e POO — UNICAP',
];

export default function Cursos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Voltar />
      <Text style={styles.title}>Cursos Complementares</Text>

      <View style={styles.wrapper}>
        {cursos.map((curso, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}>{curso}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
