function revStr(str) {
  if (str.length === 0) return "";
  let reversed = str[str.length - 1];
  return reversed + revStr(str.slice(0, str.length - 1));
}

console.log(revStr("hello"));
