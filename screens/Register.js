import { React, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { argonTheme } from "../constants";
import Colors from "../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import SuiviniInput from "../components/ui/SuiviniInput";

const { width, height } = Dimensions.get("screen");

const Register = function (props) {
  const initErrors = {
    nomError: "",
    emailError: "",
    passwordError: "",
    passwordConfirmationError: "",
  };

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState(initErrors);

  const next = async () => {
    // reset errors
    setErrors(initErrors);
    // validation
    const valid = await validation();
    if (valid) {
      props.navigation.navigate("Home", {});
    }
    console.log('valid',initErrors)
  };

  const handleSubmitEditing = () => {
    next();
  };

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const validation = async () => {
    let valid = true;
    if (!nom) {
      valid = false;
      setErrors((errors) => ({ ...errors, nomError: "Champs obligatoire" }));
    }
    if (!email) {
      valid = false;
      setErrors((errors) => ({ ...errors, emailError: "Champs obligatoire" }));
    }

    const emailValid = validEmailRegex.test(email.trim());;
    // if (emailValid) {
    //   const response = await props.verifyEmail({ email });
    //   if (!(response instanceof HttpErrorResponseModel)) {
    //     if (response.exist) {
    //       valid = false;
    //       setErrors((errors) => ({
    //         ...errors,
    //         emailError: 'Cette adresse e-mail est déjà utilisée',
    //       }));
    //     }
    //   }
    // } else {
    if (!emailValid) {
      valid = false;
      setErrors((errors) => ({
        ...errors,
        emailError: "Veuillez saisir une adresse e-mail valide",
      }));
    }

    if (!password) {
      valid = false;
      setErrors((errors) => ({
        ...errors,
        passwordError: "Champs obligatoire",
      }));
    }
    if (password) {
      if (password.length < 6) {
        setErrors((errors) => ({
          ...errors,
          passwordError: "le mot de passe doit contenir au moins 6 caractères",
        }));
        valid = false;
      } else if (password != passwordConfirmation) {
        setErrors((errors) => ({
          ...errors,
          passwordConfirmationError:
            "Votre mot de passe ne correspond pas à votre mot de passe de confirmation",
        }));
        valid = false;
      }
    }

    if (!passwordConfirmation) {
      valid = false;
      setErrors((errors) => ({
        ...errors,
        passwordConfirmationError: "Champs obligatoire",
      }));
    }
    return valid;
  };

  return (
    <Block flex middle style={{ backgroundColor: Colors.azure }}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", flex:1 }}
      >
        <StatusBar hidden />

        <Block safe flex middle>
          <Block style={styles.registerContainer}>
            <Block flex={0.25} middle style={styles.socialConnect}>
              <Text color="#000" size={12}>
                S'inscrire avec
              </Text>
              <Block row style={{ marginTop: theme.SIZES.BASE }}>
                <Button style={styles.socialButtons}>
                  <Block row>
                    <Icon
                      name="logo-google"
                      family="Ionicon"
                      size={14}
                      color={"black"}
                      style={{ marginTop: 2, marginRight: 5 }}
                    />
                    <Text style={styles.socialTextButtons}>GOOGLE</Text>
                  </Block>
                </Button>
              </Block>
            </Block>
            <Block flex>
              <Block flex={0.17} middle>
                <Text color="#000" size={12}>
                  S'inscrire avec la méthode classique
                </Text>
              </Block>
              <Block center>
                <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior="padding"
                  enabled
                >
                  <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                    <SuiviniInput
                      placeholder={"Nom"}
                      value={nom}
                      autoCapitalize="characters"
                      onChangeText={(value) => {
                        setNom(value);
                        setErrors((errors) => ({ ...errors, nomError: "" }));
                      }}
                      onSubmitEditing={handleSubmitEditing}
                      errorMessage={errors.nomError}
                      containerStyle={{ width: "100%" }}
                      inputContainerStyle={{ width: "100%" }}
                      iconContent={
                        <Icon
                          size={16}
                          color={argonTheme.COLORS.ICON}
                          name="hat-3"
                          family="ArgonExtra"
                          style={styles.inputIcons}
                        />
                      }
                    />
                  </Block>
                  <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                    <SuiviniInput
                      borderless
                      placeholder="Email"
                      value={email}
                      onChangeText={(value) => {
                        setEmail(value);
                        setErrors((errors) => ({ ...errors, emailError: "" }));
                      }}
                      onSubmitEditing={handleSubmitEditing}
                      errorMessage={errors.emailError}
                      autoCapitalize="none"
                      iconContent={
                        <Icon
                          size={16}
                          color={argonTheme.COLORS.ICON}
                          name="ic_mail_24px"
                          family="ArgonExtra"
                          style={styles.inputIcons}
                        />
                      }
                    />
                  </Block>
                  <Block width={width * 0.8}>
                    <SuiviniInput
                      borderless
                      placeholder="Mot de passe"
                      value={password}
                      onChangeText={(value) => {
                        setPassword(value.trim());
                        setErrors((errors) => ({
                          ...errors,
                          passwordError: "",
                        }));
                      }}
                      onSubmitEditing={handleSubmitEditing}
                      secureTextEntry={true}
                      errorMessage={errors.passwordError}
                      iconContent={
                        <Icon
                          size={16}
                          color={argonTheme.COLORS.ICON}
                          name="padlock-unlocked"
                          family="ArgonExtra"
                          style={styles.inputIcons}
                        />
                      }
                    />
                    <SuiviniInput
                      borderless
                      placeholder="Confirmer votre mot de passe"
                      value={passwordConfirmation}
                      onChangeText={(value) => {
                        setPasswordConfirmation(value.trim());
                        setErrors((errors) => ({
                          ...errors,
                          passwordConfirmationError: "",
                        }));
                      }}
                      onSubmitEditing={handleSubmitEditing}
                      secureTextEntry={true}
                      errorMessage={errors.passwordConfirmationError}
                      iconContent={
                        <Icon
                          size={16}
                          color={argonTheme.COLORS.ICON}
                          name="padlock-unlocked"
                          family="ArgonExtra"
                          style={styles.inputIcons}
                        />
                      }
                    />
                  </Block>
                  <Block row width={width * 0.75}>
                    <Checkbox
                      checkboxStyle={{
                        borderWidth: 3,
                      }}
                      color={argonTheme.COLORS.PRIMARY}
                      label="je suis d'accord avec le"
                    />
                    <Button
                      style={{ width: 100 }}
                      color="transparent"
                      textStyle={{
                        color: argonTheme.COLORS.PRIMARY,
                        fontSize: 14,
                      }}
                    >
                      Privacy Policy
                    </Button>
                  </Block>
                  <Block middle >
                    <Button
                      color="primary"
                      onPress={() => {
                        next();
                      }}
                      style={styles.createButton}
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        CREER UN COMPTE
                      </Text>
                    </Button>
                  </Block>
                </KeyboardAvoidingView>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};
const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.875,
    backgroundColor: Colors.azure,
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },
  socialConnect: {
    backgroundColor: Colors.azure,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA",
  },
  socialButtons: {
    width: 120,
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
  },
});

export default Register;
