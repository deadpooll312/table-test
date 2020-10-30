import {blue, green, red} from "../styles/colors";

export const getCorrectName = (name) => {
  return name.split("_").join(" ");
};

export const returnPercentColor = (percentChange) => {
  if (percentChange[0] === "-") {
    return red;
  }
  if (percentChange[0] === "+") {
    return green;
  }
  return blue;
};
