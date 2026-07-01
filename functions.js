

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

    /**
     * 虽然以前好像更习惯用n表示总数的，但m在前面，c m n也好看好读一点
     * 从m个item中拿取n个item的排列，即数组
     * @param {*} m 
     * @param {*} n 
     */
    permutation(m, n) {
        if (m < n) {
            [m, n] = [n, m];
        }
        return this.factorial(m) / this.factorial(n)

    }

    /**
     * 从n个item中拿出m个item的集合
     * @param {*} m 
     * @param {*} n 
     * @returns 
     */
    combination(m, n) {
        // m > n
        if (m < n) {
            [m, n] = [n, m];
        }
        let res = this.permutation(m, n) / this.factorial(n - m);
        return res;
    }
    
}
// 类声明的提升机制：类没有这个提升机制，只有函数才有，所以对象的行为必须在类型定义之后
const math = new mathfunctions();
export default math;
