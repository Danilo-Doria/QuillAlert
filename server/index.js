require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();

// Prefer full DATABASE_URL, otherwise use individual components
const connectionString = process.env.DATABASE_URL || process.env.PG_CONNECTION;

const pool = new Pool({
  connectionString,
  // Supabase uses TLS; allow self-signed in local dev if needed
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : { rejectUnauthorized: false }
});

// ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

// serve uploaded files
app.use('/uploads', express.static(uploadsDir));

// simple json parser for other endpoints
app.use(express.json());
// enable CORS for local dev (adjust origin in production)
app.use(cors());


app.get('/', (req, res) => {
  res.send('Server running. Use /dbtest to validate DB connection.');
});

app.get('/dbtest', async (req, res) => {
  if (!connectionString) {
    return res.status(400).json({ ok: false, error: 'No DATABASE_URL or PG_CONNECTION provided in env' });
  }
  try {
    const result = await pool.query('SELECT NOW() as now');
    res.json({ ok: true, now: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

process.on('SIGINT', () => {
  pool.end().then(() => process.exit(0));
});
