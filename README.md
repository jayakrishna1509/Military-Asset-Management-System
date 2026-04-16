# 🛡️ Military Asset Management System

Develop a Military Asset Management System that allows commanders and logistics personnel to manage critical assets such as vehicles, weapons, and ammunition across multiple bases. The system tracks asset balances, records assignments and expenditures, facilitates transfers between bases, and implements role-based access control (RBAC) to ensure secure data access.

## Technical Requirements

- Frontend: React
- Backend: Node.js (Express)
- Database: SQLite or MongoDB (MongoDB is used for this project)

---

## 📋 Features

- **Dashboard** — View Opening Balance, Closing Balance, Net Movement, Assigned and Expended assets
- **Net Movement Popup** — Click on Net Movement to see breakdown of Purchases, Transfers In and Transfers Out
- **Purchases** — Record and view purchase history with filters
- **Transfers** — Transfer assets between bases with full history
- **Assignments** — Assign assets to personnel
- **Expenditures** — Track consumed/used assets
- **Role-Based Access Control** — Admin, Base Commander, Logistics Officer
- **Audit Logs** — Every action is logged for full transparency

---

## 🔐 Login Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | krishna@gmail.com | 123456 |
| Base Commander | commander@gmail.com | 123456 |
| Logistics Officer | logistics@gmail.com | 123456 |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React JS |
| Backend | Node.js + Express |
| Database | MongoDB |
| Auth | JWT (JSON Web Tokens) |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v16 or above)
- [MongoDB](https://www.mongodb.com/) or a [MongoDB Atlas](https://www.mongodb.com/atlas) account
- npm

---

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/military-asset-system.git
cd military-asset-system
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

Start the backend server:

```bash
node index.js
```

Backend runs at: `http://localhost:3000`

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend runs at: `http://localhost:3001`

Create a `.env` file inside the `frontend` folder:

```env
REACT_APP_API_URL=http://localhost:3000
```

---

## 📁 Project Structure

```
military-asset-system/
│
├── backend/
│   ├── index.js          # Entry point
│   ├── routes/           # API route files
│   ├── models/           # MongoDB schemas
│   ├── middleware/        # Auth and RBAC middleware
│   └── .env              # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── pages/        # Login, Dashboard, Purchases, Transfers, Assignments, AuditLogs
│   │   ├── components/   # Layout, Sidebar
│   │   ├── context/      # AuthContext
│   │   └── api.js        # Axios API helper
│   └── .env              # Frontend env variables
│
└── README.md
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register a new user | Public |
| POST | `/api/auth/login` | Login and get token | Public |
| GET | `/api/dashboard` | Get dashboard metrics | All |
| POST | `/api/purchase` | Record a purchase | Admin, Logistics |
| GET | `/api/purchase` | Get purchase history | Admin, Logistics |
| POST | `/api/transfer` | Transfer assets | Admin, Logistics |
| GET | `/api/transfer` | Get transfer history | All |
| POST | `/api/assignment` | Assign or expend asset | Admin, Commander |
| GET | `/api/assignment` | Get assignment history | Admin, Commander |
| GET | `/api/audit-logs` | View all audit logs | Admin only |

---

## 👥 Role-Based Access Control

| Feature | Admin | Base Commander | Logistics Officer |
|---------|-------|----------------|-------------------|
| Dashboard | All bases | Own base only | All / filtered |
| Purchases | ✅ | ✅ | ✅ |
| Transfers | ✅ | ✅ | ✅ |
| Assignments | ✅ | ✅ | ❌ |
| Audit Logs | ✅ | ❌ | ❌ |
| User Management | ✅ | ❌ | ❌ |

---

## 🌐 Deployment

### Frontend → Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Set root directory to `frontend`
4. Add environment variable: `REACT_APP_API_URL` = your backend URL
5. Deploy

### Backend → Render

1. Go to [render.com](https://render.com) and create a new Web Service
2. Connect your GitHub repo
3. Set root directory to `backend`
4. Build command: `npm install`
5. Start command: `node index.js`
6. Add environment variables from your `.env` file
7. Deploy

---

## 📄 Documentation

See `project_documentation.pdf` for full details including:
- Data Models / Schema
- RBAC explanation
- API Logging details
- Setup instructions

---
## Conclusion
This system provides a complete workflow to track and manage assets across multiple bases with secure role-based access.It records purchases, transfers, assignments, and expenditures while keeping an auditable history of all actions.
