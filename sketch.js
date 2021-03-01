var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech(); // new P5.Speech object

let pg;
let theta = 0.0; // Start angle at 0
let amplitude = 150.0; // Height of wave
let rSlider, gSlider, bSlider;
var sliderText;


myRec.continuous = true; // do continuous recognition
//myRec.interimResults = true; // allow partial recognition (faster, less accurate)


function setup() {
  // graphics stuff:
  createCanvas(windowWidth, windowHeight);
 // background(0);
  rSlider = createSlider(0, 255, 0);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(20, 80);
  sliderText = createSlider(11,128,24);
  sliderText.position(20,110);
  fill(255);
  // instructions:
  //textSize(16);
  //textAlign(CENTER);
  text("say something", width / 2, height / 2);
  
  myRec.onResult = showResult;
  myRec.start();
  
  myVoice.speak("say something");
  
}

function draw() {

  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);
  text('text size',sliderText.x*2 +sliderText.width,125);

  //textAlign(CENTER, TOP);
  
  // why draw when you can talk?
  //background();

  text("say something", width/3,125);
  text("move mouse to change animation", width/2,125);

  showResult();


}

function showResult() {
  theta += 0.02;
   let magnitude = 100;


  if (myRec.resultValue === true) {
    //background(0);
      for(let i = 0;i < (myRec.resultString).length;i++) {
        if(mouseX> windowWidth-300){
        let wave1 = tan(radians(i+frameCount*0.30 + i * 5)) * magnitude;
        let wave2 = map(cos(radians(i+(frameCount*0.20 + (i*20)*0.20))), -1, 1, -width*0.100, width*0.100);
        
        push();
        translate(wave1, wave2);
        textSize(sliderText.value());
        text(myRec.resultString[i], width/2+ wave1, height/2+wave2);
        pop();

        } else if (mouseX>900) {
        let wave1 = cos(radians(frameCount + i * 5)) * magnitude;
        let wave2 = map( tan(radians(i+(frameCount*0.20 + (i*20)*0.20))), -1, 1, -width*0.01, width*0.01);
        
        push();
        translate(wave1, wave2);
        textSize(sliderText.value());
        text(myRec.resultString[i], width/2+ wave1, height/2+wave2);
        pop();

        } else if (mouseX>600) {
        let wave1 = cos(radians(frameCount + i * 5)) * magnitude;
        let wave2 = sin(radians(i + (i * frameCount * 0.009))) * magnitude;

        push();
        translate(wave1, wave2);
        textSize(sliderText.value());
        text(myRec.resultString[i], width/2+ wave1, height/2+wave2);
        pop();

        } else if (mouseX>300) {
        let wave1 = sin(radians(frameCount + i * 5)) * magnitude;
        let wave2 = map( tan(radians(i+(frameCount*0.20 + (i*20)*0.20))), -1, 1, -width*0.100, width*0.100);
        
        push();
        translate(wave1, wave2);
        textSize(sliderText.value());
        text(myRec.resultString[i], width/2+ wave1, height/2+wave2);
        pop();

        }else{
        let wave1 = map (cos(radians(i+(frameCount*0.50 + (i*5)*0.5))), -1, 1, -width*0.150, width*0.150);
        let wave2 = map (cos(radians(i+(frameCount*0.20 + (i*20)*0.20))), -1, 1, -width*0.100, width*0.100);
 
        push();
        translate(wave1, wave2);
        textSize(sliderText.value());
        text(myRec.resultString[i], width/2+ wave1, height/2+wave2);
        pop();
        }        
    }    
    //text(myRec.resultString, width / 2, height / 2);
    //myVoice.interrupt = checkbox.elt.checked;
    //myVoice.speak(myRec.resultString); // debug printer for voice options
    console.log(myRec.resultString);
  }

}

