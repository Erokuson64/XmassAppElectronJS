
const music = document.getElementById('background-music');
const toggleButton = document.getElementById('toggle-music');

let isPlaying = true;

toggleButton.addEventListener('click', () => {
  if (isPlaying) {
    music.pause(); 
    toggleButton.textContent = '🔊 Turn On Music'; 
  } else {
    music.play(); 
    toggleButton.textContent = '🔇 Turn Off Music'; 
  }
  isPlaying = !isPlaying; 
});

document.getElementById('open-gift').addEventListener('click', () => {
    alert('🎁 The countdown to Christmas Eve has started!');
  
    const countdownElement = document.getElementById('countdown');
    countdownElement.classList.remove('hidden');
  
    const targetDate = new Date(new Date().getFullYear(), 11, 24); 
  
    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;
  
      if (diff <= 0) {
        document.getElementById('timer').textContent = "🎉 It's Christmas Eve!";
        clearInterval(countdownInterval); 
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      document.getElementById('timer').textContent = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    const countdownInterval = setInterval(updateCountdown, 1000);
  });