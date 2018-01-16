function shake(obj,attr,num,callback){
    let arr = [];
    let timer = null;
    let n = 0;
    for(var i = num;i>0;i-=2){
        arr.push(-i,i);
    }
    arr.push(0);
    timer = setInterval(function(){
        /*
            parseInt(getComputedStyle(obj)[attr])
            
            因为计算后的样式是带单位的，所以需要转成数字
        */
        obj.style[attr] = parseInt(getComputedStyle(obj)[attr]) + arr[n] + 'px';
        n++;
        if(n > arr.length){
            clearInterval(timer);
            n = 0;
            //当抖完之后，调用callback函数。
            callback && callback();
            //console.log('抖完完!');
        }
    },50);
}
