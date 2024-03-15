import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Button,
  Modal,
  Pressable,
} from "react-native";
import { styles } from "./setting-style";
import PasteIcon from "../../assets/svg/PasteIcon";
import EyeShowIcon from "../../assets/svg/EyeShow";
import SuccessIcon from "../../assets/svg/SuccessIcon";
import FailedIcon from "../../assets/svg/FailedIcon";
import EyeHideIcon from "../../assets/svg/EyeHideIcon";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import BackIcon from "../../assets/svg/BackIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { modalstyle } from "../../components/modal-style";
const SettingsScreen = () => {
  const [pnrValue, setPnrValue] = useState("");
  const [hostValue, setHostValue] = useState("");
  const [portValue, setPortValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [pnrFocused, setPnrFocused] = useState(false);
  const [hostFocused, setHostFocused] = useState(false);
  const [portFocused, setPortFocused] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalTitleColor, setModalTitleColor] = useState("");
  const [overlayVisible, setOverlayVisible] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setIsButtonDisabled(
      !(pnrValue && hostValue && portValue && usernameValue && passwordValue)
    );
  }, [pnrValue, hostValue, portValue, usernameValue, passwordValue]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem("settingsData");
        if (savedData) {
          const { pnr, host, port, username, password } = JSON.parse(savedData);
          setPnrValue(pnr || "");
          setHostValue(host || "");
          setPortValue(port || "");
          setUsernameValue(username || "");
          setPasswordValue(password || "");
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
      }
    };

    loadData();
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          host: hostValue,
          port: portValue,
          username: usernameValue,
          password: passwordValue,
        }
      );

      const saveData = async () => {
        try {
          const settingsData = JSON.stringify({
            pnr: pnrValue,
            host: hostValue,
            port: portValue,
            username: usernameValue,
            password: passwordValue,
          });
          await AsyncStorage.setItem("settingsData", settingsData);
        } catch (error) {
          console.error("Error saving data to AsyncStorage:", error);
        }
      };

      saveData();

      if (response.status === 200 || response.status === 201) {
        // setSuccessMessage("Connection successful");
        // setErrorMessage("");
        // setTimeout(() => {
        //   setSuccessMessage("");
        // }, 3000);
        setModalTitle("Failed to send data");
        setModalTitleColor("#FC4A68");
        setModalMessage(
          "There was an issue with sending your data. Please check your details and try again."
        );
        setModalVisible(true);
        setOverlayVisible(true);
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error connecting to the server:", error);
      setErrorMessage("Connection failed. Please try again.");
      setSuccessMessage("");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleBackButtonPress = () => {
    navigation.navigate("Home");
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.iconSettings}>
          <TouchableOpacity
            onPress={handleBackButtonPress}
            style={styles.buttonSettings}
          >
            <BackIcon />
          </TouchableOpacity>
          <Text style={styles.textSettings}>Settings</Text>
        </View>
        {modalVisible && <View style={modalstyle.overlay} />}
        {modalVisible && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={modalstyle.centeredView}>
              <View style={modalstyle.modalView}>
                <Text
                  style={[modalstyle.modalTitle, { color: modalTitleColor }]}
                >
                  {modalTitle}
                </Text>

                <Text style={modalstyle.modalText}>{modalMessage}</Text>
                <Pressable
                  style={[modalstyle.button, modalstyle.buttonClose]}
                  onPress={closeModal}
                >
                  <Text style={modalstyle.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        )}
        <View style={styles.form}>
          <View style={styles.formular}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>PNR</Text>
              <TextInput
                style={[
                  styles.input,
                  pnrFocused && { borderColor: "#0070C0" },

                  {
                    color: pnrFocused ? "#023152" : "#000000",
                  },
                ]}
                value={pnrValue}
                underlineColorAndroid="transparent"
                onFocus={() => setPnrFocused(true)}
                onBlur={() => setPnrFocused(false)}
                onChangeText={(text) => setPnrValue(text)}
              />
            </View>
          </View>
          <View style={styles.messages}>
            {successMessage ? (
              <View style={styles.message}>
                <SuccessIcon />
                <Text style={{ color: "#43B239", marginLeft: 8 }}>
                  {successMessage}
                </Text>
              </View>
            ) : null}
            {errorMessage ? (
              <View style={styles.message}>
                <FailedIcon />
                <Text style={{ color: "red", marginLeft: 8 }}>
                  {errorMessage}
                </Text>
              </View>
            ) : null}
          </View>
          <View style={styles.inputsContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Host</Text>
              <TextInput
                style={[
                  styles.input,
                  hostFocused && { borderColor: "#0070C0" },

                  {
                    color: hostFocused ? "#023152" : "#000000",
                  },
                ]}
                value={hostValue}
                underlineColorAndroid="transparent"
                onFocus={() => setHostFocused(true)}
                onBlur={() => setHostFocused(false)}
                onChangeText={(text) => setHostValue(text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Port</Text>
              <TextInput
                style={[
                  styles.input,
                  portFocused && { borderColor: "#0070C0" },
                  {
                    color: portFocused ? "#023152" : "#000000",
                  },
                ]}
                value={portValue}
                underlineColorAndroid="transparent"
                onFocus={() => setPortFocused(true)}
                onBlur={() => setPortFocused(false)}
                onChangeText={(text) => setPortValue(text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={[
                  styles.input,
                  usernameFocused && {
                    borderColor: "#0070C0",
                  },

                  {
                    color: usernameFocused ? "#023152" : "#000000",
                  },
                ]}
                value={usernameValue}
                underlineColorAndroid="transparent"
                onFocus={() => setUsernameFocused(true)}
                onBlur={() => setUsernameFocused(false)}
                onChangeText={(text) => setUsernameValue(text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={[
                  styles.input,
                  passwordFocused && {
                    borderColor: "#0070C0",
                  },
                  {
                    color: passwordFocused ? "#023152" : "#000000",
                  },
                ]}
                value={passwordValue}
                underlineColorAndroid="transparent"
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                secureTextEntry={!isPasswordVisible}
                onChangeText={(text) => setPasswordValue(text)}
              />
              <TouchableOpacity
                style={styles.icon}
                onPress={togglePasswordVisibility}
              >
                {isPasswordVisible ? <EyeHideIcon /> : <EyeShowIcon />}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            {loading ? (
              <TouchableOpacity
                style={[
                  styles.buttonWrapperWhite,
                  isButtonDisabled && styles.disabledButton,
                ]}
                onPress={handleSubmit}
                disabled={isButtonDisabled}
              >
                <ActivityIndicator color="#0070C0" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[
                  styles.buttonWrapper,
                  isButtonDisabled && styles.disabledButton,
                ]}
                onPress={handleSubmit}
                disabled={isButtonDisabled}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
