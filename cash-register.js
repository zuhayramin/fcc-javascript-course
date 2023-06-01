function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    let change = cash - price;
    let totalCid = 0;
    let changeArr = [];
  
    // Calculate the total cash in drawer
    for (let i = 0; i < cid.length; i++) {
      totalCid += cid[i][1];
    }
  
    // Handle insufficient funds or exact change
    if (totalCid < change) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalCid === change) {
      return { status: "CLOSED", change: cid };
    }
  
    // Iterate through each currency unit from highest to lowest
    for (let i = currencyUnits.length - 1; i >= 0; i--) {
      const currencyName = currencyUnits[i][0];
      const currencyValue = currencyUnits[i][1];
      let currencyAvailable = cid[i][1];
      let currencyCount = 0;
  
      // Calculate the number of current currency units to be returned as change
      while (change >= currencyValue && currencyAvailable > 0) {
        change -= currencyValue;
        change = Math.round(change * 100) / 100;
        currencyAvailable -= currencyValue;
        currencyCount += currencyValue;
      }
  
      // Add the current currency unit to the change array if any was used
      if (currencyCount > 0) {
        changeArr.push([currencyName, currencyCount]);
      }
    }
  
    // Handle cases where change cannot be made with available currency units
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: changeArr };
  }
  