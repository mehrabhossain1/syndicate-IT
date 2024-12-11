export const cssPerfectShape = (width, height) => {
  return {
    width,
    height,
    minWidth: width,
    minHeight: height,
    maxWidth: width,
    maxHeight: height,
  };
};
