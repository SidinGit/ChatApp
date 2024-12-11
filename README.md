# pingR - Full Stack Real-Time Messaging App

## Overview

**pingR** is a full-stack real-time messaging application that offers a seamless communication experience. Built with a modern tech stack, it is designed to handle real-time interactions, efficient data flow, and an intuitive user interface. The application is live at [pingR on Render](https://pingr-wji4.onrender.com).

### pingR at a glance !!!
![](frontend\public\pingR1.gif)
![](frontend\public\Collage.png)



---
## Technologies Used
- **Frontend**: React.js, TailwindCSS, DaisyUI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- **Media Management**: Cloudinary
- **Authentication**: JWT
- **State Management**: Zustand

## What Happens in the App?
Pingr allows users to:

- **Sign Up/Login**: Register and authenticate securely using JWT.
- **Send Messages in Real-Time**: Users can exchange messages instantly with other users.
- **View Online Status**: See which users are online or offline.
- **Change Themes**: Personalize the look and feel of the app with 32 available themes, made possible by *DaisyUI*.
- **Upload Media**: Share images managed via Cloudinary.
- **Responsive UI**: Access the app from any device with a consistent user experience.


## Detailed features

- **Tech Stack**: Built using **MERN** (MongoDB, Express.js, React.js, Node.js), enhanced by **Socket.io** for real-time capabilities.
- **User Authentication & Authorization**: Implemented securely with **JWT (JSON Web Tokens)**.
- **Real-Time Messaging**: Achieved with the power of **Socket.io** for instant updates.
- **User Presence**: Displays real-time online/offline user status.
- **Theme Customization**: Users can switch between **32 themes**, thanks to **DaisyUI** integration.
- **State Management**: Efficiently managed global state using **Zustand**.
- **Error Handling**: Comprehensive error handling on both client and server sides.
- **Media Uploads**: Integrated with **Cloudinary** for secure and optimized file storage.
- **Responsive Design**: Styled with **TailwindCSS** for a clean, responsive user interface.
- **Deployment**: Fully deployed for production-ready access.

---

## Setup Guide

### Environment Configuration

Create a `.env` file in the root directory and configure the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```
### Installation & Build

1. Install Dependencies:
    ```
    npm install
    ```
2. Build the Application:
    ```
    npm run build

    ```
3. Start the Application:
    ```
    npm start
    ```


