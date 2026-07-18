

class mathfunctions {
    // 为了让其语法看起来更像java等语言，类中的方法就需要省略关键字function
    constructor(){
        console.log('i am an object');
        // 属性需要用this，不然构造函数里的变量会被当成局部变量，函数执行了就没了
        // 并且属性值没有变量声明，和方法一样

        // 整一个属性对象集合
        this.introdution = {
            // 注意对象成员的值通过冒号绑定
            description : "我包含了很多数学函数",
            author : "我的创造者是张昶",
            topic : "展示与实现运算过程",
        }
        
    }

    sin(x) {
        // 泰勒展开实现的三角函数，入参为弧度制
    }

    pow2(x) {
        return x * x;
    }

    // 想写一个任意底数任意指数的函数
    // 但感觉又不想调现成的操作符
    // 希望能证明自己真的会了
    pow (x, y) {
        return x ** y;
    }

    factorial(x) {
        if (x <= 1) {
            return x;
        }
        return x * this.factorial(x - 1);
    }

    combination(x, y) {
        if (x > y){
            [x, y] = [y, x];
        }
        return this.factorial(y)  / this.factorial(x) / this.factorial(y - x);

    }
    
}
// 类声明的提升机制：类没有这个提升机制，只有函数才有，所以对象的行为必须在类型定义之后
const math = new mathfunctions();
export default math;
