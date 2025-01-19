
const qrText = document.querySelector("#qr-text")
const sizes = document.querySelector('#sizes')
const generateBtn = document.getElementById('generateBtn')
const downloadBtn = document.getElementById('downloadBtn')
const qrContainer = document.querySelector('.qr-body')

let size = sizes.value ;

generateBtn.addEventListener('click',function(e){
    e.preventDefault();
    isEmptyInput();
})

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
})

downloadBtn.addEventListener('click',function(){
    let img = document.querySelector('img')
    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})

function isEmptyInput(){
    qrText.value.length > 0 ? generateCode() : alert("Enter the text or URL to generate your QR code")
}

function generateCode(){
    qrContainer.innerHTML= ""
    new QRCode(qrContainer,{
        text: qrText,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",
    })
}