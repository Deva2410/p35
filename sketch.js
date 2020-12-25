var dog;
var dogImage,happyDogImage;
var database;
var foodS;
var foodStock;
function preload()
{
    dogImage = loadImage("images/dogImg.png");
    happyDogImage = loadImage("images/dogImg.png");
}
function setup()
{
  createCanvas(500, 500);
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog = createSprite(400,400,50,50);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  
  
}


function draw()
{  
    
    background(46,139,87);
    
    fill("white");
    textSize(25);
    text("foodstock ",10,50);


    if(keyWentDown(UP_ARROW)) 
    {
        writeStock(foodS)
        dog.addImage(happyDogImage)

    }

    drawSprites();


}

function readStocks()
{

  foodS=data.val();

}



function wtiteStocks()
{

  database.ref('/').update({food:x})
}