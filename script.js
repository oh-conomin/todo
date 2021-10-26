const btn=document.getElementById('submit');
const t1=document.getElementById('t1');
const memo=document.getElementById('text');


btn.addEventListener('click',function(event){
    event.preventDefault();
    const li =document.createElement('li'); 
    li.textContent=text.value; 
    
    function addChild(btn){
        child.innerHtml='<input type="button" id="libtn" value="ok">'
    };
   
        t1.appendChild(li)
        t1.appendChild(btn)
    text.value="";
});

