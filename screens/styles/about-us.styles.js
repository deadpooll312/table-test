import {StyleSheet} from "react-native";
import {blue, white} from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  logo: {
    width: 150,
    height: 190,
    marginBottom: 40,
  },
  text: {
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: blue,
    borderRadius: 10,
    paddingHorizontal: 45,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 16,
    color: white,
  },
});

export default styles;
