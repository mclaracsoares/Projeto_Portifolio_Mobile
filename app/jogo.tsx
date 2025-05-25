import { useState } from 'react';
import { Alert, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { Voltar } from '../componentes/Voltar';
import { styles } from '../componentes/styles';

export const options = { title: 'Jogo da Senha' };

function gerarSenha() {
  const numeros: number[] = [];
  while (numeros.length < 4) {
    const n = Math.floor(Math.random() * 10);
    if (!numeros.includes(n)) numeros.push(n);
  }
  return numeros;
}

export default function Jogo() {
  const [senha, setSenha] = useState<number[]>(gerarSenha());
  const [tentativa, setTentativa] = useState('');
  const [tentativas, setTentativas] = useState(0);
  const [historico, setHistorico] = useState<string[]>([]);
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [tentativasFeitas, setTentativasFeitas] = useState<Set<string>>(new Set());

  function verificar() {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4) {
      Alert.alert('Erro', 'Digite exatamente 4 dígitos diferentes');
      return;
    }

    if (tentativasFeitas.has(tentativa)) {
      Alert.alert('Erro', 'Você já tentou essa combinação!');
      return;
    }

    setTentativasFeitas(new Set(tentativasFeitas).add(tentativa));

    const tentativaArr = tentativa.split('').map(Number);
    let bulls = 0, cows = 0;

    tentativaArr.forEach((n, i) => {
      if (n === senha[i]) bulls++;
      else if (senha.includes(n)) cows++;
    });

    const registro = `${tentativa} → ${bulls} Bulls, ${cows} Cows`;
    setHistorico([registro, ...historico]);
    setTentativas(tentativas + 1);
    setTentativa('');

    if (bulls === 4) {
      fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
          const frase = data.slip.advice;
          Alert.alert(
            '🎉 Você venceu!',
            `Parabéns! A senha era ${senha.join('')}.\nTentativas: ${tentativas + 1}\n💡 Dica: ${frase}`
          );
        });
    }
  }

  function reiniciar() {
    setSenha(gerarSenha());
    setTentativa('');
    setTentativas(0);
    setHistorico([]);
    setTentativasFeitas(new Set());
    setSenhaVisivel(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Voltar />
      <Text style={styles.title}>Jogo da Senha</Text>

      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={4}
          placeholder="Digite 4 dígitos únicos"
          value={tentativa}
          onChangeText={setTentativa}
        />

        <Button title="Verificar" onPress={verificar} />
        <View style={styles.buttons}>
          <Button title="Reiniciar" color="#888" onPress={reiniciar} />
          <Button
            title={senhaVisivel ? 'Ocultar Senha' : 'Mostrar Senha'}
            color="#800080"
            onPress={() => setSenhaVisivel(!senhaVisivel)}
          />
        </View>

        {senhaVisivel && <Text style={{ marginTop: 5 }}>Senha: {senha.join('')}</Text>}

        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Tentativas: {tentativas}</Text>

        {historico.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
