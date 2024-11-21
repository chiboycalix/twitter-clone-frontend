# Tweet App

A social media application built with React, TypeScript, and Node.js that allows users to create and share tweets with other users.

## Features

- User authentication (register, login, change password)
- Create tweets
- Share tweets with specific users
- Email notifications when tweets are shared
- Responsive design

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- PostgreSQL (v12.0 or higher)

## Environment Variables

Create a `.env` file in the root directory and add the following:

```env
# Frontend (.env)
REACT_APP_BACKEND_BASE_URL=http://localhost:4000/api/v1

# Backend (.env)
PORT=4000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
JWT_SECRET=secret
GMAIL_USER=your-email-adress
GMAIL_APP_PASSWORD=your-google-app-password
FRONTEND_URL=http://localhost:3000
PG_CONNECTION_STRING=postgresql://your-database-user:your-database-password@localhost:5432/your-database-name
```

## Installation

### Frontend

1. Navigate to the frontend directory:
```bash
cd twitter-clone-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Backend

1. Navigate to the backend directory:
```bash
cd twitter-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run database migrations:
```bash
npm run migrate:up
```

4. Start the server:
```bash
npm run dev
```

The API will be available at `http://localhost:4000`

## Database Setup

1. Create a PostgreSQL database:
```sql
CREATE DATABASE tweetapp;
```

2. Run migrations:
```bash
npm run migrate:up
```

## API Endpoints

### Authentication / Users
- `POST /api/v1/users/register` - Register a new user
- `POST /api/v1/users/login` - User login
- `POST /api/v1/users/forgot-password` - Request password reset
- `POST /api/v1/users/reset-password` - Reset password
- `GET /api/v1/users` - Get all users

### Tweets
- `GET /api/v1/tweets` - Get all tweets
- `POST /api/v1/tweets` - Create a new tweet
- `POST /api/v1/tweets/share` - Share a tweet with users


## Project Structure

```
├── twitter-clone/
│   ├── src/
│   │   ├── config/
│   │   ├── contollers/
│   │   ├── middleware/
│   │   ├── migrations/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.ts
│   │   ├── server.ts
│   └── package.json
│
└── twitter-clone-frontend/
    ├── src/
    │   ├── componenets/
    │   ├── layout/
    │   ├── lib/
    │   ├── pages/
    │   ├── store/
    │   ├── types/
    │   ├── App.tsx
    └── package.json
```

## Technologies Used

### Frontend
- React
- TypeScript
- Redux Toolkit
- React Router
- Tailwind CSS
- axios

### Backend
- Node.js
- Express
- TypeScript
- PostgreSQL
- SQL
- JSON Web Tokens
- Nodemailer

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- React Documentation
- Redux Documentation
- Tailwind CSS Documentation
- Node.js Documentation
- PostgreSQL Documentation

## Contact

Igwe Abraham Chinonso - igwechinonso77@gmail.com

Frontend Project Link: [https://github.com/chiboycalix/twitter-clone-frontend](https://github.com/chiboycalix/twitter-clone-frontend)
Backend Project Link: [https://github.com/chiboycalix/twitter-clone-backend](https://github.com/chiboycalix/twitter-clone-backend)