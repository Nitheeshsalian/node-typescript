/**
 * Express Config
 */
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as jwt from "express-jwt";

var boom = require('express-boom');
var cors = require("cors");
export class ExpressConfigManager {
    public static configure(app: express.Application): express.Application {
        console.log("initializing express");
        
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cookieParser());
        app.use(boom());
        app.use(cors());
        
        return app;
    }
}