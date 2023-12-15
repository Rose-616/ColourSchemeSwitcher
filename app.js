let buttons = document.querySelectorAll('.btn');
let body = document.querySelector("body")
buttons.forEach(function(btn){
console.log(btn);
btn.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target);
    if (e.target.id === 'grey'){
        body.style.background = e.target.id
    }
    if (e.target.id === 'white'){
        body.style.background = e.target.id
    }
    if (e.target.id === 'yellow'){
        body.style.background = e.target.id
    }
    if (e.target.id === 'red'){
        body.style.background = e.target.id
    }
})
})
console.log(buttons);