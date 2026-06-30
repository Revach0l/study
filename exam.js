// 只有模块 or 类型 才可以用花括号括起来，对象实例不能用花括号括起来
import math from "./functions.js";
// 感觉写代码之前必须先写一段输出程序，心里就不会那么慌了，总觉得自己是不是什么也写不出来。
// 写一段运行一段，可以逐步增强心中的确定感
// 如果我写得比较专心，那么这种确定感应当可以保留下来
// let a = 'hello';
// print(a);

// 为什么这里import不能像python一样可以直接调函数什么的
// 所以我如果要直接调函数的话，需要经过哪些步骤呢？
// 只需要创建一个对象实例就行了
// 但需要注意的是，这里创建实例一定要带有关键字以告诉编译器这个是常量还是变量
// const math = new mathfunctions();
// 我感觉人写代码的最好状态可能不是清醒，而是沉醉
// 一个人的狂欢
function print(x) {
    // 自己写一个打印函数吧，感觉下面这个不是很自然在这里。
    console.log(x);
}

// 声明必须要有关键字，但之后变量的类型是不定的
const exponent = 3;
print(math.introdution.description);
print(math.introdution.author);
print(math.introdution.topic);
// print(math[description]); // 这样是不允许的，里面必须是字符串，不然会被当成一个没有定义的变量名
print(math.introdution['description']);
print(`description属性的长度为${math.introdution.description.length}`);
print(math.introdution.content);
print(math.introdution.content?.text);// 该值目前没有定义，如果不是很确定这一点就需要使用
math.introdution.content = "目前写了平方，阶乘，组合数；准备接着写三角函数，不过对三角函数的逻辑不是很熟悉，所以先不写"
print(math.introdution.content);
math.content = '这是一个introduction之外的属性值'
print(math.content);
math.empty = {};
print(math.empty)
// 可见，js对象可以随意地添加属性值，不管是对象类型的值，还是通过类型创建的对象都是如此


for (let x = 0;x < 10;x++) {
    print(`${x}的平方是${math.pow2(x)}`)
    print(`${x}的阶乘是${math.factorial(x)}`)
    print(`${x}的${exponent}次幂是${math.pow(x, exponent)}`)
    // 字符串拼接并不像python那样自然，既然可以使用+操作符拼拼接，那为什么不能使用数乘来制作字符串？
    // 因为在js中，运算符重载规则和python不同，乘法不能作用于字符串运算
    print("-".repeat(10));
    // print(`${x}的平方是${math.pow(x)}`)
}