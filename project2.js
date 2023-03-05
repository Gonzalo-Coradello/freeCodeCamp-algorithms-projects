function convertToRoman(num) {

    const units = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX'
    }
  
    const tens = {
      1: 'X',
      4: 'XL',
      5: 'L',
      9: 'XC'
    }
  
    const hundreds = {
      1: 'C',
      4: 'CD',
      5: 'D',
      9: 'CM'
    }
  
    const thousands = {
      1: 'M'
    }
  
    const romanNum = []
    const arr = num.toString().split('')
    const objects = [thousands, hundreds, tens, units]
  
    const converter = (nums, objArr) => {
  
      if(nums.length < 1) return
  
      const currentNum = parseInt(nums[nums.length - 1])
      const obj = objArr[objArr.length - 1]
  
      switch(currentNum) {
        case 0:
          break;
  
        case 1:
        case 4:
        case 5:
        case 9:
          romanNum.unshift(obj[currentNum.toString()]);
          break;
  
        case (currentNum < 4):
          for(let i = 0; i < currentNum; i++) {
            romanNum.unshift(obj['1'])
          };
          break;
  
        default: 
  
          if(currentNum < 4) {
            for(let i = 0; i < currentNum; i++) {
              romanNum.unshift(obj['1'])
            } 
          } else {
  
            let temp = '';
            const diff = currentNum - 5;
            temp += obj['5'];
            
            for(let i = 0; i < diff; i++) {
              temp += obj['1']
            };
  
            romanNum.unshift(temp);
          }
  
          break;
      }
  
      nums.pop()
      objArr.pop()
  
      return converter(nums, objArr)
    }
  
    converter(arr, objects)
  
   return romanNum.join('');
  }
  
  console.log(convertToRoman(3999));