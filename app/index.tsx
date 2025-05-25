import { Link } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Image
        source={require('../assets/images/cbv2.png')} 
        style={styles.avatar}
      />
      
      <Text style={styles.name}>Maria Clara Soares</Text>
      <Text style={styles.role}>Buscando estágio em Ciência de Dados</Text>

      <Link href="/sobre" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sobre mim</Text>
        </TouchableOpacity>
      </Link>
      
      <Link href="/tecnologias" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tecnologias do App</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/cursos" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cursos Complementares</Text>
        </TouchableOpacity>
      </Link>


      <Link href="/formacao" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Formação Acadêmica</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/experiencia" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Experiência Profissional</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/projetos" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Projetos</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/jogo" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Jogo da Senha</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800080',
  },
  role: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#800080',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
