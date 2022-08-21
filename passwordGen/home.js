const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase = uppercase.map(let =>let.toLowerCase())
const numbers = [0,1,2,3,4,5,6,7,8,9]
const symbols = ["~","`","!"," ","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";",'"',"<",",",">",".","?","/"]


const upperCheck = document.getElementById("upperCheck")
const lowerCheck = document.getElementById("lowerCheck")
const numberCheck = document.getElementById("numberCheck")
const symbolCheck = document.getElementById("symbolCheck")

const generatePassword = document.getElementById('generate')

const showPassword = document.getElementById('showPassword')
const genPassword = document.getElementById('genPassword')


const length = document.getElementById('length')

generatePassword.addEventListener("click",()=>{
    let checkList =[]
    let password=''
    let passwordArray=[];
    if(upperCheck.checked){
        checkList.push('upper')
    }
    if(lowerCheck.checked){
        checkList.push('lower')
    }
    if(numberCheck.checked){
        checkList.push('number')
    }
    if(symbolCheck.checked){
        checkList.push('symbol')
    }


    for(let i=0; i<Number(length.value); i++){
        checks = checkList.sort(()=>Math.random()-0.5);

        if(checks[0]=='upper'){
            uppercase.sort(()=>Math.random()-0.5);
            passwordArray.push(uppercase[0])  

        }else if(checks[0]=='lower'){
            lowercase.sort(()=>Math.random()-0.5);
            passwordArray.push(lowercase[0]) 

        }else if(checks[0]=='number'){
            numbers.sort(()=>Math.random()-0.5);
            passwordArray.push(numbers[0]) 

        }else if(checks[0]=='symbol'){
            symbols.sort(()=>Math.random()-0.5);
            passwordArray.push(symbols[0]) 

        }

    }


    for(let i=0; i<passwordArray.length;i++){
        password += passwordArray[i]
    }

    genPassword.textContent= password;


    showPassword.style.visibility="visible"
})

