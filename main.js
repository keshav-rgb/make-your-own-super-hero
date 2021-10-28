var canvas = new fabric.Canvas("myCanvas")
block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;
var player_object = ""
function player_update(){
fabric.Image.fromURL("player.png" , function(Img){
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y , 
    left:player_x
});
canvas.add(player_object);
});
}
var block_object = ""
function new_image(get_image){
    fabric.Image.fromURL(get_image , function(Img){
    block_object = Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
    top:player_y , 
    left:player_x
});
canvas.add(block_object);
});
}
window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    key_press =  e.keyCode;
    if(e.shiftKey == true && key_press == "80"){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
}
if(e.shiftKey == true && key_press == "77"){
    block_width = block_width - 10;
    block_height = block_height - 10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
}
if(key_press == "65"){
    new_image("captain_america_left_hand.png");
console.log("a")
}
if(key_press == "66"){
    new_image("hulk_face.png");
console.log("b")
}
if(key_press == "67"){
    new_image("hulk_left_hand.png");
console.log("c")
}
if(key_press == "68"){
    new_image("hulk_legs.png");
console.log("d")
}
if(key_press == "69"){
    new_image("hulk_right_hand.png");
console.log("e")
}
if(key_press == "70"){
    new_image("hulkd_body.png");
console.log("f")
}
if(key_press == "71"){
    new_image("ironman_body.png");
console.log("g")
}
if(key_press == "72"){
    new_image("ironman_face.png");
console.log("h")
}
if(key_press == "73"){
    new_image("ironman_left_hand.png");
console.log("i")
}
if(key_press == "74"){
    new_image("ironman_legs.png");
console.log("j")
}
if(key_press == "75"){
    new_image("ironman_right_hand.png");
console.log("k")
}
if(key_press == "76"){
    new_image("spiderman_body.png");
console.log("l")
}
if(key_press == "77"){
    new_image("spiderman_face.png");
console.log("m")
}
if(key_press == "78"){
    new_image("spiderman_left_hand.png");
console.log("n")
}
if(key_press == "79"){
    new_image("spiderman_legs.png");
console.log("o")
}
if(key_press == "80"){
    new_image("spiderman_right_hand.png");
console.log("p")
}
if(key_press == "81"){
    new_image("thor_face.png");
console.log("q")
}
if(key_press == "82"){
    new_image("thor_left_hand.png");
console.log("r")
}
if(key_press == "83"){
    new_image("thor_right_hand.png");
console.log("s")
}
if(key_press == "37"){
left()
console.log("left")
}
if(key_press == "38"){
up()
console.log("up")
}
if(key_press == "39"){
right()
console.log("right")
}
if(key_press == "40"){
down()
console.log("down")
}
}
