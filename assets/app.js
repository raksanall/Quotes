const url="https://api.adviceslip.com/advice"
const quote=document.querySelector(".quote")
const button=document.querySelector("button")
fetch(url).then(response=>{
    return response.json()
}).then(data=>{
quote.innerHTML=data.slip.advice;
})
button.onclick=(()=>{
    location.reload()
})

