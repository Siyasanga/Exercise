function howFarThisWeek(data){
  data = data.split(',');
  total = 0;
  for(i in data){
    unit = data[i].replace(/\d/g,'');
    size = data[i].replace(unit,'')*1;
    switch(unit){
      case "km":
        total = total + size;
        break;
      case "m":
        total = total+(size/1000.0);
    }
  }
  return total;
}
const assert = require('assert');
assert.equal(howFarThisWeek('750m,5km,7km,950m,10km')+"km",'23.7km')
