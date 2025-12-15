Javascript Execution Context

CODE -> Global Execution Context.(this.)
    ->  Function Exec. Context
    ->  Eval Execution Context

CODE : two phases;
      -> Memory Creation Phase
      -> Execution Phase

forExample ;
let1 = 10
let2 = 5
functon addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result = addNum(val1, val2)
let result = addNum(0, 2)

now let see the process;

[1] Global Execution Context.(all code first run through this)

[2] Memory Creation Phase. (all variables are collected & stored.)
     ->val1 = undefined
     ->val2 = undefined
     ->addNum= definition of function store.
     ->result1= undefined
     ->result2= undefined

[3] Execution Phase
     ->val1= 10
     ->val2= 5
     ->addNum --->[new variable enviroment + execution thread](* her baar, jitne baar run hoga.
     *final result ke baad delete bhi hoga.)
     ->result1= 15
     ->result2= (again whole process of box start.)
     