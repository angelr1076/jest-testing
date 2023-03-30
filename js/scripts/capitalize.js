const firstChar = str => Array.from(str)[0];
const capitalize = str => firstChar(str).toUpperCase() + str.slice(1);

export { capitalize };
