// 1) Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue(). Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about that. Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.
let iife = (function() {
    let value;
    let setValue = function(newValue) {
        if (newValue) value = newValue;
    };
    let showValue = function() {
        if (value === undefined) {
            return 'value is not provided or it is empty'
        }
        else {
            return value
        }
    };
    let reverseValue = function() {
        if (value === undefined) {
            return 'value is undefined'
        }
        else if (typeof value === 'string') {
            return  value.split("").reverse().join("");
        }
        else {
            return value*(-1);
        }
    };
    return {
      set: setValue,
      show: showValue,
      reverse: reverseValue
    };
})();

iife.set('');
console.log(iife);
console.log(iife.show());
console.log(iife.reverse());

