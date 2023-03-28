const waveFrame = document.getElementById('beach2frame')
const waveAudio = document.getElementById('beach2audio')

waveFrame.addEventListener('mouseenter', function() {
  // Add the line below if you want the audio to start from the beginning everytime you play
 waveAudio.currentTime = 0
  waveAudio.play()
})

waveFrame.addEventListener('mouseleave', function() {
  waveAudio.pause()
})