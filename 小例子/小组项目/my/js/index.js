function hasClassName(inElement, inClassName){
    let classStr = inElement.className;
    let classArr = classStr.split(' ');
    for(var i=0;i < classArr.length ; i++){
        if(inClassName == classArr[i]){
            return true;
        }
    }
    return false;
}

function addClassName(inElement, inClassName){
    if(!hasClassName(inElement, inClassName)){
      inElement.className = [inElement.className, inClassName].join(' ');
    }
}

function removeClassName(inElement, inClassName){
    if(hasClassName(inElement, inClassName)){
        let j = 0;
        let newClassArr =[];
        let classArr = inElement.className.split(' ');
        for(var i = 0;i<classArr.length;i++){
            if(classArr[i]==inClassName) {
                continue;
            }
            newClassArr[j] = classArr[i];
            j++
        }
        inElement.className = newClassArr.join(' ');
    }
}

function toggleClassName(inElement, inClassName){
    if(hasClassName(inElement, inClassName)){
        removeClassName(inElement, inClassName);
    }else{
        addClassName(inElement, inClassName);
    }
}

function toggleShape(){
    let shape = document.getElementById('shape');
    if(hasClassName(shape, 'ring')){
        removeClassName(shape, 'ring');
        addClassName(shape, 'cube');
    }else{
        removeClassName(shape, 'cube');
        addClassName(shape, 'ring');
    }

    //转换样式translateZ（）导致的感觉太近
    let stage = document.getElementById('stage');
    if(hasClassName(shape, 'ring')){
        stage.style.webkitTransform = 'translateZ(-200px)';
    }else{
        stage.style.webkitTransform = '';
    }
}


function move(){
   let shape1 = document.getElementById('shape');
   let speed = 28;
     
   document.onmousedown = function(ev){
     let disX = ev.pageX;
     let disY = ev.pageY;  

     let styleM = document.getElementsByTagName('style')[0];
     let spin1 = '@keyframes spin {\
          from { transform: rotateY(0deg); }\
          to   { transform: rotateY(-360deg); }\
       }';
     let spin2 = '@keyframes spin {\
        from { transform: rotateY(-360deg); }\
        to   { transform: rotateY(0deg); }\
     }';
     
     if(disX < 680){
       styleM.innerText = spin1;
     }else{
       styleM.innerText = spin2;
     }
     
     document.onmousemove = function(mv){
       let shapeAim = document.querySelector('.shapeAim');
       
       speed -= 0.2;
       if(speed < 1){
         speed = 1;
         document.onmousemove = function(){
           speed = 28;
         }
       }
       shapeAim.style.animation = 'spin ' + speed+ 's infinite linear';
     }
  
     document.onmouseup = function(){
       document.onmousemove = document.onmouseup = null;
     }
     return false;
   }
}
move();