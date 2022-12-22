"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    let url = req.url;
    console.log(`${url} was visited`);
};
exports.default = logger;
