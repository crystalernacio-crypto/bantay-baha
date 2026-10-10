const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

let readings = [];

// POST /api/readings
app.post('/api/readings', (req, res) => {
    const { sensorId, waterLevelCm, timestamp } = req.body;
    if (!sensorId || waterLevelCm === undefined || typeof waterLevelCm !== 'number' || waterLevelCm < 0 || waterLevelCm > 500) {
        return res.status(400).json({ error: 'Invalid or missing sensorId or waterLevelCm' });
    }
    const newReading = { sensorId, waterLevelCm, timestamp: timestamp || new Date().toISOString() };
    readings.unshift(newReading);
    res.status(201).json(newReading);
});

// GET /api/readings
app.get('/api/readings', (req, res) => {
    res.json(readings.slice(0, 50));
});

// GET /api/summary
app.get('/api/summary', (req, res) => {
    if (readings.length === 0) {
        return res.json({ message: 'No readings yet' });
    }
    const levels = readings.map(r => r.waterLevelCm);
    const avg = levels.reduce((a, b) => a + b, 0) / levels.length;
    const min = Math.min(...levels);
    const max = Math.max(...levels);
    
    let normal = levels.filter(l => l < 100).length;
    let alert = levels.filter(l => l >= 100 && l < 150).length;
    let danger = levels.filter(l => l >= 150).length;

    res.json({ average: avg, min, maximum: max, counts: { normal, alert, danger } });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.static('public'));
