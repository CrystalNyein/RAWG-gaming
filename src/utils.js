export const getLogo = (name) => {
  if (name === "pc") {
    name = "windows";
  } else if (name === "nintheno") {
    name = "neos";
  } else if (name === "ios") {
    name = "apple";
  }
  return `<i class="fab fa-${name} rounded"></i>&nbsp;`;
};
