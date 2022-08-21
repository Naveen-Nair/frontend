
const input = document.getElementById('input')
const color = document.getElementById('color')
const style = document.getElementById('fontStyle')
const size = document.getElementById('size')

color.addEventListener('change',()=>{
    console.log('color')
    input.style.color=color.value
})
style.addEventListener('change',()=>{
    if(style.value=="bold"){
        input.style.fontWeight="bold"
    }else if(style.value=="boldItalic"){
        input.style.fontWeight="bold"
        input.style.fontStyle="italic"

    }else{
        input.style.fontStyle=style.value
    }

})
size.addEventListener('change',()=>{
    input.style.fontSize=size.value +"px"
})


const link = document.getElementById("download")
link.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(input.value))
link.setAttribute('download',`file.txt`)

