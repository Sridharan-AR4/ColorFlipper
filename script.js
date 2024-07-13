let colorname=document.querySelector('.color');
let main=document.querySelector('.main');
let btn=document.querySelector('.change');


btn.addEventListener('click',function(){
    let color='#';
    let n;
    for(let i=1;i<7;i++){
        n=Math.floor(Math.random()*16);
        switch(n){
            case 15:
                color+='f';
                break;
            case 14:
                color+='e';
                break;
            case 13:
                color+='d';
                break;
            case 12:
                color+='c';
                break;
            case 11:
                color+='b';
                break;
            case 10:
                color+='a';
                break;
            default:
                color+=n;
                break;
        }
    }
    console.log(color);
    main.style.backgroundColor=color;
    colorname.innerHTML=color;
})
