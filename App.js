import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Text style={styles.text}>LOJA VIRTUAL INSTRUMENTS</Text>
    <br></br>
   <Image
     style={styles.image}
     source={{
       uri: 'https://img.freepik.com/vetores-gratis/projeto-de-vetor-de-logotipo-de-musica-plana-minimo-definido-em-preto-e-dourado_53876-116842.jpg',
     }}
   />
   <br></br>
   <Pressable style={styles.Button} onPress={()=>{
     navigation.navigate ('Login')
   }}>
     <Text style={styles.text}>Login</Text>
   </Pressable>

   <Pressable style={styles.Button} onPress={()=>{
     navigation.navigate ('Cadastro')
   }}>
     <Text style={styles.text}>Cadastro</Text>
   </Pressable>

   <Pressable style={styles.Button} onPress={()=>{
     navigation.navigate ('Admin')
   }}>
     <Text style={styles.text}>Admin</Text>
   </Pressable>
   <br></br>
   <Text style={styles.text}>Seja bem-vindo(a)!</Text>
   <StatusBar style="auto" />
 </View>
  );
}

function TelaLogin(){
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <StatusBar style="auto" />
      <br></br>
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={(text) =>onChangeText(text)}
      />
      <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input}/>
      <br></br>
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Produtos1')
      }}>
        <Text style={styles.text}>Logar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCadastro(){
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro</Text>
      <br></br>
      <TextInput 
      placeholder="Nome:" 
      style={styles.input} 
      onChangeText={(text) =>onChangeText(text)}/>
      <TextInput
        placeholder="E-mail:"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={(text) =>onChangeText(text)}
      />
       <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input}
       />
       <TextInput
       placeholder="Endereço:"
        keyboardType="text"
        style={styles.input}
        onChangeText={(text) =>onChangeText(text)}
      />
      <TextInput
       placeholder="Cidade:"
        keyboardType="text"
        style={styles.input}
        onChangeText={(text) =>onChangeText(text)}
      />
      <TextInput
       placeholder="CEP:"
        keyboardType="number"
        style={styles.input}
        onChangeText={(text) =>onChangeText(text)}
      />
      <TextInput
       placeholder="Estado:"
        keyboardType="text"
        style={styles.input}
        onChangeText={(text) =>onChangeText(text)}
      />
      <TextInput
       placeholder="Telefone:"
        keyboardType="number"
        style={styles.input}
        onChangeText={(text) =>onChangeText(text)}
      />
      <br></br>
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Produtos1')
      }}>
        <Text style={styles.text}>Confirmar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaAdmin(){
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Admin</Text>
      <StatusBar style="auto" />
      <br></br>
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={(text) =>onChangeText(text)}
      />
      <TextInput placeholder="Senha" 
      secureTextEntry={true} 
      style={styles.input}/>
      <br></br>
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Produtos1')
      }}>
        <Text style={styles.text}>Confirmar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaDosProdutos1(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <TextInput placeholder="Search"     
     
keyboardType="Search"
     style={styles.input}
     onChangeText={(text) =>onChangeText(text)}
     /> 
      <br></br>
   <Image
     style={styles.image2}
     source={{
       uri: 'https://images.tcdn.com.br/img/img_prod/1224163/violao_yamaha_c70ii_acustico_nylon_natural_327_5_ce55ce27c44e403a9d7d5974753e84e6.jpg',
     }} 
     />
      <br></br>
     <Image
     style={styles.image3}
     source={{
       uri: 'https://img.freepik.com/fotos-premium/linda-guitarra-eletrica-cor-marrom-em-pe-isolada-em-um-fundo-branco_193437-1964.jpg',
     }} 
     />
      <br></br>
     <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Produtos2')
      }}>
        <Text style={styles.text}>Produtos 1</Text>
      </Pressable>
      <StatusBar style="auto" />
     </View>
  );
}

function TelaDosProdutos2(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <TextInput placeholder="Search"
    keyboardType="Search"
    style={styles.input}
    onChangeText={(text) =>onChangeText(text)}
    />
     <br></br>
  <Image
    style={styles.image4}
    source={{
      uri: 'https://www.teclacenter.com.br/images/detailed/16/yamaha-absolute-hybrid-maple-bateria-14140.jpg',
    }} 
    />
    <br></br>
  <Image
    style={styles.image5}
    source={{
      uri: 'https://www.musitechinstrumentos.com.br/files/pro_1366_e.jpg',
    }} 
    />
     <br></br>
    <Pressable style={styles.Button} onPress={()=>{
       navigation.navigate ('FinalizarCompra')
     }}>
       <Text style={styles.text}>Produtos 2</Text>
     </Pressable>
     <StatusBar style="auto" />
    </View>
  );
}

function TelaFinalizarCompra(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FINALIZAR COMPRA!</Text>
      <br></br><br></br>
      <Text style={styles.text1}>Quaiquer dúvidas, serão atendidas pelo whatsapp.</Text>
      <br></br><br></br>
      <Text style={styles.text1}>Chave pix:</Text>
      <Text style={styles.text1}>(22)999518697</Text>
      <Text style={styles.text1}>Ester Pacheco da Silva</Text>
      <br></br><br></br>
      <Text style={styles.text1}>Obs: Enviar o comprovante via Whatsapp</Text>
      <Text style={styles.text1}>(22)999518697</Text>
      <br></br>
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Início')
      }}>
        <Text style={styles.text}>voltar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Admin" component={TelaAdmin} />
        <Stack.Screen name="Produtos1" component={TelaDosProdutos1} />
        <Stack.Screen name="Produtos2" component={TelaDosProdutos2} />
        <Stack.Screen name="FinalizarCompra" component={TelaFinalizarCompra} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDAA7F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#FFF',
  },
  Button:{
    backgroundColor:"#FFEFBF",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  text:{
    fontFamily:"times",
    fontSize:50,
    color:"#230B41",
  },
  text1:{
    fontFamily:"scribbled",
    fontSize:35,
    color:"#230B41",
  },

  image:{
    width: "200px",
    height:"200px",
    
  },

  image2:{
    width: "200px",
    height:"200px",
    
  },

  image3:{
    width: "200px",
    height:"275px",
       
  },
  image4:{
    width: "200px",
    height:"150px",
    
  },

  image5:{
    width: "100px",
    height:"200px",
    borderRadius: "",
    
  },
  
});