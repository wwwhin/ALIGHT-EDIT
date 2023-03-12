
//This is my first code and i am very nervous


//Loader 

var loader = document.getElementById('loader');
loader.style.display="none";





// get uploaded photos and show in the place of images.
var output = document.getElementById('output');

function image() {
  output.src = URL.createObjectURL(event.target.files[0]);
}


var output2 = document.getElementById('output2');

function image2() {
  output2.src = URL.createObjectURL(event.target.files[0]);
}


//back buttons

function back1(){
  posts.style.display="";
  memeEditor.style.display="none";
}









//changing html on click for better peeform for images in different incos





var posts = document.getElementById('posts');
posts.style.display="";


var memeEditor = document.getElementById('meme-editor');
memeEditor.style.display="none";
function stpost(){
  posts.style.display="none";
  memeEditor.style.display="";
}


//alert for change name

var notice = document.getElementById('alert');
notice.style.display="none";
function showalrt(){
  notice.style.display="";
  memeEditor.style.display="none";
}



var userNameEdit = document.getElementById('username-edit');
var editUserName =  document.getElementById('username');

var userName = document.getElementById('enter-username');

//change username

function page() {
  memeEditor.style.display = "";
  notice.style.display = "none";
  editUserName.innerHTML = userName.value;
}


//for username (id) text edit

var notice2 = document.getElementById('alert2');
var id = document.getElementById('id');
var idEdit = document.getElementById('enter-id');
notice2.style.display="none";

function showalrt2(){
  memeEditor.style.display="none";
  notice2.style.display="";
}
function page2(){
  memeEditor.style.display="";
  notice2.style.display="none";
  id.innerHTML = idEdit.value
}



//for text line edit

var notice3 = document.getElementById('alert3');
var textLine = document.getElementById('txt-line');
var editLineText = document.getElementById('enter-text-line');
notice3.style.display="none";

function showalrt3(){
  memeEditor.style.display="none";
  notice3.style.display="";
}
function page3(){
  memeEditor.style.display="";
  notice3.style.display="none";
  textLine.innerHTML=editLineText.value;
}








// Download 















