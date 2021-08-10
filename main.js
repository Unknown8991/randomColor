const btn = document.querySelector('.generate');
const span = document.querySelector('span');
const btnCopy = document.querySelector('.icon')
const btnConvert = document.querySelector('.switch-hex')
const arrRGB = [0, 0, 0];
const newArr = [];

// Generate color RGB
function generateColor(){
    arrRGB.forEach((color, index) => {
       color = Math.floor(Math.random() * 256)
       newArr.push(color)
        if(newArr.length > 3){
            newArr.splice(0,3);
        }
    })
    let colorRGB = `rgb(${newArr[0]}, ${newArr[1]}, ${newArr[2]})`;
    document.body.style.backgroundColor = colorRGB;
    const spanContent = document.querySelector('span');
    spanContent.textContent = colorRGB;
  
    btn.classList.add('active')
    btnCopy.style.display = 'block'
    btnConvert.style.display = 'block'
    
    
    let changeBtn = false;

    const convertToHEX = () =>{
        console.log(colorRGB)
        
        newArr[0] = newArr[0].toString(16)
        newArr[1] = newArr[1].toString(16)
        newArr[2] = newArr[2].toString(16)

        if(newArr[0].length == 1){
            newArr[0] = "0" + newArr[0];
        }
        if(newArr[1].length == 1){
            newArr[1] = "0" + newArr[1];
        }
        if(newArr[2].length == 1){
            newArr[2] = "0" + newArr[2];
        }
        
        let hexColor = (`#${newArr[0]}${newArr[1]}${newArr[2]}`);
        console.log(btnConvert)
        
        if(!changeBtn){
            btnConvert.textContent = 'HEX'
            span.textContent = hexColor;
            changeBtn = true;
        }else{
            btnConvert.textContent = 'RGB'
            span.textContent = colorRGB;
            changeBtn = false;
        }

    }
    btnConvert.addEventListener('click', convertToHEX)
// Copy color
    const copyRGB=()=>{
        const rgbText = document.createRange();
        rgbText.selectNode(document.getElementById('text-rgb'));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(rgbText);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        const copied = document.querySelector('.copied')
        copied.style.display = "block"
        setTimeout(function(){
            copied.style.display = "none"
        },500)
        
    }
    
    btnCopy.addEventListener('click', copyRGB)
}
btn.addEventListener('click', generateColor)
