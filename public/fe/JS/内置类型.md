# JS中的数据类型
*   undefined
*   null
*   string
*   boolean
*   number
*   [symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)(ES6)
*   Object

## 基本数据类型
1：数字（number）：包括了浮点数和整数；

大多数语言在计算浮点数时都会出现计算不精确的问题，这是由于计算机在计算的时候会将数组转换成二进制数，因为二进制表示太长了，计算机会截取一定的位数来进行计算，所以在计算浮点数时会出现一些不精确的问题，但是，这种现象在js中尤为严重解决方式一般是先将浮点数转换成整数（乘以固定的十的倍数，之后再结果上除去），在网上有很多封装好的函数来进行这个动作

八进制：以数字0开始表明该数字的八进制；

十六进制：以0x或者0X为前缀，表示数字为十六进制；

**特殊值**：Infinity无穷大和NaN(0/0)非数字（但是是数字类型）

**Infinity和-Infinity**：

    通过isFinite（）判断是否有限大，如果是Infinity，返回false；这里Infinity可以作为参数赋值给变量（比较大小的问题）

**NaN**：
    
    代表非数字的特殊数值，该属性用于指示某个值不是数字；

    NaN的两个特点：（NaN == not a number）

    1：任何涉及NaN的操作都会返回NaN；

    2：NaN与任何数值都不相等，包括他自身；
    
    不能与Number.NaN比较来检测一个值是不是数字，而只能调用isNaN()来比较；
    
    isNaN（）（可以用来判断一个输入的值是不是数字）函数如果x是特殊的非数字NaN（或者能被转换为这样的值），返回的值就是true，如果x是其他值，则返回false。

    
2：字符串（string）：多个字符的有序序列；双引号和单引号引起来的都是字符串；

3：布尔值（boolean）：true / false；

4：undefind

如果使用一个未定义的变量，或者是没有初始值的变量，都会得到undefind，其实null的一个派生，因此，undefined和null是相等的；

```
aleat(undefind == null) //返回值是 true
```
尽管这两个值相等，但是他们的含义不同

undefined是声明了变量但为对其初始化时赋予变量的值；

5：null
只有一个值null，如果变量的值是null，那么这个变量存在但是为空；
null表示尚未存在的对象，但是函数或方法返回的是对象，找不到该对象时，返回的是null

6. [symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)(ES6)

ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型

Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
```
let s = Symbol();

typeof s
// "symbol"
```

## 复杂数据类型

对象：属性和方法的集合