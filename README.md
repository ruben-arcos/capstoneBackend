# RUBRIC

 ### Create a new repo (name it whatever you like - (311-Checkpoint2, Capstone-Backend)) with:
1. A package.json file with the modules you intend to use (look at previous assignments)
2. Use dotenv wiith secrets for your database connection
3. .gitignore file with node_modules and .env
4. Any assets you want to use (images, links, notes on folder structure, auth integration process, external APIs, etc.)


### Database Layout Diagram (ERD)
This can be done using Excel, Pen and Paper, UML diagrams, or any other way that includes the following:
- What tables you have
- What kind of data the tables hold (columns and data types)
- How are the tables related to each other
- Appropriate "CREATE TABLE" sql statements that can be used to create your tables



### README.md page that lists the routes you think you’ll need and a description. 
Include all the routes you plan to support and what the expected input and output of each route is. For example:

- GET /certifications - This route returns an array of certification objects that hold the id, name and description of each certification. This route does not need any input

- GET /certifications/:certificationId - This route returns a single certification object that includes all the details of the certification. including the date of expiration. This route takes in the certification id as a path parameter.

- POST /certification - This route adds a new certification to the database. It takes in the details of the certification as input in the request body. The body of the certification includes the name and img/URL (possibly using AWS s3 storage/bucket) of the certification

- PUT /certification/:certificationId - This route updates an existing certification. It takes in the id of the certification to update as a path parameter, and the new certification name and description in the request body.

- DELETE /certification/:certificationId - This route deletes an existing certification. It takes in the id of the certification to delete as a path parameter.

### All capstone projects must have register and login routes
- POST /register (You can either store authentication info (password/password hash)) in your own database or use an Auth0 provider
- POST /login


### Implement the majority of your routes. 
You do not need to implement all the possible routes you will need, but implement enough of them to have a good starting point for your front end to use.

### Presentation
Present your application idea, database layout and design on the last day of class for discussion. 

The goal of this checkpoint is to give you a solid foundation for your capstone backend, not a fully functional app. I realize things will change as you develop your frontend.
