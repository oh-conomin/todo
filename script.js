const btn=document.getElementById('submit');
const t1=document.getElementById('t1');
const memo=document.getElementById('text');


btn.addEventListener('click',function(event){
    event.preventDefault();
    const li =document.createElement('li'); 
    const okBtn = document.createElement('button');
    okBtn.innerText="ok";
    
    li.textContent=text.value; 

    
    t1.appendChild(li);
   li.appendChild(okBtn);
    text.value="";
 

});

okBtn.addEventListener('click',function(event){
    event.preventDefault();   
    removeNode();
    });

