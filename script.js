const btn=document.getElementById('submit');
const t1=document.getElementById('t1');
const memo=document.getElementById('text')

btn.addEventListener('click',function(event){
    event.preventDefault();
    const li =document.createElement('li'); 
    li.textContent=text.value;
    t1.appendChild(li);
    text.value="";

});

