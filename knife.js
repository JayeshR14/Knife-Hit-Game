let start = false;
let ass = false;
let endRound;
const outer =  document.querySelector('.outer');

const hit = (knife) => {
  const allLines = document.querySelectorAll('.mainLine');
  let pok = knife.getBoundingClientRect();    
}

const allLines = document.querySelector('.circle');
function frt(){
 
}

allLines.addEventListener('click',frt)
function isCollide(newLid, newkni) {
  const lId = document.getElementById(newLid);
  const knife = document.getElementById(newkni);
   
  let poL = lId.getBoundingClientRect();
  let pok = knife.getBoundingClientRect();
  // hit(knife);
 
  const allLines = document.querySelectorAll('.fknife');

  for (const iterator of allLines) {
    let itr = iterator.getBoundingClientRect();
 
    // || itr.left < pok.right || itr.right < pok.left
    if((parseInt(itr.bottom) == 460) && (pok.top == 460)){
      console.log(parseInt(itr.bottom)+"and");
      console.log(pok.top);
      outer.style.visibility = 'visible';
      setTimeout(()=>{
        window.location.reload();
      },2000)
  
    }
  }
  if(poL.bottom == pok.top){
  const fknife = document.createElement('div');
  fknife.setAttribute('class', 'fknife');
  // fknife.setAttribute('id', `f${date}`);
  document.getElementById(newLid).appendChild(fknife);
  document.getElementById(newkni).style.display = "none";
  const img = document.createElement('img');
  img.src = 'image.png';
  img.setAttribute('id','knifeimg')
  fknife.appendChild(img);
  }  
  return !(poL.bottom != pok.top)
}

const round = (newLid,newkni) =>{
  let count = 0;
 endRound = setInterval(()=>{
   if(count == 360){
     count = 0;
    }
   document.getElementById(newLid).style.rotate = `${count}deg`;
  //  document.querySelector('.fcircle').style.rotate = `${count}deg`;
   count = count + 1;
   },10); 
}

let cle = 600;
const hitknife = (newLid, newkni) => {

  end = setInterval(() => {
    
    if (isCollide(newLid, newkni)) {
      clearInterval(end);
      round(newLid,newkni);  
      cle = 600;    
    }
    else {
      document.getElementById(newkni).style.top = `${cle - speed}px`;
      cle -= 10;
    }
    ++endRound;
  },2)
}

let speed = 10
let newLid;
let newKni;
const moveKnife = (mydid, mykni) => {

    newLid = mydid.id;
    newKni = mykni.id;
 
  hitknife(newLid, newKni);

   
}
const getKnife = () => {
  let date = new Date().getTime();
  const newKnife = document.createElement('div');
  newKnife.setAttribute('class', 'knife');
  newKnife.setAttribute('id', `k${date}`);
  const img = document.createElement('img');
  img.src = 'image.png';
  img.setAttribute('id','knifeimg')
  
  document.querySelector('.back').appendChild(newKnife);
  newKnife.appendChild(img);
 
  const mainLine = document.createElement('div');
 mainLine.setAttribute('class', 'mainLine');
 mainLine.setAttribute('id', `m${date}`);
 document.querySelector('.circle').appendChild(mainLine);
 
  const newLine = document.createElement('div');
  newLine.setAttribute('class', 'com');
  newLine.setAttribute('id', `r${date}`);
  document.getElementById(mainLine.id).appendChild(newLine);
  moveKnife(mainLine, newKnife);
}

window.addEventListener('click', getKnife)
