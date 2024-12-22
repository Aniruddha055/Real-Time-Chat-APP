# Real-Time Chat Application

## Overview
This is a full-stack real-time chat application built using Node.js, Express.js, React, and Socket.IO. It allows users to send and receive messages in real time, with a responsive design for both mobile and desktop devices.

---

## Features
- User-friendly interface for chat interaction.
- Real-time communication using WebSocket (Socket.IO).
- Chat history display.
- Responsive design for mobile and desktop views.
- (Optional) Typing indicators and online status tracking.

---

## Technologies Used
- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js, Socket.IO

---

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)
- [Git](https://git-scm.com/)

---

## Setup and Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd real-time-chat-app
```

### 2. Set Up Backend
```bash
cd backend
npm install
```

#### Run the Backend Server
```bash
node index.js
```

The server will run on `http://localhost:3000`.

### 3. Set Up Frontend
```bash
cd ../frontend
npm install
```

#### Start the Frontend Application
```bash
npm start
```

The application will be accessible at `http://localhost:3000` in your browser.

---

## Application Usage
1. Enter your name in the input field to join the chat.
2. Type a message in the text box and press the "Send" button to communicate.
3. View chat history in the chat box.

---

## Project Structure
```
real-time-chat-app
├── backend
│   ├── index.js            # Node.js backend code
├── frontend
│   ├── src
│   │   ├── App.js          # React frontend code
│   │   ├── App.css         # Styling


## Future Enhancements
- Add authentication for secure user login.
- Store messages and user data in a database (e.g., MongoDB, PostgreSQL).
- Deploy the application on a cloud platform (e.g., AWS, Heroku).
- Add features like typing indicators and user online status.

---

## Contact
For any questions or feedback, please contact: [aniruddha.uplenchwar05@gmail.com].

