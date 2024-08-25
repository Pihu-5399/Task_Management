• Instructions to run the application locally:

To run the application
   npm i
   npm start
 Here is the below response appear in cmd prompt once server is started in VS Code
 PS D:\Task_Management_System> npm start 

> task_management_system@1.0.0 start
> node server.js

Server is running at http://127.0.0.4:5000
(node:17848) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
(Use `node --trace-warnings ...` to show where the warning was created)
(node:17848) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
MongoDB connected

• API documentation (e.g., Swagger or Postman collection):
1. User Registration
POST http://127.0.0.4:5000/auth/register
{
"username": "Ram",
"password": "Ram@12345"
}
Find the below screenshot to register 
<img width="638" alt="image" src="https://github.com/user-attachments/assets/05d11a76-fba3-4b3f-8992-ae32dc383317">

2. User Login
POST http://127.0.0.4:5000/auth/login
{
"username": "Ram",
"password": "Ram@12345"
}
3. Create Task
POST http://127.0.0.4:5000/task/
{
"title": "New Task",
"description": "Task description",
"status": "Todo",
"priority": "High",
"due_date": "2024-07-31"
}
<img width="637" alt="image" src="https://github.com/user-attachments/assets/2d0aed27-f1d5-401f-bb76-e1d708bb2d53">

4. Get Tasks
GET http://127.0.0.4:5000/task/

5. Update Task
PUT http://127.0.0.4:5000/task/:id
{
"title": "Updated Task",
"description": "Updated description",
"status": "In Progress",
"priority": "Medium"
}

6. Delete Task
DELETE http://127.0.0.4:5000/task/:id

• A brief write-up on their approach and any assumptions made:

1. Set Up the Project
Start by setting up a new Node.js project and installing the required dependencies.
mkdir Task_Management_System
cd Task_Management_System
npm init -y
npm install express mongoose bcryptjs jsonwebtoken dotenv body-parser cors
npm install --save-dev nodemon 

2. Here i've used MongoDB because for now i don't have local setup for Postgre or MySQL database.
   
3. Respective model are created for Task and User.

4. API's are created for CRUD operation and other functionalities as describe in the problem statement.

5. Below screenshot defines how data stored in database:
   <img width="713" alt="image" src="https://github.com/user-attachments/assets/23e9ef2d-65d2-465c-8aab-388332d0bbaa">

Thank You!
