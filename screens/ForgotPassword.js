import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Modal } from "react-native";
import SuiviniButton from "../components/ui/SuiviniButton";
import SuiviniInput from "../components/ui/SuiviniInput";
import Colors from "../constants/Colors";
import { argonTheme } from "../constants";

const ForgotPassword = function (props) {
  const formErrors = {
    email_uError: "",
  };
  const [email_u, setEmail_u] = useState("");
  const [errors, setErrors] = useState(formErrors);

  // message modal
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const closeModal = () => {
    setModalVisible(false);
  };
  const runAction = () => {
    sendToEmail();
    setModalVisible(false);
  };

  const sendToEmail = async () => {
    setErrors(formErrors);
    let valid = true;
    if (!validEmailRegex.test(email_u)) {
      valid = false;
      setErrors((errors) => ({
        ...errors,
        email_uError: "Veuillez saisir votre adresse e-mail",
      }));
    }
    if (!email_u) {
      valid = false;
      setErrors((errors) => ({
        ...errors,
        email_uError: "Champs obligatoire",
      }));
    }
    if (valid) {
      //   try {
      //     const response = await props.send({ email: email_u });
      setMessage({
        text: "Nous vous avons envoyé un e-mail contenant un lien de récupération de votre mot de passe.Veuillez consultez votre boite e-mail!",
        type: "info",
      });
      setModalVisible(true);
      //   } catch (error) {
      //     console.log('resetPassword::error', error);
      //   }
    }
  };

  const handleSubmit = () => {
    sendToEmail();
  };
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.form}>
          <Text style={styles.modalTitle}>
            {'Entrer votre adresse email pour récupérer votre mot de passe'}
          </Text>
          <SuiviniInput
            placeholder={'Email'}
            value={email_u}
            onChangeText={setEmail_u}
            onSubmitEditing={handleSubmit}
            keyboardType="email-address"
            errorMessage={errors.email_uError}
            autoCapitalize="none"
            containerStyle={{ width: "100%" }}
            inputContainerStyle={{ width: "100%" }}
          />
        </View>
        <SuiviniButton
          style={styles.button}
          text={'Envoyer'}
          onPress={sendToEmail}
          textStyle={styles.buttonText}
        />
      </ScrollView>

      {/* Message Modal  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
        style={{ justifyContent: "center" }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalBody}>
              <Text style={styles.modalTitle}>{message.text}</Text>
            </View>
            <View style={styles.modalFooter}>
              <SuiviniButton
                text={'Fermer'}
                textStyle={{ textTransform: "none" }}
                style={{
                  backgroundColor: argonTheme.COLORS.PRIMARY,
                  borderColor: argonTheme.COLORS.PRIMARY,
                  paddingHorizontal: 20,
                  paddingVertical: 0,
                  height: 40,
                }}
                onPress={closeModal}
              />
              {message.type != "info" && (
                <SuiviniButton
                  text={'Valider'}
                  textStyle={{ textTransform: "none" }}
                  style={{
                    backgroundColor: Colors.secondary,
                    borderColor: Colors.secondary,
                    paddingHorizontal: 20,
                    paddingVertical: 0,
                    height: 40,
                  }}
                  onPress={runAction}
                />
              )}
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: Colors.azure,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  headerTag: {
    backgroundColor: Colors.secondary,
    borderRadius: 14,
    width: 28,
    height: 28,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTagNumber: { color: "#fff", fontSize: 17, fontWeight: "bold" },
  headerTitle: {
    fontFamily: "Metropolis-Bold",
    fontSize: 17,
    fontWeight: "bold",
    color: argonTheme.COLORS.PRIMARY,
  },
  form: { flexGrow: 1, justifyContent: "center" },
  button: {
    backgroundColor: argonTheme.COLORS.PRIMARY,
    height: 48,
    width: 295,
    paddingLeft: 20,
    paddingRight: 10,
    alignSelf: "center",
    marginTop: 30,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: { textTransform: "none", flex: 1, textAlign: "center" },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3e3e3ea1",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "95%",
    borderRadius: 5,
  },
  modalHeader: { justifyContent: "center", alignItems: "center" },
  modalTitle: {
    fontFamily: "Metropolis-Bold",
    fontSize: 16,
    fontWeight: "bold",
    color: argonTheme.COLORS.PRIMARY,
  },
  modalBody: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  modalFooter: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonTextStyle: {
    fontFamily: "Metropolis",
  },
});

export default ForgotPassword;
