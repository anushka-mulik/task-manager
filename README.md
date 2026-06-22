<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00c6ff,50:0072ff,100:7b2ff7&height=250&section=header&text=TASK%20MANAGER%20API&fontSize=70&fontColor=ffffff&animation=fadeIn"/>

# 🚀 Task Manager API

### Production-Ready REST Backend System Built For Scalable Productivity Management

<br/>

<img src="https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-success?style=for-the-badge&logo=node.js"/>

<img src="https://img.shields.io/badge/Database-MongoDB-green?style=for-the-badge&logo=mongodb"/>

<img src="https://img.shields.io/badge/API-REST-blue?style=for-the-badge"/>

<img src="https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge&logo=docker"/>

<br/><br/>

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,docker,git,github,javascript"/>

</div>


---

# 🧊 Overview

## What is Task Manager API?

Task Manager API is a scalable backend service designed to manage tasks through a clean REST architecture.

The system provides:

- Task lifecycle management
- Priority handling
- Deadline tracking
- Filtering
- Pagination
- MongoDB persistence


The goal of this project is to demonstrate real-world backend engineering practices used in production systems.


---

# ⚡ Key Features


<table>

<tr>

<td width="50%">


## 📝 Task Management

✔ Create Tasks

✔ Read Tasks

✔ Update Tasks

✔ Delete Tasks

✔ Completion Tracking


</td>


<td width="50%">


## 🚀 Backend Capabilities


✔ REST API Architecture

✔ MongoDB Integration

✔ Async Operations

✔ Environment Configuration

✔ Error Handling


</td>

</tr>


<tr>


<td>


## 🔍 Query Engine


✔ Pagination

✔ Priority Filtering

✔ Date Filtering

✔ Optimized Database Queries


</td>


<td>


## 🏗 Engineering


✔ MVC Structure

✔ Docker Ready

✔ Swagger Ready

✔ CI/CD Ready


</td>


</tr>


</table>


---

# 🏛️ System Architecture


```
                         CLIENT

                           |
                           |
                           ▼

                    HTTP REQUESTS


                           |
                           |
                           ▼


              ┌────────────────────┐
              │                    │
              │    EXPRESS API     │
              │                    │
              └────────────────────┘


                           |
                           |
                           ▼


              ┌────────────────────┐
              │                    │
              │     MONGOOSE       │
              │       ODM          │
              │                    │
              └────────────────────┘


                           |
                           |
                           ▼


              ┌────────────────────┐
              │                    │
              │      MONGODB       │
              │     DATABASE       │
              │                    │
              └────────────────────┘


```


---

# 📂 Project Structure


```
task-manager

│

├── models

│    └── Task.js


├── server.js


├── package.json


├── Dockerfile


├── docker-compose.yml


├── swagger


│    └── swagger.js


├── .env


└── README.md

```


---

# 🧬 Database Schema


## Task Model


```javascript

{
 taskName:String,

 priority:
 [
 "Low",
 "Medium",
 "High"
 ],

 dueDate:Date,

 completed:Boolean,

 createdAt:Date,

 updatedAt:Date

}

```


---

# 🔌 REST API Documentation


## Create Task


```
POST /tasks
```


Example:


```json

{
 "taskName":"Build Production API",

 "priority":"High",

 "dueDate":"2026-06-22"

}

```


---


## Get Tasks


```
GET /tasks

```


Pagination:

```
GET /tasks?page=1&limit=5

```


Filter:

```
GET /tasks?priority=High

```


---


## Update Task


```
PUT /tasks/:id

```


---


## Delete Task


```
DELETE /tasks/:id

```


---


# 📚 Swagger API Documentation


Interactive API documentation:


```
http://localhost:5000/api-docs

```


Swagger provides:


```
✔ API Testing

✔ Endpoint Documentation

✔ Request Examples

✔ Response Preview

```


---


# ⚙️ Local Setup


## Clone Repository


```bash

git clone https://github.com/anushka-mulik/task-manager.git

```


## Install Dependencies


```bash

npm install

```


## Environment Variables


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



Expected Output:


```

MongoDB Connected

Server running on port 5000

```


---

# 🐳 Docker Deployment


Build container:


```bash

docker build -t task-manager-api .

```


Run:


```bash

docker run -p 5000:5000 task-manager-api

```


Using Docker Compose:


```bash

docker compose up

```


Architecture:


```

Docker Container

       |

       |

 Express API

       |

       |

 MongoDB Container

```


---

# 🚀 Deployment


Ready for deployment on:


- Render
- Railway
- AWS
- DigitalOcean


Production flow:


```

GitHub

  |

  |

CI Pipeline

  |

  |

Docker Build

  |

  |

Cloud Deployment

  |

  |

Live API


```


---

# 🔄 CI/CD Pipeline


GitHub Actions Workflow:


```

Code Push

    |

    ▼

Install Dependencies

    |

    ▼

Run Tests

    |

    ▼

Build Application

    |

    ▼

Deploy


```


---

# 🧠 Engineering Skills Demonstrated


| Category | Implementation |
|-|-|
| Backend | Node.js + Express |
| Database | MongoDB |
| ODM | Mongoose |
| API Design | REST |
| Architecture | Modular Backend |
| Deployment | Docker |
| Documentation | Swagger |
| Automation | CI/CD |


---

# 📈 Future Scaling Roadmap


```

V1

✔ CRUD API


V2

⬜ JWT Authentication

⬜ User Management

⬜ Role Based Access


V3

⬜ React Dashboard

⬜ Redis Cache

⬜ Background Jobs


V4

⬜ Kubernetes

⬜ Microservices

⬜ Cloud Scaling


```


---

# 🏆 Why This Project?


This project represents practical backend engineering experience by implementing:

- Production API patterns
- Database-driven architecture
- Scalable backend design
- Modern deployment practices


It demonstrates the ability to build software beyond simple tutorials and move toward real-world engineering systems.


---

# 👨‍💻 Developer


## Anushka Mulik


GitHub:

https://github.com/anushka-mulik


---


<div align="center">


<img src="https://capsule-render.vercel.app/api?type=waving&color=0:7b2ff7,100:00c6ff&height=120&section=footer"/>


### ⭐ Build. Scale. Deploy. Repeat.


</div>
