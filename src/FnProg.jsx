import React, { Component } from 'react';

function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    )
  };
  return newArr;
}

class FnProg extends Component {
  render(){
    var arr1 = [1,2,3];
    var arr2 = mapForEach(arr1, function(item) {
      return item * 2;
    });
    return(
      <div>
        <p>
          {arr1}
          {arr2}
        </p>
      </div>
    )
  }
}

export default FnProg;
