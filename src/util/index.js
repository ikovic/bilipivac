import * as colors from "material-ui/styles/colors";

export const getRandomColor = () => {
  var keys = Object.keys(colors);
  return colors[keys[(keys.length * Math.random()) << 0]];
};
