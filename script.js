// Digital Clock
function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("clockDisplay").textContent = `${h}:${m}:${s}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Stopwatch
  let swInterval;
  let swStartTime;
  let elapsedTime = 0;
  let isRunning = false;

  function updateStopwatch() {
    const now = Date.now();
    const diff = now - swStartTime + elapsedTime;
    const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    document.getElementById("stopwatchDisplay").textContent = `${h}:${m}:${s}`;
  }

  function startStopwatch() {
    if (isRunning) return;
    isRunning = true;
    swStartTime = Date.now();
    swInterval = setInterval(updateStopwatch, 1000);
  }

  function stopStopwatch() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(swInterval);
    elapsedTime += Date.now() - swStartTime;
  }

  function resetStopwatch() {
    isRunning = false;
    clearInterval(swInterval);
    elapsedTime = 0;
    document.getElementById("stopwatchDisplay").textContent = "00:00:00";
  }