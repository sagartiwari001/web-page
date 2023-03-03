var images =['images/affligem.png','images/amstel_bier.png','images/bullet.png','images/cannon_10000.png',
'images/desperados.png','images/edelweiss.png','images/heineken.png','images/Kalyani_black_label.png'];
var i=0;

function slideShow(){
  document.getElementById("image").src=images[i];
  
  if(i<images.length-1){
    i++;
  }
  else{
    i=0;
  }
  setTimeout("slideShow()",2000);
}
window.onload=slideShow;
function toggleMenu(){
  const menuToggle =document.querySelector('.toggle');
  const navigation =document.querySelector('.navigation')
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}