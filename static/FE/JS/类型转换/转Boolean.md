# 原始值转换成Boolean类型

除了false, '', 0, NaN, undefined, null可以转换成false,其他都转换成true

```
Boolean('')  //false
Boolean(0)  //false
Boolean(NaN)  //false
Boolean(undefined)  //false
Boolean(null)  //false
Boolean(false)  //false
Boolean(' ')  //true,空格不算空字符
```

特殊值
```
Boolean()  //false 当 Boolean 函数不传任何参数时，会返回 false。
```

# 对象转Boolean类型
```
Boolean({})  //true 所有对象(包括数组和函数)都转换为 true。
```
