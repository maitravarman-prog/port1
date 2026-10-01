# Maitra Varuna G — Portfolio with MongoDB Integration

Modern, glassmorphic portfolio website built with **React**, **Vite**, **Express**, and **MongoDB Atlas** for storing visitor contact inquiries and messages.

---

## 🗄️ MongoDB Database Integration

Your portfolio is configured to connect to your MongoDB Atlas cluster:
`cluster0.kuoj1pg.mongodb.net`

### 1. Configure Your Database Credentials
Open the [`.env`](file:///c:/maitra%20port/.env) file located in the project root:

```env
MONGODB_URI=mongodb+srv://<db_username>:<db_password>@cluster0.kuoj1pg.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
```

1. Log in to your [MongoDB Atlas Dashboard](https://cloud.mongodb.com).
2. Go to **Database Access** under Security.
3. Ensure you have created a Database User (e.g., username `maitra` and a secure password).
4. Replace `<db_username>` with your database user name.
5. Replace `<db_password>` with your database user password (ensure special characters are URL-encoded if applicable).
6. Go to **Network Access** and verify that your IP address (or `0.0.0.0/0` for universal hosting access) is allowed.

Once saved in `.env`, the backend server automatically establishes the connection to the cluster!

---

## 🚀 Running the Project

To run both the **Express Backend Server** (Port `5000`) and the **Vite React Frontend** (Port `3000`) simultaneously:

```bash
npm run dev
```

To run them individually if desired:
- **Frontend only**: `npm run dev:client` (Port 3000)
- **Backend only**: `npm run server` (Port 5000)
- **Production Build**: `npm run build`

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Checks backend server status & MongoDB connection state |
| `POST` | `/api/contact` | Validates and stores incoming contact inquiry in MongoDB |
| `GET` | `/api/contact` | Retrieves the latest stored inquiries (sorted by date) |

### Contact Message Schema
```javascript
{
  name: String,      // Sender's full name
  email: String,     // Sender's email address
  subject: String,   // Subject line
  message: String,   // Inquiry message
  createdAt: Date    // Automated timestamp
}
```

---

## 📄 Resume PDF Setup
To enable the prominent floating **"Download Resume"** button on the website:
Place your resume PDF file inside the `public/` directory with the name:
```
public/resume.pdf
```
The website will automatically detect and download it when clicked.
