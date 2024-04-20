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
 *   --Server site---
 * 1. app.post('/users'/async(req,res)=>{})
 * 2. Make the function async to use await inside it
 * 3. Make sure you use the express.json() middleware
 * 4. access data from the body: const user = req.body
 * 5. const result = await userCollection.insertOne(user);
 *   ********CLIENT SITE********
 *   1. create fetch
 *  2. add second parameter an an object
 *  3. provide method: 'POST'
 *  4. add headers: {'content-type':'application/json'}
 * 5. add body: JSON.Stringify(user);
 * 
 * 
 * 
 * 
 * 
 * 
 * -------------------------
 * READ MANY
 * --------------
 *  *****server site*********
 * 1. create a cursor = userCollection.find()
 * const result = await cursor.toArray()
 * 
 * ----------------------------------
 * DELETE
 * ------------------------
 *     ----SERVER----
 * 1. create  app delete('/users/:id', async(req,res)=>{})
 * 2. specify unique objectid to delete the right user
 * 3. const query = {_id:new objectId(id)}
 * 4. const result = await userCollection.deleteOne(query);
 * 
 * 
 * CLIENT SITE
*  1.CREATE DUNAMIC URL WITH ID
 * 2. mention the DELETE method
 * 
 * 
 * 
 * 
 * 
 * 
 * / 