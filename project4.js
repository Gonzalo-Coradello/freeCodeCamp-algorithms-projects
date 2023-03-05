function telephoneCheck(str) {

    // n? nnn nnn nnnn
    // Only positive integers
    // Can be separated by spaces, hyphens, none or both
    // Area code can be inside parenthesis
    // Country code is optional and must be 1
  
    const regex = /^1?(\s|-)?(([0-9]{3})|(\([0-9]{3}\)))(\s|-)?([0-9]{3})(\s|-)?([0-9]{4})$/g
  
    return regex.test(str)
  
  }
  
  console.log(telephoneCheck("555-555-5555"));