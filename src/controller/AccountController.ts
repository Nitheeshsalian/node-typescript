/**
 * Basic Account Controller Route
 */
import * as express from "express";
import * as passport from "passport";
import * as bodyParser from "body-parser";
import { logger as logger } from "./../utils/logger";

export class AccountController {

    public static routes(app: express.Application): any {

        let router = express.Router();

        /**
         * GET /login
         * Login page.
         */
        router.get("/login", function (req, res, next) {
            return res.send("Successfull")
        });

        /**
         * POST /login
         * Sign in username and password.
         */
        router.post("/login", function (req, res, next) {
            logger.info(req.body.username);
            let username = req.params.username;
            let password = req.params.password;
            logger.info(req.body.password);
            passport.authenticate("local", function (err, user, info) {
                logger.info("Inside passport");
                logger.info(info);
                if (err) {
                    logger.error(err);
                    return res.send("Invalid user name or password");
                }

                if (user == null)
                    return res.send("Invalid user name or password");

                else {
                    return res.status(200).send("welcome" + user.username);
                }

            });
        });

        return router;
    }
};