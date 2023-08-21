// - GET /certifications - This route returns an array of certification objects that hold the id, name and description of each certification. This route does not need any input

// - GET /certifications/:certificationId - This route returns a single certification object that includes all the details of the certification. including the date of expiration. This route takes in the certification id as a path parameter.

// - POST /certification - This route adds a new certification to the database. It takes in the details of the certification as input in the request body. The body of the certification includes the name and img/URL (possibly using AWS s3 storage/bucket) of the certification



// - PUT /certification/:certificationId - This route updates an existing certification. It takes in the id of the certification to update as a path parameter, and the new certification name and description in the request body.

// - DELETE /certification/:certificationId - This route deletes an existing certification. It takes in the id of the certification to delete as a path parameter.

