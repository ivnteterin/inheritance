function Builder (value) {
  this.value = value;
  this.plus = function(...args) {
    this.value=args.reduce((sum,arg)=> sum+arg,this.value);
    return this;
  }
  this.minus = function() {};
  this.multiply = function(){};
  this.divide = function() {};
  this.get = function () {return this.value;}
}

function StringBuilder(value) {
  Builder.call(this,value);

  this.minus = function(n) {
    this.value = this.value.substring(n,-1);
    return this;
  } 
  this.multiply = function(n) {
    const arr = [];
    while (arr.length<n) { arr.push(this.value); }
    this.value=arr.join(" ");
    return this;
  } 

  this.divide = function(n) {
    this.value = this.value.substring(0,Math.floor(this.value.length / n));
    return this;
  } 
  this.remove = function(n) {
    const arr = this.value.split("");
    this.value = arr.filter(el => el != n).join("");
    return this;
  } 
  this.sub = function(from,n) {
    this.value = this.value.substring(from+1,n);
    return this;
  } 
}

function IntBuilder(value) {
  Builder.call(this, value || 0);

  this.minus = function(...args) {
    this.value=args.reduce((sum,arg)=> sum-arg,this.value);
    return this;
  }

  this.multiply = function(n) {
    this.value=this.value*n;
    return this;
  }

  this.divide = function(n) {
    this.value=this.value/n;
    return this;
  }

  this.mod = function(n) {
    this.value=this.value%n;
    return this;
  }
}

const newStr = new StringBuilder("Hello");

console.log("//ES5");
console.log("StringBuilder result: " + newStr.plus(" all","!")
                  .minus(4)
                  .multiply(3)
                  .divide(4)
                  .remove("l")
                  .sub(1,1)
                  .get());

const newInt = new IntBuilder(10);
console.log("IntBuilder result: " + newInt.plus(2, 3, 2)                   
                  .minus(1, 2)                     
                  .multiply(2)                   
                  .divide(4)                       
                  .mod(3)                          
                  .get());

