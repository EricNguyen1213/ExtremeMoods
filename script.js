var ecstasyImg = ["https://thumbs.gfycat.com/PotableAgreeableDowitcher-size_restricted.gif", "http://clipart-library.com/images/8TAbkkE9c.jpg", "https://media.tenor.com/images/b08bc74fb5ec2c20d05b5951421904de/tenor.gif", "http://www.reactiongifs.com/r/2013/07/the-internet.gif", "https://media2.giphy.com/media/11pH16cX3QfJh6/giphy.gif"];
var rageMood = ["https://static01.nyt.com/images/2019/03/11/opinion/11krugmanWeb/11krugmanWeb-articleLarge.jpg?quality=75&auto=webp&disable=upscale", "https://media0.giphy.com/media/9o9dh1JRGThC1qxGTJ/giphy.gif", "https://media3.giphy.com/media/OpesLQSjwdGj6/giphy.gif", "https://i.makeagif.com/media/9-15-2015/3-cfXe.gif", "https://media1.tenor.com/images/e83bf2d50e8d9269310904ef2918bb1c/tenor.gif?itemid=4514133"];
var terrorMood = ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/220px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg", "https://media.giphy.com/media/Oah4ov5ct5EXK/giphy.gif", "https://media1.tenor.com/images/2d40142745cb9c4a6a0890123fd99675/tenor.gif?itemid=9202113", "https://i.gifer.com/JdWT.gif"];
var griefMood =["https://dz9yg0snnohlc.cloudfront.net/new-learning-the-grief-definition-is-the-first-step-to-finding-peace-1.jpg","https://feeandsons.com/blog-images/1/801/Ultra/girl-worried-1215261_1280.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAo5zppZgHvR_gJo_WHj91B7iVbbrKidphSMGl67LmlXRbs8_","https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif","https://media2.giphy.com/media/AYKv7lXcZSJig/giphy.gif"];

function ecstasyChoice() {
    forEachImg(ecstasyImg);
    changeBackground("repeating-radial-gradient(pink, violet, blue, red, orange, yellow, green)");
    changeWords("I ammmmm sooooo happpppyyy...", "ECSTASY!!!!! WOOOOOO!!!", "rgb(204, 0, 204)", "rgb(255, 255, 0)", "'Press Start 2P', cursive", "'Monoton', cursive", "55px", "60px");
    changeBorder("dotted", "30px", "gold");
}

function rageChoice() {
    forEachImg(rageMood);
    changeBackground("linear-gradient(crimson, orangered)");
    changeWords("RRRRAAAAAHHHHHHHHH!!!!", "RRRAGE!!! *foams from mouth*", "firebrick", "maroon", "'Rubik Mono One', sans-serif", "'Eater', cursive", "70px", "75px");
    changeBorder("double", "40px", "darkred");
}

function terrorChoice() {
    forEachImg(terrorMood);
    changeBackground("linear-gradient(45deg, indigo, dimgrey, midnightblue)");
    changeWords("GETAWAYFROMME!!! GETAWAY!!!", "T-T-Terrrrrriffied", "black", "Ivory", "'Love Ya Like A Sister', cursive", "'Six Caps', sans-serif", "20px", "60px");
    changeBorder("solid", "5px", "darkslateblue");
}

function griefChoice() {
    forEachImg(griefMood);
    changeBackground("url('https://www.textures.com/system/gallery/photos/Ornaments/Tombstones/Headstones/41869/TombHeadstone0050_download600.jpg')");
    changeWords("Goodbye.", "grieving", "lightgrey", "lightgrey", "'Oswald', sans-serif", "'Crimson Text', serif", "40px", "40px");
    changeBorder("inset", "20px", "grey");
    $('body').css("background-repeat", "no-repeat, repeat");
    $('body').css("background-position", "center");
    $('body').css('background-size', 'cover');
}

function forEachImg(arrayName) {
    $("img").hide();
    arrayName.forEach(function(Good) {
        $(".EmotionBox").append( '<img src=' + Good + '>' );
    });
}

function changeBackground(BC) {
    $("body").css("background-image", BC);
}

function changeBorder(type, size, color) {
    $(".box").css("border-style", type);
    $(".box").css("border-width", size);
    $(".box").css("border-color", color);
}

function changeWords(emotionText, emotionName, color1, color2, font, font2, size, size2) {
    $("h2").text(emotionText);
    $("h1").text(emotionName);
    $("h2").css("font-family", font);
    $("h1").css("font-family", font2);
    $("h2").css("color", color1);
    $("h1").css("color", color2);
    $("h2").css("font-size", size);
    $("h1").css("font-size", size2);
    $("p").hide();
}

$('button').click(function(){
    var input = $('input').val();
        if(input === "ecstasy"){
            ecstasyChoice();
        } else if (input=== "rage") {
            rageChoice();
        } else if (input=== "terror") {
            terrorChoice();
        } else if (input=== "grief") {
            griefChoice();
        } else{
            alert("Please enter ecstasy, rage, terror, grief!");   
        }
});