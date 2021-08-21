let durationInput=document.querySelector('#durationInput');
const startButton=document.querySelector('#startButton');
const pauseButton=document.querySelector('#pauseButton');
const circle=document.querySelector('circle');
const raduis=circle.getAttribute('r');
const perimeter=raduis*Math.PI*2;
circle.setAttribute('stroke-dasharray',perimeter);
let duration;

const timer=new Timer(durationInput,startButton,pauseButton,{
    onStart: (totalduration)=>{
        duration=totalduration;
    },
    onTick:(timeremaining)=>{
        circle.setAttribute('stroke-dashoffset',
        perimeter*timeremaining/duration-perimeter
        )
    },
    onComplete:()=>{
        console.log('timer completed')
    }

});
