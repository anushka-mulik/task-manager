<div align="center">

# 🚀 TASK MANAGER API

### Enterprise-style REST API for Modern Productivity Management

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&height=180&section=header&text=TASK%20MANAGER%20API&fontSize=55&fontColor=ffffff&animation=twinkling"/>

<br/>

<img src="https://img.shields.io/badge/Node.js-v20+-339933?style=flat-square&logo=node.js"/>
<img src="https://img.shields.io/badge/Express.js-REST%20API-000000?style=flat-square&logo=express"/>
<img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb"/>
<img src="https://img.shields.io/badge/Mongoose-ODM-red?style=flat-square"/>

</div>


---

# 📌 About The Project

**Task Manager API** is a backend-focused productivity management system designed with a scalable REST architecture.

The application provides a structured way to create, manage, update, and organize tasks while maintaining efficient database communication using MongoDB and Mongoose.

Built with clean backend principles, this project demonstrates practical experience in:

- API development
- Database design
- Server architecture
- Data validation
- Query optimization
- Backend workflow management


---

# ✨ Feature Highlights


<table>
<tr>

<td>

### 📝 Task Operations

✔ Create Tasks  
✔ Read Tasks  
✔ Update Tasks  
✔ Delete Tasks  

</td>


<td>

### ⚡ Smart Management

✔ Priority Levels  
✔ Due Dates  
✔ Completion Tracking  
✔ Pagination  

</td>

</tr>


<tr>

<td>

### 🔎 Query System

✔ Filter by Priority  
✔ Filter by Date  
✔ Limit Results  
✔ Page Navigation  

</td>


<td>

### 🏗 Backend Quality

✔ MVC Structure  
✔ Environment Config  
✔ MongoDB Integration  
✔ Async Operations  

</td>

</tr>

</table>


---

# 🧊 Architecture Overview


```
                    USER / CLIENT

                         |
                         |
                         ▼

                  REST API REQUEST

                         |
                         |
                         ▼

              ┌──────────────────┐
              │   Express.js     │
              │   API Server     │
              └──────────────────┘

                         |
                         |
                         ▼

              ┌──────────────────┐
              │    Mongoose      │
              │   Data Layer     │
              └──────────────────┘

                         |
                         |
                         ▼

              ┌──────────────────┐
              │    MongoDB       │
              │   Database       │
              └──────────────────┘

```


---

# 🗂 Project Structure


```
task-manager/

│
├── models/
│    └── Task.js
│
├── server.js
│
├── package.json
│
├── package-lock.json
│
└── .env

```


---

# 🧬 Data Model


## Task Schema


```javascript

Task {

 id: ObjectId,

 taskName: String,

 priority:
 [
  "Low",
  "Medium",
  "High"
 ],

 dueDate: Date,

 completed: Boolean,

 createdAt: Date,

 updatedAt: Date

}

```


---

# 🔌 API Reference


## ➕ Create Task


```
POST /tasks
```


Example:

```json
{
 "taskName":"Complete Backend Project",
 "priority":"High",
 "dueDate":"2026-06-22"
}

```


---

## 📋 Get Tasks


```
GET /tasks
```


### Pagination

```
GET /tasks?page=1&limit=5
```


### Priority Filter

```
GET /tasks?priority=High
```


---

## ✏ Update Task


```
PUT /tasks/:id
```


Example:

```
PUT /tasks/65abc123
```


---

## 🗑 Delete Task


```
DELETE /tasks/:id
```


Response:

```json
{
 "message":
 "Task Deleted Successfully"
}

```


---

# ⚙️ Local Development Setup


### 1. Clone Repository


```bash
git clone https://github.com/anushka-mulik/task-manager.git

```


### 2. Install Dependencies


```bash
npm install

```


### 3. Configure Environment


Create:


```
.env
```


Add:


```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/taskdb

```


### 4. Start Server


Development:


```bash
npm run dev

```


Production:


```bash
npm start

```


---

# 📊 Technical Implementation


| Area | Implementation |
|---|---|
| Backend Framework | Express.js |
| Runtime | Node.js |
| Database | MongoDB |
| ODM | Mongoose |
| API Style | REST |
| Configuration | dotenv |
| Development | Nodemon |


---

# 🧠 Developer Skills Demonstrated


```
Backend Development
        |
        |
        ├── REST API Design
        |
        ├── Database Modeling
        |
        ├── CRUD Architecture
        |
        ├── Async Programming
        |
        ├── Query Handling
        |
        └── Server Configuration

```


---

# 🚀 Future Improvements


### Version 2.0

```
⬜ JWT Authentication

⬜ User Profiles

⬜ Role Based Access

⬜ React Admin Dashboard

⬜ Docker Containerization

⬜ Cloud Deployment

⬜ Automated Testing

⬜ Swagger Documentation

```


---

# 🏆 Why This Project?


This project represents practical backend engineering experience by implementing a complete REST API workflow.

It demonstrates the ability to:

- Design backend services
- Connect applications with databases
- Build maintainable APIs
- Handle real-world data operations


---

# 👨‍💻 Author


## Anushka Mulik


GitHub:

https://github.com/anushka-mulik


---

<div align="center">

### ⭐ If you found this project useful, consider starring the repository.


<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer"/>

</div>
