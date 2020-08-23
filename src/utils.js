export const getLogo = (name) => {
  if (name === "pc") {
    name = "windows";
  } else if (name === "nintheno") {
    name = "neos";
  }
  return `<i class="fab fa-${name}"></i>&nbsp;`;
};
