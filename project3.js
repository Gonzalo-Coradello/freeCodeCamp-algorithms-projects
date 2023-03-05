function rot13(str) {
  
    const arr = str.split('')
  
    const codes = arr.map(c => c.charCodeAt(0))
  
    const cipher = codes.map(c => {
  
      // If c is a letter (A-Z)
      if(c >= 65 && c <= 90) {
        const newCode = c - 13
  
        if(newCode < 65) {
          const diff = 65 - newCode
          return 90 - diff + 1
        } return newCode
      }
      return c
    })
  
    const newStr = cipher.map(c => String
      .fromCharCode(c))
      .join('')
  
    return newStr;
  }
  
  console.log(rot13("SERR PBQR PNZC"));