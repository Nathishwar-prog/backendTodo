# Todo App Backend

This is the backend API for the Todo application 

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` 
   - PORT: i use local host 5000 , i suggest use that port [http://localhost:5000]
   -  MONGO_URI: use your mongodb connection string

## to run this server before start the frontend 

```
npm run dev
```

The server will start on `http://localhost:5000`


## for  CORS Configuration i allowed these domains only

The API is configured to accept requests from:
- http://localhost:5173 (local development)
- http://localhost:5000 (local development)
- https://task8mern.netlify.app (production)

If you're using a different frontend URL, update the CORS configuration in server.js.

# I faced this error and issues if not working check this issues and configure it

### MongoDB Connection Issues

If you see errors like:
```
MongoAPIError: URI must include hostname, domain name, and tld
```

This means your `MONGO_URI` is not properly formatted. i used mongodb atlas u chnage as per your database Make sure you're using the MongoDB Atlas connection string format:
```
mongodb+srv://username:password@cluster.yourID.mongodb.net/databaseName?retryWrites=true&w=majority
```

### Authentication Issues

If you see errors like:
```
bad auth : authentication failed
```

Check all these are correct      :
1. Username in connection string is correct
2. Password in connection string is correct
3. User exists in MongoDB Atlas Database Access

