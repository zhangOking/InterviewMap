对js判断数据类型的方法做一个简单的整理
# typeof
typeof操作符用来返回一个字符串，表示未经计算的操作数的类型

下表总结了 typeof 可能的返回值
|类型|结果|
|-|-|
|Undefined|"undefined"|
|Null|"object"|
|Boolean|"boolean"|
|Number|"object"|
|BigInt|"bigint"|
|String|"string"|
|Symbol|"symbol"|
|Function|"function"|
|其他任何对象|"object"|

#### 这里重点说一下坑点

```
// 以下都返回object
typeof null // object
typeof [] // object
typeof {} // object
typeof new Date() // object
typeof new RegExp() // object
typeof new Error() // object

// 以下返回number
typeof NaN // number 尽管NaN是Not-A-Number的简写，但是还是返回number

// bigInt
typeof 42n // bigint

// 除 Function 外的所有构造函数的类型都是 'object'
typeof new String('string') // object
typeof new Number(100) // object

typeof new Function() // function
```
#### 以下是一些例子
```
// 数值
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number';
typeof Number(1) === 'number'; // Number 会尝试把参数解析成数值

typeof 42n === 'bigint';


// 字符串
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `template literal` === 'string';
typeof '1' === 'string'; // 注意内容为数字的字符串仍是字符串
typeof (typeof 1) === 'string'; // typeof 总是返回一个字符串
typeof String(1) === 'string'; // String 将任意值转换为字符串，比 toString 更安全


// 布尔值
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() 会基于参数是真值还是虚值进行转换
typeof !!(1) === 'boolean'; // 两次调用 ! (逻辑非) 操作符相当于 Boolean()


// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';


// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';


// 对象
typeof {a: 1} === 'object';

// 使用 Array.isArray 或者 Object.prototype.toString.call
// 区分数组和普通对象
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object';


// 下面的例子令人迷惑，非常危险，没有用处。避免使用它们。
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

// 函数
typeof function() {} === 'function';
typeof class C {} === 'function'
typeof Math.sin === 'function';
```

# instanceof
instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

```
function Cat(name) {
  this.name = name;
}

function Dog(name) {
  this.name = name;
}

const mao = new Cat('mimi')

mao instanceof Cat; // true

mao instanceof Object // true

mao instanceof Dog // false
```

这里借一个手写实现instanceof的方法，具体思路是看右边变量的原型是否存在于左边变量的原型链上，出口是null
```
function myinstanceof(left, right) {
  let leftValue = left.__proto__;
  let rightValue = right.prototype;
  while (true) {
    if (leftValue === null) {
        return false
    } else if (leftValue === rightValue) {
        return true
    } else {
        leftValue = leftValue.__proto__
    }
  }
}
```

# Object.prototype.toString.call()

```
Object.prototype.toString({}) // [object Object]
Object.prototype.toString.call('') // [object String]
Object.prototype.toString.call(1) // [object Number]
Object.prototype.toString.call(true) // [object Boolean]
Object.prototype.toString.call(undefined) // [object Undefined]
Object.prototype.toString.call(null) // [object Null]
Object.prototype.toString.call(Symbol()) // [object Symbol]
Object.prototype.toString.call(new Error()) // [object Error]
```
