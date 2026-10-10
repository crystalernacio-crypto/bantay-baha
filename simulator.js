const http = require('http');

let currentLevel = 50;

function sendReading() {
    const step = (Math.random() * 10) - 5;
    currentLevel += step;

    if (currentLevel < 0) currentLevel = 0;
    if (currentLevel > 500) currentLevel = 500;

    const data = JSON.stringify({
        sensorId: "CREEK-01",
        waterLevelCm: parseFloat(currentLevel.toFixed(1)),
        timestamp: new Date().toISOString()
    });

    const options = {
        hostname: '127.0.0.1',
        port: 3000,
        path: '/api/readings',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = http.request(options, (res) => {
        console.log(`Status: ${res.statusCode} - Sent level: ${currentLevel.toFixed(1)} cm`);
    });

    req.on('error', (error) => {
        console.error(`Error sending reading: ${error.message}`);
    });

    req.write(data);
    req.end();
}

setInterval(sendReading, 5000);
console.log("IoT Sensor Simulator started. Sending readings every 5 seconds...");