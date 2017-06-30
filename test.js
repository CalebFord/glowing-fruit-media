 <script>
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var twoDimArray = [];
  var arrCopy = arr.slice();
  var chunk = [];
  
  while (arrCopy.length > 0) {
    
    if (arrCopy.length === 0) {
      twoDimArray.push(chunk);
      break;
    }
    
    chunk.push(arrCopy.unshift());
    if (chunk.length == size) {
      twoDimArray.push(chunk);
      chunk = [];
    }
    
  }
  
  return twoDimArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
</script>