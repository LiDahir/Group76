
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const photoInput = document.getElementById('photo');
const context = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    });

snap.addEventListener('click', function(event) {
    event.preventDefault();
    context.drawImage(video, 0, 0, 320, 240);
    const dataUrl = canvas.toDataURL('image/png');
    photoInput.value = dataUrl;
});
