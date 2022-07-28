

var currentaudio = document.getElementById("1");
var currenttimea = 0;


function stopAll() {
    for (var i = 1; i < 5; i++) {
        document.getElementById(String(i)).pause()
    }
}
export default function playStage(s) {
    currenttimea = currentaudio.currentTime;
    currentaudio = document.getElementById(String(s))
    currentaudio.currentTime = currenttimea;
    stopAll()
    currentaudio.play()
    

}