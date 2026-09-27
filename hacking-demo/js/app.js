const form=document.querySelector('#loginForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const msg=document.querySelector('#loginMsg');msg.textContent='ACCESS ACCEPTED — launching simulation...';beep(520,.08);setTimeout(()=>location.href='pages/dashboard.html',900)})}
function beep(freq=440,dur=.07){try{const C=window.AudioContext||window.webkitAudioContext,c=new C(),o=c.createOscillator(),g=c.createGain();o.frequency.value=freq;o.type='square';g.gain.value=.025;o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+dur)}catch(e){}}
window.beep=beep;
