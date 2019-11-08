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
        if (typeof value === 'number') {
            return value*(-1);
        }
        else if (typeof value === 'string') {
            return  value.split("").reverse().join("");
        }
        else {
            return 'Incorrect value type or empty'
        }
    };
    return {
      set: setValue,
      show: showValue,
      reverse: reverseValue
    };
})();

iife.set('black');
console.log(iife.show());
console.log(iife.reverse());


// 2) Create four function definitions. One for every basic math operations and taking two input parameters. Create one more function. This function is to return calculation object. This object is to have parameters object field that holds two operation parameters inside (x and y) and a function field that points to a function with math operation (defined at the beginning). A function setOperation() that sets the field from previous sentence and a calculate() function that makes calculation and returns its value. 
let sum = function(x,y) {
    return x+y
}
let sub = function(x,y) {
    return x-y
}
let mul = function(x,y) {
    return x*y
}
let div = function(x,y) {
    return x/y
}
let iife = (function() {
    let x, y, operation;
    let setOperation = function(a,b,ops) {
        if (a) x = a;
        if (b) y = b;
        if (ops) operation = ops;
    };
    let calculate = function() {
        return operation(x,y);
    };
    return {
      set: setOperation,
      calc: calculate
    };
})();
iife.set(5,2,mul);
console.log(iife.calc());


// 3) Create an array (by hand) of objects and call sum() function in context of each one of them. Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.x+this.y}} 
let arr = [{x:2,y:3}, {x:(-2),y:6}, {x:0,y:8}];
BaseObject = {
    x:0,
    y:0,
    sum: function(){
        return this.x+this.y
    }
}
for (let i=0; i<arr.length; i++){
    console.log(BaseObject.sum.call(arr[i]));
}


// 4) Given an array of objects, for each object call operation() function in context of next object. If object is last, got back to start of the array for operation function. In loop;
let arr = [
    {
        x: 1,
        y: 'object one value',
        operation: function() {
            return "object one prefix" + this.x + this.y;
            }
    },
    {
        x: 2,
        y: 'object two value',
        operation: function() {
            return "object two prefix" + this.x + this.y;
            }
    },
    {
        x: 3,
        y: 'object three value',
        operation: function() {
            return "object three prefix" + this.x + this.y;
            }
    },
];
for (let i=0; i<arr.length; i++) {
    if (i==(arr.length-1)) {
        console.log(arr[i].operation.call(arr[0]));
    }
    else {
        console.log(arr[i].operation.call(arr[i+1]));
    }   
}
