1. CREATE TASK (POST)
Method
POST
URL
http://localhost:5000/tasks
Thunder Client Steps
Click New Request
Select POST
Enter URL
Click Body
Select JSON
Paste:
{
  "taskName": "Complete Project",
  "priority": "High",
  "dueDate": "2026-06-20"
}
Click Send
Expected Output
{
  "_id": "687ab123456789",
  "taskName": "Complete Project",
  "priority": "High",
  "dueDate": "2026-06-20T00:00:00.000Z",
  "completed": false
}

Copy the _id because it is needed for PUT and DELETE.

2. GET ALL TASKS
Method
GET
URL
http://localhost:5000/tasks
Steps
New Request
Select GET
Enter URL
Send
Output
[
  {
    "_id": "687ab123456789",
    "taskName": "Complete Project",
    "priority": "High",
    "completed": false
  }
]
3. PAGINATION
Method
GET
URL
http://localhost:5000/tasks?page=1&limit=2
Send Request

Returns only 2 records per page.

4. FILTER BY PRIORITY
Method
GET
URL
http://localhost:5000/tasks?priority=High
Send Request

Returns only High priority tasks.

5. UPDATE TASK (PUT)

Use the copied task ID.

Method
PUT
URL
http://localhost:5000/tasks/687ab123456789

Replace with your actual _id.

Body → JSON
{
  "completed": true
}
Send
Expected Output
{
  "_id": "687ab123456789",
  "taskName": "Complete Project",
  "priority": "High",
  "completed": true
}

Task is now marked completed.

6. UPDATE MULTIPLE FIELDS
Method
PUT
URL
http://localhost:5000/tasks/687ab123456789
Body
{
  "taskName": "Mini Project",
  "priority": "Medium",
  "completed": true
}
Output

Updated task object.

7. DELETE TASK
Method
DELETE
URL
http://localhost:5000/tasks/687ab123456789
Send
Output
{
  "message": "Task Deleted Successfully"
}
