var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function run(event){
    console.log(event);

    var Content = event.result[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    if (Content =="take my selfie")
    {
        console.log("taking selfie --");
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data="Taking Your Selfie In 5 Seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    height:250,
    width:360,
    img_format:'png',
    png_quality: 90
});

camera=document.getElementById("camera");

function takesnapshot()
{

    Webcam.snap(function data_uri()
    {
        document.getElementById("result").innerHTML='<img src="'+data_uri+'">';
    })

}

