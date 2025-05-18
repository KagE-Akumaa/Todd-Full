import { error } from "console";
import cors from "cors";
import express from "express";
import fs from "fs";
import { json } from "stream/consumers";
const app = express();

const PORT = 4500;

app.use(cors());

app.use(express.json());

app.get("/todos", (req, res) => {
  fs.readFile("./todos.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read file" });
    }
    const todos = JSON.parse(data || "[]");
    res.json(todos);
  });
});

app.post("/todos", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  fs.readFile("./todos.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read File" });
    }

    const todos = JSON.parse(data || "[]");
    const newTodo = {
      id: Date.now(),
      title,
      status: false,
    };
    todos.push(newTodo);

    fs.writeFile("./todos.json", JSON.stringify(todos, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to save the task" });
      }
      res.status(201).json(newTodo);
    });
  });
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  fs.readFile("./todos.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read file" });

    let todos = JSON.parse(data || "[]");
    let ogLength = todos.length;

    todos = todos.filter((i) => {
      return i.id !== id;
    });

    if (todos.length === ogLength)
      return res.status(404).json({ error: "Todo not found" });

    fs.writeFile("./todos.json", JSON.stringify(todos, null, 2), (err) => {
      if (err)
        return res.status(500).json({ error: "Failed to delete the task" });

      res.status(200).json({ message: "Todo Delete Successfully" });
    });
  });
});

app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  fs.readFile("./todos.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read the file" });
    let todos = JSON.parse(data || "[]");
    let found = false;
    todos = todos
      // rempve any null or bad entry
      .filter((todo) => todo && typeof todo.id === "number")
      .map((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status;
          found = true;
        }
        return todo;
      });
    if (!found) {
      return res.status(404).json({ error: "Todo not found" });
    }
    fs.writeFile("./todos.json", JSON.stringify(todos, null, 2), (err) => {
      if (err)
        return res.status(500).json({ error: "Failed to write to file" });

      return res.status(200).json(todos);
    });
  });
});

app.put("/todos/:id/edit", (req, res) => {
  const id = Number(req.params.id);
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title cannot be empty" });
  fs.readFile("./todos.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read file" });
    let todos = JSON.parse(data || "[]");
    let found = false;
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
        found = true;
      }
      return todo;
    });
    if (!found) return res.status(404).json({ error: "Todo not found" });

    fs.writeFile("./todos.json", JSON.stringify(todos, null, 2), (err) => {
      if (err)
        return res.status(500).json({ error: "Failed to write to file" });

      return res.status(200).json({
        message: "Todo updated successfully",
        todos,
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
