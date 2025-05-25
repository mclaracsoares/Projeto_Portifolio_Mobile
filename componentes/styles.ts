import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800080',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800080',
    textAlign: 'center',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#f3e5f5',
    borderRadius: 8,
    padding: 20,
    width: '100%',
    gap: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800080',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardText: {
    textAlign: 'center',
    color: '#333',
    fontSize: 16,
  },
  text: {
    textAlign: 'center',
    color: '#333',
    fontSize: 16,
  },
  link: {
    color: '#800080',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 200,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
});
