
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

function updateProgress(percentage) {
    progressBar.style.width = percentage + '%';
    progressText.textContent = percentage + '%';
}

function simulateTraining() {
    let percentage = 0;
    const interval = setInterval(() => {
        percentage += 10;
        updateProgress(percentage);
        if (percentage >= 100) {
            clearInterval(interval);
        }
    }, 1000);
}

simulateTraining();
