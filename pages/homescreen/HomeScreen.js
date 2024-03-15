import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
  ActivityIndicator,
  Modal,
  Pressable,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { styles } from "./homescreen-style";
import SettingsIcon from "../../assets/svg/SettingsIcon";
import ScanIcon from "../../assets/svg/ScanIcon";
import CloseIcon from "../../assets/svg/CloseIcon";
import FlashIcon from "../../assets/svg/FlashIcon";
import axios from "axios";
import SuccessIcon from "../../assets/svg/SuccessIcon";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QRCodeScannerFrame from "../../QRCodeScannerFrame";
import { modalstyle } from "../../components/modal-style";
export default function HomeScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showScanner, setShowScanner] = useState(false);
  const [scannedInputField, setScannedInputField] = useState("");
  const [input1Focused, setInput1Focused] = useState(false);
  const [input2Focused, setInput2Focused] = useState(false);
  const [input3Focused, setInput3Focused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalTitleColor, setModalTitleColor] = useState("");
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [successMessage, setSuccessMessage] = useState("");

  const toggleFlash = () => {
    setFlashMode(
      flashMode === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.torch
        : Camera.Constants.FlashMode.off
    );
  };

  useEffect(() => {
    setIsButtonDisabled(!(input1 && input2 && input3));
  }, [input1, input2, input3]);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem("homeScreenData");
        if (savedData) {
          const { input1, input2, input3 } = JSON.parse(savedData);
          setInput1(input1 || "");
          setInput2(input2 || "");
          setInput3(input3 || "");
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
          scannedData: {
            LE: input1,
            LP: input2,
          },
          anzahl: input3,
        }
      );

      // if (response.status === 201 || response.status === 200) {
      //   setSuccessMessage("Data successfully transferred!");
      //   setModalVisible(false);
      //   setOverlayVisible(false);
      //   setTimeout(() => {
      //     setSuccessMessage("");
      //   }, 3000);
      // }
      setModalTitle("Failed to send data");
      setModalTitleColor("#FC4A68");
      setModalMessage(
        "There was an issue with sending your data. Please check your details and try again."
      );
      setModalVisible(true);
      setOverlayVisible(true);
      setSuccessMessage("");
    } catch (error) {
      console.error("Error connecting to the server:", error);
      setModalTitle("Failed to send data");
      setModalTitleColor("#FC4A68");
      setModalMessage(
        "There was an issue with sending your data. Please check your details and try again."
      );
      setModalVisible(true);
      setOverlayVisible(true);
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  const handleBarCodeScanned = ({ type, data }) => {
    if (scannedInputField === "LE") {
      setInput1(data);
    } else if (scannedInputField === "LP") {
      setInput2(data);
    }
    setShowScanner(false);
    setScanned(false);
  };

  const handleCloseScan = () => {
    setScanned(false);
    setShowScanner(false);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleScan = (inputField) => {
    setScannedInputField(inputField);
    setShowScanner(true);
  };

  return (
    <>
      {showScanner && hasPermission && (
        <>
          <Camera
            type={Camera.Constants.Type.back}
            flashMode={flashMode}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[StyleSheet.absoluteFillObject, { zIndex: 999 }]}
            barCodeTypes={[
              BarCodeScanner.Constants.BarCodeType.qr,
              BarCodeScanner.Constants.BarCodeType.code128,
            ]}
          />
          <QRCodeScannerFrame isScanning={true} />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleCloseScan}
          >
            <CloseIcon />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.flashlightButton}
            onPress={toggleFlash}
          >
            <FlashIcon />
          </TouchableOpacity>
        </>
      )}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
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
                  <Text style={[modalstyle.modalTitle, { color: modalTitleColor }]}>
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

          <View style={styles.icons}>
            <Image
              source={require("../../assets/images/ICON_NEU.png")}
              style={styles.image}
            />
            <View style={styles.settingsContainer}>
              <TouchableOpacity
                style={styles.settingsButton}
                onPress={() => navigation.navigate("Settings")}
              >
                <SettingsIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.formularContainer}>
              <View style={styles.firstFormular}>
                <Text style={styles.title}>PNR</Text>
                <Text style={styles.titleBold}>22</Text>
              </View>
              <View style={styles.secondFormular}>
                <Text style={styles.title}>Anzeige Nr. /Name aus Formular</Text>
                <Text style={styles.titleBold}>22-36-21</Text>
              </View>
            </View>
            <View style={styles.inputsContainer}>
              {successMessage ? (
                <View style={styles.message}>
                  <SuccessIcon />
                  <Text style={{ color: "#43B239", marginLeft: 8 }}>
                    {successMessage}
                  </Text>
                </View>
              ) : null}
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>LE</Text>
                <TextInput
                  style={[
                    styles.input,
                    input1Focused && {
                      borderColor: "#0070C0",
                    },
                    {
                      color: input1Focused ? "#023152" : "#000000",
                    },
                  ]}
                  value={input1}
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => setInput1(text)}
                  onFocus={() => setInput1Focused(true)}
                  onBlur={() => setInput1Focused(false)}
                />
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => handleScan("LE")}
                >
                  <ScanIcon />
                </TouchableOpacity>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>LP</Text>
                <TextInput
                  style={[
                    styles.input,
                    input2Focused && {
                      borderColor: "#0070C0",
                    },
                    {
                      color: input2Focused ? "#023152" : "#000000",
                    },
                  ]}
                  value={input2}
                  underlineColorAndroid="transparent"
                  onFocus={() => setInput2Focused(true)}
                  onBlur={() => setInput2Focused(false)}
                  onChangeText={(text) => setInput2(text)}
                />
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => handleScan("LP")}
                >
                  <ScanIcon />
                </TouchableOpacity>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Anzahl</Text>
                <TextInput
                  style={[
                    styles.input,
                    input3Focused && {
                      borderColor: "#0070C0",
                    },
                    {
                      color: input3Focused ? "#023152" : "#000000",
                    },
                  ]}
                  value={input3}
                  underlineColorAndroid="transparent"
                  onFocus={() => setInput3Focused(true)}
                  onBlur={() => setInput3Focused(false)}
                  onChangeText={(text) => setInput3(text)}
                />
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
                  <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
