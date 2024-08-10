document.addEventListener('DOMContentLoaded',function(){
    const button=document.getElementById('btn');
    button.addEventListener('mouseover',function(){
        const number=2;
        console.log(`The  number is ${number}`);
        alert('you have hovered it')
    })
})