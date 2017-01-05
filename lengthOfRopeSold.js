function lengthOfRopeSold(data){
  data = data.split(',');
  total = 0;
  for(i in data){
    unit = data[i].replace(/\d/g,'');
    size = data[i].replace(unit,'')*1;
    switch(unit){
      case "cm":
        total = total + size;
        break;
      case "mm":
        total = total+(size/10.0);
        break;
      case "m":
        total = total+(size*100);
        break;
    }
  }
  return total;
  // return total/2.5; to get the total in inches
}
const assert = require('assert');
assert.equal(lengthOfRopeSold('1m,20cm,3m,75cm,35mm,50cm')+'cm','548.5cm');
