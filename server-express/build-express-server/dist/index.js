"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Create the application object
const app = (0, express_1.default)();
// Set a port
const port = 3000;
// Add an API endpoint to get a route, then send a response to the browser
app.get("/api", (req, res) => {
    res.send("Hello, world!");
});
// Add a moussa endpoint to ger a route, then send a response to the browser
app.get("/moussa", (req, res) => {
    res.send("Hello, Moussa Kalam AMZAT!");
});
// Set the application to listen on port and output a message to the console
app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});
