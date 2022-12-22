"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./utilities/logger"));
const app = (0, express_1.default)();
const port = 3000;
// Routes
// app.get("/", (req, res) => {
//   res.send("Welcome!");
// });
app.get("/continents", logger_1.default, (req, res) => {
    res.send("Welcome to continents!");
});
app.get("/countries", logger_1.default, (req, res) => {
    res.send("Welcome to countries!");
});
app.get("/cities", (req, res) => {
    res.send("Welcome to cities!");
});
// Start the Express server
app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});
