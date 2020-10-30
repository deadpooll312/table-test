import {StyleSheet} from "react-native";
import {black, grey, white, yellow, blue} from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: black
  },
  title: {
    paddingHorizontal: 20,
    marginBottom: 25,
    color: white,
    fontSize: 24,
    fontWeight: "900",
  },
  background: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: yellow,
    flex: 1,
    paddingTop: 20,
  },
  tableContainer: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: black,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  cardWrapper: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: grey,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    width: 100,
    marginRight: 10,
  },
  cardPercent: {
    fontSize: 12,
  },
  cardLast: {
    color: white,
  },
  cardBid: {
    color: blue,
  },
  cardCol: {
    alignItems: "flex-end"
  },
  backButton: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 5,
    alignItems: "center"
  },
  backButtonText: {
    color: white,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default styles;
