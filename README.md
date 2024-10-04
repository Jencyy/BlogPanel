# Blog Post Panel

A Blog Post Panel application where users can register, log in, and manage their blogs. The application allows authenticated users to create, edit, delete, and view blogs. It also includes features like image uploads and user-specific controls. Built using EJS, Express.js, MongoDB, Passport.js, and Multer.

## Features

- **User Authentication**: Secure login and registration using Passport.js.
- **Blog Management**: Users can create, update, and delete their own blogs.
- **Image Uploads**: Upload images with blogs using Multer.
- **User-Specific Controls**: Users can manage only their own blogs.
- **Responsive UI**: Custom CSS for a modern, animated, and visually appealing design.
- **Forgot Password**: Reset password using OTP and update functionality.

## Tech Stack

- **Frontend**: EJS, Bootstrap, Custom CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Authentication**: Passport.js (Local Strategy)
- **Image Upload**: Multer for file handling

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blog-post-panel.git
   cd blog-post-panel
  ``
2. Install the required dependencies:
```bash
npm install
```
3. Create a .env file in the root directory and add the following environment variables:

MONGO_URI=<your_mongo_db_connection_string>
SESSION_SECRET=<your_session_secret>

4. Start the application:
```bash
npm start
```
5. Open your browser and go to http://localhost:3000.

## Usage
1. Register a new user account.
2. Log in with your credentials.
3. Create, edit, or delete blog posts.
4. Upload images to enhance blog posts.
5. View all available blogs, with edit and delete options available only for your own blogs.
## Screenshots

![Screenshot 2024-10-04 162705](https://github.com/user-attachments/assets/68a6ef4f-b36b-4f71-b93d-d6adc71e64c2)

add blog
![Screenshot 2024-10-04 162847](https://github.com/user-attachments/assets/3e7d96a8-044e-426f-b0ab-b608d9d8c521)

