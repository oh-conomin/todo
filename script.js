const btn=document.getElementById('submit');
const t1=document.getElementById('t1');


btn.addEventListener('click',function(event){
 
  event.preventDefault();
  const memo=document.getElementById('text').value;
  const memotwo=document.getElementById('texttwo').value;

  if(memo.length> 0 && memotwo.length>0){ 
    const li =document.createElement('li'); 
    const okBtn=document.createElement('button');
    okBtn.innerText="ok";
    
  
    li.textContent=memo + "    " +memotwo+  "  "; 
     
    

   



  
t1.appendChild(li);
li.appendChild(okBtn);

    
text.value="";
//memo.value=""; 
//memotwo.value=""; 



okBtn.addEventListener('click',function(event){
        event.preventDefault();   
        li.remove();
        });
      }    
      
});


