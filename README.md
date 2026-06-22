<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:667eea,100:764ba2&height=220&section=header&text=Task%20Manager%20API&fontSize=70&fontColor=ffffff&animation=fadeIn&fontAlignY=35"/>

# 🚀 Task Manager API

### A Professional RESTful Backend System Built With Node.js, Express & MongoDB

<br/>

<img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js"/>
<img src="https://img.shields.io/badge/API-Express.js-black?style=for-the-badge&logo=express"/>
<img src="https://img.shields.io/badge/Database-MongoDB-success?style=for-the-badge&logo=mongodb"/>
<img src="https://img.shields.io/badge/Architecture-REST_API-blue?style=for-the-badge"/>

<br/><br/>

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,javascript,git,github"/>

</div>


# 🧊 Project Vision

**Task Manager API** is a scalable backend application designed to efficiently manage daily tasks through a clean REST architecture.

The project focuses on real-world backend engineering concepts:

✨ CRUD operations  
✨ Database modeling  
✨ API architecture  
✨ Filtering & pagination  
✨ Server configuration  
✨ Error handling  


---

# 🎯 Core Features


<table>
<tr>

<td width="50%">

## 📌 Task Management

✔ Create Tasks  
✔ Update Tasks  
✔ Delete Tasks  
✔ View Tasks  
✔ Track Completion Status  

</td>

<td width="50%">

## ⚡ Advanced Features

✔ Priority Management  
✔ Due Date Tracking  
✔ Pagination  
✔ Filtering  
✔ MongoDB Persistence  

</td>

</tr>
</table>


---

# 🏗️ System Architecture


```
                    CLIENT

                      |
                      |
                 HTTP REQUEST

                      |
                      ▼

              Express.js Server

                      |
                      |
          -------------------------
          |                       |
          ▼                       ▼

      API Routes             Middleware


                      |
                      ▼

              Mongoose ODM

                      |
                      ▼

                 MongoDB

```


---

# 🧬 Database Design


## Task Collection


```javascript
{
   taskName: String,

   priority:
   "Low" | "Medium" | "High",

   dueDate: Date,

   completed: Boolean,

   createdAt: Date,

   updatedAt: Date
}

```


---

# 🛠️ Technology Stack


<div align="center">


| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | Database Modeling |
| dotenv | Environment Management |
| Nodemon | Development Server |


</div>


---

# 📂 Project Structure


```
task-manager
│
├── models
│   |
│   └── Task.js
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

# 🔥 API Documentation


## Create Task

### POST

```
/tasks
```


Request:

```json
{
 "taskName":"Build API",
 "priority":"High",
 "dueDate":"2026-06-22"
}

```


---

## Get All Tasks


### GET

```
/tasks
```


Pagination:

```
/tasks?page=1&limit=5
```


Filter:

```
/tasks?priority=High
```


---

## Update Task


### PUT

```
/tasks/:id
```


Example:

```
/tasks/65abc123
```


---

## Delete Task


### DELETE

```
/tasks/:id
```


Response:

```json
{
 "message":"Task Deleted Successfully"
}

```


---

# ⚙️ Installation


## Clone Repository


```bash
git clone https://github.com/anushka-mulik/task-manager.git
```


## Enter Project


```bash
cd task-manager
```


## Install Packages


```bash
npm install
```


---

# 🔐 Environment Setup


Create:


```
.env
```


Add:


```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/taskdb

```


---

# ▶️ Run Application


Development:


```bash
npm run dev
```


Production:


```bash
npm start
```


Expected:


```
MongoDB Connected

Server running on port 5000

```


---

# 🧠 Engineering Highlights


<div align="center">


| Skill | Implementation |
|-|-|
| REST API | Express Routing |
| Database | MongoDB + Mongoose |
| Data Validation | Schema Rules |
| Async Programming | Async/Await |
| Query Handling | Filters & Pagination |
| Configuration | Environment Variables |


</div>


---

# 🚀 Future Roadmap


```
✅ CRUD API

⬜ JWT Authentication

⬜ User Accounts

⬜ Role Based Access

⬜ React Dashboard

⬜ Docker Deployment

⬜ Cloud Hosting

⬜ Automated Testing

```


---

# 📸 Project Showcase


Add screenshots here:


```
/screenshots

 ├── api-response.png

 ├── database.png

 └── postman-testing.png

```


---

# 👨‍💻 Developer


<div align="center">


## Anushka Mulik


<a href="https://github.com/anushka-mulik">

<img src="https://img.shields.io/badge/GitHub-Anushka%20Mulik-black?style=for-the-badge&logo=github"/>

</a>


</div>


---

<div align="center">


<img src="https://capsule-render.vercel.app/api?type=waving&color=0:764ba2,100:667eea&height=120&section=footer"/>


### ⭐ Built with Node.js + Express + MongoDB

### 🚀 Designed for scalable backend development


</div>
