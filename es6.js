class Builder {
  constructor(value) {
    this.value=value;
  }

  plus (...args) {
    this.value=args.reduce((sum,arg)=> sum+arg,this.value);
    return this;
  }
  minus() {};
  multiply(){};
  divide() {};

  get () { return this.value; }
}

class IntBuilder extends Builder {
  constructor(value) {
    super(value);
  }

  minus (...args) {
    this.value=args.reduce((sum,arg)=> sum-arg,this.value);
    return this;
  }

  multiply (n) {
    this.value=this.value*n;
    return this;
  }

  divide (n) {
    this.value=this.value/n;
    return this;
  }

  mod (n) {
    this.value=this.value%n;
    return this;
  }

  static random(from,to) {
   return Math.floor(Math.random() * (to-from) + from);
  }
}

class StringBuilder extends Builder {
  constructor(value) {
    super(value);
  }

  minus (n) {
    this.value = this.value.substring(n,-1);
    return this;
  } 
  multiply (n) {
    const arr = [];
    while (arr.length<n) { arr.push(this.value); }
    this.value=arr.join(" ");
    return this;
  } 

  divide(n) {
    this.value = this.value.substring(0,Math.floor(this.value.length / n));
    return this;
  } 
  remove(n) {
    const arr = this.value.split("");
    this.value = arr.filter(el => el != n).join("");
    return this;
  } 
  sub(from,n) {
    this.value = this.value.substring(from+1,n);
    return this;
  } 
}



const newInt = new IntBuilder(10);
const newStr = new StringBuilder("Hello");


console.log("//ES6");
console.log("Random: " +IntBuilder.random(10,100));
console.log("StringBuilder result: " + newStr.plus(" all","!")
                  .minus(4)
                  .multiply(3)
                  .divide(4)
                  .remove("l")
                  .sub(1,1)
                  .get());

console.log("IntBuilder result: " + newInt.plus(2, 3, 2)                   
                  .minus(1, 2)                     
                  .multiply(2)                   
                  .divide(4)                       
                  .mod(3)                          
                  .get());


