### 📦 Clueso Frontend (React + Vite + Tailwind)
A frontend dashboard application built as part of a Clueso.io product clone assignment.
This application replicates Clueso’s core dashboard experience, enabling users to view feedback, analytics, and AI-powered insights through a clean and responsive interface.
The frontend consumes REST APIs exposed by the backend service and focuses on product usability, clarity, and scalable UI architecture.

## 🚀 Features Implemented
## 🔐 Authentication Flow
- Login & signup screens
- JWT-based session handling
- Protected routes for authenticated users
- Logout functionality with token cleanup

## 📊 Dashboard Experience
- Overview dashboard with key metrics:
- Total feedback
- Positive / Neutral / Negative breakdown
- Clean navigation with sidebar layout
- Responsive design (desktop & mobile-friendly)

## 📝 Feedback Management
- Display all collected feedback
- Clear sentiment visualization
- Optimized UI for readability and scanning

## 🤖 AI Insights (Mocked)
- Displays AI-generated insights summary
- Integrated with backend mock AI endpoint
- Designed for easy replacement with real AI services later

## 📱 Responsive Design
- Mobile-first approach
- Collapsible sidebar for smaller screens
- Consistent spacing and layout across devices

## 🧠 Clean Frontend Architecture
- Component-based design
- Clear separation of concerns
- Reusable UI components
- Centralized API integration
- Route-based page structure

## 🛠 Tech Stack
- React (Vite)
- React Router
- Tailwind CSS
- Axios
- JWT-based auth handling
- Modern ES6+ JavaScript

## 📂 Project Structure
- clueso-frontend/
- ├── public/
- │   └── vite.svg
- ├── src/
- │   ├── api/
- │   │   └── api.js
- │   ├── components/
- │   │   ├── StatsCard.jsx
- │   │   ├── FeedbackList.jsx
- │   │   └── AIInsights.jsx
- │   ├── pages/
- │   │   ├── Login.jsx
- │   │   ├── Register.jsx
- │   │   └── Dashboard.jsx
- │   ├── App.jsx
- │   ├── main.jsx
- │   └── index.css
- ├── .gitignore
- ├── index.html
- ├── package.json
- ├── vite.config.js
- └── README.md

## ⚙️ Environment Configuration
This frontend does not require a .env file.
Backend API base URL is configured directly in the API utility file for simplicity during evaluation.
If required, environment-based configuration can be easily added later using import.meta.env.

### ▶️ Running the Project Locally
## 1️⃣ Clone the repository
git clone (https://github.com/Almas012/clueso-frontend.git)
cd clueso-frontend

## 2️⃣ Install dependencies
 npm install

## 3️⃣ Start the development server
 npm run dev

## The app will be available at:
- 👉 http://localhost:5173

## 🔌 Backend Dependency
- This frontend expects the backend service to be running.
- Backend Repository:
- Handles authentication
- Feedback APIs
- Dashboard stats
- AI insights (mocked)
- Ensure the backend server is running before testing full functionality.

## 🧪 Error Handling
- Graceful handling of API failures
- User-friendly UI feedback
- Safe rendering for empty or loading states

## 🧠 Design Decisions & Trade-offs
- Focused on feature parity over pixel perfection
- AI insights mocked to prioritize system integration
- Tailwind CSS used for rapid, consistent styling
- Modular structure for future scalability

## 📌 Assumptions
- Dashboard users are authenticated admins
- Feedback data is sourced from backend APIs
- Hosting is optional and not required for evaluation

## 📹 Demo
A complete walkthrough of the frontend, backend integration, and user flows is provided in the demo video (linked in the main assignment submission).

## 👩‍💻 Author
- Almas Qureshi
- Full Stack Developer
- Built as part of a technical assignment to demonstrate:
- Product understanding
- UI/UX reasoning
- Frontend engineering fundamentals
- System integration skills
