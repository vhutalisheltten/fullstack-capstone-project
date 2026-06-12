# GiftLink

GiftLink is a full-stack community gifting application that connects people who
have useful household items to give away with people who can reuse them.

## Features

- Browse all gifts and view item details
- Search and filter by category
- Register and log in with JWT authentication
- Update an authenticated user profile
- Comment on available gifts
- MongoDB persistence with an in-memory fallback for local demos and CI
- Docker and GitHub Actions support

## Run locally

```bash
npm run install:all
npm run dev
```

Open `http://localhost:5173`. The API runs on `http://localhost:3060`.

To use MongoDB, copy `.env.example` to `.env` and run:

```bash
node server/insertItems.js
npm start --prefix server
```

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/gifts` | List gifts |
| GET | `/api/gifts/:id` | Get gift details |
| GET | `/api/search?query=&category=` | Search gifts |
| POST | `/api/auth/register` | Register |
| POST | `/api/auth/login` | Log in |
| PUT | `/api/auth/profile` | Update profile |

## Assignment evidence

Submission evidence and cURL transcripts are in [`evidence/`](evidence/).
