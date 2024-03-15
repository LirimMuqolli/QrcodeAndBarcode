import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#ECF5FD",
    paddingHorizontal: 20,
    paddingVertical: 60,
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
    gap: 20,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  settingsContainer: {
    position: "absolute",
    right: 10,
  },
  successMessageContainer: {
    flexDirection: "row",
    gap: 6,
  },
  settingsButton: {
    cursor: "pointer",
  },
  successMessageText: {
    color: "#43B239",
    fontSize: 14,
    fontWeight: 500,
  },
  form: {
    backgroundColor: "#fff",
    borderRadius: 10,

    width: "100%",
  },
  inputsContainer: {
    width: "100%",
    gap: 24,
    paddingTop: 40,
    paddingBottom: 14,
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#ECF5FD",
    paddingHorizontal: 16,
  },
  inputWrapper: {
    position: "relative",
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: "#023152",
    fontWeight: "bold",
  },
  input: {
    height: 52,
    textDecorationLine: "none",
    borderColor: "#B2CCEE",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  formularContainer: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#ECF5FD",
  },
  firstFormular: {
    borderBottomWidth: 2,
    width: "100%",
    borderBottomColor: "#ECF5FD",
    paddingBottom: 12,
    paddingTop: 18,
    paddingHorizontal: 16,
  },
  secondFormular: {
    paddingVertical: 12,
    paddingHorizontal: 16,
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
  
  message: {
    flexDirection: "row",
    gap: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  icon: {
    position: "absolute",
    top: 35,
    right: 14,
  },
  disabledButton: {
    backgroundColor: "#95ADCF",
  },

  closeButton: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
  flashlightButton: {
    position: "absolute",
    top: 50,
    right: 20,
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
  closeButtonText: {
    fontSize: 30,
    color: "white",
  },
  title: {
    fontSize: 14,
    color: "#6A8496",
    fontWeight: "500",
  },
  titleBold: {
    fontSize: 22,
    color: "#023152",
    fontWeight: "bold",
  },
  image: {
    width: 80,
    height: 80,
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

});
export { styles };
