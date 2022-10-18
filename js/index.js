const player = document.getElementById('player');
const ground = document.getElementById('ground');

let dx = 0;
let dy = 0;
let acceleration = 0.1;
let index=1;
let index1=1;

/* setInterval(()=>{

    if(dy!==0){
        player.style.backgroundImage = `url('../img/Jump${index++}.png')`;
    }else if(dx!==0){
        player.style.backgroundImage = `url('../img/Run${index1++}.png')`;
    }else{
        player.style.backgroundImage = `url('../img/idle${index++}.png')`;
    }

    if(index>10){
        index=1;   
    }
    if(index1>8){
        index1=1;   
    }
},30); */

const animate =()=>{

    if(dy!==0){
        player.style.backgroundImage = `url('../img/Jump${index++}.png')`;
    }else if(dx!==0){
        player.style.backgroundImage = `url('../img/Run${index1++}.png')`;
    }else{
        player.style.backgroundImage = `url('../img/idle${index++}.png')`;
    }

    if(index>10){
        index=1;   
    }
    if(index1>8){
        index1=1;   
    }
    requestAnimationFrame(animate);
}

/* setInterval(()=>{
    if(((player.offsetLeft+player.offsetWidth+dx)>=innerWidth)){
        dx=0;
        player.style.left=`${innerWidth-player.offsetWidth}px`;
    }else if(player.offsetLeft<0){
        dx=0;
        player.style.left='0';
    }
    dy+=acceleration;
    if((player.offsetTop+player.offsetHeight+dy)>ground.offsetTop+50){
        dy=0;
        player.style.top=`${ground.offsetTop-player.offsetHeight+50}px`;
        acceleration=0;
    }
    player.style.left= `${player.offsetLeft+dx}px`;
    player.style.top= `${player.offsetTop+dy}px`;
},17); */

const draw = ()=>{
    if(((player.offsetLeft+player.offsetWidth+dx)>=innerWidth)){
        dx=0;
        player.style.left=`${innerWidth-player.offsetWidth}px`;
    }else if(player.offsetLeft<0){
        dx=0;
        player.style.left='0';
    }
    dy+=acceleration;
    if((player.offsetTop+player.offsetHeight+dy)>ground.offsetTop+50){
        dy=0;
        player.style.top=`${ground.offsetTop-player.offsetHeight+50}px`;
        acceleration=0;
    }
    player.style.left= `${player.offsetLeft+dx}px`;
    player.style.top= `${player.offsetTop+dy}px`;

    requestAnimationFrame(draw); //this is a kind of loop (recursion)
}

addEventListener('keydown',({key})=>{
    if(key === 'ArrowRight'){
        dx = 10;
        index=1;
        player.classList.remove('turn');
    }else if(key == 'ArrowLeft'){
        index=1;
        player.classList.add('turn');
        dx=-10; 
    }
});

addEventListener('keyup',({key})=>{
    if(key === 'ArrowRight' || key == 'ArrowLeft'){
        dx=0;
    }
});

addEventListener('keypress',({key})=>{
    if(key == ' '){
        dy=-10;
        acceleration=0.3;
         
    }
});

requestAnimationFrame(animate);
requestAnimationFrame(draw);

let j=0;
let t1=0;
const interval = 2;
function repaint(timestamp){
    if(!t1)t1=timestamp;
    const diff=timestamp-t1;
    if(diff>= interval*1000){
        t1=timestamp;
        console.log('Painted'+j++ +timestamp);
    }
    requestAnimationFrame(repaint);
}
requestAnimationFrame(repaint);