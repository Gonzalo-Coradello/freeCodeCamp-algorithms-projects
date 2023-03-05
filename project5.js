function checkCashRegister(price, cash, cid) {

    const concurrency = {
      PENNY: 0.01,
      NICKEL: 0.05,
      DIME: 0.1,
      QUARTER: 0.25,
      ONE: 1,
      FIVE: 5,
      TEN: 10,
      TWENTY: 20,
      "ONE HUNDRED": 100
    }
  
    const change = cash - price;
  
    const cidTotal = cid.reduce((acc, arr) => acc + arr[1], 0);

    if(change > cidTotal) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } 
    if(change === cidTotal) {
      return {status: "CLOSED", change: cid}
    }
  
    let temp = change
    const res = []
  
    for(let i = cid.length - 1; i >= 0; i--) {

        const current = cid[i][1]
        const coinValue = concurrency[cid[i][0]]

      if(temp >= current && current !== 0) {
        res.push(cid[i])
        temp -= current
      } else if(temp >= coinValue && current !== 0) {
        const amount = Math.floor(temp / coinValue)
        const value = coinValue * amount
        res.push([cid[i][0], value])
        temp = (temp - value).toFixed(2)
      } else continue
    }
  
    const availChange = res
        .map(v => v[1])
        .reduce((acc, curr) => acc + curr)
    if(availChange < change) return {status: "INSUFFICIENT_FUNDS", change: []}
  
    return {status: "OPEN", change: res}
  
  }

  const result = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  console.log(result);