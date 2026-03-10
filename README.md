# Fullstack Application

A fullstack application with a React frontend (Vite) and Node.js/Express backend.

## Project Structure

```
├── frontend/          # React + Vite frontend
│   ├── src/           # React source files
│   ├── public/        # Static assets
│   └── package.json
├── backend/           # Express.js backend
│   ├── src/           # Server source files
│   │   ├── index.js   # Entry point
│   │   └── routes/    # API routes
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The server will start on http://localhost:3000

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on http://localhost:5173

## API Endpoints

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | /health        | Health check             |
| GET    | /api           | API information          |
| GET    | /api/example   | Get example data         |
| POST   | /api/example   | Create example resource  |

## Development

### Backend
- `npm run dev` - Start with file watching
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
