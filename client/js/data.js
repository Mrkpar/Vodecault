/*
reduce, filter, map, find, push, findIndex, splice
*/
export const topics = [
  {
    id: "js-for-loops",

    title: "For Loops",

    category: "Javascript",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "A for loop repeats code a specific number of times.",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-while-loops",

    title: "While Loops",

    category: "Javascript",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "A while loop repeats code as long as a condition is true.",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-random-loops",

    title: "not a Loop",

    category: "HTML",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "A while loop repeats code as long as a condition is true.",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-reduce",

    title: "reduce",

    category: "Javascript",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content:
          "The reduce() method executes a reducer function on each element of the array, resulting in a single output value.",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-filter",

    title: "filter",

    category: "Javascript",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content:
          "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-map",

    title: "map",

    category: "Javascript",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content:
          "The map() method creates a new array with the results of calling a function on every element in the calling array.",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-find",

    title: "find",

    category: "Javascript",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content:
          "The find() method returns the value of the first element in the array that satisfies the provided testing function.",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-push",

    title: "push",

    category: "Javascript",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content:
          "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-splice",

    title: "splice",

    category: "Javascript",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "Nem yet defined",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-findIndex",

    title: "findIndex",

    category: "Javascript",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "Finds 1 element of an array",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-filterIndex",

    title: "filterIndex",

    category: "Javascript",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "Finds all elements of an array",
      },
      {
        title: "Syntax",
        content: `
            `,
      },
      {
        title: "Example",
        content: `}`,
      },
    ],
  },
  {
    id: "js-stringify",

    title: "stringify",

    category: "Javascript",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "Converts a JavaScript value to a JSON string",
      },
      {
        title: "Syntax",
        content: `To be entered
            `,
      },
      {
        title: "Example",
        content: `To be entered`,
      },
    ],
  },
  {
    id: "js-query-selector",

    title: "querySelector()",

    category: "Javascript",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content:
          "The querySelector() method selects and returns the first HTML element that matches a CSS selector. If no matching element is found, it returns null.",
      },
      {
        title: "Syntax",
        content: `const element = document.querySelector("CSS selector");`,
      },
      {
        title: "Example",
        content: `// Select an element by id
const title = document.querySelector("#title");

// Select an element by class
const card = document.querySelector(".card");

// Select the first button
const button = document.querySelector("button");

// Change its text
button.textContent = "Click me";`,
      },
      {
        title: "Common Selectors",
        content: `#id             // Select by id
.class          // Select by class
button          // Select first <button>
input           // Select first <input>
div.card        // Select a div with class "card"
ul li           // First <li> inside a <ul>
[data-id]       // Select element with data-id attribute`,
      },
      {
        title: "Returns",
        content: `Returns the first matching HTML element.

If no element matches the selector, it returns null.`,
      },
      {
        title: "Common Mistakes",
        content: `// Wrong id
document.querySelector("#titel"); // null

// Forgetting #
document.querySelector("title"); // Looks for a <title> element

// Forgetting .
document.querySelector("card"); // Looks for a <card> element

// Accessing properties on null
const btn = document.querySelector("#missing");
btn.textContent = "Hello"; // Error`,
      },
      {
        title: "Related",
        content: `querySelectorAll()
getElementById()
textContent
innerHTML
classList`,
      },
    ],
  },
  {
    id: 20,
    title: "Initialize an Express Server",
    category: "Node.js / Express",
    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: `Express.js is a backend framework for Node.js.
It allows you to create APIs and web servers.

Basic setup:
1. Initialize npm
2. Install Express
3. Configure package.json
4. Create server.js
5. Start the server`,
      },

      {
        title: "1. Initialize npm",
        content: `npm init -y`,
      },

      {
        title: "2. Install Express",
        content: `npm install express`,
      },

      {
        title: "3. Enable ES Modules",
        content: `Add this to package.json:

"type": "module"

This allows you to use:

import express from "express";`,
      },

      {
        title: "4. Create server.js",
        content: `import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Server works!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});`,
      },

      {
        title: "5. Add scripts",
        content: `package.json

"scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
}`,
      },

      {
        title: "6. Start server",
        content: `npm run dev`,
      },
    ],
  },
  {
    id: 21,
    title: "Express REST API CRUD",
    category: "Node.js / Express",
    difficulty: "Intermediate",

    sections: [
      {
        title: "Description",
        content: `CRUD stands for:

Create
Read
Update
Delete

These are the four basic operations used when working with data.

In Express.js, CRUD operations are usually implemented through REST API routes.

Common HTTP methods:

GET    -> Read data
POST   -> Create new data
PUT    -> Replace existing data
PATCH  -> Update parts of data
DELETE -> Remove data`,
      },

      {
        title: "Basic Express Setup",
        content: `import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running");
});`,
      },

      {
        title: "Database Example",
        content: `For learning purposes, data can be stored in a JSON file:

users.json

[
    {
        "id": 1,
        "name": "John",
        "email": "john@email.com"
    }
]

Later this can be replaced with a real database.`,
      },

      {
        title: "GET - Read Data",
        content: `GET retrieves existing data.

Example:

GET /api/users

Express:

app.get("/api/users", (req, res) => {

    res.json(users);

});

Response:

[
    {
        "id": 1,
        "name": "John"
    }
]`,
      },

      {
        title: "POST - Create Data",
        content: `POST creates new data.

Example:

POST /api/users

Request body:

{
    "name": "Sarah",
    "email": "sarah@email.com"
}


Express:

app.post("/api/users", (req, res) => {

    const newUser = req.body;

    users.push(newUser);

    res.status(201).json(newUser);

});`,
      },

      {
        title: "PUT - Replace Data",
        content: `PUT replaces the entire existing object.

Example:

PUT /api/users/1


Express:

app.put("/api/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const updatedUser = req.body;

    users[id] = updatedUser;

    res.json(updatedUser);

});


PUT usually requires the complete object.`,
      },

      {
        title: "PATCH - Update Part of Data",
        content: `PATCH updates only specific fields.

Example:

PATCH /api/users/1


Request:

{
    "email": "new@email.com"
}


Express:

app.patch("/api/users/:id", (req, res) => {

    const user = users.find(
        user => user.id === Number(req.params.id)
    );

    Object.assign(user, req.body);

    res.json(user);

});


Only the provided fields change.`,
      },

      {
        title: "DELETE - Remove Data",
        content: `DELETE removes data.

Example:

DELETE /api/users/1


Express:

app.delete("/api/users/:id", (req, res) => {

    users = users.filter(
        user => user.id !== Number(req.params.id)
    );

    res.status(204).send();

});`,
      },

      {
        title: "REST API Route Example",
        content: `Typical user API:

GET
/api/users
Get all users


GET
/api/users/:id
Get one user


POST
/api/users
Create user


PUT
/api/users/:id
Replace user


PATCH
/api/users/:id
Update user


DELETE
/api/users/:id
Delete user`,
      },

      {
        title: "Testing APIs",
        content: `APIs can be tested with:

- Postman
- Insomnia
- Thunder Client (VS Code extension)

Example:

GET http://localhost:3000/api/users

POST:
Send JSON body:

{
    "name": "Alice"
}`,
      },

      {
        title: "Common Status Codes",
        content: `200 OK
Request successful


201 Created
New resource created


204 No Content
Successful request with no response body


400 Bad Request
Invalid input


404 Not Found
Resource does not exist


500 Internal Server Error
Server problem`,
      },
    ],
  },
  /////////////////////
  //Building Blocks
  /////////////////////
  {
    id: "js-express",

    title: "express",

    category: "Build",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "Nem yet defined",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-npm",

    title: "npm",

    category: "Build",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "Nem yet defined",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-init",

    title: "init",

    category: "Build",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "Nem yet defined",
      },
      {
        title: "Syntax",
        content: `for (let i=0; i < 5; i++) {
            console.log(i);
            }`,
      },
      {
        title: "Example",
        content: `for (let i = 1; i <= 3; i++) {
            console.log("Hello", i);
            }`,
      },
    ],
  },
  {
    id: "js-DOMManipulation",

    title: "DOM manipulation",

    category: "HTML",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content:
          "How to build a html string and insert it into the DOM using innerHTML.",
      },
      {
        title: "Syntax",
        content: `
            }`,
      },
      {
        title: "Example",
        content: `
        `,
      },
    ],
  },
  {
    id: "template-express-server",

    title: "Express Server Setup",

    category: "Backend Templates",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content:
          "Basic Express server setup. Use this as the starting point for every backend project.",
      },
      {
        title: "Folder Structure",
        content: `project/
│
├── client/
│
├── server/
│   ├── data/
│   ├── routes/
│   ├── package.json
│   └── server.js`,
      },
      {
        title: "Initialize Project",
        content: `cd server

npm init -y

npm install express`,
      },
      {
        title: "package.json",
        content: `{
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  }
}`,
      },
      {
        title: "server.js",
        content: `import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});`,
      },
      {
        title: "Run Server",
        content: `npm run dev`,
      },
    ],
  },
  {
    id: "template-express-router",

    title: "Express Router",

    category: "Backend Templates",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content:
          "Organize API endpoints into separate route files instead of putting everything into server.js.",
      },
      {
        title: "routes/users.js",
        content: `import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json([]);
});

export default router;`,
      },
      {
        title: "server.js",
        content: `import express from "express";
import usersRouter from "./routes/users.js";

const app = express();

app.use(express.json());

app.use("/api/users", usersRouter);

app.listen(3000);`,
      },
    ],
  },
  {
    id: "template-json-database",

    title: "JSON Database",

    category: "Backend Templates",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content:
          "Use a JSON file as a simple database. Great for beginner Express projects.",
      },
      {
        title: "Read Database",
        content: `import fs from "fs";

const file = "./data/users.json";

function getUsers() {
    return JSON.parse(
        fs.readFileSync(file, "utf8")
    );
}`,
      },
      {
        title: "Save Database",
        content: `function saveUsers(users) {
    fs.writeFileSync(
        file,
        JSON.stringify(users, null, 2)
    );
}`,
      },
    ],
  },
  {
    id: "template-rest-crud",

    title: "REST CRUD API",

    category: "Backend Templates",

    difficulty: "Intermediate",

    sections: [
      {
        title: "Description",
        content:
          "Standard CRUD API endpoints used in most Express applications.",
      },
      {
        title: "Routes",
        content: `GET    /api/users

POST   /api/users

PUT    /api/users/:id

PATCH  /api/users/:id

DELETE /api/users/:id`,
      },
      {
        title: "Meaning",
        content: `GET      Read data

POST     Create new data

PUT      Replace entire object

PATCH    Update selected fields

DELETE   Remove object`,
      },
    ],
  },
  {
    id: "template-static-files",

    title: "Serve Static Files",

    category: "Backend Templates",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "Serve HTML, CSS and JavaScript files from the client folder.",
      },
      {
        title: "server.js",
        content: `app.use(express.static("../client"));`,
      },
      {
        title: "Example Structure",
        content: `project/

client/
    index.html
    css/
    js/

server/
    server.js`,
      },
      {
        title: "Open Website",
        content: `http://localhost:3000`,
      },
    ],
  },
  {
    id: "template-select",

    title: "Select dropdown DOM",

    category: "Javascript Templates",

    difficulty: "Advanced",

    sections: [
      {
        title: "Description",
        content: "select button",
      },
      {
        title: "Example",
        content: `
        <select value={pet.kind}>
          {kinds.map((kind) => (
            <option key={kind} value={kind}>
                {kind}
            </option>
          ))}
        </select>
`,
      },
    ],
  },
  {
    id: "template-controlled-select",

    title: "Controlled Select dropdown DOM",

    category: "Javascript Templates",

    difficulty: "Advanced",

    sections: [
      {
        title: "Description",
        content: "select button",
      },
      {
        title: "Example",
        content: `
        <select
          value={state[item.id]}
          onChange={(event) => {
            setState({
              ...state,
              [item.id]: event.target.value,
            });
          }}
        >
`,
      },
    ],
  },
  {
    id: "template-values",

    title: "Set of unique values",

    category: "Javascript Templates",

    difficulty: "Advanced",

    sections: [
      {
        title: "Description",
        content: "get a Set of unique values",
      },
      {
        title: "Example",
        content: `const uniqueValues = [
        ...new Set(Object.values(data).map((item) => item.property)),
];
`,
      },
    ],
  },
  {
    id: "template-DOM",

    title: "React List Rendering",

    category: "Javascript Templates",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "Render a DOM",
      },
      {
        title: "Example",
        content: `<div>
  {Object.values(dataObject).map((item) => (
    <div key={item.id}>
      <h2>{item.property}</h2>
      <p>{item.property2}</p>
    </div>
  ))}
</div>
`,
      },
    ],
  },
  {
    id: "template-fetch",

    title: "Fetch Data",

    category: "Javascript Templates",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "Load JSON data from an Express backend.",
      },
      {
        title: "Example",
        content: `
async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const data = await response.json();

    console.log("Data received:", data);

    return data;
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}
fetchData(url);
`,
      },
    ],
  },
  {
    id: "template-fetch-patch",

    title: "Fetch-Patch Data",

    category: "Javascript Templates",

    difficulty: "Advanced",

    sections: [
      {
        title: "Description",
        content: "Patch JSON data to an Express backend.",
      },
      {
        title: "Example",
        content: `
async function updateData(item) {
  const url = \`\${BASE_URL}/path/\${item.id}.json\`;

  const newValue = ...
  
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        property: newValue,
      }),
    });

    if (!response.ok) {
      throw new Error(
        \`HTTP error! Status: \${response.status} \${response.statusText}\`,
      );
    }

    console.log("Updated!");
  } catch (error) {
    console.error("Update failed:", error.message);
  }
}
`,
      },
    ],
  },
  {
    id: "template-fetch-post",

    title: "Fetch-Post Data",

    category: "Javascript Templates",

    difficulty: "Advanced",

    sections: [
      {
        title: "Description",
        content: "Post JSON data to an Express backend.",
      },
      {
        title: "Example",
        content: `
const response = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
`,
      },
    ],
  },
  {
    id: "template-link",

    title: "Link to",

    category: "Javascript Templates",

    difficulty: "Advanced",

    sections: [
      {
        title: "Description",
        content: "Make a clickable link to a routeed page",
      },
      {
        title: "Example",
        content: `
<Link to={\`/employees/\${employee.id}\`}>
  {employee.name}
</Link>

{
  path: "/employees/:id",
  element: <EmployeeDetails />,
}

const { id } = useParams();
`,
      },
    ],
  },
  {
    id: "template-search",

    title: "Search",

    category: "Javascript Templates",

    difficulty: "Advanced",

    sections: [
      {
        title: "Description",
        content: "Search input field",
      },
      {
        title: "Example",
        content: `
    <div>
      <label>
        Search by name
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </label>

      {filteredItems.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>
              {item.property1} - {item.property2} - {item.property3}
            </li>
          ))}
        </ul>
      )}
    </div>


`,
      },
    ],
  },
  {
    id: "template-convert-to-array",

    title: "To array",

    category: "Javascript Templates",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "That code takes the Firebase object and converts it into an array, so that we can use array methods like .filter() and .map().",
      },
      {
        title: "Example",
        content: `
        
const itemssArray = Object.entries(data || {}).map(
          ([id, item]) => ({
            id,
            ...item,
          }),
        );
});

From this:
{
    abc123: {
        name: "Mark",
        level: "Senior",
        salary: 50000
    },
    def456: {
        name: "Anna",
        level: "Junior",
        salary: 35000
    }
}

with this:
Object.entries(data || {})

to this:
[
    ["abc123", {
        name: "Mark",
        level: "Senior",
        salary: 50000
    }],
    ["def456", {
        name: "Anna",
        level: "Junior",
        salary: 35000
    }]
]
`,
      },
    ],
  },
  {
    id: "template-search-and-change",

    title: "Search and Change",

    category: "Javascript Templates",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "Searches and Changes",
      },
      {
        title: "Example",
        content: `
        
    {editingEmployee === employee.id ? (
    <div>
        <input
            type="text"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
        />
        <button onClick={() => updateData(employee)}>
            Save
        </button>
    </div>
) : (
    <div>
        <h2>{employee.name}</h2>
        <button
            onClick={() => {
                setEditingEmployee(employee.id);
                setNewName(employee.name);
            }}
        >
            Change Name
        </button>
    </div>
)}
`,
      },
    ],
  },
  {
    id: "template-render-cards",

    title: "Render Cards",

    category: "Javascript Templates",

    difficulty: "Beginner",

    sections: [
      {
        title: "Description",
        content: "Loop through an array and render a card for every object.",
      },
      {
        title: "Example",
        content: `users.forEach(user => {

    const card = document.createElement("div");

    card.textContent = user.name.first;

    container.append(card);

});`,
      },
    ],
  },
  {
    id: "template-edit-form",

    title: "Populate Edit Form",

    category: "Javascript Templates",

    difficulty: "Intermediate",

    sections: [
      {
        title: "Description",
        content: "Fill a form with the selected object's data for editing.",
      },
      {
        title: "Example",
        content: `firstName.value = user.name.first;

lastName.value = user.name.last;

email.value = user.email;

currentUserId = user.id;`,
      },
    ],
  },
  {
    id: "template-put-request",

    title: "PUT Request",

    category: "Javascript Templates",

    difficulty: "Intermediate",

    sections: [
      {
        title: "Description",
        content: "Replace an existing object using the PUT HTTP method.",
      },
      {
        title: "Example",
        content: `await fetch("/api/users/" + id, {

    method: "PUT",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(user)

});`,
      },
    ],
  },
  {
    id: "template-post-request",

    title: "POST Request",

    category: "Javascript Templates",

    difficulty: "Intermediate",

    sections: [
      {
        title: "Description",
        content: "Create a new object on the backend.",
      },
      {
        title: "Example",
        content: `await fetch("/api/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(user)

});`,
      },
    ],
  },
  {
    id: "express-delete",

    title: "Express DELETE Request",

    category: "Backend",

    difficulty: "Intermediate",

    sections: [
      {
        title: "Description",
        content: "Deletes a resource from the server using its id.",
      },
      {
        title: "Syntax",
        content: `
app.delete("/api/items/:id", async (req, res) => {

});
            `,
      },
      {
        title: "Example",
        content: `
app.delete("/api/items/:id", async (req, res) => {
    const id = Number(req.params.id);

    // Find item

    // Delete item

    // Save changes

    res.json({
        message: "Item deleted."
    });
});
            `,
      },
    ],
  },
  {
    id: "fetch-delete",

    title: "Fetch DELETE Request",

    category: "Javascript",

    difficulty: "Intermediate",

    sections: [
      {
        title: "Description",
        content: "Sends a DELETE request to remove a resource from the server.",
      },
      {
        title: "Syntax",
        content: `
fetch(url, {
    method: "DELETE"
});
            `,
      },
      {
        title: "Example",
        content: `
async function deleteItem(id) {

    const response = await fetch(\`/api/items/\${id}\`, {

        method: "DELETE"

    });

    return await response.json();

}
            `,
      },
    ],
  },
  {
    id: "page-button",

    title: "Button",

    category: "Button",

    difficulty: "Easy",

    sections: [
      {
        title: "Description",
        content: "Clicking the button jumps you to another HTML page.",
      },
      {
        title: "Syntax",
        content: `<a href="/">
      <button>Shop</button>
    </a> 

    OR
  
    <a href="orders.html">
      <button>Orders</button>
    </a>
            `,
      },
      {
        title: "Example",
        content: `<a href="/">
      <button>Shop</button>
    </a>
  </head>
    <a href="orders.html">
      <button>Orders</button>
    </a>
            `,
      },
    ],
  },

  {
    id: "note-react",

    title: "React",

    category: "React",

    difficulty: "medium",

    sections: [
      {
        title: "Description",
        content: `React uses components.

A component is a reusable piece of UI.

Components are usually functions returning JSX.

Example:

function Navbar(){
 return <nav></nav>
}

JSX looks like HTML but is written inside JavaScript.

Project Flow: 
main.jsx
    ↓
App.jsx
    ↓
Components

React starts from main.jsx.
App.jsx is the main application component.
Components are reusable UI pieces imported into App.jsx.
`,
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },

  {
    id: "react-component",

    title: "Component",

    category: "React",

    difficulty: "medium",

    sections: [
      {
        title: "Description",
        content: "A component always follows the same pattern",
      },
      {
        title: "Syntax",
        content: `function ComponentName() {

    return (
        HTML-like code
    );

}

export default ComponentName;
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },

  {
    id: "react-hierarchy",

    title: "Hierarchy",

    category: "React",

    difficulty: "medium",

    sections: [
      {
        title: "Description",
        content: `"A website is built by combining smaller components.

Example:

App
 ├ Navbar
 ├ Hero
 ├ Services
 └ Footer

Each component has one responsibility."`,
      },
      {
        title: "Syntax",
        content: `
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },

  {
    id: "react-reusable-components",

    title: "Reusable Components",

    category: "React",

    difficulty: "medium",

    sections: [
      {
        title: "Description",
        content: `"Reusable React components

Components can receive data.

Example:

function Button({ children }) {

}

The children prop contains whatever is placed
between the opening and closing component tags.

Example:

<Button>
    Click me
</Button>

children = "Click me""`,
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },

  {
    id: "react-starter-template",

    title: "React Starter Template",

    category: "React",

    difficulty: "medium",

    sections: [
      {
        title: "Description",
        content: `Before starting a new React project:

1. Copy starter template
2. Rename project
3. Replace generic content
4. Add project-specific components

Template contains:
- Vite
- React
- ESLint
- Router
- Layout
- CSS architecture
- reusable components`,
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },

  {
    id: "react-i18n",

    title: "Translation",

    category: "React",

    difficulty: "hard",

    sections: [
      {
        title: "Description",
        content: `React i18n setup

Packages:

npm install react-i18next i18next

Structure:

translations/
├── hu.json
└── en.json

Components use:

const { t } = useTranslation();

"t()" retrieves text from the current language file.

Example:

t("navbar.home")

can show:

HU:
Kezdőlap

EN:
Home`,
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },

  {
    id: "social-media",

    title: "Social media Icons",

    category: "React",

    difficulty: "easy",

    sections: [
      {
        title: "Icons",
        content: `SocialLinks component

Reusable component for external business profiles.

Uses:
react-icons

Run:
npm install react-icons

Advantages:
- no image files
- scalable icons
- easy styling
- reusable across projects

Used in:
- Navbar
- Footer
- Contact sections`,
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },
  //////////////////////////////////////Vizsga/////////////////////////
  {
    id: "fanktion",

    title: "Functions",

    category: "Vizsga",

    difficulty: "mid",

    sections: [
      {
        title: "Description",
        content: `1) 
"What does this code log?
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4));"
A = 12
Calling multiply(3, 4) passes 3 as a and 4 as b; the function returns a * b, which is 12. Arguments are matched to parameters by position.

2) 
What does this function call return?
function greet(name) {
  console.log("Hello " + name);
}

const result = greet("Sam");
A=undefined
greet logs to the console but has no return statement, so it returns undefined. Logging a value and returning a value are two different things — a very common early mix-up.

3)
Why does this code work?
sayHi();

function sayHi() {
  console.log("Hi!");
}

A=Function declarations are hoisted with their full definition, so they can be called before they appear in the code
Unlike variables, function declarations (function name() {...}) are hoisted along with their entire body — not just the name — so calling them earlier in the file works. Function expressions (const sayHi = function() {...}) do NOT get this benefit.

4)
Which of these are valid ways to define a function in JavaScript? (Select all that apply.)

const add = (a, b) => a + b;
function add(a, b) { return a + b; }
const add = function (a, b) { return a + b; };
Correct!

Function declarations, arrow functions, and function expressions are all valid JavaScript. The last one (def add(a, b): return a + b) is Python syntax.

5)
Higher-order functions are functions that take another function as an argument, return a function, or both.

True is Correct!

That's the definition. map, filter and reduce are all higher-order functions because each one accepts a callback function as an argument.

6)

What does this code log?

let count = 1;

function increment() {
  let count = 100;
  count++;
}

increment();
console.log(count);

1 is Correct!

The count inside increment() is a separate local variable that shadows the outer/global count — changing it has no effect outside the function. The global count is never touched, so it still logs 1.

7)

In this code, what is "callback"?

function processOrder(orderId, callback) {
  console.log("Processing order", orderId);
  callback();
}

processOrder(42, () => console.log("Done!"));

A callback function — a function passed as an argument to another function, to be invoked from inside it

Correct!

A callback is simply a function handed to another function as an argument, so it can be called ("called back") at the right moment — here, after the order is logged as processing.

8)



`,
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },
  {
    id: "Express",

    title: "Express",

    category: "Vizsga",

    difficulty: "high",

    sections: [
      {
        title: "Description",
        content: `1) In this Express endpoint, where does the value of "req.params.id" come from?
app.get("/api/users/:id", (req, res) => {
  res.json({ userId: req.params.id });
});

A = From the URL, e.g. /api/users/42 gives "42"


:id in the route path is a URL parameter — a placeholder that matches whatever appears in that URL segment. A request to /api/users/42 makes req.params.id equal to the string "42".

2)

A POST endpoint receives req.body as undefined. Which of these could be the cause? (Select all that apply.)

A = 
The client did not send a Content-Type: application/json header
app.use(express.json()) middleware is missing


express.json() is the middleware that parses the incoming JSON body — without it (or without the correct Content-Type header on the request) req.body stays undefined. app.post is correct for a POST, and a wrong port would fail the request entirely, not just the body.

3)

What does calling next() do inside an Express middleware function?
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);

A = It passes control on to the next middleware or route handler in the chain

Middleware functions run in sequence. Calling next() hands off control to whatever comes after — the next middleware, or the matching route handler. If a middleware never calls next() (or sends a response), the request just hangs.

4)

What does this line configure?
app.use(express.static("public"));

A = It serves files directly from the public/ folder (e.g. public/logo.png becomes reachable at /logo.png)


express.static("public") tells Express to serve any file inside the public folder directly, matching the request path to the file path — no route handler needed for each asset.

5)

In basic client-server communication, what does the server send back after receiving an HTTP request?

A = An HTTP response, containing a status code, headers, and usually a body

The client sends a request (method, URL, headers, maybe a body); the server processes it and sends back a response with a status code (like 200 or 404), response headers, and typically a body containing the requested data or an error message.

6)

What is Express.js, and why do people use it instead of Node's built-in "http" module directly?
 
A = A minimal web framework for Node.js that simplifies routing, middleware, and request/response handling

Raw Node's http module requires you to manually parse URLs, methods, and bodies. Express layers a much simpler API on top — defining routes with app.get/app.post, and composing behavior with middleware — without hiding that it's still just Node underneath.

7)

What is the main difference between res.send() and res.json()?

A = res.json() always serializes the given value to a JSON string and sets the Content-Type header accordingly; res.send() is more general and infers the content type from what you pass it


res.json(data) explicitly serializes data as JSON and sets the correct Content-Type: application/json header. res.send() is more flexible (strings, buffers, objects) and tries to infer the right content type, but res.json() is the clearer, more explicit choice for APIs.

8)

Which of these are middleware functions that ship built into Express itself? (Select all that apply.)

A = 
express.json()
express.urlencoded()
express.static()


express.json(), express.static(), and express.urlencoded() are all built into Express. cors() is a popular but separate third-party package (the cors npm package) that must be installed and imported on its own.

`,
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },
  {
    id: "Questions",

    title: "Questions",

    category: "Vizsga",

    difficulty: "MT",

    sections: [
      {
        title: "Description",
        content: `
"What does npm install do?"

Installs the project's dependencies specified in package.json.

"What does npm run dev do?"

Runs the project's development script, commonly starting a development server such as Vite.

"Why does React often use Vite?"

Because React applications commonly need tooling to process JSX, resolve modules/dependencies, provide a development server, hot reload, and create production builds.

"What does npm run build do?"

Creates an optimized production version of the application.

"What is Live Server?"

A simple local development web server that serves your static files and can automatically reload when they change.


1. What is Express?

Express is a Node.js framework for creating web servers and APIs.

Without Express, Node.js can create a server, but you'd have to handle a lot of things manually.

////GET is normally used to retrieve data.

app.get("/api/users", (req, res) => {
  res.json(users);
});

Frontend
const res = await fetch("/api/users");
const data = await res.json();

////POST is generally used to create something.

For example:

app.post("/api/users", (req, res) => {
  const newUser = req.body;


  users.push(newUser);


  res.status(201).json(newUser);
});

await fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Mark",
    age: 32
  })
});


        `,
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },
  {
    id: "Workbook",

    title: "Workbook",

    category: "Workbook",

    difficulty: "high",

    sections: [
      {
        title: "Description",
        content: `


**State:** a komponens saját, időben változó memóriája. Setterrel frissítve új renderelést kér.

**Props:** kívülről, a szülőtől kapott adat. A fogadó komponens számára csak olvasható.
        
      
# Web Module – kidolgozott Tech Interview Workbook

> A válaszok magyarul készültek, hogy könnyebb legyen belőlük felkészülni. Az eredeti angol kérdések megmaradtak. A **Vizsgán röviden** részeket érdemes először megtanulni, utána a példák segítségével megérteni a működést.

## Kiemelt vizsgatémák

A vizsgáról kapott információk alapján ezekre különösen figyelj:

- problémamegoldás: előbb mondd el, mit szeretnél megoldani, csak utána kezdj kódolni;
- higher-order functionök: főleg \`map\`, \`filter\`, \`reduce\`, valamint hogy mikor melyiket használjuk;
- HTTP request és response, státuszkódok, kliens–szerver kommunikáció;
- \`fetch\`, aszinkron működés és hibakezelés;
- hibakeresés a böngésző Console és Network paneljén;
- React komponensek, props, state, eseménykezelés, conditional rendering, \`useEffect\`;
- kliensoldali CRUD Reactből;
- Firebase Realtime Database és Firebase Authentication.

## Gyors hibakeresési sorrend a vizsgán

1. Fogalmazd meg, mi a várt működés és mi történik helyette.
2. Nézd meg a **Console** panelt: van-e JavaScript-hiba vagy saját \`console.log\` eredmény.
3. Nézd meg a **Network** panelt: elindult-e a kérés, jó-e a method és az URL.
4. Ellenőrizd a request payloadot/bodyt és a request headereket.
5. Ellenőrizd a response státuszkódját és bodyját.
6. Ha nincs kérés, keresd a hibát az eseménykezelőben vagy a \`fetch\` meghívása előtt.
7. Ha \`4xx\` választ kapsz, általában a kérés vagy a jogosultság hibás. Ha \`5xx\` választ kapsz, általában a szerveren történt hiba.
8. Reactben ellenőrizd a state aktuális értékét, a komponens feltételeit és azt, hogy nem módosítottad-e közvetlenül a state-et.

---

## Javascript Language Features

### 1. What is ECMAScript? What is the difference between JavaScript & ECMAScript?

**Vizsgán röviden:** Az ECMAScript a JavaScript nyelvi szabványa, a JavaScript pedig ennek egy megvalósítása, amelyet például a böngészők és a Node.js futtatnak.

Az ECMAScript leírja többek között a szintaxist, az adattípusokat, az operátorokat, a függvényeket és az objektumok működését. A JavaScript az ECMAScript szabvány mellett környezetfüggő API-kat is használ. Böngészőben ilyen például a DOM és a \`fetch\`; Node.js-ben például a fájlkezelés. Ezek nem magának az ECMAScript nyelvnek a részei.

### 2. Explain the concept of "block scoping" introduced in ES6. How does it differ from function scoping?

**Vizsgán röviden:** A \`let\` és a \`const\` blokkhatókörű, ezért csak a legközelebbi \`{ }\` blokkon belül érhető el. A \`var\` függvényhatókörű, ezért egy \`if\` vagy \`for\` blokk nem zárja el.

\`\`\`js
if (true) {
  let message = "hello";
  var oldMessage = "hello";
}

// console.log(message); // ReferenceError
console.log(oldMessage); // "hello"
\`\`\`

A \`let\` és \`const\` használata csökkenti a véletlen felülírás és a túl nagy hatókör veszélyét. A \`const\` változóhoz nem rendelhető új érték, de egy benne tárolt objektum tartalma ettől még módosítható.

### 3. What are template literals in ES6 and how do they improve string manipulation?

**Vizsgán röviden:** A template literal backtickkel írt szöveg, amelyben \`\${...}\` segítségével JavaScript-kifejezéseket helyezhetünk el, és több sort is egyszerűen kezelhetünk.

\`\`\`js
const name = "Noémi";
const points = 12;
const text = \`\${name} pontszáma: \${points * 2}\`;
\`\`\`

Olvashatóbb, mint a sok \`+\` operátoros összefűzés, és a behelyettesítésnél bármilyen kifejezés kiértékelhető.

### 4. What is the "spread operator" in ES6 and how can it be used with arrays and objects?

**Vizsgán röviden:** A spread szintaxis (\`...\`) elemekre vagy tulajdonságokra bont egy tömböt vagy objektumot. Másolatkészítésre, összefűzésre és React state immutábilis frissítésére használjuk.

\`\`\`js
const numbers = [1, 2];
const moreNumbers = [...numbers, 3];

const user = { name: "Noémi", city: "Budapest" };
const updatedUser = { ...user, city: "Pécs" };
\`\`\`

Ez csak **sekély másolat**: a beágyazott objektumok referenciája változatlan marad.

### 5. Explain destructuring assignment.

**Vizsgán röviden:** A destructuring segítségével tömbértékeket vagy objektumtulajdonságokat bontunk külön változókba rövid szintaxissal.

\`\`\`js
const user = { name: "Noémi", age: 25 };
const { name, age } = user;

const colors = ["red", "blue"];
const [firstColor, secondColor] = colors;
\`\`\`

Átnevezés és alapérték is használható:

\`\`\`js
const { name: userName, role = "user" } = user;
\`\`\`

Reactben gyakori példa a \`const [count, setCount] = useState(0)\` tömbdestrukturálás és a props objektum destrukturálása.

### 6. How do default function parameters work?

**Vizsgán röviden:** Alapértelmezett paraméterértéket akkor kap a paraméter, ha az argumentum hiányzik vagy értéke \`undefined\`.

\`\`\`js
function greet(name = "Vendég") {
  return \`Szia, \${name}!\`;
}

greet(); // "Szia, Vendég!"
greet("Noémi"); // "Szia, Noémi!"
\`\`\`

A \`null\` nem aktiválja az alapértéket, mert az külön, szándékosan megadott érték.

### 7. Explain ES6 modules. How do they improve organization and reusability?

**Vizsgán röviden:** A modulok külön fájlokra bontják a kódot. Az \`export\` tesz valamit elérhetővé, az \`import\` pedig egy másik fájlban betölti azt.

\`\`\`js
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
\`\`\`

Ezzel elkülöníthető például az API-kezelés, a komponensek és az üzleti logika. A modul saját hatókörrel rendelkezik, újrahasználható és könnyebben tesztelhető.

### 8. Compare CommonJS and ES6 modules.

**Vizsgán röviden:** A CommonJS tipikus szintaxisa a \`require()\` és \`module.exports\`, az ES module-é az \`import\` és \`export\`. A böngészők szabványos modulrendszere az ESM.

\`\`\`js
// CommonJS
const express = require("express");
module.exports = myFunction;

// ES module
import express from "express";
export default myFunction;
\`\`\`

Az ESM importjai statikusan elemezhetők, támogatják a named és default exportot, valamint a top-level \`await\` lehetőségét. Node.js-ben ESM-hez gyakran \`"type": "module"\` szerepel a \`package.json\`-ban vagy \`.mjs\` kiterjesztést használunk. A CommonJS hagyományosan szinkron betöltésre épül és főleg Node.js-ben terjedt el.

### 9. What are higher-order functions in JavaScript?

**Vizsgán röviden:** Higher-order function az a függvény, amely egy másik függvényt paraméterként fogad, függvényt ad vissza, vagy mindkettőt teszi.

\`\`\`js
const numbers = [1, 2, 3];
const doubled = numbers.map((number) => number * 2);
\`\`\`

Itt a \`map\` higher-order function, a nyílfüggvény pedig callback. Ilyen a \`filter\`, \`reduce\`, \`forEach\`, \`find\` és sok eseménykezelő API is.

### 10. Explain \`map\`. How does it differ from \`filter\` and \`reduce\`?

**Vizsgán röviden:**

- \`map\`: minden elemet átalakít, és ugyanannyi elemű új tömböt ad;
- \`filter\`: feltétel alapján kiválogat elemeket, ezért az eredmény rövidebb is lehet;
- \`reduce\`: az egész tömbből egyetlen eredményt készít, például összeget, objektumot vagy tömböt.

\`\`\`js
const numbers = [1, 2, 3, 4];

numbers.map((n) => n * 2);              // [2, 4, 6, 8]
numbers.filter((n) => n % 2 === 0);     // [2, 4]
numbers.reduce((sum, n) => sum + n, 0); // 10
\`\`\`

A \`map\` visszatérési értékét használni kell. Ha csak mellékhatást akarunk, például logolást, inkább \`forEach\` való rá.

### 11. How can \`filter\` selectively extract elements? Give an example.

**Vizsgán röviden:** A \`filter\` callbackje minden elemre \`true\` vagy \`false\` értéket ad. Csak azok az elemek kerülnek az új tömbbe, amelyeknél az eredmény igaz.

\`\`\`js
const products = [
  { name: "Bor A", stock: 4 },
  { name: "Bor B", stock: 0 },
  { name: "Bor C", stock: 8 },
];

const availableProducts = products.filter((product) => product.stock > 0);
\`\`\`

Az eredeti \`products\` tömb nem változik.

### 12. What is the role of \`reduce\`? Give an aggregation example.

**Vizsgán röviden:** A \`reduce\` egy akkumulátorban gyűjti az eredményt. Minden elemnél az előző akkumulátor és az aktuális elem alapján új akkumulátort adunk vissza.

\`\`\`js
const prices = [1000, 2500, 500];
const total = prices.reduce((sum, price) => sum + price, 0);
// 4000

const maximum = prices.reduce(
  (max, price) => Math.max(max, price),
  -Infinity,
);
\`\`\`

A második argumentum a kezdőérték. Érdemes megadni, mert egy üres tömb kezdőérték nélkül hibát okoz.

**Hivatalos dokumentáció:** [ECMAScript specification](https://tc39.es/ecma262/), [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), [Node.js module systems](https://nodejs.org/api/modules.html)

---

## Fetch

### 1. How does a query string parameter contribute to web application functionality?

**Vizsgán röviden:** A query string az URL \`?\` utáni \`kulcs=érték\` része. Szűrést, keresést, rendezést, lapozást vagy más opcionális beállítást küldhetünk vele.

\`\`\`text
/api/products?type=red&limit=10
\`\`\`

Expressben az értékek a \`req.query\` objektumban érhetők el. A query paraméterek szövegként érkeznek, ezért például egy számot szükség esetén át kell alakítani. Nem alkalmasak jelszó vagy titkos adat küldésére, mert az URL látható és naplózható.

### 2. What is the purpose and functionality of \`fetch\`?

**Vizsgán röviden:** A \`fetch\` HTTP-kérést indít és egy \`Promise<Response>\` objektumot ad vissza. API-adatok lekérésére és CRUD-kérések küldésére használjuk.

\`\`\`js
const response = await fetch("/api/products");
const products = await response.json();
\`\`\`

Alapértelmezés szerint \`GET\` kérést küld. Más method, header vagy body a második argumentumban adható meg.

### 3. Compare \`async/await\` with \`.then()\` and \`.catch()\`.

Mindkettő Promise-okon alapul.

\`\`\`js
// async/await
async function loadProducts() {
  try {
    const response = await fetch("/api/products");
    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

\`\`\`js
// then/catch
fetch("/api/products")
  .then((response) => {
    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
\`\`\`

**Vizsgán röviden:** Az \`async/await\` általában lineárisabb és könnyebben olvasható, főleg több egymásra épülő kérésnél. Hibát \`try/catch\` kezel. A \`.then()\` láncolható és ugyanazt az aszinkron működést valósítja meg.

### 4. What is asynchronicity in JavaScript? Typical use cases?

**Vizsgán röviden:** Aszinkron működésnél egy hosszabb művelet eredményére nem áll le az egész program. A JavaScript később folytatja a hozzá tartozó callback vagy Promise feldolgozását.

Tipikus példák:

- hálózati kérés \`fetch\`-sel;
- fájlolvasás Node.js-ben;
- adatbázis-művelet;
- időzítő (\`setTimeout\`);
- felhasználói események;
- Firebase-adatváltozás figyelése.

Az \`await\` csak az adott \`async\` függvény folytatását várakoztatja; a böngésző ettől még képes eseményeket kezelni és kirajzolni.

### 5. How can you handle a \`fetch\` response?

Először a response metaadatait ellenőrizzük, majd aszinkron módon kiolvassuk a bodyt.

\`\`\`js
const response = await fetch("/api/users");

console.log(response.status);
console.log(response.headers.get("content-type"));

if (!response.ok) {
  throw new Error(\`Request failed: \${response.status}\`);
}

const users = await response.json();
\`\`\`

Body-feldolgozó metódus például a \`.json()\`, \`.text()\`, \`.blob()\` és \`.formData()\`. A response body stream, ezért normál esetben csak egyszer olvassuk ki.

### 6. How does \`fetch\` handle errors and HTTP status codes?

**Vizsgán röviden:** A \`fetch\` hálózati hiba esetén rejectelődik, de egy \`404\` vagy \`500\` válasz önmagában nem dob hibát. Ezeket a \`response.ok\` vagy \`response.status\` alapján nekünk kell kezelni.

\`\`\`js
async function getUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(\`Server error: \${response.status}\`);
    }

    return await response.json();
  } catch (error) {
    console.error("Network or processing error:", error);
    throw error;
  }
}
\`\`\`

Jó felületen külön state-et tartunk például \`loading\`, \`error\` és \`data\` számára, hogy a felhasználó visszajelzést kapjon.

### 7. Explain the parts of a URL.

Példa:

\`\`\`text
https://example.com:8080/api/products/12?type=red#details
\`\`\`

- \`https\` – scheme/protokoll;
- \`example.com\` – host/domain;
- \`8080\` – port;
- \`/api/products/12\` – path;
- \`?type=red\` – query string;
- \`#details\` – fragment, amelyet a böngésző kezel, és normál HTTP-kérésben nem küld el a szervernek;
- \`https://example.com:8080\` együtt az origin.

**Hivatalos dokumentáció:** [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response), [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams), [What is a URL?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)

---

## Responsive Design

### 1. What does responsive design do? Why is it important?

**Vizsgán röviden:** A responsive design biztosítja, hogy a weboldal különböző képernyőméreteken és eszközökön használható és jól olvasható maradjon.

Nem egyszerűen „összenyomja” az asztali oldalt: a tartalom, elrendezés, navigáció, képek és érintési felületek alkalmazkodnak a rendelkezésre álló helyhez. Fontos a felhasználói élmény, a hozzáférhetőség és azért is, mert sok felhasználó mobilról böngészik.

### 2. What is a mobile-first approach?

**Vizsgán röviden:** Először a kis képernyőre írjuk meg az alapstílust, majd \`min-width\` media querykkel bővítjük nagyobb nézetekre.

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 48rem) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

Ez segít először a legfontosabb tartalomra és a szűkebb helyre koncentrálni.

### 3. How can you test different screen sizes in the browser?

A DevTools megnyitása után a **Device Toolbar / Toggle device emulation** segítségével állíthatunk be mobilméretet, tájolást és egyedi viewportot. A böngészőablak kézi átméretezése is hasznos. Nem csak előre megadott telefonokon kell tesztelni: lassan húzzuk a szélességet, és ott válasszunk breakpointot, ahol a tartalom ténylegesen szétesik.

### 4. Techniques for responsive design

- rugalmas Flexbox és Grid elrendezés;
- relatív mértékegységek, például \`%\`, \`rem\`, \`vw\`;
- \`max-width: 100%\` a képeken;
- \`flex-wrap\` és \`gap\`;
- media queryk;
- mobile-first CSS;
- megfelelő viewport meta tag;
- tartalom alapján választott breakpointok;
- responsive képek (\`srcset\`, \`picture\`) szükség esetén.

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
\`\`\`

### 5. What do media queries do? How do they work?

**Vizsgán röviden:** A media query csak akkor alkalmaz egy CSS-blokkot, ha a megadott feltétel igaz, például a viewport legalább adott szélességű.

\`\`\`css
@media (min-width: 768px) {
  .sidebar {
    display: block;
  }
}
\`\`\`

Nem csak szélesség, hanem például orientáció, felhasználói mozgáscsökkentési preferencia vagy nyomtatási mód is vizsgálható.

### 6. How would you define Flexbox?

**Vizsgán röviden:** A Flexbox egydimenziós CSS layout rendszer. Egy sorban vagy oszlopban rendezi a közvetlen gyerekelemeket, és segít a helyelosztásban, igazításban és térköz kezelésében.

A containeren adjuk meg például a \`display: flex\`, \`flex-direction\`, \`justify-content\`, \`align-items\`, \`flex-wrap\` és \`gap\` tulajdonságokat. A főtengely irányát a \`flex-direction\` határozza meg; a kereszttengely erre merőleges.

### 7. How can you debug Flexbox in the browser?

Az Elements/Inspector panelen kijelöljük a flex containert. A böngésző Flex jelvénye vagy Layout panelje megmutatja a fő- és kereszttengelyt, a gapeket és az elemek határait. Ellenőrizzük:

- valóban a szülőn van-e a \`display: flex\`;
- melyek a közvetlen gyerekek;
- mi a \`flex-direction\`;
- van-e fix szélesség, \`min-width\` vagy overflow;
- mely szabályt írta felül egy másik CSS-szabály.

### 8. Difference between a Flexbox container and item

**Vizsgán röviden:** A flex container az az elem, amelyen \`display: flex\` van. A közvetlen gyerekei a flex itemek.

A container tulajdonságai az elemek közös elrendezését vezérlik. Az item saját tulajdonságai, például \`flex-grow\`, \`flex-shrink\`, \`flex-basis\`, \`align-self\` és \`order\`, az adott elem viselkedését szabályozzák. Egy flex item maga is lehet egy másik flex container.

**Hivatalos dokumentáció:** [Responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), [Media queries](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries), [Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)

---

## Object Oriented Javascript

### 1. Difference between class syntax and constructor function syntax

**Vizsgán röviden:** Mindkettő prototípus-alapú objektumokat hoz létre. A \`class\` modernebb, olvashatóbb szintaxis, de a háttérben továbbra is prototípusok működnek.

\`\`\`js
// Constructor function
function User(name) {
  this.name = name;
}
User.prototype.greet = function () {
  return \`Szia, \${this.name}!\`;
};

// Class syntax
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return \`Szia, \${this.name}!\`;
  }
}
\`\`\`

A class nem hívható meg \`new\` nélkül, a class törzse strict módban fut, és az öröklés szintaxisa egyszerűbb.

### 2. What does the \`new\` keyword do?

Egyszerűsítve a \`new\`:

1. létrehoz egy új objektumot;
2. az objektum prototípusát a konstruktor \`prototype\` objektumához kapcsolja;
3. a konstruktort az új objektummal mint \`this\` hívja meg;
4. normál esetben visszaadja az új objektumot.

\`\`\`js
const noemi = new User("Noémi");
\`\`\`

### 3. What does a \`constructor\` method do? When is it executed?

**Vizsgán röviden:** A class \`constructor\` metódusa az új példány kezdeti beállítására szolgál, és a \`new ClassName(...)\` végrehajtásakor fut le.

\`\`\`js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
\`\`\`

Egy classban csak egy \`constructor\` lehet. Leszármazott class konstruktorában a \`super()\` hívása szükséges, mielőtt a \`this\` használható.

### 4. What are class methods?

Az instance metódusokat a class törzsében definiáljuk, és a példányokon hívjuk meg. Ezek a class \`prototype\` objektumán osztoznak, nem készül belőlük külön példány minden objektumhoz.

\`\`\`js
class Cart {
  getTotal() {
    return 1000;
  }

  static createEmpty() {
    return new Cart();
  }
}
\`\`\`

A \`static\` metódus a classon hívható (\`Cart.createEmpty()\`), nem a példányon.

### 5. What are class fields?

**Vizsgán röviden:** A field a példány vagy a class adata. A public instance field minden példányon külön tulajdonságként jön létre.

\`\`\`js
class Player {
  score = 0;
  #secret = "hidden";
  static gameName = "RPG";
}
\`\`\`

- \`score\`: nyilvános példánymező;
- \`#secret\`: privát mező, csak a class törzsén belül érhető el;
- \`static gameName\`: a classhoz tartozó mező.

### 6. What is inheritance in JavaScript objects?

**Vizsgán röviden:** Öröklésnél egy objektum vagy class egy másik viselkedését és tulajdonságait használhatja és tovább bővítheti. JavaScriptben ez a prototype chainen alapul.

Ha egy tulajdonság nincs az objektumon, a JavaScript megkeresi annak prototípusán, majd a prototípus prototípusán, amíg meg nem találja vagy el nem éri a \`null\` értéket.

### 7. What does \`extends\` do?

Az \`extends\` egy child classt kapcsol egy parent classhoz.

\`\`\`js
class Animal {
  speak() {
    return "hang";
  }
}

class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}
\`\`\`

A \`Dog\` példányai öröklik az \`Animal\` metódusait. A \`super()\` a szülő konstruktorát, a \`super.method()\` a szülő metódusát hívja.

**Hivatalos dokumentáció:** [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [\`new\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new), [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain), [\`extends\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

---

## Express

### 1. Explain client-server communication.

**Vizsgán röviden:** A kliens – például a böngészőben futó React alkalmazás – HTTP-kérést küld a szervernek. A szerver feldolgozza, szükség esetén adatbázist használ, majd HTTP-választ küld vissza.

\`\`\`text
Felhasználói esemény → fetch request → Express route → adatkezelés
→ HTTP response → response.json() → React state → új render
\`\`\`

A kliens és a szerver külön program lehet, gyakran külön porton fut. A kérés tartalmazza, mit szeretne a kliens; a válasz tartalmazza az eredményt és a státuszt.

### 2. Role and structure of HTTP requests and responses

**Request fő részei:**

- request line: method, URL/path, HTTP-verzió;
- headers: metaadatok, például \`Content-Type\`, \`Authorization\`;
- opcionális body: elküldött adat, például JSON.

**Response fő részei:**

- status line: HTTP-verzió és státuszkód;
- headers;
- opcionális body: HTML, JSON, kép vagy más adat.

**Vizsgán röviden:** A method és az URL jelzi a kívánt műveletet és erőforrást; a státuszkód jelzi az eredményt; a body viszi az adatot.

### 3. What is Express.js?

Az Express egy minimális Node.js web framework. Egyszerűsíti:

- a szerver indítását;
- az útvonalak és HTTP methodok kezelését;
- middleware-ek használatát;
- request adatok elérését;
- response-ok küldését;
- statikus fájlok kiszolgálását.

\`\`\`js
import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  res.json([]);
});

app.listen(8080);
\`\`\`

### 4. What are Express middlewares? Built-in examples?

**Vizsgán röviden:** A middleware a request–response ciklusban futó függvény, amely hozzáfér a \`req\`, \`res\` és \`next\` értékekhez. Feldolgozhatja a kérést, válaszolhat, vagy továbbadhatja a vezérlést.

Beépített példák:

- \`express.json()\` – JSON body feldolgozása;
- \`express.urlencoded()\` – URL-encoded form body feldolgozása;
- \`express.static()\` – statikus fájlok kiszolgálása.

Saját middleware lehet például logger, hitelesítés vagy validáció.

### 5. How do you tell Express to use middleware?

Leggyakrabban \`app.use()\` segítségével:

\`\`\`js
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
\`\`\`

Útvonalhoz is kapcsolható:

\`\`\`js
app.use("/admin", authMiddleware);
app.post("/api/orders", validateOrder, createOrder);
\`\`\`

A sorrend számít: egy middleware csak az utána következő kezelőkre hat.

### 6. How do you serve static files?

\`\`\`js
app.use(express.static("public"));
\`\`\`

Ezután a \`public/index.html\`, \`public/styles.css\` és \`public/images/logo.png\` fájlok URL-en elérhetők. A \`public\` mappanév nem kerül automatikusan az URL-be: például a kép útvonala \`/images/logo.png\`.

Virtuális prefix is megadható:

\`\`\`js
app.use("/static", express.static("public"));
\`\`\`

### 7. What does \`express.json()\` do?

**Vizsgán röviden:** Beolvassa a JSON formátumú request bodyt, JavaScript-értékké alakítja, és a \`req.body\` tulajdonságra helyezi.

\`\`\`js
app.use(express.json());

app.post("/api/users", (req, res) => {
  console.log(req.body.name);
  res.status(201).json(req.body);
});
\`\`\`

A kliensnek \`Content-Type: application/json\` headert és \`JSON.stringify(data)\` bodyt kell küldenie. Az adatot ettől még külön validálni kell.

### 8. How does Express handle the request/response cycle?

Az érkező kérés végighalad a regisztrált middleware-eken és route handlereken sorrendben. Egy handler:

- választ küld és lezárja a ciklust; vagy
- \`next()\`-tel továbbadja a vezérlést; vagy
- hiba esetén továbbítja a hibát.

Ha sem választ nem küld, sem \`next()\`-et nem hív, a kérés függőben marad. Egy kérésre csak egyszer szabad végleges választ küldeni.

### 9. How does routing work in Express?

Az útvonal a HTTP method és a path együttese.

\`\`\`js
app.get("/api/movies", getMovies);
app.post("/api/movies", createMovie);
app.patch("/api/movies/:id", updateMovie);
app.delete("/api/movies/:id", deleteMovie);
\`\`\`

Az Express a methodnak és pathnak megfelelő handlert futtatja. Nagyobb alkalmazásban \`express.Router()\` segítségével külön fájlokra bonthatjuk az útvonalakat.

### 10. Response methods; \`res.send()\` vs \`res.json()\`

- \`res.status(code)\` – státuszkód beállítása;
- \`res.send(data)\` – általános válaszküldés;
- \`res.json(value)\` – JSON válasz küldése megfelelő content type-pal;
- \`res.sendFile(path)\` – fájl küldése;
- \`res.sendStatus(code)\` – státuszkód és rövid státuszszöveg;
- \`res.redirect(url)\` – átirányítás;
- \`res.end()\` – body nélküli válasz lezárása.

**Vizsgán röviden:** A \`res.json()\` egyértelműen JSON-válaszra való. A \`res.send()\` többféle értéket képes elküldeni, és az Express az érték alapján választ típust.

### 11. Purpose of \`next()\`

**Vizsgán röviden:** A \`next()\` átadja a vezérlést a következő illeszkedő middleware-nek vagy handlernek.

\`\`\`js
function logger(req, res, next) {
  console.log(req.method, req.path);
  next();
}
\`\`\`

Ha a middleware már választ küldött, általában nem hívunk \`next()\`-et. Hibát \`next(error)\` formában továbbíthatunk az error-handling middleware felé.

### 12. Explain route parameters.

A route paraméter a path dinamikus része, kettősponttal jelöljük, és a \`req.params\` objektumból olvassuk ki.

\`\`\`js
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  // keresés id alapján
});
\`\`\`

A \`/api/users/42\` kérésnél \`req.params.id\` értéke a szöveges \`"42"\`. A route paraméter általában egy konkrét erőforrást azonosít; a query paraméter inkább opcionális szűrésre vagy beállításra való.

**Hivatalos dokumentáció:** [Express middleware](https://expressjs.com/en/guide/using-middleware/), [Express routing](https://expressjs.com/en/guide/routing/), [Serving static files](https://expressjs.com/en/starter/static-files/), [Express API](https://expressjs.com/en/api/)

---

## REST and CRUD

### 1. Typical HTTP response codes

- \`200 OK\` – sikeres kérés;
- \`201 Created\` – új erőforrás sikeresen létrejött;
- \`204 No Content\` – sikeres, de nincs response body;
- \`400 Bad Request\` – hibás kérés vagy validáció;
- \`401 Unauthorized\` – nincs érvényes hitelesítés;
- \`403 Forbidden\` – ismert felhasználó, de nincs jogosultsága;
- \`404 Not Found\` – nincs ilyen erőforrás vagy útvonal;
- \`409 Conflict\` – ütközés az aktuális állapottal, például már létező email;
- \`500 Internal Server Error\` – nem kezelt szerveroldali hiba.

**Vizsgán röviden:** A \`2xx\` siker, \`4xx\` kliensoldali kérés/jogosultsági hiba, \`5xx\` szerveroldali hiba.

### 2. Typical HTTP request/response headers

- \`Content-Type\` – a küldött body formátuma, például \`application/json\`;
- \`Accept\` – milyen válaszformátumot tud fogadni a kliens;
- \`Authorization\` – hitelesítési adat, gyakran bearer token;
- \`Location\` – új erőforrás vagy átirányítás helye;
- \`Cache-Control\` – gyorsítótárazási szabályok;
- \`Content-Length\` – body mérete;
- \`Origin\` – CORS szempontból a kérés eredete;
- \`Set-Cookie\` és \`Cookie\` – sütik beállítása és visszaküldése.

### 3. Common HTTP methods and purposes

- \`GET\` – adat lekérése;
- \`POST\` – új erőforrás létrehozása vagy feldolgozási művelet;
- \`PUT\` – erőforrás teljes cseréje a megadott reprezentációval;
- \`PATCH\` – részleges módosítás;
- \`DELETE\` – erőforrás törlése;
- \`HEAD\` – a GET-hez hasonló metaadatok body nélkül;
- \`OPTIONS\` – támogatott kommunikációs lehetőségek, CORS preflightnál is használatos.

### 4. GET vs POST; which uses a body?

**Vizsgán röviden:** A \`GET\` adatot kér le és nem kellene szerverállapotot módosítania. A \`POST\` adatot küld, gyakran új erőforrást hoz létre, és tipikusan request bodyt használ.

GET-paraméterek gyakran az URL pathban vagy query stringben vannak. A GET-kérésnek a gyakorlatban ne adjunk bodyt. A POST body lehet például JSON vagy form data.

### 5. PATCH vs PUT

**Vizsgán röviden:** A \`PUT\` általában a teljes erőforrást lecseréli, a \`PATCH\` csak a megadott mezőket módosítja.

\`\`\`js
// PATCH: csak a stock változik
fetch("/api/products/7", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ stock: 12 }),
});
\`\`\`

Ha egy teljes szerkesztő űrlap minden mezőt elküld, a \`PUT\` lehet megfelelő. Ha csak például a \`newsletter\` vagy a \`stock\` változik, a \`PATCH\` jobb választás. A pontos szerződést mindig az API dokumentációja határozza meg.

### 6. How does DELETE remove a resource?

\`\`\`js
app.delete("/api/products/:id", (req, res) => {
  // megkeresés, törlés, mentés
  res.sendStatus(204);
});
\`\`\`

A kliens a törlendő erőforrást általában az URL-ben azonosítja, ezért body nem szükséges. Siker esetén gyakori a \`204\`, vagy \`200\` a törölt objektummal. Nem létező ID-nál adható \`404\`. A DELETE idempotens: ugyanazt a törlést megismételve a kívánt végállapot továbbra is az, hogy az erőforrás nem létezik.

### 7. What is REST? What are the REST constraints?

**Vizsgán röviden:** A REST egy webes architekturális stílus, amely erőforrásokat URL-ekkel azonosít, és egységes HTTP-műveletekkel kezel.

REST constraints:

1. **Client–server:** a felület és az adatkezelés felelőssége elkülönül.
2. **Stateless:** minden kérés tartalmazza a feldolgozáshoz szükséges információt; a szerver nem támaszkodik kliens-munkamenet állapotára a kérések között.
3. **Cacheable:** a válasz jelezheti, hogy gyorsítótárazható-e.
4. **Uniform interface:** egységes erőforrás-azonosítás és reprezentációkezelés.
5. **Layered system:** a kliensnek nem kell tudnia, van-e köztes proxy, gateway vagy más réteg.
6. **Code on demand – opcionális:** a szerver futtatható kódot is küldhet a kliensnek.

Nem minden JSON API teljesen RESTful, de követheti a REST alapelveit.

### 8. What does a URL path represent? Recipe CRUD example

A path főnevekkel erőforrást vagy erőforrásgyűjteményt jelöl, nem műveleti igével.

| CRUD | HTTP method | Path | Jelentés |
|---|---|---|---|
| Create | \`POST\` | \`/api/recipes\` | új recept létrehozása |
| Read all | \`GET\` | \`/api/recipes\` | összes recept |
| Read one | \`GET\` | \`/api/recipes/:id\` | egy recept |
| Update full | \`PUT\` | \`/api/recipes/:id\` | teljes csere |
| Update partial | \`PATCH\` | \`/api/recipes/:id\` | részleges módosítás |
| Delete | \`DELETE\` | \`/api/recipes/:id\` | törlés |

Jó: \`DELETE /api/recipes/6\`. Kevésbé REST-szerű: \`GET /deleteRecipe?id=6\`.

### 9. Handling form submissions with JavaScript

\`\`\`js
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
});
\`\`\`

**Vizsgán röviden:** A \`submit\` eseményt figyeljük, a \`preventDefault()\` megakadályozza az alapértelmezett oldalújratöltést, összegyűjtjük és validáljuk az adatokat, majd \`fetch\`-sel elküldjük.

### 10. Required elements to define a form in HTML

Egy form alapja a \`<form>\` elem, benne feliratozott vezérlők és egy submit gomb.

\`\`\`html
<form id="user-form">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />
  <button type="submit">Mentés</button>
</form>
\`\`\`

Hagyományos böngészős beküldésnél az \`action\` adja meg a célt, a \`method\` pedig jellemzően \`get\` vagy \`post\`. JavaScriptes beküldésnél a kód indítja a \`fetch\`-et.

### 11. Purpose of the \`required\` attribute

A \`required\` kliensoldali HTML-validációt kér: az űrlap nem küldhető el, amíg a mező üres vagy nincs megfelelően kiválasztva. Ez felhasználói segítség, **nem biztonsági védelem**. A szervernek is kötelező validálnia, mert a kliensoldali ellenőrzés megkerülhető.

### 12. Different input types

- \`text\` – általános egysoros szöveg;
- \`number\` – numerikus bevitel, használható \`min\`, \`max\`, \`step\`;
- \`email\` – email formátumú érték böngészős ellenőrzéssel;
- \`checkbox\` – egymástól független igen/nem választások; több is bejelölhető;
- \`radio\` – azonos \`name\` értékű csoportból egy választható;
- \`password\`, \`date\`, \`file\`, \`range\` stb. – speciális bevitel.

A megfelelő típus segíti a validációt, a mobil billentyűzetet és a hozzáférhetőséget, de szerveroldali ellenőrzés továbbra is kell.

### 13. Purpose of the \`name\` attribute

**Vizsgán röviden:** Beküldéskor a \`name\` lesz az adat kulcsa, az input aktuális értéke pedig az érték.

\`\`\`html
<input name="email" value="noemi@example.com" />
\`\`\`

Az eredmény például \`email=noemi%40example.com\`. \`FormData\` is a \`name\` alapján gyűjti össze a sikeres form vezérlőket. \`name\` nélküli mező normál formbeküldéskor nem kerül az adatok közé.

### 14. Connecting a \`label\` to a form element

Az explicit kapcsolatnál a label \`for\` értéke megegyezik az input \`id\` értékével:

\`\`\`html
<label for="username">Felhasználónév</label>
<input id="username" name="username" />
\`\`\`

Így a labelre kattintva az input fókuszt kap, és a képernyőolvasó is ismeri a mező nevét. Az input a labelbe is beágyazható, de az explicit forma általában egyértelmű.

### 15. Dynamically manipulating form elements

A DOM API-val új elemet hozhatunk létre és távolíthatunk el:

\`\`\`js
const input = document.createElement("input");
input.name = "phone";
input.type = "tel";
formFields.append(input);

input.remove();
\`\`\`

Feltételek alapján módosítható a \`disabled\`, \`required\`, \`hidden\`, \`value\` vagy más tulajdonság is. Reactben ugyanezt inkább state és conditional rendering segítségével deklaratívan oldjuk meg.

### 16. Converting form data for server processing

Gyakori lehetőségek:

\`\`\`js
const formData = new FormData(form); // fájlt is kezel

const object = Object.fromEntries(formData.entries());
const json = JSON.stringify(object);

const query = new URLSearchParams(formData).toString();
\`\`\`

JSON küldésnél kell a \`Content-Type: application/json\`. \`FormData\` küldésénél ne állítsuk be kézzel a multipart \`Content-Type\` headert, mert a böngésző hozzáadja a szükséges boundary értéket.

### 17. How does the client perform a complete CRUD flow?

\`\`\`js
// CREATE
fetch("/api/users", { method: "POST", headers, body: JSON.stringify(user) });

// READ
fetch("/api/users");

// UPDATE
fetch(\`/api/users/\${id}\`, {
  method: "PATCH",
  headers,
  body: JSON.stringify({ newsletter: true }),
});

// DELETE
fetch(\`/api/users/\${id}\`, { method: "DELETE" });
\`\`\`

Minden lépésnél ellenőrizzük a \`response.ok\` értéket, majd siker után frissítjük a kliensoldali állapotot vagy újra lekérjük az adatokat.

**Hivatalos dokumentáció:** [HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods), [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status), [HTTP messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages), [HTML forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms), [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

---

## React

### 1. What is React.js and what are its key features?

**Vizsgán röviden:** A React egy JavaScript library felhasználói felületek komponensekből történő felépítésére.

Fő jellemzői:

- komponensalapú felépítés;
- deklaratív renderelés: azt írjuk le, milyen legyen a UI az aktuális adatokból;
- props a komponensek közötti adatátadáshoz;
- state az interaktív, változó adatokhoz;
- egyirányú adatfolyam szülőtől gyermek felé;
- hookok funkcionális komponensekhez;
- hatékony frissítés reconciliation segítségével.

### 2. Virtual DOM and performance

**Vizsgán röviden:** A virtual DOM a felület könnyű, memóriabeli leírása. State- vagy propsváltozáskor React új rendereredményt készít, összehasonlítja az előzővel, majd a szükséges változásokat commitolja a valódi DOM-ba.

A valódi DOM műveletek költségesebbek lehetnek, ezért a React összegyűjti és célzottan végzi a frissítéseket. Ez nem jelenti azt, hogy React minden esetben automatikusan gyorsabb; a jó state-struktúra, a megfelelő \`key\` és az indokolatlan renderek kerülése továbbra is fontos.

### 3. Component-based architecture

**Vizsgán röviden:** A komponens egy újrahasználható UI-egység, amely propsot fogadhat, saját state-et kezelhet, és JSX-et ad vissza.

\`\`\`jsx
function ProductCard({ product }) {
  return <article>{product.name}</article>;
}
\`\`\`

Komponenseket egymásba ágyazva építjük fel az alkalmazást: például \`App → ProductList → ProductCard\`. Egy komponensnek célszerű egy jól érthető felelősséget adni.

### 4. Significance of JSX

**Vizsgán röviden:** A JSX HTML-szerű szintaxis JavaScriptben, amellyel olvashatóan írhatjuk le a felületet. Build közben JavaScript-hívásokká alakul.

\`\`\`jsx
const heading = <h1 className="title">Hello, {user.name}!</h1>;
\`\`\`

A \`{}\` között JavaScript-kifejezés állhat. JSX-ben például \`className\` kell \`class\` helyett, a tageket le kell zárni, és a komponensnek egy közös gyökérelemet vagy fragmentet kell visszaadnia.

### 5. What are props?

**Vizsgán röviden:** A props a szülő komponens által a gyermeknek átadott, csak olvasható adat.

\`\`\`jsx
<PokemonCard name="Pikachu" hp={35} />
\`\`\`

A prop lehet string, szám, boolean, objektum, tömb, JSX vagy függvény. Az adatfolyam lefelé halad. A gyermek nem módosíthatja a propot; változtatási szándékot callbackkel jelezhet a szülőnek.

### 6. Accessing props with destructuring

\`\`\`jsx
function PokemonCard({ name, hp, image }) {
  return (
    <article>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>HP: {hp}</p>
    </article>
  );
}
\`\`\`

Ez rövidebb, mint a \`props.name\`, \`props.hp\` ismétlése. Destrukturálhatunk a paraméterben vagy a függvénytörzsben is.

### 7. Passing callback functions as props

A state a szülőnél marad, a gyermek eseménykor meghívja a kapott függvényt.

\`\`\`jsx
function Parent() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((current) => current + 1);
  }

  return <CounterButton onIncrease={handleIncrease} />;
}

function CounterButton({ onIncrease }) {
  return <button onClick={onIncrease}>Növelés</button>;
}
\`\`\`

**Vizsgán röviden:** A szülő függvényt ad propként, a gyermek pedig meghívja. Így a gyermek eseményt jelez felfelé, miközben a state tulajdonosa a szülő marad.

### 8. Spreading props

\`\`\`jsx
const pokemon = { name: "Pikachu", hp: 35, type: "electric" };
<PokemonCard {...pokemon} />;
\`\`\`

Ez megfelel a \`name={pokemon.name}\` stb. átadásnak. Hasznos lehet, de túlzott használata elrejti, milyen adatokat vár a komponens. Az ütköző propoknál a később megadott érték nyer:

\`\`\`jsx
<PokemonCard {...pokemon} hp={50} />
\`\`\`

### 9. Default props with ES6 syntax

Funkcionális komponensnél alapértelmezett paramétert használunk:

\`\`\`jsx
function Button({ text = "Mentés", disabled = false }) {
  return <button disabled={disabled}>{text}</button>;
}
\`\`\`

Az alapérték hiányzó vagy \`undefined\` propnál lép életbe, de \`null\` esetén nem.

### 10. Immutability of props and state

**Vizsgán röviden:** A propsot és state-et nem módosítjuk közvetlenül. Új objektumot vagy tömböt hozunk létre, majd setterrel frissítünk.

\`\`\`js
setUser((current) => ({ ...current, city: "Pécs" }));
setItems((current) => [...current, newItem]);
\`\`\`

Közvetlen módosítás, például \`user.city = "Pécs"\` vagy \`items.push(item)\`, nem jelzi megbízhatóan Reactnek a változást, mellékhatást és nehezen követhető hibát okozhat.

### 11. State management; state vs props

**State:** a komponens saját, időben változó memóriája. Setterrel frissítve új renderelést kér.

**Props:** kívülről, a szülőtől kapott adat. A fogadó komponens számára csak olvasható.

\`\`\`jsx
const [score, setScore] = useState(0);
\`\`\`

**Vizsgán röviden:** A props bemenet, a state belső memória. Ha több komponensnek ugyanazt az állapotot kell használnia, a state-et a legközelebbi közös szülőbe emeljük, majd propsként adjuk tovább.

### 12. What are hooks? \`useState\` and \`useEffect\`

**Vizsgán röviden:** A hookok \`use\` kezdetű függvények, amelyekkel funkcionális komponens React-funkciókat használhat. Csak komponens vagy custom hook legfelső szintjén hívjuk őket, nem feltételben vagy ciklusban.

- \`useState\`: értéket őriz a renderek között, a setter új rendert kér.
- \`useEffect\`: külső rendszerrel szinkronizál render után, például hálózati kérés, event listener vagy timer.

\`\`\`jsx
useEffect(() => {
  async function load() {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
  }

  load();
}, []);
\`\`\`

Az üres dependency array azt jelenti, hogy az effect a mount után fut; fejlesztői Strict Mode-ban ellenőrzési célból több futást is láthatunk. Cleanupot adunk vissza listener, timer vagy subscription megszüntetéséhez.

### 13. Virtual DOM reconciliation

A reconciliation során React az előző és az új elemfát összeveti. Azonos típusú elemeknél frissíti a szükséges propokat és gyerekeket; eltérő típusnál a régi részfa lecserélődhet. Listánál a stabil és egyedi \`key\` segít az elemek azonosságának felismerésében.

\`\`\`jsx
items.map((item) => <li key={item.id}>{item.name}</li>)
\`\`\`

Indexet csak akkor használjunk keyként, ha a lista nem rendeződik át, nem törlünk és nem szúrunk be elemeket.

### 14. Managing complex state objects

\`\`\`jsx
const [user, setUser] = useState({
  name: "Noémi",
  address: { city: "Budapest" },
});

setUser((current) => ({
  ...current,
  address: {
    ...current.address,
    city: "Pécs",
  },
}));
\`\`\`

**Vizsgán röviden:** A \`useState\` nem merge-eli automatikusan az objektumot. Megtartjuk a régi mezőket spread segítségével, és felülírjuk a változót. Beágyazott objektumnál minden módosított szinten új másolat kell. Nagyon összetett állapotnál \`useReducer\` is szóba jöhet.

### 15. Why pass a new array to the state setter?

React a state referenciáját is figyelembe veszi. Ha ugyanazt a tömböt módosítjuk és adjuk vissza, az adatváltozás nehezen követhető, és React kihagyhatja a szükséges frissítést.

\`\`\`js
// rossz
items.push(newItem);
setItems(items);

// jó
setItems((current) => [...current, newItem]);
\`\`\`

Új tömbbel megőrizzük az immutabilitást, egyértelmű a változás, és kiszámíthatóbb a renderelés.

### 16. Conditional rendering

Reactben normál JavaScript-feltételeket használunk:

\`\`\`jsx
if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;

return isLoggedIn ? <Dashboard /> : <Login />;
\`\`\`

\`\`\`jsx
{items.length === 0 && <p>Nincs találat.</p>}
\`\`\`

Használható korai \`return\`, ternary (\`condition ? A : B\`), logikai \`&&\`, vagy előre kiszámított változó. \`null\` visszaadásával semmit sem renderelünk. A UI így közvetlenül az aktuális state-ből következik.

### 17. Controlled vs uncontrolled input

**Controlled:** az input értékének forrása React state, a változást \`onChange\` kezeli.

\`\`\`jsx
const [name, setName] = useState("");
<input value={name} onChange={(event) => setName(event.target.value)} />
\`\`\`

**Uncontrolled:** az aktuális értéket a DOM tartja, React csak például \`defaultValue\`-t ad.

\`\`\`jsx
<input name="name" defaultValue="Noémi" />
\`\`\`

Controlled inputnál könnyű azonnal validálni és más UI-t frissíteni. Uncontrolled input egyszerűbb lehet, ha csak submitkor kell az adat.

### 18. Getting current values from uncontrolled inputs

Submitkor \`FormData\` használható:

\`\`\`jsx
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const values = Object.fromEntries(formData.entries());
  console.log(values);
}

<form onSubmit={handleSubmit}>...</form>
\`\`\`

Egy konkrét DOM-elemhez \`useRef\` is használható, de teljes formhoz a \`FormData\` általában kényelmesebb. Minden elküldendő vezérlőnek legyen \`name\` attribútuma.

### 19. Connecting label and input in React

JSX-ben \`htmlFor\` kell, mert a \`for\` JavaScript kulcsszó:

\`\`\`jsx
<label htmlFor="email">Email</label>
<input id="email" name="email" type="email" />
\`\`\`

Az \`htmlFor\` értéke az input \`id\` értékére mutat.

### 20. Select input; controlled and uncontrolled examples

A React \`<select>\` ugyanazt a böngészős elemet rendereli, de controlled esetben a \`value\` a selecten van, nem az egyes optionök \`selected\` attribútumán.

\`\`\`jsx
// Controlled
const [type, setType] = useState("white");

<select value={type} onChange={(event) => setType(event.target.value)}>
  <option value="red">Vörös</option>
  <option value="white">Fehér</option>
</select>
\`\`\`

\`\`\`jsx
// Uncontrolled
<select name="type" defaultValue="white">
  <option value="red">Vörös</option>
  <option value="white">Fehér</option>
</select>
\`\`\`

Controllednál \`value\` + \`onChange\`, uncontrollednál \`defaultValue\` használatos.

### 21. How does a proxy work in React development with Vite?

Fejlesztéskor a frontend például \`localhost:5173\`, a backend pedig \`localhost:8080\` alatt fut. A Vite proxy a frontendhez érkező \`/api\` kéréseket továbbítja a backendnek.

\`\`\`js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
});
\`\`\`

A klienskódban relatív URL-t használunk:

\`\`\`js
fetch("/api/products");
\`\`\`

**Vizsgán röviden:** A böngésző a Vite szerverhez kér, Vite továbbít a backendhez. Ez fejlesztési beállítás; productionben a hosting/proxy szerkezetét külön kell konfigurálni.

### 22. Statements vs expressions; why important in JSX?

**Expression:** értéket állít elő, például \`price * 2\`, \`user.name\`, \`condition ? A : B\`, \`items.map(...)\`.

**Statement:** műveletet vezérel, de nem használható közvetlen értékként, például \`if\`, \`for\`, \`switch\`, változódeklaráció.

JSX \`{}\` között expression állhat:

\`\`\`jsx
<p>{isAdmin ? "Admin" : "User"}</p>
\`\`\`

Ez nem jó közvetlenül:

\`\`\`jsx
// <p>{if (isAdmin) { ... }}</p>
\`\`\`

Az \`if\` statementet a \`return\` előtt használjuk, vagy ternary expressionre alakítjuk.

### 23. How should you fetch data and debug it in React?

Tipikus minta:

\`\`\`jsx
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  async function loadProducts() {
    try {
      const response = await fetch("/api/products");
      if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  loadProducts();
}, []);
\`\`\`

Hibakereséskor nézd meg a Network panelen az URL-t, methodot, státuszt és response bodyt. A Console panelen ellenőrizd a hibát és az adat alakját. Ha például \`data.results\` helyett \`data\` tömb érkezik, a rossz state-beállítás később \`map is not a function\` hibát okozhat.

**Hivatalos dokumentáció:** [React Learn](https://react.dev/learn), [Passing props](https://react.dev/learn/passing-props-to-a-component), [State](https://react.dev/learn/state-a-components-memory), [Effects](https://react.dev/learn/synchronizing-with-effects), [Updating objects](https://react.dev/learn/updating-objects-in-state), [Updating arrays](https://react.dev/learn/updating-arrays-in-state), [Vite proxy options](https://vite.dev/config/server-options.html#server-proxy)

---

## Testing Basics

### 1. What is a test case?

**Vizsgán röviden:** A test case egy meghatározott bemenetet vagy helyzetet futtat, majd ellenőrzi a várt eredményt.

\`\`\`js
test("két számot összead", () => {
  expect(add(2, 3)).toBe(5);
});
\`\`\`

Jó teszteset neve megmondja, milyen viselkedést ellenőriz. Érdemes normál, szélső és hibás bemeneteket is tesztelni.

### 2. Advantages of unit tests

- gyorsan jelzik a regressziót;
- biztonságosabbá teszik a refaktorálást;
- dokumentálják az elvárt működést;
- kis egységben segítik a hibakeresést;
- rákényszerítenek a jól elkülöníthető logikára;
- automatizálhatók CI folyamatban.

A teszt nem bizonyítja, hogy nincs hiba; csak a megírt esetek viselkedését ellenőrzi.

### 3. What is an assertion?

Az assertion összehasonlítja a tényleges és az elvárt eredményt. Ha a feltétel nem teljesül, a teszt elbukik.

\`\`\`js
expect(total).toBe(4000);
expect(user).toEqual({ name: "Noémi" });
expect(items).toHaveLength(3);
expect(() => parseBadData()).toThrow();
\`\`\`

### 4. Arrange / Act / Assert pattern

\`\`\`js
test("kedvezményt számol", () => {
  // Arrange – előkészítés
  const price = 1000;

  // Act – vizsgált művelet
  const result = applyDiscount(price, 20);

  // Assert – ellenőrzés
  expect(result).toBe(800);
});
\`\`\`

**Vizsgán röviden:** Előkészítjük a bemenetet, végrehajtjuk a műveletet, majd ellenőrizzük az eredményt.

### 5. What is code coverage? Why is it used?

A coverage megmutatja, hogy a tesztek a kód mekkora részét futtatták: például sorok, függvények, statementek és ágak százalékát. Segít megtalálni a nem tesztelt területeket.

Magas coverage nem jelent automatikusan jó teszteket. Egy sor lefuttatható úgy is, hogy a helyes eredményt nem ellenőrizzük. A coverage iránytű, nem önmagában minőségi cél.

### 6. Testing asynchronous code with Vitest

A tesztfüggvény legyen \`async\`, és várjuk meg a Promise-t:

\`\`\`js
test("betölti a felhasználót", async () => {
  const user = await getUser(1);
  expect(user.name).toBe("Noémi");
});
\`\`\`

Elutasított Promise:

\`\`\`js
await expect(getUser(-1)).rejects.toThrow("Invalid id");
\`\`\`

Ha lemarad az \`await\` vagy a Promise visszaadása, a teszt túl korán befejeződhet.

### 7. Setup and teardown in Vitest

- \`beforeEach\` – minden teszt előtt;
- \`afterEach\` – minden teszt után;
- \`beforeAll\` – a suite előtt egyszer;
- \`afterAll\` – a suite után egyszer.

\`\`\`js
beforeEach(() => {
  cart = new Cart();
});

afterEach(() => {
  vi.restoreAllMocks();
});
\`\`\`

Setupban ismert kezdőállapotot készítünk; teardownban takarítunk, például mockot, timert vagy kapcsolatot állítunk vissza.

### 8. \`toBe\` vs \`toEqual\`

**Vizsgán röviden:** A \`toBe\` \`Object.is\` jellegű azonosságot vizsgál, ezért primitív értékekhez és ugyanazon objektumreferenciához jó. A \`toEqual\` objektumok és tömbök tartalmát mélyen hasonlítja össze.

\`\`\`js
expect(2 + 3).toBe(5);

const result = { name: "Noémi" };
expect(result).toEqual({ name: "Noémi" });
\`\`\`

Két külön létrehozott, azonos tartalmú objektum \`toEqual\` szerint egyezik, \`toBe\` szerint nem ugyanaz a referencia.

**Hivatalos dokumentáció:** [Writing tests](https://vitest.dev/guide/learn/writing-tests.html), [Matchers](https://vitest.dev/guide/learn/matchers), [Async tests](https://vitest.dev/guide/learn/async), [Setup and teardown](https://vitest.dev/guide/learn/setup-teardown), [Coverage](https://vitest.dev/guide/coverage)

---

## Firebase Realtime Database

### 1. What is Firebase Realtime Database?

**Vizsgán röviden:** A Firebase Realtime Database egy felhőben futó NoSQL adatbázis, amely JSON-faként tárol adatot, és valós időben szinkronizálja a változásokat a kapcsolódó kliensekkel.

Előnyei:

- realtime listener és automatikus frissítés;
- webes kliensből közvetlenül használható;
- Firebase Authenticationnel és Security Rules-szal integrálható;
- SDK-s offline támogatás;
- gyors prototípus és kisebb alkalmazás építhető külön saját backend nélkül.

Nem relációs adatbázis: nincsenek SQL-táblák és joinok, ezért az adatszerkezetet a szükséges lekérdezésekhez tervezzük.

### 2. How does it store data in a JSON tree?

Minden adat egyetlen gyökér alatti csomópontokból áll:

\`\`\`json
{
  "users": {
    "uid-123": {
      "name": "Noémi"
    }
  },
  "products": {
    "product-1": {
      "name": "Tokaji Furmint",
      "price": 3990
    }
  }
}
\`\`\`

Egy pathra, például \`/users/uid-123\` hivatkozunk. Objektum, tömbszerű adat, string, number, boolean és \`null\` tárolható. Listáknál inkább generált kulcsokkal rendelkező objektumstruktúrát használunk, nem klasszikus indexelt tömböt.

### 3. Access through REST API; CRUD operations

A Realtime Database REST URL végén kötelező a \`.json\`:

\`\`\`text
https://DATABASE_NAME.REGION.firebasedatabase.app/products.json
\`\`\`

| Művelet | Method | Hatás |
|---|---|---|
| Read | \`GET\` | adat lekérése |
| Create | \`POST\` | új, Firebase által generált kulcsú gyermek létrehozása |
| Replace | \`PUT\` | a megadott path teljes tartalmának cseréje |
| Partial update | \`PATCH\` | megadott gyermekmezők módosítása |
| Delete | \`DELETE\` | path törlése |

\`\`\`js
const response = await fetch(\`\${databaseUrl}/products.json\`);
const productsObject = await response.json();
\`\`\`

Védett adatnál hitelesített kérés szükséges. A Security Rules minden REST-kérésre is érvényes.

### 4. How can Security Rules define access and validate structure?

Fő szabálytípusok:

- \`.read\` – ki olvashat;
- \`.write\` – ki írhat;
- \`.validate\` – milyen alakú és típusú adat fogadható el;
- \`.indexOn\` – lekérdezéshez indexelt mezők.

\`\`\`json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid === $uid",
        ".write": "auth != null && auth.uid === $uid",
        "name": {
          ".validate": "newData.isString() && newData.val().length <= 50"
        }
      }
    }
  }
}
\`\`\`

**Vizsgán röviden:** A rules szerveroldalon kényszeríti ki a hozzáférést és validációt. A frontend ellenőrzése nem helyettesíti. A rules nem adatátalakító kód: engedélyezi vagy elutasítja a műveletet.

### 5. Why is deeply nested data a problem? Solutions?

Egy szülő csomópont lekérése a teljes alatta lévő részfát letöltheti. Mély szerkezetnél emiatt túl sok adat érkezhet, nehéz külön jogosultságot adni, és bonyolultabbak a több helyet érintő módosítások.

Megoldások:

- **flattening:** laposabb, külön felső szintű gyűjtemények;
- **denormalizálás:** szükséges adat tudatos duplikálása több lekérdezési útvonalhoz;
- az objektumok közötti kapcsolat tárolása ID-kkel;
- több path atomikus frissítése;
- a lekérdezések előzetes megtervezése;
- \`.indexOn\` használata a megfelelő mezőknél.

**Hivatalos dokumentáció:** [Realtime Database](https://firebase.google.com/docs/database), [REST API](https://firebase.google.com/docs/database/rest/start), [Read and write](https://firebase.google.com/docs/database/web/read-and-write), [Security Rules](https://firebase.google.com/docs/database/security), [Structure data](https://firebase.google.com/docs/database/web/structure-data)

---

## Firebase Authentication

### 1. Why is authentication needed?

**Vizsgán röviden:** Az authentication megállapítja, ki a felhasználó. Enélkül nem tudunk biztonságosan személyes adatot, saját profilt, rendelést vagy csak belépés után használható funkciót hozzá kötni.

Az authentikáció önmagában nem dönti el, mit tehet a felhasználó; azt az authorization kezeli.

### 2. Key functionalities of an authentication system

- regisztráció;
- bejelentkezés és kijelentkezés;
- jelszó biztonságos kezelése;
- tartós bejelentkezési állapot/session;
- email-ellenőrzés;
- jelszó-visszaállítás;
- több provider támogatása;
- tokenek létrehozása, frissítése és ellenőrzése;
- fiók tiltása vagy törlése;
- opcionálisan többfaktoros hitelesítés.

### 3. How does the server know the client is authenticated?

**Vizsgán röviden:** Sikeres belépés után a kliens egy hitelesítő tokent vagy session cookie-t kap, és ezt elküldi a következő kéréseknél. A szerver ellenőrzi az aláírást, lejáratot és a felhasználói azonosítót.

Firebase esetén a kliens Firebase ID tokent kap. Saját backendnél ezt általában így küldi:

\`\`\`http
Authorization: Bearer FIREBASE_ID_TOKEN
\`\`\`

A backend Firebase Admin SDK-val ellenőrzi. Nem elég, ha a kliens egyszerűen elküld egy \`userId\` mezőt, mert azt bárki meghamisíthatná. A Realtime Database SDK a hitelesítési állapotot automatikusan összekapcsolja a rules \`auth\` változójával.

### 4. Authentication vs Authorization

- **Authentication:** Ki vagy? Például sikeresen bejelentkezett-e Noémi.
- **Authorization:** Mit tehetsz? Például csak a saját profilodat írhatod-e, vagy admin jogosultságod van-e.

Lehet valaki hitelesített, de egy adott műveletre nem jogosult; ez tipikusan \`403 Forbidden\` helyzet.

### 5. Initializing Firebase Authentication SDK

\`\`\`js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
\`\`\`

Ezután például \`createUserWithEmailAndPassword\`, \`signInWithEmailAndPassword\`, \`signOut\` és \`onAuthStateChanged\` használható. A webes Firebase config nem helyettesíti a Security Rules-t; az adatbiztonságot nem az API key titkossága adja.

### 6. Authorization with Realtime Database Security Rules

A rules \`auth\` objektuma a hitelesített felhasználó adatait tartalmazza. Saját adathoz köthetjük a hozzáférést:

\`\`\`json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid === $uid",
        ".write": "auth != null && auth.uid === $uid"
      }
    }
  }
}
\`\`\`

Admin szerepkör custom claim vagy adatbázisbeli szerep alapján is vizsgálható, de a jogosultsági forrást biztonságosan kell kezelni. A rules a szerveren fut, ezért a kliens nem tudja kikapcsolni.

### 7. Supported Firebase authentication providers

Példák:

- email és jelszó;
- telefonszám/SMS;
- Google;
- Apple;
- Facebook;
- GitHub;
- Microsoft;
- Twitter/X;
- anonymous authentication;
- egyedi backendből származó custom token;
- Identity Platform bővítéssel például SAML és OpenID Connect.

A providert a Firebase Console-ban is engedélyezni kell, majd a megfelelő SDK providerrel és popup/redirect vagy credential folyamattal használjuk.

**Hivatalos dokumentáció:** [Firebase Authentication](https://firebase.google.com/docs/auth), [Web Auth start](https://firebase.google.com/docs/auth/web/start), [Verify ID tokens](https://firebase.google.com/docs/auth/admin/verify-id-tokens), [Database Rules and auth](https://firebase.google.com/docs/database/security)

---

## Web Applications

### 1. Explain React Router.

**Vizsgán röviden:** A React Router az URL és a renderelt React-komponensek közötti kapcsolatot kezeli kliensoldalon. Navigációkor nem kell minden alkalommal teljes HTML-oldalt újratölteni, ezért SPA-ban többoldalas élményt ad.

\`\`\`jsx
import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/products">Termékek</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

A \`Link\` kliensoldali navigációt végez, a \`Route\` URL-mintát komponenshez köt. Production hostingnál az ismeretlen útvonalakat gyakran vissza kell irányítani az \`index.html\` fájlra, hogy frissítéskor is működjenek.

### 2. Why is a React build needed? What does it do?

**Vizsgán röviden:** A böngészőnek optimalizált production fájlokat készít a fejlesztői forrásból.

A build például:

- feldolgozza a JSX-et és a modern szintaxist;
- összecsomagolja a modulokat;
- minifikálja a JavaScriptet és CSS-t;
- feldolgozza és átnevezi az asseteket hash-sel;
- eltávolíthat nem használt kódot;
- létrehozza a deployolható \`dist\` mappát.

Vite projektben tipikusan \`npm run build\`, ellenőrzéshez pedig \`npm run preview\` használható.

### 3. Local development vs production deployment

| Local development | Production |
|---|---|
| Vite dev server, gyors HMR | buildelt, optimalizált statikus fájlok |
| részletes hibák, source map | teljesítmény és biztonság a fő szempont |
| gyakran \`localhost\` és külön backend port | valós domain és HTTPS |
| dev proxy használható | éles proxy/CORS/hosting konfiguráció kell |
| forrásmodulok gyors kiszolgálása | minifikált, cache-elhető assetek |

**Vizsgán röviden:** A dev server fejlesztőeszköz, nem éles webszerver. Production előtt build készül, ezt hosting szolgálja ki.

### 4. How can you deploy a Firebase application?

Tipikus Firebase Hosting folyamat:

\`\`\`bash
npm run build
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
\`\`\`

Vite-nál a public directory általában \`dist\`. SPA esetén az inicializáláskor single-page app rewrite szükséges. A \`firebase.json\` tárolja a hosting konfigurációt. Ha database rules is változott, azt is a megfelelő Firebase CLI konfigurációval kell deployolni.

### 5. What are React Contexts? Suitable use cases?

**Vizsgán röviden:** A Context egy értéket tesz elérhetővé egy komponensfa sok leszármazottjának anélkül, hogy minden szinten propsként kellene továbbadni.

Jó példák:

- bejelentkezett felhasználó;
- téma;
- nyelv;
- ritkán változó globális beállítás;
- közös routing vagy alkalmazásszintű szolgáltatás.

\`\`\`jsx
const AuthContext = createContext(null);

function App() {
  return (
    <AuthContext.Provider value={currentUser}>
      <Dashboard />
    </AuthContext.Provider>
  );
}

function Profile() {
  const user = useContext(AuthContext);
  return <p>{user.name}</p>;
}
\`\`\`

Nem minden state-et kell Contextbe tenni. Gyorsan változó vagy csak kevés komponensnek szükséges adatnál jobb lehet a local state és props. A Provider \`value\` változásakor a fogyasztók újrarenderelődnek.

**Hivatalos dokumentáció:** [React Router routing](https://reactrouter.com/start/declarative/routing), [Vite production build](https://vite.dev/guide/build), [Firebase Hosting quickstart](https://firebase.google.com/docs/hosting/quickstart), [React Context](https://react.dev/learn/passing-data-deeply-with-context)

---

## Rövid szóbeli gyakorlókérdések

### Mi történik egy Reactes adatlekérés teljes folyamatában?

A komponens renderelődik, majd a \`useEffect\` elindítja a \`fetch\` kérést. A böngésző HTTP requestet küld. Az Express vagy Firebase feldolgozza, és státuszkóddal, headerekkel és bodyval válaszol. A kliens ellenőrzi a \`response.ok\` értéket, majd \`response.json()\` segítségével feldolgozza a JSON-t. A setter frissíti a state-et, React újrarenderel, és megjeleníti az adatot. Közben loading és error állapotot is kezelünk.

### Hogyan döntöd el, hogy \`map\`, \`filter\` vagy \`reduce\` kell?

- Ha minden bemeneti elemből egy új elemet szeretnék: \`map\`.
- Ha csak bizonyos elemeket szeretnék megtartani: \`filter\`.
- Ha az egész tömbből egy eredményt szeretnék, például összeget: \`reduce\`.

### Hogyan döntöd el, hogy PUT vagy PATCH kell?

Ha az erőforrás teljes új reprezentációját küldöm és cserélem, \`PUT\`. Ha csak néhány mezőt módosítok, \`PATCH\`. Az API szerződése az elsődleges.

### Mit nézel meg, ha a fetch nem működik?

Console: van-e JS-hiba. Network: elindult-e a kérés, helyes-e az URL és method, mi a státuszkód, request payload és response body. Ezután ellenőrzöm, hogy a szerver route-ja egyezik-e, be van-e kapcsolva a JSON middleware, megfelelő-e a header és a \`JSON.stringify\`, valamint kezeli-e a kliens a \`response.ok\` értéket.

### Mi a props és state legfontosabb különbsége?

A props a szülőtől kapott, csak olvasható bemenet. A state a komponens által kezelt, időben változó adat, amelyet setterrel frissítünk. Mindkettőt immutábilisan kezeljük.

### Miért fontos, hogy előbb elmondd a problémamegoldási tervet?

Mert így látszik, hogy értem a feladatot, fel tudom bontani kisebb részekre, ismerem az adat útját és a szélső eseteket. Jó sorrend: bemenet és kimenet tisztázása, szükséges state/adatszerkezet, kisebb lépések, megvalósítás, majd tesztelés és hibakezelés.

---

## Végső vizsgaellenőrző lista

- [ ] Saját szavaimmal el tudom mondani a kliens–szerver folyamatot.
- [ ] Network panelen megtalálom a methodot, URL-t, státuszt, request bodyt és response bodyt.
- [ ] Tudom, hogy a \`fetch\` nem dob automatikusan hibát \`404\` vagy \`500\` esetén.
- [ ] Példával el tudom magyarázni a \`map\`, \`filter\` és \`reduce\` különbségét.
- [ ] Tudok React state-et immutábilisan frissíteni objektumnál és tömbnél.
- [ ] Tudom, mikor fut a \`useEffect\`, és mire való a dependency array.
- [ ] Tudok controlled formot és submit handlert írni.
- [ ] Tudok Reactből GET, POST, PATCH és DELETE kérést küldeni.
- [ ] Ismerem a gyakori HTTP státuszkódokat.
- [ ] Tudom a PUT és PATCH különbségét.
- [ ] El tudom mondani az authentication és authorization különbségét.
- [ ] Értem, hogyan kapcsolódik a Firebase Authentication a Database Security Ruleshoz.



        `,
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },
  {
    id: "Workbook2",

    title: "Instance Methods",

    category: "Workbook",

    difficulty: "high",

    sections: [
      {
        title: "Description",
        content: `
        
Property:

.value - That's why it doesn't have parentheses.

Method:

.next() is a method that belongs to the iterator object.


1) At() takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

const array = [5, 12, 8, 130, 44];

let index = 2;

console.log("An index of {index} returns {array.at(index)}");
// Expected output: "An index of 2 returns 8"

index = -2;

console.log("An index of {index} returns {array.at(index)}");
// Expected output: "An index of -2 returns 130"



2) Concat() is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]



3) CopyWithin() shallow copies part of this array to another location in the same array and returns this array without modifying its length.

const array = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]



4) Entries() returns a new array iterator object that contains the key/value pairs for each index in the array.

const array = ["a", "b", "c"];

const iterator = array.entries();

console.log(iterator.next().value);
// Expected output: Array [0, "a"]

console.log(iterator.next().value);
// Expected output: Array [1, "b"]



5) Every() returns false if it finds an element in the array that does not satisfy the provided testing function. Otherwise, it returns true.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true



6) Fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

const array = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array.fill(6));
// Expected output: Array [6, 6, 6, 6]



7) Filter() creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]



8) Find() returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

onst array = [5, 12, 8, 130, 44];

const found = array.find((element) => element > 10);

console.log(found);
// Expected output: 12



9) FindIndex() returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const array = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array.findIndex(isLargeNumber));
// Expected output: 3



10) FindLast() iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

const array = [5, 12, 50, 130, 44];

const found = array.findLast((element) => element > 45);

console.log(found);
// Expected output: 130



11) FindLastIndex() iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const array = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130



12) Flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]



13) FlatMap() returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

const arr = [1, 2, 1];

const result = arr.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]



14) The forEach() method of Array instances executes a provided function once for each array element.

const array = ["a", "b", "c"];

array.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"



15) Includes() determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array = [1, 2, 3];

console.log(array.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false



16) IndexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1



17) Join() returns a new string that is the concatenation of all elements in this array, separated by commas or a specified separator string. If the array has only one item, that item's stringification is returned without using the separator.

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"



18) Keys() returns a new array iterator object that contains the keys for each index in the array.

const array = ["a", "b", "c"];
const iterator = array.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2



19) LastIndexOf() returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// Expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// Expected output: 1



20) map() creates a new array populated with the results of calling a provided function on every element in the calling array.

const array = [1, 4, 9, 16];

// Pass a function to map
const mapped = array.map((x) => x * 2);

console.log(mapped);
// Expected output: Array [2, 8, 18, 32]



21) pop() removes the last element from an array and returns that element. This method changes the length of the array.

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]



22) push() adds the specified elements to the end of an array and returns the new length of the array.

const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]



23) reduce() executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10



24) reduceRight() applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

const array = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
);

console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]



25) reverse() reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

const array = ["one", "two", "three"];
console.log("array:", array);
// Expected output: "array:" Array ["one", "two", "three"]

const reversed = array.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array:", array);
// Expected output: "array:" Array ["three", "two", "one"]



26) shift() removes the first element from an array and returns that removed element. This method changes the length of the array.

const array = [1, 2, 3];

const firstElement = array.shift();

console.log(array);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1



27) slice() returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



28) some() returns true if it finds an element in the array that satisfies the provided testing function. Otherwise, it returns false.

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true



29) sort() sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array);
// Expected output: Array [1, 100000, 21, 30, 4]



30) splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]



31) toLocaleString() returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and these strings are separated by a locale-specific string (such as a comma ",").

const array = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary



32) toReversed() is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.

The important difference is reverse() changes the original array, while toReversed() creates a new array and leaves the original alone.

const numbers = [1, 2, 3, 4];

const result = numbers.toReversed();

console.log(result);
console.log(numbers);

result  → [4, 3, 2, 1]

numbers → [1, 2, 3, 4]



33) toSorted() is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.


34) toSpliced() is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.


35) toString() returns a string representing the specified array and its elements.



36) unshift() adds the specified elements to the beginning of an array and returns the new length of the array.

const array = [1, 2, 3];

console.log(array.unshift(4, 5));
// Expected output: 5

console.log(array);
// Expected output: Array [4, 5, 1, 2, 3]



37) values() returns a new array iterator object that iterates the value of each item in the array.

const array = ["a", "b", "c"];
const iterator = array.values();

for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"



38) with() is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.

const fruits = ["apple", "banana", "orange"];

const newFruits = fruits.with(1, "pear");

console.log(newFruits);
console.log(fruits);

newFruits → ["apple", "pear", "orange"]

fruits    → ["apple", "banana", "orange"]

        `,
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },
  {
    id: "PA",

    title: "PA steps",

    category: "PA",

    difficulty: "hard",

    sections: [
      {
        title: "Description",
        content: `
            0. npm run emulator
               npm run dev
               npm run seed
            
            1. Page + route
            
            Create Employees.jsx
            Add /employees route
            Verify the page renders.

            2. Firebase GET request

            Import useEffect
            Import BASE_URL
            Create the employees URL
            Create fetchData()
            fetch() with GET

            to do:

            import { useState, useEffect } from "react";
import { BASE_URL } from "../firebase";

            to do: add at the top

            let empoyeeURL = \`\${BASE_URL}/employees.json?orderBy="name"\`;

            to do:

useEffect(() => {
  async function fetchData(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          \`HTTP error! Status: \${response.status} \${response.statusText}\`,
        );
      }

      const data = await response.json();

      console.log("Data received:", data);
    } catch (error) {
      console.error("Fetch failed:", error.message);
    }
  }

  fetchData(employeeURL);
}, []);

            Check response.ok
            response.json()
            console.log(data)

            3. Store employees in React state

            Import useState
            Create employees state
            setEmployees(data): 

            to do: Put this under function Employees() {
            const [employees, setEmployees] = useState([]);

            to do: add       console.log("Data received:", data);
      setEmployees(data);
            Verify the state contains the employees.

            4. Display all employees

            Convert Firebase employee object into something we can iterate over
            Use .map()
            Display each employee's name.

            to do: change the div in return of employees.jsx to:
              <div>
    {Object.values(employees).map((employee) => (
      <div key={employee.id}>
        {employee.name}
      </div>
    ))}
  </div>

            5. Create the employee card

            Create a card for each employee
            Display:
            employee name
            employee position

            to do: replace the div from above with:
            <div>
    {Object.values(employees).map((employee) => (
      <div className="employee-card" key={employee.name}>
        <h2>{employee.name}</h2>
        <p>{employee.position}</p>
      </div>
    ))}
  </div>

            6. Get all available positions

            Determine all different positions among the employees
            Store them in an array.
            Example:
            ["Junior", "Medior", "Senior", "Expert", "Godlike"]

            to do: add above return:

              const positions = [
    ...new Set(
      Object.values(employees).map(
        (employee) => employee.position
      )
    ),
  ];

            7. Create the <select>

            For every employee:

            Employee name
            Current position
            <select>
                all available positions
            </select>
            Generate the <option> elements with .map()
            Set the employee's actual position as the selected value.

            to do: replace:

            <p>{employee.position}</p>

            with:
            
            <select value={employee.position}>
  {positions.map((position) => (
    <option key={position} value={position}>
      {position}
    </option>
  ))}
</select>


            8. Handle select changes
            
            Add onChange
            Get event.target.value
            Store the selected position.

            to do:

            add to Employees:
            const [selectedPositions, setSelectedPositions] = useState({});

            change <select value={employee.position}> to

            <select
  value={selectedPositions[employee.name] || employee.position}
  onChange={(event) => {
    setSelectedPositions({
      ...selectedPositions,
      [employee.name]: event.target.value,
    });
  }}
>

            9. Add Update Position button

            Each card gets:
            to do: add the following right after  </select> and before </div>

            <button>Update Position</button>

            10. Update Firebase

            When the button is clicked:

            selected position
                  ↓
            employee ID
                  ↓
            Firebase URL
                  ↓
            PATCH request
                  ↓
            database

            to do: 

            add before return:

            async function updatePosition(employee) {
  const newPosition =
    selectedPositions[employee.name] || employee.position;

  const employeeURL = \`\${BASE_URL}/employees/\${employee.id}.json\`;

  try {
    const response = await fetch(employeeURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        position: newPosition,
      }),
    });

    if (!response.ok) {
      throw new Error(
        \`HTTP error! Status: \${response.status} \${response.statusText}\`,
      );
    }

    console.log("Position updated!");
  } catch (error) {
    console.error("Update failed:", error.message);
  }
}

            AND update the button:

            <button onClick={() => updatePosition(employee)}>
  Update Position
</button>

            11. Update the React state

            After successful PATCH:

            Firebase updated
                  ↓
            React state updated
                  ↓
            card displays new position

            to do: update the setEmployees(data); to

            setEmployees(
  Object.entries(data).map(([id, employee]) => ({
    id,
    ...employee,
  }))
);

AAAANNNNDDDD

change  const positions = [
  ...new Set(
    Object.values(employees).map(
      (employee) => employee.position
    )
  ),
];

to

const positions = [
  ...new Set(
    employees.map((employee) => employee.position)
  ),
];


AAAAANNNNDDD

change

{Object.values(employees).map((employee) => (

to

{employees.map((employee) => (


AAAAANNNDDDD

key={employee.name}

to

key={employee.id}

            12. Final cleanup

            CSS
            error handling
            remove unnecessary code
            test every employee
            test changing different positions
            refresh browser and verify database persistence.
        

        
        
        `,
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },
  {
    id: "Java-1",

    title: "Java Notes",

    category: "Java",

    difficulty: "mid",

    sections: [
      {
        title: "Description",
        content: `
        
public class MyProfile {
public static void main(String[] args) {   
String name = "Mark";
int age = 35;
double desiredSalary = 100000.25;
char gender = 'm';
boolean lookingForJob = true;

	}
}
        
        `,
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },
  {
    id: "MT",

    title: "MT",

    category: "MT",

    difficulty: "MT",

    sections: [
      {
        title: "Description",
        content: "MT.",
      },
      {
        title: "Syntax",
        content: `MT
            `,
      },
      {
        title: "Example",
        content: `MT
            `,
      },
    ],
  },
];
