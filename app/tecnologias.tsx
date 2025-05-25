import { ScrollView, Text, View } from 'react-native';
import { Voltar } from '../componentes/Voltar';
import { styles } from '../componentes/styles';

export const options = { title: 'Tecnologias do App' };

const tecnologias = [
  'React Native com Expo – desenvolvimento mobile cross-platform',
  'Expo Router – navegação entre telas baseada em rotas de arquivos',
  'TypeScript – tipagem estática para maior segurança no código',
  'Componentização – reaproveitamento de componentes como botão de Voltar',
  'Hooks do React (useState) – gerenciamento de estados e interatividade',
  'StyleSheet do React Native – estilização centralizada (CSS-in-JS)',
  'Layout responsivo – utilizando ScrollView, flexGrow, alignItems e gap',
  'SafeAreaView – adaptação para diferentes telas e recortes de aparelhos',
  'Integração com API externa – Advice API no jogo da senha (mensagens dinâmicas)',
  'Validação de dados – impedindo números repetidos e tentativas duplicadas no jogo',
  'Feedback ao usuário – Alertas interativos e mensagens de sucesso ou erro',
  'Navegação programática – router.push e router.replace (Voltar para Home)',
  'Links externos – integração com e-mail, telefone, LinkedIn e GitHub',
  'Uso de imagens locais – carregamento de foto de perfil no app',
  'Organização de código – CSS separado em arquivo styles.ts e pastas por contexto',
  'Deploy e execução no Expo Go – visualização em dispositivos reais ou emulador',
];

export default function Tecnologias() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Voltar />
      <Text style={styles.title}>Tecnologias do App</Text>

      <View style={styles.wrapper}>
        {tecnologias.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
