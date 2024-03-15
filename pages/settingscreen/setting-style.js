import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    paddingVertical: 60,
    gap: 20,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#ECF5FD",
    ...Platform.select({
      ios: {
        shadowColor: "#076EFF0D",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  form: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
  },
  message: {
    flexDirection: "row",
    gap: 3,
  },
  inputsContainer: {
    width: "100%",
    gap: 24,
    paddingTop: 30,
    paddingBottom: 14,
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#ECF5FD",
    paddingHorizontal: 16,
  },
  inputWrapper: {
    position: "relative",
  },
  messages: {
    paddingTop: 20,
    paddingLeft: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: "#023152",
    fontWeight: "bold",
  },
  iconSettings: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  buttonSettings: {
    position: "absolute",
    top: 5,
    left: 5,
  },
  textSettings: {
    color: "#0070C0",
    fontWeight: "700",
    fontSize: 22,
  },
  input: {
    height: 52,
    borderColor: "#B2CCEE",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textDecorationLine: "none",
  },
  icon: {
    position: "absolute",
    top: 35,
    right: 14,
  },
  disabledButton: {
    backgroundColor: "#95ADCF",
  },
  formular: {
    width: "100%",
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    paddingVertical: 18,
    borderBottomColor: "#ECF5FD",
  },
  buttonContainer: {
    paddingTop: 14,
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  buttonWrapper: {
    borderRadius: 10,
    height: 62,
    paddingVertical: 15,
    paddingHorizontal: 20,

    backgroundColor: "#0070C0",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapperWhite: {
    borderRadius: 10,
    height: 62,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderColor: "#0070C0",
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  errorMessage: {
    color: "#FC4A68",
    fontSize: 14,
    fontWeight: 500,
  },
  successMessage: {
    color: "#43B239",
    fontSize: 14,
    fontWeight: 500,
  },
  iconText: {
    flexDirection: "row",
    gap: 6,
  },
   centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#0070C0",
    height: 62,
    width: 270,

    justifyContent: "center",
  },
});
export { styles };
