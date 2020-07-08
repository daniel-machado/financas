import React, { useState, useContext, useEffect } from 'react';
import { Platform, ActivityIndicator, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import {Background, 
        Container,
        Logo,
        AreaInput, 
        Input,
        SubmitButton,
        SubmitText,
        Link,
        LinkText
        } from './styles';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleLogin(){
    signIn(email, password);
  }

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    //Verifica se o teclado está aberto
    setShowKeyboard(true)
  };

  const _keyboardDidHide = () => {
    //Verifica se o teclado está fechado
    setShowKeyboard(false);
  };

  return (
   <Background>
      
        <Container 
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12,
          }}
          enabled
        >
           {
              !showKeyboard ? (
                <Logo source={require('../../assets/Image/Logo.png')} />
              ) : (
                null
              )
            } 
          
          <AreaInput>
            <Input
              placeholder="Email"
              autoCorrect={false}
              autoCaptalize="none"
              value={email}
              onChangeText={ (texto) => setEmail(texto)}
            />
          </AreaInput>

          <AreaInput>
            <Input
              placeholder="Senha"
              autoCorrect={false}
              autoCaptalize="none"
              value={password}
              onChangeText={ (texto) => setPassword(texto) }
              secureTextEntry={true}
            />
          </AreaInput>

          <SubmitButton onPress={handleLogin}>
            {
              loadingAuth ? (
                <ActivityIndicator size={20} color="#FFF" />
              ) : (
                <SubmitText>
                  Acessar
                </SubmitText>
              )
            }
            
          </SubmitButton>

          
          <Link onPress={ () => navigation.navigate('SignUp')}>
          <LinkText>
            Criar uma conta
          </LinkText>
        </Link>


        </Container>
     
 
      
   </Background>
  );
}