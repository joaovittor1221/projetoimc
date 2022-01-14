import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput , Image,Button} from 'react-native';
import logo from './imagens/logo.png'



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text2}>
        <b>Calculadora de IMC</b>
      </Text>
      <Text style={styles.text1}>
      <b> informe seu peso:</b>
      </Text>
     <TextInput style={styles.caixa}/>
     <Text style={styles.text1}>
     <b>informe sua  altura:</b>
      </Text>
     <TextInput style={styles.caixa}/>
     
    
      <StatusBar style="auto" />
      
     <button  >
          <text>calcular</text>
        </button>
      <Text style={styles.text2}>
        Resultado:
      </Text>
      <Image source={logo} style={{ width: 420, height: 155 }} /> 

     
    </View>
    
  
  );
}

const styles = StyleSheet.create({
  container: {
   padding: '50',
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixa: {
    padding: '50',
    backgroundColor: '#f0f	',
    borderColor: 'white',
    borderWidth: '1px'

  },
 
  text1: {
    padding: 10,
   color: 'white'
   
  

  },
  text2: {
    paddingBottom: 15,
    fontSize: 25,
   color: 'white'
   
  

  },

  bt1: {
   padding: 10
     
    
   
   
  

  },
  
});

