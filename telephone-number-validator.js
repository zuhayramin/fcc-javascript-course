function telephoneCheck(str) {
    const phoneNumberRegex = /^(1\s?)?((\(\d{3}\))|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/
    return phoneNumberRegex.test(str);
  }
  
  telephoneCheck("1 555)555-5555")
  
  //(\(\d{3}\))|\d{3}