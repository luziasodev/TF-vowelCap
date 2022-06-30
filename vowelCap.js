let convert = (str) => {
  return str.split('').reduce((a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
}

alert(convert(prompt('Digite uma frase para tornar vogais maiúsculas e consoantes minúsculas')))
