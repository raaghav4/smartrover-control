function updateStatus(msg) {
  document.getElementById('statusDisplay').textContent = msg;
}

function sendCommand(endpoint) {
  fetch(endpoint)
    .then(response => response.text())
    .then(data => updateStatus(data))
    .catch(err => updateStatus('Error: ' + err));
}

function getDistance() {
  fetch('/distance')
    .then(response => response.text())
    .then(data => updateStatus(data))
    .catch(err => updateStatus('Distance Error'));
}

setInterval(() => {
  fetch('/status')
    .then(r => r.text())
    .then(updateStatus)
    .catch(e => updateStatus('Offline'));
}, 2000);

updateStatus('Robot Car Ready');
