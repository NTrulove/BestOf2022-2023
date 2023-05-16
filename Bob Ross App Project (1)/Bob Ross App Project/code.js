 //User Interphase
//Use videoScreenButton, artScreenButton, and factsScreenButon to swich user to corresponding screen.
onEvent("videoScreenButton", "click", function( ) {
  setScreen("videosScreen");
});
onEvent("artScreenButton", "click", function( ) {
  setScreen("artScreen");
});
onEvent("factsScreenButton", "click", function( ) {
  setScreen("factsScreen");
});
//User Interphase
//Use homeButtons 1, 2 and 3 to return to home screen.
onEvent("homeButton1", "click", function( ) {
  setScreen("homePageScreen");
});
onEvent("homeButton2", "click", function( ) {
  setScreen("homePageScreen");
});
onEvent("homeButton3", "click", function( ) {
  setScreen("homePageScreen");
});



//Generates a random art piece when the randomArtButton is clicked
//When randomArtButton is clicked an image of a Bob Ross art peice is displayed along with the corresponding title of it
//"currentArt" is used to determine art work displayed. It matches the image of the painting to the title
var currentArt;

onEvent("randomArtButton", "click", function( ) {
  artPiece();
  
  
});
// 
function artPiece() {
  currentArt = BobRossArtisticWorks.randomArtName();
  setProperty("artOutput", "image", BobRossArtisticWorks.artWork(currentArt));
  setProperty("ArtNameOutput", "text", currentArt);
}

//A random video is generated
//When "randomVideoButton" is clicked a random season and episode will be displayed
onEvent("RandomVideoButton", "click", function( ) {
  randomVideo();
  
});
function randomVideo() {
  setProperty("videoOutput", "text", BobRossArtisticWorks.randomEpisode());
}


// Returns a random fact about Bob Ross
// return {string} - a random fact about Bob Ross
function randomFactsOutput(){
  var randomFacts = getColumn("Bob Ross Facts","Facts");
  return (randomFacts[(randomNumber(0,randomFacts.length-1))]);
}

onEvent("randomFactsButton", "click", function( ) {
  randomFact();
});
function randomFact() {
  setProperty("factOutput", "text", randomFactsOutput());
}
