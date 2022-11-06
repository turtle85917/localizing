import { Func } from "../@types";

const functions: Func[] = [
  (content: string) => hasJong(content) ? "을 " : "를",
  (content: string) => hasJong(content) ? "은" : "는",
  (content: string) => hasJong(content) ? "이" : "가",
  (content: string) => hasJong(content) ? "과" : "와",
  (content: string) => hasJong(content) ? "으로" : "로"
];
const formats:{ [josa: string]: Func } = {
  "을/를":  functions[0],
  "을":  functions[0],
  "를":  functions[0],
  "을를":  functions[0],
  "은/는":  functions[1],
  "은":  functions[1],
  "는":  functions[1],
  "은는":  functions[1],
  "이/가":  functions[2],
  "이":  functions[2],
  "가":  functions[2],
  "이가":  functions[2],
  "와/과":  functions[3],
  "와":  functions[3],
  "과":  functions[3],
  "와과":  functions[3],
  "으로/로":  functions[4],
  "으로":  functions[4],
  "로":  functions[4],
  "으로로":  functions[4],
};

const josa = {
  c: (word: string, format: string): string => {
    if (typeof formats[format] === "undefined") throw "Invaild format.";
    return formats[format](word);
  },
  r: (word: string, format: string) => {
    return word + josa.c(word, format);
  }
}

export default josa;

/**
 * 마지막 글자의 받침이 있는지 확인.
 * @param content 받침 유무를 확인할 단어
 */
export function hasJong(content: string) {
  const code = content.charCodeAt(content.length - 1);
  return (code - 0xac00) % 28 > 0;
}