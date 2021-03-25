# Excellence-Technology-Assignment-Solution

Clone this repo

Type npm install for dowloading all the dependencies.
After that start the server using this command-
node index.js
OR
nodemon index

Server will start on predefined port and local mongo db with collection will be craeted in your machine.

To check api-
start postman and run these url.

1.)(POST METHOD) To insert name,email in databse.

localhost:5555/register

{
"name":"rohan",
"email":"rohan@gmail.com"
}

2.) (POST METHOD) To Assign score for a candidate based on the test.

localhost:5555/candidate/:id(paste the candiate_id here that you will get after inserting documents in above url)

{
"first_round": 5,
"second_round": 8,
"third_round":9
}
