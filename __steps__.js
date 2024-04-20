/***
 * -----------MongoDB Connection--------------
 * 1. create account
 * 2. create an user with password
 * 3. whitelist IP address
 * 4. database>connect>driver>Node>View full code
 * 5. change the password uri
 * -----------------------------------
 *    -------CRUD---------
 * ----CREATE --- POST---
 * 1. app.post('/users'/async(req,res)=>{})
 * 2. Make the function async to use await inside it
 * 3. Make sure you use the express.json() middleware
 * 4. access data from the body: const user = req.body
 * 5. const result = await userCollection.insertOne(user);
 * 
 * 
 * 
 * 
 * / 