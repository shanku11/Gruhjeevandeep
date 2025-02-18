
document.getElementById("close-btn").addEventListener("click", function() {
  // Hide the Video Container
  document.getElementById("video-container").style.display = "none";
  
  // Show the Home Page Content
  document.getElementById("homepage").style.display = "block";
  
  // Pause the Audio Playback
  document.getElementById("myAudio").pause();
});
