function palindrome(str) {
    let regexp = /[^a-z0-9]/ig
    let alteredStr = str
    alteredStr = alteredStr.replace(regexp, "")
    alteredStr = alteredStr.toLowerCase()
    console.log(alteredStr)
    let newArray = alteredStr.split("")
    newArray = newArray.reverse()
    newArray = newArray.join("")
    console.log(newArray)
    
    if(newArray === alteredStr){
      return true;
    }
  
    return false
  }
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"))