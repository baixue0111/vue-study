/* var name = 'jsbai';
var b = 'baibai';
var c = 'web';

export {   // as 的用法就是相当于又起了一个名字，在引用是直接用name,cname,skill 而不是a,b,c
    name as a,
    cname as b,
    skill as c
}; */

// export default  在一个文件中只能有一个， export 可以有多个
//  用export  引用时 要使用 import {} from './路劲' 这种形式引用

//export default var a = 'web前端';    // 引用时 要使用 import name from './路劲' 这种形式引用