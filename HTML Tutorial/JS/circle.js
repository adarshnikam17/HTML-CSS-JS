let circle =document.querySelector('div')

console.log(circle)

function myColors(){
     if(circle.style.background=='blue')
     {
        circle.style.background=='red'
     }else if(circle.style.background=='red'){
           circle.style.background=='green'
     }else if(circle.style.background=='green'){
        circle.style.background=='black'
     }else if(circle.style.background=='black'){
        circle.style.background=='yellow'
     }else{
        circle.style.background=='blue'
     }
}