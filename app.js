//now javascript coding to make controlls of the todo app ....

var add_button=document.getElementById('add_btn');
var rem_button=document.getElementById('rem_btn');
var inputs=document.getElementById('input');
var task=document.getElementById('new');

  
    add_button.addEventListener('click',function(){
        var p=document.createElement('p');
        p.innerText=inputs.value;
        task.appendChild(p);
        
        task.style.lineHeight="28px";
        p.style.fontSize="21px";
        
        
        inputs.value=" ";

    p.addEventListener('click',function(){
        p.style.textDecoration="line-through";
        

    })
  
      p.addEventListener('dblclick',function(){
          task.removeChild(p);
      })



    rem_button.addEventListener('click',function(){
        task.removeChild(p);
    })
  })

  






