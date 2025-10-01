# 🍽️ Restaurant Table Booking System

A **responsive full-stack web application** to book tables in a restaurant.  
Built with **React (Vite + Tailwind CSS)** on the frontend and **Spring Boot + MySQL** on the backend.

---

## 🚀 Features

- 📅 Book tables for a restaurant  
- 📱 Fully responsive UI (Tailwind CSS)  
- ⚡ Fast frontend (React + Vite)  
- 🖥️ REST API backend (Spring Boot)  
- 💾 MySQL database integration  
- 📧 (Coming Soon) Email confirmation on successful booking  

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios (API calls)

**Backend**
- Spring Boot (Java)
- Maven
- REST APIs

**Database**
- MySQL

---
## 📂 Project Structure

Restaurant_Table_Booking/
│
├── frontend/ # React + Vite + Tailwind
│ ├── public/
│ ├── src/
│ ├── package.json
│ └── vite.config.js
│
├── backend/Restaurant/ # Spring Boot backend
│ ├── src/
│ ├── pom.xml
│ └── mvnw / mvnw.cmd
│
└── README.md

---
## ⚙️ Setup Instructions

# Backend Setup (Spring Boot + MySQL)

  # DB
    CREATE DATABASE restaurantdb;
    
    backend/Restaurant/src/main/resources/application.properties:
    
      spring.datasource.url=jdbc:mysql://localhost:3306/restaurantdb
      spring.datasource.username=root
      spring.datasource.password=yourpassword
      spring.jpa.hibernate.ddl-auto=update

  # Run the backend server
  
    cd backend/Restaurant
    ./mvnw spring-boot:run

  # Backend will run at:
    http://localhost:8080

# Frontend Setup (React + Vite + Tailwind CSS)

    cd frontend
    npm install
    npm run dev
    
  # Frontend will run at:

    http://localhost:5173
    

