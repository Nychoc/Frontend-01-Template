// 正则匹配所有Number直接量
export function validateNumber(value) {
  const reg = /[\d]{1,16}|(?:[1-9]+\.[\d]+)|(NaN)|0[xX][1-9a-f]+/gi;
  return reg.test(value);
}

// encode utf-8 function
export function UTF8Encoding(str="") {
  let arr = str.split("");
  let newStr = arr.map((item) => {
     return `\\u${item.charCodeAt().toString(16)}`
    }
  );
  return newStr
}

// 正则匹配字符串直接量，单引号和双引号
export function validateStr(str="") {
  const reg = /?:[^"]|\.)*"|'(?:[^']|\.)*|^[\u4E00-\u9FA5A-Za-z0-9]+$/;
  return reg.test(str);
}


