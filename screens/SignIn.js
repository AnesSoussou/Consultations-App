import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../constants/Colors';
import SuiviniButton from '../components/ui/SuiviniButton'
import SuiviniInput from '../components/ui/SuiviniInput'
import SuiviniLink from '../components/ui/SuiviniLink'
import SuiviniLogo from '../components/SuiviniLogo'
import SuiviniModal from '../components/SuiviniModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const SignIn = function (props) {
  const initErrors = {
    emailError: '',
    passwordError: '',
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(initErrors);

  const handleEmailChange = (value) => {
    setEmail(value);
    setErrors((errors) => ({ ...errors, emailError: null }));
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setErrors((errors) => ({ ...errors, passwordError: null }));
  };

  const handleSignIn = async () => {
    let valid = true;
    if (!email) {
      valid = false;
      setErrors((errors) => ({ ...errors, emailError: 'Veuillez entrer votre email' }));
    }
    if (!password) {
      valid = false;
      setErrors((errors) => ({ ...errors, passwordError: 'Veuillez entrer votre mot de passe' }));
    }
    if (valid) {
      // try {
      //   const data = {
      //     email_u: email,
      //     password: password,
      //   };
        setErrors(initErrors);
        props.navigation.navigate('Home')
      // } catch (error) {
      //   console.log('submit::error', error);
      // }
    }
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.azure }}>
      <KeyboardAvoidingWrapper style={{ backgroundColor: Colors.azure }}>
          <View style={{ flex: 1, padding: 20, width: '100%', maxWidth: 400, alignSelf: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <SuiviniLogo />
            </View>
            <View style={{ flex: 2 }}>
              <SuiviniInput
                placeholder={() => 'Email'}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                autoCapitalize="none"
                errorMessage={errors.emailError}
                containerStyle={{ width: '100%', marginTop: 0 }}
                inputContainerStyle={{ width: '100%', marginTop: 0 }}
                value={email}
              />
              <SuiviniInput
                placeholder='Mot de passe'
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={handlePasswordChange}
                containerStyle={{ width: '100%', marginTop: 10 }}
                inputContainerStyle={{ width: '100%', marginTop: 0 }}
                value={password}
                errorMessage={errors.passwordError}
              />
              {/* <View
                style={{
                  paddingHorizontal: errorText == '"Please Verify Email"' ? 10 : 70,
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                {isRequesting ? <ActivityIndicator color={Colors.secondary} /> : <></>}
                {errorText ? (
                  errorText == '"Please Verify Email"' ? (
                    <View style={{ color: Colors.secondary }}>
                      <Text style={{ color: Colors.secondary }}>
                        Votre email n'est pas confirmé
                      </Text>
                      <Text style={{ color: Colors.secondary }}>Votre email est confirmé</Text>
                    </View>
                  ) : (
                    <Text style={{ color: Colors.secondary, textAlign: 'center' }}>
                      Mot de passe est invalid
                    </Text>
                  )
                ) : (
                  <></>
                )}
              </View> */}
              <SuiviniButton
                text='Se connecter'
                onPress={handleSignIn}
                style={{ marginTop: 20 }}
              />
              <Text style={{ color: '#000', fontFamily: 'Metropolis-Bold', marginTop: 20 }}>
                Vous n'avez pas encore un compte ?
              </Text>
              <SuiviniButton
                text="S'INSCRIRE"
                onPress={() => {
                  props.navigation.navigate('Register');
                }}
                style={{ marginTop: 20, backgroundColor: '#fff' }}
                textStyle={{ color: Colors.primary }}
              />
              <SuiviniLink
                text='Mot de passe oublié'
                onPress={() => {
                  props.navigation.navigate('ForgotPassword');
                }}
                textStyle={{
                  fontWeight: 'bold',
                  color: '#000'
                }}
              />
            </View>
          </View>
      </KeyboardAvoidingWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  form: {},
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3e3e3ea1',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 5,
  },
  modalHeader: {
    height: 60,
    backgroundColor: '#28367A',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  modalTitle: {
    color: '#fff',
    fontFamily: 'Metropolis-Bold',
    fontSize: 17,
  },
  modalBody: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  modalFooter: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontFamily: 'Metropolis',
  },
});

export default SignIn;
