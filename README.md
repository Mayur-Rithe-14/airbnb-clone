# 🏡 Wanderlust – Airbnb Clone

A full-stack Airbnb-inspired web application that allows users to discover, create, manage, and review accommodation listings.

The application provides secure authentication, image uploads, listing management, and a responsive user experience similar to modern vacation rental platforms.

---

## 🌐 Live Demo

🔗 **Live Website:** https://airbnb-clone-sqkp.onrender.com

---

## 🚀 Key Highlights

- Secure User Authentication & Authorization
- Create, Edit, Delete, and Explore Listings
- Upload and Manage Listing Images
- Review & Rating System
- Cloudinary Image Storage
- Responsive Airbnb-inspired Design
- Protected Routes and Ownership Validation
- MVC Architecture
- MongoDB Database Integration

---

## ✨ Features

### 🔐 Authentication & Authorization

- User Registration
- User Login & Logout
- Password Authentication using Passport.js
- Session Management
- Route Protection
- Ownership-Based Access Control

### 🏠 Listing Management

- Create New Property Listings
- Edit Existing Listings
- Delete Listings
- View Detailed Listing Information
- Upload Listing Images

### ⭐ Reviews & Ratings

- Add Reviews
- Submit Ratings
- Delete Reviews
- Display User Reviews

### ☁️ Cloud Storage

- Cloudinary Integration
- Secure Image Uploads
- Optimized Image Delivery

### 🛡️ Security

- Authentication Middleware
- Authorization Checks
- Joi Validation
- Error Handling
- Secure Session Management

### 📱 Responsive Design

- Mobile-Friendly Interface
- Tablet Compatibility
- Desktop Optimization
- Modern Airbnb-Inspired UI

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- EJS

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- Passport.js
- Passport Local Strategy
- Express Session

### Cloud Services

- Cloudinary
- Multer
- Multer Storage Cloudinary

### Additional Packages

- Connect Flash
- Method Override
- Joi
- Dotenv

---

## 📸 Application Screenshots

### 🏠 Home Page

![Home Page](./screenshots/Home-Page.png)

### 📄 Listing Details

![Listing Details](./screenshots/Listing-Detail.png)

### ➕ Create Listing

![Create Listing](./screenshots/Create-Listing-Page.png)

### 📋 Edit Listing

![Listings Page](./screenshots/Edit-Page.png)

### 📋 Review Listing

![Listings Page](./screenshots/Review.png)

### 🔑 Login Page

![Login Page](./screenshots/Login-Page.png)

### 📝 Signup Page

![Signup Page](./screenshots/Signup-Page.png)

---

## 📂 Project Structure

```text
MAJORPROJECT
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   │   ├── review.css
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── screenshots/
│   ├── Home-Page.png
│   ├── Listing-Detail.png
│   ├── Create-Listing-Page.png
│   ├── Edit-Page.png
│   ├── Login-Page.png
│   ├── Signup-Page.png
│   └── Review.png
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   │   ├── flash.ejs
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   │
│   ├── users/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   │
│   └── error.ejs
│
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Mayur-Rithe-14/wanderlust.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd wanderlust
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Configure Environment Variables

Create a `.env` file in the root directory.

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_secret
```

### 5️⃣ Run the Application

```bash
npm start
```

or

```bash
npm run dev
```

### 6️⃣ Open in Browser

```bash
http://localhost:8080/listings
```

---

## 🔒 Authorization Rules

### Listings

- Only authenticated users can create listings.
- Only listing owners can edit listings.
- Only listing owners can delete listings.

### Reviews

- Only authenticated users can create reviews.
- Only review authors can delete their reviews.

---

## 📚 What I Learned

Through this project, I gained hands-on experience with:

- MVC Architecture
- RESTful Routing
- Authentication & Authorization
- MongoDB Data Modeling
- Cloudinary Image Management
- Session-Based Authentication
- Middleware Design
- Error Handling Strategies
- Responsive UI Development
- Full-Stack Application Deployment

---

## 🎯 Future Enhancements

- Wishlist / Favorites
- Property Booking System
- Online Payments Integration
- Google OAuth Authentication
- User Profiles
- Advanced Search
- Filters & Categories
- Real-Time Notifications
- Messaging System
- Dark Mode

---

## 👨‍💻 Author

### Mayur Rithe

Full-Stack Developer (MERN)

GitHub:
https://github.com/Mayur-Rithe-14

LinkedIn:
https://www.linkedin.com/in/mayur-rithe-ab527a306/

---

## 📄 License

This project is developed for educational and portfolio purposes.

---
