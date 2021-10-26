const btn=document.getElementById('submit');
const t1=document.getElementById('t1');
const memo=document.getElementById('text');


btn.addEventListener('click',function(event){
    event.preventDefault();
    const li =document.createElement('li'); 
    const okBtn = document.createElement('button');
    li.textContent=text.value; 
    okBtn.innerText="ok";

   
    t1.appendChild(li);
   t1.appendChild(okBtn);
    text.value="";
});

okBtn.addEventListener('click',function(){
    remove();
})