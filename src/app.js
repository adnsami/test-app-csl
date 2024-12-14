function func1() {
    let num = 100;
    console.log(num);

    function childFunc() {
        console.log('hello from child func', num);
    }

    return childFunc;
}

const c = func1();

console.log(c()); // child funciton calling
