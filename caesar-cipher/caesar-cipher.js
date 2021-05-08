function caesarCipher(text, shift, encode = true) {
    shift = encode ? shift : -shift;
    return text.replace(/[a-z]/gi, (match, i, str) => {
        let code = str.codePointAt(i);
        let base = code < 91 ? 65 : 97;
        let shiftedCode = ((((code + shift - base) % 26) + 26) % 26) + base;
        return String.fromCodePoint(shiftedCode);
    });
}

module.exports = caesarCipher;