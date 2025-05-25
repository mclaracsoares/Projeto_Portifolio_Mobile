import { ScrollView, Text, View } from 'react-native';
import { Voltar } from '../componentes/Voltar';
import { styles } from '../componentes/styles';

export const options = { title: 'Sobre mim' };

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Voltar />
      <Text style={styles.title}>Sobre mim</Text>

      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Text style={styles.text}>
            Estudante do 5º período de Ciência da Computação na UNICAP,
            apaixonada por dados, desafios lógicos e criatividade.
          </Text>
          <Text style={styles.text}>
            Perfil curioso, comunicativo e focado em evolução profissional e
            pessoal, buscando consistência no desenvolvimento de habilidades
            técnicas e humanas.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
