# Wanderlust 🏡

A full-stack Airbnb-inspired web application where users can explore, create, edit, review, and manage travel accommodation listings.

Built using Node.js, Express.js, MongoDB, EJS, Passport.js, Cloudinary, and Bootstrap.

---

## ✨ Features

### User Authentication

- User Registration
- User Login & Logout
- Secure Authentication using Passport.js
- Session Management

### Listings Management

- Create New Listings
- Edit Existing Listings
- Delete Listings
- View Listing Details
- Upload Listing Images

### Reviews System

- Add Reviews
- Give Ratings
- Delete Reviews
- View All Reviews

### Image Uploads

- Cloudinary Integration
- Image Storage and Optimization

### Security Features

- Authentication & Authorization
- Form Validation
- Protected Routes
- Error Handling

### Responsive Design

- Mobile Friendly
- Tablet Friendly
- Desktop Friendly
- Airbnb-inspired UI

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- EJS
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- Passport.js
- Passport Local Strategy

### Cloud Services

- Cloudinary
- Multer
- Multer Storage Cloudinary

### Additional Packages

- Express Session
- Connect Flash
- Method Override
- Joi
- Dotenv

---

## 📂 Project Structure

```bash
Wanderlust/
│
├── models/
├── routes/
├── controllers/
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
│
├── public/
│   ├── css/
│   ├── js/
│
├── utils/
├── middleware.js
├── app.js
├── cloudConfig.js
├── schema.js
└── package.json
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Mayur-Rithe-14/wanderlust.git
```

### Move into Project Directory

```bash
cd wanderlust
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_secret
```

### Start the Server

```bash
npm start
or
npm run dev
```

### Open Browser

```bash
http://localhost:8080/listings
```

---

## 📸 Screenshots

### Home Page

![Home Page](./screenshots/home-page.png)

### Listing Details Page

![Explore Listings](./screenshots/Listing-Detail.png)

### Login Page

![Login Page](./screenshots/Login-Page.png)

### Signup Page

![Signup Page](./screenshots/Signup-Page.png)

### Create Listing Page

![Create Listing](./screenshots/Create-Listing-Page.png)

---

## 🔒 Authorization Rules

- Only logged-in users can create listings.
- Only listing owners can edit or delete their listings.
- Only logged-in users can add reviews.
- Review authors can delete their own reviews.

---

## 🎯 Future Improvements

- Wishlist/Favorites
- Booking System
- Payment Integration
- Google Authentication
- User Profiles
- Search Functionality
- Advanced Filters
- Dark Mode
- Real-Time Notifications

---

## 👨‍💻 Author

Mayur Rithe

Full-Stack Developer

- GitHub: https://github.com/Mayur-Rithe-14
- LinkedIn: https://www.linkedin.com/feed/

---

## 📜 License

This project is developed for learning and portfolio purposes.
