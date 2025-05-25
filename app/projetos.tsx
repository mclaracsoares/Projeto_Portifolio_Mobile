import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { Voltar } from '../componentes/Voltar';
import { styles } from '../componentes/styles';

export const options = { title: 'Projetos' };

const projetos = [
  {
    nome: 'Site Programação Web',
    descricao: 'Site destinado às atividades da disciplina de Programação Web.',
    link: 'https://github.com/mclaracsoares/Programacao_Web_e_Mobile_Rep',
  },
  {
    nome: 'Portfólio Mobile',
    descricao: 'Aplicativo portifolio feito em React Native com Expo.',
    link: 'https://github.com/mclaracsoares/Projeto_Portifolio_Mobile',
  },
  {
    nome: 'Sistema para Hotel',
    descricao: 'Sistema Full Stack usando React e Back4App.',
    link: 'https://github.com/mclaracsoares/Site_StarHotel',
  },
  {
    nome: 'Detecção de Dedos',
    descricao: 'Projeto de visão computacional em Python.',
    link: 'https://github.com/mclaracsoares/Deteccao_de_Dedos_em_Python',
  },
];

export default function Projetos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Voltar />
      <Text style={styles.title}>Projetos</Text>

      <View style={styles.wrapper}>
        {projetos.map((p, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.subTitle}>{p.nome}</Text>
            <Text style={styles.text}>{p.descricao}</Text>
            <Pressable onPress={() => Linking.openURL(p.link)}>
              <Text style={styles.link}>GitHub: {p.link}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
