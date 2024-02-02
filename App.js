import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementa la lógica de autenticación aquí
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    // Agrega lógica adicional según tus requerimientos
  };

  return (
    <ImageBackground
      style={styles.background}
    // Asegúrate de proporcionar la ruta correcta de tu imagen de fondo

    >
      <View style={styles.container}>
       
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
              <path fill="#ff9100" d="M9,26.5C9,16.835,16.835,9,26.5,9c9.243,0,16.793,7.171,17.437,16.25 C43.963,24.834,44,24.422,44,24c0-11.046-8.954-20-20-20S4,12.954,4,24c0,11.046,8.954,20,20,20c0.422,0,0.834-0.037,1.25-0.063 C16.171,43.293,9,35.743,9,26.5z"></path><path fill="#ff9100" d="M36.5,28c-3.59,0-6.5-2.91-6.5-6.5c0-2.637,1.573-4.902,3.829-5.921 C31.941,14.574,29.788,14,27.5,14C20.044,14,14,20.044,14,27.5C14,34.956,20.044,41,27.5,41S41,34.956,41,27.5 c0-0.425-0.025-0.844-0.064-1.259C39.774,27.329,38.217,28,36.5,28z"></path>
            </svg>crunchyroll</Text>
          </View>
          <View style={styles.form}>
          <View style={styles.h2}>
            <Text style={styles.h2}>Acceder</Text>
          </View>

          <View style={styles.loginBox}>

            <TextInput
              style={styles.input}
              placeholder="Direccion de email"
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
            <Text style={styles.subtittle}>¿HAS OLVIDADO TU CONTRASEÑA?</Text>

          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ACCEDER</Text>
        </TouchableOpacity>



        <View style={styles.options}>
          <Text style={styles.option1}>¿No tienes cuenta? </Text>
          <Text style={styles.option2}>¿CREAR CUENTA?</Text>
        </View>
      </View>

    </ImageBackground>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  form:{
    
    marginTop:"-50%",
    display:"block",
    display:"flex",
    alignItems:"center",

    width:"100%",
    
  },
  options: {
    display: "block",
    marginTop: "20px",

  },
  option1: {
    color: "white",
  },
  option2: {
    color: "#f47521",
    fontWeight: 'bold',
    fontFamily: "30px",

  },
  subtittle: {
    color: "white",
    marginTop: "-3%",
    paddingBottom: "20px",
    fontWeight: 'bold',

  },

  background: {
    flex: 1,  
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'black', // Fondo negro para toda la pantalla
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h2: {
    color: "white",
    fontSize: "bold",
    fontSize: 30,
    marginTop: "-10%", // Ajuste responsivo de la posición
    display: "flex",
    textAlign: "center",



  },
  headerContainer: {
    display: "block",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#23252b',
    padding: 10,
    borderRadius: 5,
    display: "flex",
  },
  headerText: {
    color: '#f47521',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginBox: {

    backgroundColor: '#141519',
    paddingTop: "30px",
    paddingLeft: "15px",
    paddingRight: "15px",
    width: '80%',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 40,

    borderColor: '#141519',
    borderBottomColor: "white",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    color: 'white',
    backgroundColor: '#141519',
  },
  button: {
    backgroundColor: '#f47521',
    padding: 10,
    width: '80%',
    marginTop: "20px",
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
