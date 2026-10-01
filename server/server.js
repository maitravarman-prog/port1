import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, isDBConnected } from './db.js';
import Message from './models/Message.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Database Connection
connectDB();

// 1. Health & Status Check Endpoint
app.get('/api/health', (req, res) => {
  const dbStatus = isDBConnected();
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    database: dbStatus ? 'connected' : 'disconnected_or_credentials_pending',
    message: dbStatus
      ? 'MongoDB is fully connected and ready to accept inquiries.'
      : 'Server is running, but MongoDB connection is pending. Verify your credentials in .env.',
  });
});

// 2. Submit Contact Message Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate presence
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields (name, email, subject, message) are required.',
      });
    }

    // Check DB readiness
    if (!isDBConnected()) {
      return res.status(503).json({
        success: false,
        error:
          'Database is not currently connected. Please configure your actual MongoDB username and password in the root .env file.',
      });
    }

    // Create & save to MongoDB
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    const saved = await newMessage.save();

    console.log(`📥 [New Inquiry Saved]: From ${saved.name} (${saved.email}) at ${saved.createdAt}`);

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been safely saved in the database.',
      id: saved._id,
      createdAt: saved.createdAt,
    });
  } catch (error) {
    console.error('❌ [Error saving contact message]:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'An error occurred while saving the message.',
    });
  }
});

// 3. List Inquiries Endpoint (for administrator / testing review)
app.get('/api/contact', async (req, res) => {
  try {
    if (!isDBConnected()) {
      return res.status(503).json({
        success: false,
        error: 'Database is not connected. Check your credentials in .env.',
      });
    }

    const messages = await Message.find().sort({ createdAt: -1 }).limit(50);
    res.json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 [Backend Server]: Running on http://localhost:${PORT}`);
  console.log(`📡 [API Health Check]: http://localhost:${PORT}/api/health`);
});
