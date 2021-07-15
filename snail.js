snail = function(array) {
  let result = [];
  let seenPlaces = [];
  
  let right = true;
  let left = false;
  let up = false;
  let down = false;
  
  let counter = 1;
  let elementCount = 0;
  
  let x = 0;
  let y = 0;

  if(array[0].length == 1){
    return array[0];
  }
  if(array.length == 1){
    return [];
  }
  
  elementCount = array.length * array[0].length;
  
  while(counter <= elementCount){
    if(right){
      if(x <= array[0].length - 1 && !seenPlaces.contains(y + ',' + x)) {
        result.push(array[y][x]);
        seenPlaces.push(y + ',' + x, '*');
        x++;
        counter++;
      } else {
        right = false;
        down = true;
        up = false;
        left = false;
        x--;
        y++;
      }
    } 
    if(down) {
      if(y <= array.length - 1 && !seenPlaces.contains(y + ',' + x)) {
        result.push(array[y][x]);
        seenPlaces.push(y + ',' + x, '*');
        y++;
        counter++;
      } else {
        right = false;
        down = false;
        up = false;
        left = true;
        y--;
        x--;
      }
    } 
    if(left) {
      if(x >= 0 && !seenPlaces.contains(y + ',' + x)) {
        result.push(array[y][x]);
        seenPlaces.push(y + ',' + x, '*');
        x--;
        counter++;
      } else {
        right = false;
        down = false;
        up = true;
        left = false;
        x++;
        y--;
      }
    } 
    if(up) {
      if(y >= 0 && !seenPlaces.contains(y + ',' + x)) { 
          result.push(array[y][x]);
          seenPlaces.push(y + ',' + x, '*');
          y--;
          counter++;
        } else {
          right = true;
          down = false;
          up = false;
          left = false;
          y++;
          x++;
        }
    }
  }
  
  return result;
}

Array.prototype.contains = function(element){
  for(let i = 0 ; i < this.length ; i++) {
    if(this[i] == element) {
      return true;
    }
  }
  return false;
}
