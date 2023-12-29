let allEyes=document.querySelector('#allEyes')
let allMouths=document.querySelector('#allMouths')
let allEars=document.querySelector('#allEars')
let earLeft=document.querySelector('#earLeft')
let earRight=document.querySelector('#earRight')
let eyeLeft=document.querySelector('#eyeLeft')
let eyeRight=document.querySelector('#eyeRight')
let mouthCenter=document.querySelector('#mouthCenter')
let showHide=document.querySelector('#showHide')
showHide.style.display='none'

window.onload=()=>{
    fetch('http://localhost:5000/lennyAllFaces')
      .then(response => response.json())
      .then(data => {
        DisplayFunc(data?.Faces?.Eyes, allEyes, clkFunc)
        DisplayFunc(data?.Faces?.Mouths, allMouths, clkFunc)
        DisplayFunc(data?.Faces?.Ears, allEars, clkFunc)
      })
      .catch(err =>  console.error(err))
}

let clkFunc=(ele1, id, ele2)=>{
    showHide.style.display='flex '

    if(id=='allEyes'){
        eyeLeft.innerHTML=ele1
        eyeRight.innerHTML=ele2
    }else if(id=='allMouths'){
        mouthCenter.innerHTML=ele1
    }else{
        earLeft.innerHTML=ele1
        earRight.innerHTML=ele2
    }
}

let DisplayFunc=(array,display,clkFunc)=>{
    array.map(e=>{
        if(e.length==2){
            let btn=document.createElement('button')
            let span1=document.createElement('span')
            let span2=document.createElement('span')
            span1.textContent=e[0]
            span2.textContent=e[1]
            btn.appendChild(span1)
            btn.appendChild(span2)
            btn.onclick=()=>clkFunc(e[0],btn.parentElement.id,e[1])
            display.appendChild(btn)
        }else{
            e.map(a=>{
                let btn=document.createElement('button')
                btn.textContent=a
                btn.onclick=()=>clkFunc(a,btn.parentElement.id)
                display.appendChild(btn)
            })
        }
    })
}