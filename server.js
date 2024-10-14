const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// ใช้ Express static middleware เพื่อเสิร์ฟ static files
app.use(express.static(path.join(__dirname, 'public')));

// Route ไปแต่ละหน้า
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/experience', (req, res) => {
    res.sendFile(__dirname + '/public/experience.html');
});

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/public/projects.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
