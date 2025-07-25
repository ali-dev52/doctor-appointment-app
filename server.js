const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'MYSQL',
  database: 'doctor_appointment_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// API for Doctor Registration
app.post('/api/doctors/register', (req, res) => {
  const { name, email, password, specialty, qualifications, availability } = req.body;

  // Step 1: Register the user
  const userSql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, "doctor")';
  db.query(userSql, [name, email, password], (err, userResult) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to register user' });
    }

    const userId = userResult.insertId;

    // Step 2: Register the doctor
    const doctorSql = 'INSERT INTO doctors (user_id, name, specialty, qualifications, availability) VALUES (?, ?, ?, ?, ?)';
    db.query(doctorSql, [userId, name, specialty, qualifications, JSON.stringify(availability)], (err, doctorResult) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to register doctor' });
      }

      res.json({ message: 'Doctor registered successfully', doctorId: doctorResult.insertId });
    });
  });
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});