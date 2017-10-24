'use strict';

//let a = 1;
// console.log(a);

// var 得使用会污染空间
// let 局部声明
// const 常量声明

// var a = "baixue";
// window.onload = function  () {
//     console.log(a);
// }

/* {
    let a = "23223";
}
console.log(a); */

// for(var i = 0; i < 10; i++) {
//     console.log("循环体中的i的值为：" + i);   // 0 1 2 3 4 5 6 7 8 9
// }

// console.log("循环体外的i的值为：" + i);  // 10


// for(let i = 0; i < 10; i++) {
//     console.log("循环体中的i的值为：" + i);   // 0 1 2 3 4 5 6 7 8 9
// }

//console.log("循环体外的i的值为：" + i);   // 报错 i is not defined
//  数组解构赋值(变量的值是由顺序决定的)
// let [a, [b,d], c] = [1, [2,4], 3];    // 数组模式和赋值模式统一
// console.log("a====" + a);  // 1
// console.log("b====" + b);  //2
// console.log("c====" + c);  //3
// console.log("d====" + d);  // 4

// let [foot = 'false'] = ['true'];  // 等号左面可以设置默认值
// console.log("foot===" + foot);

// undefined 和 null 的区别

// undefined 是没有值，有默认值就取默认值 。 null 是一个空对象 ，值就是null
//let [a, b="xiaobai"] = ['Hello', null];
//console.log(a+b); 


// 对象的解构赋值（是由变量名决定的）
// let {foo, bar} = {bar: null, foo: "Hello->"};
// console.log(foo + bar);   // Hello->null

// 先赋值 然后解构时不加圆括号就会报错并不能解构
// let a;
// ({a} = {a: "this is abai"});
// console.log(a);


// 字符串解构赋值
// const [a, b, c, d, e, f] = 'baixue';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);


// 对象扩展运算符(...)
// function baixue(...arg) {
//     console.log('arg[0]===' + arg[0]);
//     console.log('arg[1]===' + arg[1]);
//     console.log('arg[2]===' + arg[2]);
//     console.log('arg[3]===' + arg[3]);   // undefined
// }
// baixue(1, 2, 3);
// 例2：
//  let arr1 = ['www', 'xiaobai', 'xiaozhang'];
//  let arr2 = arr1;
//  console.log('arr2===' + arr2);  // www, xiaobai, xiaozhang
//  arr2.push('hhh');
//  console.log('arr1===' + arr1);  // www, xiaobai, xiaozhang, hhh
//例3： 
// let arr1 = ['www', 'xiaobai', 'xiaozhang'];
// let arr2 = [...arr1];   // 扩展arr1
// console.log('arr2===' + arr2);   // www, xiaobai, xiaozhang
// arr2.push('Hello');
// console.log('arr2===' + arr2);  // www, xiaobai, xiaozhang, Hello
// console.log('arr1===' + arr1);  // www, xiaobai, xiaozhang


// rest 运算符（也是三个点 ...）
// function fn(first, ...arg) {  // 在不知道有几个参数的情况下使用
//     //console.log(arg.length);  // 7
//     for (let val of arg) {   // 要获取arg的参数的值
//         console.log(val);
//     }
// }

// fn(0,1,2,3,4,5,6,7);


// 字符串模板(`${}`) 用这种形式进行拼接
// let a = '我是阿白';
//let b = 'Hello '+ a +'!';
// let b = `Hello ${a} 哈<b>哈哈</b>`;   // 也可以写入html标签并解析
// document.write(b);  // Hello 我是阿白 哈哈哈

// // 也可以进行计算
// let arg1 = 1;
// let arg2 = 2;
// let argNum = `${arg1+arg2}`;
// document.write(argNum);  // 3

// 字符串查找
//let jsbai = 'jsbai';
//let blog = '非常高兴能与你一起学习ES6，我是jsbai';
//document.write(blog.indexOf(jsbai));  // 17 是所查找的字符串的下标位置
// 判断是否有jsbai这个字符串
//document.write(blog.includes(jsbai));   // true 

// 判断开头是否存在jabai
//document.write(blog.startsWith(jsbai));  // false
//document.write(blog.endsWith(jsbai));  // true


// 复制字符串
//document.write('jsbai | '.repeat(5));

//数字判断和转换
// let a = 111;
// console.log(Number.isFinite(a));   // true
// console.log(Number.isFinite(NaN));  // false
// //NaN验证
// console.log(Number.isNaN(NaN));   // true
//整数验证
// console.log(Number.isInteger(a));  // true

// Json 数组格式
// let json = {
//     "0": "baixue",
//     "1": "20岁",
//     "2": "女",
//     "3": "web前端",
//     length: 4
// };

// let arr = Array.from(json);  // Array.from() 将json数组转换成数组
// console.log(arr);


//Array.of() 将文本或者变量转换成数组
//console.log(Array.of('a', 'b', 'baixue', "小白"));

// 数组元素查找方法 find() -> 一个实例方法
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr.find(function (val, index, arr) {
//     return val>6;   // 7  查找到第一个大于6得数字就停止查找
// }));

// find() 还可以查找字符串
// let arr2 = ["hello", "xiaobai", "aaa"];
// console.log(arr2.find(function (val, index, arr) {
//     return val == "xiaobai1";  // 如果找到就返回此字符串， 反之就返回undefined
// }))


// fill() -> 替换数组中的元素
//let arr = ["jsbai", "web", "前端"];
//console.log(arr.fill("123", 0, 2));  // 第一个参数表示 用什么元素替换。 第二个参数表示下标从几开始，。 第三个元素表示要替换几个元素

// 数组遍历
//let arr = ['jsbai', 'abai', 'Hello'];
// for (let val of arr) {
//     console.log(val);   // jsbai abai Hello
// }

// 遍历得到数组的下标
// for(let index of arr.keys()) {
//     console.log(index);  // 0 1 2
// }

// 遍历数组 记得到下标又能得到值key
// for(let [index, key] of arr.entries()) {
//     if(index >= 1) {
//         console.log(index + ':' + key);  //  1:abai 和 2:Hello
//     }
// }

// entries() 对数组进行不规则的循环
// let list = arr.entries();   // 生成 Iterator形式的数组，这个数组可以让我们进行手动执行
// //console.log(list);
// console.log(list.next().value);  // [0, 'jsbai']
// console.log("...................");  
// console.log(list.next().value);  // [1, 'abai']
// console.log('*******************');
// console.log(list.next().value); // [2, 'Hello']


// ES6的箭头函数和扩展

// function add(a,b = 2) {
//     if(a == 0) {
//         throw new Error("a is Error");   // 主动抛出错误
//     }
//     return a+b;
// }
// console.log(add(0));  // 2
// ES6 严谨模式
// function add(a,b) {   // 当使用严格模式时，解构赋值时不能写默认值，否则不会编译
//      'use strict'  // 严谨模式在ES5时是写在代码的最上方，表示全局使用， 而ES6可以写在函数内部， 表示指针对此函数起作用
//     // if(a == 0) {
//     //     throw new Error("a is Error");   // 主动抛出错误
//     // }
//     return a+b;
// }
// console.log(add(11,2));  // 13

// 获得需要传递的参数个数 add.length -> 表示此函数必须传递的参数个数，如果某个参数有默认值，则length的个数中将不包含次默认值的个数
// function add(a, b = 0) {  // 但是如果是(a = 0，b)这样，最后却返回 0 
//     console.log('b==='+ b);
//     return a + b;
// }
// console.log(add.length);  // 1  a有默认值 所以只输出另一个参数个数

// 上面的add函数写法 更改箭头函数的写法为：
// var add = (a,b) => a+b;  // 函数体中如果多余两句话时 那么就得将函数体放入 大括号中 {}
// console.log(add(1,2));  // 3

// var add = (a,b) => {return a+b};  // 函数体中如果多余两句话时 那么就得将函数体放入 大括号中 {}
// console.log(add(3,2));  // 5


// ES6 中的函数和数组补漏
// 一. 对象的函数解构
//我们在前后端分离时，后端经常返回来JSON格式的数据，前端的美好愿望是直接把这个
//JSON格式数据当作参数，传递到函数内部进行处理。ES6就为我们提供了这样的解构赋值。
// let json = {
//     a: 'web',
//     b: '前端',
//     c: '小白'
// };
// 方法的作用就是要获取json里面的某个对象的值
// function fun({a,b}) {
//     console.log('a==='+a, 'b==='+b);
// };
// fun(json);  // 调用时直接把这个json对象传入

// 二.数组解构
// let arr = ['web', '前端', '小白'];
// function fun (...arg) {
//     for( let val of arg) {
//         console.log(val);  // web 前端  小白
//     }
// }
// fun(...arr); 

// in 的用法（对象判断）
// let obj = {
//     a: 'jsbai',
//     b: 'web'
// }; 
//console.log('c' in obj);  // false
//console.log('a' in obj);  // true  其中要判断的某个值必须加引号，否则会报错

// in的用法（数组判断）
// let arr = [, 'jsbai', 'web', '前端'];
// console.log(0 in arr);  // false  0 表示数组的下标，意思就是 数组的第一个元素是空不存在
// console.log(1 in arr);  // true  1 表示数组第二个元素存在


/*************************** 数组遍历的几种方法 *********************************/
// forEach 遍历数组（自动省略为空的数组元素）
//let arr = ['jsbai', 'web', 'baibai'];
// arr.forEach( function (val, index) {   // 第一个参数是val值，第二个参数是 index下标
//     console.log(index,val);  // 0：'jsbai' 1: 'web' 2: 'baibai'
// });
//arr.forEach((val, index) => console.log(index, val));   // 箭头函数形式的写法

// filter 用filter的循环功能遍历数组
// let arr = ['jsbai', 'web', 'baibai'];
// arr.filter(a => console.log(a));  // jsbai  web  baibai


// some 遍历数组和filter的用法一样
// let arr = ['jsbai', 'web', 'baibai'];
// arr.some(a => console.log(a));  // jsbai  web  baibai

// map 是循环遍历并替换数组
// let arr = ['jsbai', 'web', 'baibai'];
// console.log(arr.map(x => 'web前端'));  // ["web前端", "web前端", "web前端"]

// 数组转换成字符串
// let arr = ['jsbai', 'web', 'baibai'];
// console.log(arr.toString());  // jsbai,web,baibai  用逗号隔开的
// console.log(arr.join('|'));   // 用竖线分割  jsbai|web|baibai (具体用什么符号分割根据需要自己定)


/********************************* 对象的一些操作 ***********************************/

// 对象赋值
// let name = 'baibai';
// let sex = '女';
// let obj = {name, sex};  // 可以用变量名直接赋值
// console.log(obj);  // {name: "baibai", sex: "女"}

// 对象 key 值的构建（也就是重新为key值命名）
// var key = 'skill';
// var obj= {
//     [key]: 'aaaaa'
// };
// console.log(obj.skill);   // aaaaa

// 自定义方法
// let obj = {
//     add: function (a, b) {
//         return a + b;
//     }
// }
// console.log(obj.add(2,2));  // 4

// Object.is() 对象比较
// let obj1 = {a: 'baibai'};
// let obj2 = {b: 'baibai'};
// console.log(Object.is(obj1, obj2));  // false

// === 和 Object.is() 的区别  (=== 同值相等，is 严格相等)
// console.log(+0 === -0);  // true
// console.log(NaN === NaN); // false
// console.log(Object.is(+0, -0));  // false
// console.log(Object.is(NaN, NaN));  // true


// 合并对象 （Object.assign()）
// let a = {name: 'baibai'};
// let b = {sex: '女'};
// let c = {age: 20};
// let obj = Object.assign(a,b,c);
// console.log(obj);  // {name: "baibai", sex: "女", age: 20}


/********************************* Symbol 在对象中的引用方法 *******************************/
// 1. 声明Symbol
// let a = new String;
// let b = new Object;
// let c = Symbol();
// console.log(typeof(a));  // object  因为是用new定义的
// console.log(typeof(b));  // object
// console.log(c);  // Symbol()

// 2.Symbol 打印
// let a = Symbol('jabai');
// console.log(a);   // Symbol(jabai) 红色字体
// console.log(a.toString());   // Symbol(jabai) 黑色字体

//3. Symbol 在对象中的应用（构建对象的key值）
// let jspang = Symbol();
// var obj = {
//     [jspang]: 'jsbai'
// };
// console.log(obj[jspang]);  //  jsbai 打印symbol类型的key值用 [] 方括号
// obj[jspang] = 'web';
// console.log(obj[jspang]);  // web

//4. Symbol 对 对象元素的保护作用
// let obj = {
//     name: 'baixue',
//     sex: '女',
//     age: '20'
// };
// for ( let item in obj) {
//    // console.log(item);  // name  sex  age
//    // console.log(obj[item]);  // baixue  女  20
// } 

// 此时我不想让别人知道我的年龄
// let obj = {
//     name: 'baixue',
//     sex: '女'
// };
// let age = Symbol();
// obj[age] = '18';
// for (let val in obj) {
//     console.log(obj[val]);  // baixue  女  年龄就不会被打印出来了
// }

/********************************** set *******************************/
//1. set 声明(不允许有重复值,如果有重复的只显示一个元素)
//let setArr = new Set(['jsbai', 'web', 'baiai']);
// setArr.add('aaaa');  // 给set格式的 setArr 增加元素  区别于数组的增加元素 arr.push("aaaa")
// console.log(setArr);  // Set(3) {"jsbai", "web", "baiai", "aaaa"}  是set格式的对象 区别于 json 格式
// setArr.delete('aaaa');
// console.log(setArr);  // Set(3) {"jsbai", "web", "baiai"}

// set的查找方法(从上面的setArr中查找)
// console.log(setArr.has('web'));  // true
// console.log(setArr.has('abai'));  // false

// set全部删除(从上面的setArr中删除)
// setArr.clear();
// console.log(setArr);  // Set(0) {}

// 2. set的循环
//let setArr = new Set(['jsbai', 'web', 'baiai']);
// for (let item of setArr) {
//     console.log(item);   //  jsbai web baibai   
// }

//setArr.forEach((val) => console.log(val));  // jsbai  web  baibai

// set 的 size 方法 区别于 数组的 length 方法
//console.log(setArr.size);   // 3

// 3. weakSet 中可以放对象, 而 set 里面只能放数组
//weakSet 的使用是先声明 然后在将定义好的对象使用add方法添加到声明好的weakSet中
// let weakObj = new WeakSet();
// let obj = {
//     a: 'jsbai',
//     b: 'web'
// };
// weakObj.add(obj);
// console.log(weakObj);   // WeakSet {Object {a: "jsbai", b: "web"}}

// 可以重复的情况（开辟的内存空间不同但是两个对象里的值相同也可以添加到weakObj）
// let weakObj = new WeakSet();
// let obj = {
//     a: 'jsbai',
//     b: 'web'
// };
// let obj1 = {
//     a: 'jsbai',
//     b: 'web'
// };
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);  // WeakSet {Object {a: "jsbai", b: "web"}, Object {a: "jsbai", b: "web"}}

// 以下这种的情况就不允许重复了
// let weakObj = new WeakSet();
// let obj = {
//     a: 'jsbai',
//     b: 'web'
// };
// let obj1 = obj;
// weakObj.add(obj1);
// console.log(weakObj);  // WeakSet {Object {a: "jsbai", b: "web"}}

/************************************ map 数据结构 ***********************************/
// json 类型
// let json = {
//     name: 'jsbai',
//     skill: 'web'
// };
// console.log(json);  // Object {name: "jsbai", skill: "web"}
// console.log(json.name); // jsbai

// map 类型
// let map = new Map();
// let json = {
//     name: 'jsbai',
//     skill: 'web'
// };
// let json2 = {
//     name: 'jszhang',
//     skill: 'java'
// };
// map 类型的格式（key,value）其中key 和 value 可以是数组也可以是对象
//map.set(json, '我是value值');
//console.log(map);  // Map(1) {Object {name: "jsbai", skill: "web"} => "我是value值"}
// map.set('我是key', json);
// map.set('我也是key', json2);
// console.log(map);  // Map(1) {"我是key" => Object {name: "jsbai", skill: "web"}}

/******** map 中用get取值 map.get('key')********/
//console.log(map.get('我是key'));  // Object {name: "jsbai", skill: "web"}

// map 的删除方法
//map.delete('我是key');  // 删除指定的key
//console.log(map);   // Map(1) {"我也是key" => Object {name: "jszhang", skill: "java"}}

// 删除全部
/* map.clear();
console.log(map);  */ // Map(0) {}

// map的size属性 计算map里面有多少个值
//console.log(map.size);  // 2

// map 查找方法has()
//console.log(map.has('jspang'));  // false  查找map中是否有 jspang 这个key 值


/********************************** Proxy 预处理 ******************************/
// proxy 增强对象和函数（方法） 生命周期 也就是钩子函数, proxy 在真正执行之前执行
// proxy 是在let obj 之前执行
var obj = {
    add: function add(val) {
        return val;
    },
    name: 'jsbai'
};
console.log(obj.name); // jsbai
console.log(obj.add(100)); // 100

// proxy 的使用
var proxy = new Proxy({
    // 第一个对象写对象体
    add: function add(val) {
        return val;
    },
    name: 'jsbai'
}, {
    // 第二个对象写预处理（也就是会在对象体执行之前执行的内容）
    // 预处理机制有： get  set  apply
    // get 就是在得到一个东西之后执行
    get: function get(target, key, property) {
        // 前两个参数必须传，property 这个参数可以没有
        //console.log(target);  // Object {name: "jsbai", add: function}
        //console.log(key);  // name
        //console.log(property);   // Proxy {name: "jsbai", add: function}
        console.log('我先执行');
        return target[key];
    }
});
console.log(proxy.name);
