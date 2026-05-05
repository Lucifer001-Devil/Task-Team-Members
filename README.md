# Task-Team-Members

# 🚀 Employee Management System with Project & Task Management

A full-stack web application built using **React.js, Node.js, Express.js, and MySQL** that helps organizations manage employees, tasks, and projects efficiently.

---

## 📌 Features

### 👨‍💼 Employee Management

* Add, update, and manage employee details
* Store employee information like:

  * Name, Email, Contact
  * Technology & Position
  * Salary & Bank Details
  * Profile Photo upload

---

### 📋 Task Management

* Assign tasks to employees
* Set deadlines and descriptions
* Track task status (pending/completed)

---

### 📁 Project & Team Management

* Create and manage projects
* Assign multiple employees to a project
* Define:

  * Project Name
  * Technology (React, PHP, Python, etc.)
  * Timeline (Deadline)
  * Team Members

---

### 🔐 Authentication

* Login system with role-based access
* Admin / HR can:

  * Add employees
  * Assign tasks & projects

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Bootstrap
* Axios
* SweetAlert2

### Backend

* Node.js
* Express.js
* MySQL
* Multer (file upload)

### Database

* MySQL (XAMPP / Railway)

---

## 📂 Project Structure

```
EmployeeManagement/
│
├── EmployeeManagement-master/   # Frontend (React)
│
├── EmployeeManagement-API/      # Backend (Node.js)
│   ├── app/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── routes/
│   │   └── common/
│   ├── uploads/
│   └── index.js
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/EmployeeManagement.git
cd EmployeeManagement
```

---

### 🔹 2. Backend Setup

```bash
cd EmployeeManagement-API
npm install
npm start
```

---

### 🔹 3. Frontend Setup

```bash
cd EmployeeManagement-master
npm install
npm start
```

---

## 🗄️ Database Setup

Create a MySQL database named:

```
employe
```

### Tables:

#### Employee Table (example)

```
registration
```

#### Project Table

```sql
CREATE TABLE project (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ProjectName VARCHAR(255),
  Technology VARCHAR(100),
  EndDate DATE
);
```

#### Project Members Table

```sql
CREATE TABLE project_members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_id INT,
  employee_id INT
);
```

---

## 🌐 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | /signup          | Register employee |
| POST   | /user_login      | Login             |
| POST   | /add/task        | Add task          |
| POST   | /detail/Employee | Get employees     |
| POST   | /add/project     | Create project    |

---

## 🚀 Deployment

* Frontend: Netlify / Vercel
* Backend: Render
* Database: Railway / PlanetScale

---

## 📸 Screenshots

* Employee Form
* Task Assignment
* Project Management
  (Add screenshots here)

---

## 👨‍💻 Author

**Ryan Adlard**

* Web Developer
* Skilled in React, Node.js, MySQL

---

## 📃 License

This project is open-source and available under the MIT License.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
