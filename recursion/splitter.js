function stringProtoSplit(str, separator) {
  if (str.length === 0) return "";

  if (str[0] === separator) return stringProtoSplit(str.slice(1), separator);

  return str[0] + stringProtoSplit(str.slice(1), "/");
}

console.log(stringProtoSplit("/12/12/2012", "/"));
