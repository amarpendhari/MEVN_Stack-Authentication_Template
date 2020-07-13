# MEVN Stack Authentication Template

![MEVN Logo](/client/src/assets/MEVN.png)

## Clone or download, Ready to use.

To use the MEVN Authentication Template you need your own DataBase.
Create your Database in no time using <a href="https://docs.atlas.mongodb.com/getting-started/">MongoDB Atlas - the global cloud database</a>

- Once you have Created DataBase
  - Go to the Cluster Created > Below SANDBOX click on Connect Button > Select Connect your Application
  - Copy Link, Example (mongodb+srv://<username>:<password>@mevnstack-myne9.mongodb.net/<dbname>?retryWrites=true&w=majority)
  - Go to Clone or Downloaded Folder, Find config folder > default.json
  - In default.json, Paste the Copied link (i.e. "mongoURI" : "CopiedLink" )
  - In Terminal, > npm run dev

#### You made it !!! Happy Coding.

## Project setup

### Backend Setup

```
npm install express bcryptjs jsonwebtoken config express-validator mongoose nodemon concurrently cors
```

### Run Backend Server

```
npm run server
```

### Create Vue Project

```
vue create project-name
```

### Compiles and hot-reloads for development (Run Vue)

```
npm run serve
```

### Run Backend(http://localhost:5000) + FrontEnd(http://localhost:8080)

```
npm run dev
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

## Project Specifications

- Building a MEVN Stack Authentication Template, i.e Ready to use for all.
