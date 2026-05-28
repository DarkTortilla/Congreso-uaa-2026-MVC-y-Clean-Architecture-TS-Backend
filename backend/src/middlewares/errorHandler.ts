import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import {type Request, type Response, type NextFunction} from "express"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errorHandler = (error: Error, req:Request, res:Response, next: NextFunction)=>{
    const logFilePath = path.join(__dirname, "../../logs/error.log");

    const date = new Date();
    const logMessage = `${date.toISOString()} \ ${req.method} \ ${req.url} ${error.message} | ${error.stack}`;

    const logDir = path.dirname(logFilePath);

    if(!fs.existsSync(logDir)){
        fs.mkdirSync(logDir, {recursive: true});
    }

    fs.appendFile(logFilePath, logMessage, (fsError)=>{
        console.log("Failed ro write into log file: ", fsError);
    });
    if(!res.headersSent){
        res.status(500).json({message:'internal server error'});
    }
    
}

export default errorHandler;