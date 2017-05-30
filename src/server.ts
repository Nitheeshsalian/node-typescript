/**
 * Server Dependencies
 */
import * as http from "http";
import * as https from "https";
import * as express from "express";
import * as bodyParser from "body-parser";

import {Config as Config} from "./config";
import {Db as Db} from "./data/db";
import {logger as logger} from "./utils/logger";
import {ErrorHandler as ErrorHandler} from "./config/error-handler";
import {MiddlewareConfigManager as MiddlewareConfigManager} from "./config/config-base";

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
require("dotenv").config();
require("dotenv-safe").load();

/**
 * Connect to to MongoDB.
 */
Db.connect();

/**
 * Create Express Server
 */
var server,
    app = new MiddlewareConfigManager()
        .application;

server = http.createServer(app);

let handler = new ErrorHandler(app, server);
handler.configure();

/**
 * Start Express server.
 */
server.listen(Config.port, function () {
    logger.info("Listening on ", Config.port);
});
