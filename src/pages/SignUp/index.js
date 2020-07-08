import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import {Background, 
        Container, 
        AreaInput, 
        Input,
        SubmitButton,
        SubmitText,
        } from './styles';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { signUp, loadingAuth } = useContext(AuthContext);

    function handleSignUp(){
      signUp(email, password, name);
    }
  
  return (
   <Background>
       <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
       >
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCaptalize="none"
            value={name}
            onChangeText={ (texto) => setName(texto)}
          />
        </AreaInput>

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

        <SubmitButton onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>
                Cadastrar
              </SubmitText>
            )
          }
        </SubmitButton>

       </Container>
   </Background>
  );
}