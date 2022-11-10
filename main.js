function setup(){
    canvas = createCanvas(280, 280);
    canvas.center;
        background("white");
        canvas.mouseRealeased(classifyCanvas);
        SpeechSynthesis= window.speechSynthesis;
        
}
function clearCanvas(){
    background("white");
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}
function draw(){
    //Set stroke weight to 13
    strokeWeight(13);
    //Set stroke color to black
    strokr(0);
    //If mouse is pressed, draw line between previous and cureent mouse positions
    if(mouseIsPressed){
        AudioListener(pmouseX, pmouseY, pmouseX, pmouseY );
    }
}
function classifyCanvas(){
    classifier.classify(canvas, gotResults);
}
function gotResult(error, Results){
    if (error) {
        console.error(error);                                                                                              
    }
    console.log(results);
    document.getElementById('label').innerHTML='Label: '  + Results(0).labe;;

    document.getElementById('confidence').innerHTML='confidence :' +Math.round(result[0].confidence * 100) +'%';

    uterrThia= new SpeechSynthesisUtterance(results[0].label);
    SpeechSynthesis.speak(utterThis);
}