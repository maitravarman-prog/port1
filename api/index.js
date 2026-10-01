import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, isDBConnected } from '../server/db.js';
import Message from '../server/models/Message.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize DB connection
connectDB();

app.get('/api/health', (req, res) => {
  const dbStatus = isDBConnected();
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    database: dbStatus ? 'connected' : 'disconnected_or_credentials_pending',
    message: dbStatus
      ? 'MongoDB is fully connected and ready to accept inquiries.'
      : 'Server is running, but MongoDB connection is pending. Verify your credentials in Vercel Environment Variables.',
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields (name, email, subject, message) are required.',
      });
    }

    if (!isDBConnected()) {
      await connectDB();
      if (!isDBConnected()) {
        return res.status(503).json({
          success: false,
          error: 'Database is not currently connected. Please configure your MONGODB_URI in Vercel Environment Variables.',
        });
      }
    }

    const newMessage = new Message({ name, email, subject, message });
    const saved = await newMessage.save();

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been safely saved in the database.',
      id: saved._id,
      createdAt: saved.createdAt,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message || 'An error occurred while saving the message.',
    });
  }
});

app.get('/api/contact', async (req, res) => {
  try {
    if (!isDBConnected()) {
      await connectDB();
    }
    const messages = await Message.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default app;
