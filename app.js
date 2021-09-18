const images =[
    'Images/pic-1.png',
    'Images/pic-2.png',
    'Images/pic-3.png',
    'Images/pic-4.png',
    'Images/pic-5.png',
]
let imageIndex = 0;
const imageElement = document.getElementById("slider-img")
setInterval(() =>{
    if(imageIndex >=images.length){
        imageIndex =0;
    }
    const imgURL =images[imageIndex];
    imageElement.setAttribute('src', imgURL);
    imageIndex++;
}
,1000)