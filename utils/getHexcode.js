const getHexCode = (opacity) => {
  if (!+opacity) return "";
  return Math.floor((+opacity / 100) * 255)?.toString(16);
};


// append hex code for opacity to colorCode
export const colorWithOpacity = (colorCode, opacity) => {
  const opacityHex = getHexCode(opacity);
  return `${colorCode}${opacityHex}`;
};

export default getHexCode;
