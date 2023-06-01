function rot13(str) {
    str = str.replace(/[a-zA-z]/g, function(char){
      const code = char.charCodeAt(0)
      let decodedChar
  
      if(code >= 65 & code <= 90){
        decodedChar = String.fromCharCode(((code - 65 + 13)%26) + 65)
      }
      return decodedChar
    })
    console.log(str)
    return str;
  }
  rot13("SERR PBQR PNZC");