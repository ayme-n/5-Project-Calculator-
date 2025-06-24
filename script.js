function add(a,b){return a+b}
function subtract(a,b){return a-b}
function multiply(a,b){return a*b}
function divide(a,b){
    if(b==0) {
        return "Error , dont divide /0"
        
    }

        return a/b

    }

function operate(a,b,op){
    switch(op){
        case '+': return (add(a,b))
        case '-': return subtract(a,b)
        case '*':  return multiply(a,b)
        case '/': return divide(a,b)
            
    }
}

let number1="",number2="",op="",done=false,dot=-1
let btn_digit = document.querySelectorAll(".digit")

let display = document.querySelector(".display")



btn_digit.forEach(element => {
    element.addEventListener("click",()=>{

    if(done==true){
    display.textContent =""
    
    number1=""
    number2=""
    op = ""
    dot=-1
    done = false
    }

    display.textContent = display.textContent + element.textContent
    number2 = number2 + element.textContent
    dot++

})
});

let btn_ops= document.querySelectorAll(".operator")


btn_ops.forEach(element => {
    element.addEventListener("click",()=>{

    if(op!=""){
        number2 = operate(Number(number1),Number(number2),op)
        display.textContent = number2 //result to continue
        
        number1=""
        op = ""
        dot=0
    }
    
    display.textContent = display.textContent + element.textContent
    op = element.textContent

    number1 = number2
    number2=""
    dot=-1
    
    

})
});


let btn_equal = document.querySelector("#equal")


btn_equal.addEventListener("click",()=>{

    if((number1!="") && (number2!="")){
        number2 = operate(Number(number1),Number(number2),op)
    display.textContent = number2 //result to continue


    done = true
    number1=""
    //number2=""
    op = ""
    dot=0
    }
})
;

let clear = document.querySelector("#clear")

clear.addEventListener("click",()=>{
    display.textContent =""
    
    number1=""
    number2=""
    op = ""
    dot=0
})


let dot_dec = document.querySelector("#dot")

dot_dec.addEventListener("click",()=>{
    if((dot<=0)&&(dot!=-1))
    {
        display.textContent = display.textContent + dot_dec.textContent
        number2 = number2 + dot_dec.textContent
        dot++
    }
    if(done==true){
    display.textContent =""
    
    number1=""
    number2=""
    op = ""
    dot=0
    done = false
    }
    
   
})