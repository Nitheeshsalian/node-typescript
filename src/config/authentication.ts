import * as passport from "passport";
import * as passportlocal from "passport-local";
import { User as User } from "./../model/user/userDocumentSchema";

import { logger as logger } from "./../utils/logger";

export class AuthenticationConfigManager {
    public static configure() {
        let Strategy = passportlocal.Strategy;
        logger.info("passport Initialize");
        passport.use(new Strategy({
            usernameField: 'username',
            passwordField: 'password',
        },

            function (username, password, done) {
                User.findOne({ 'username': username }, function (err, user) {
                    logger.info(user);
                    if (err) {
                        return done(err);
                    }

                    else if (user == null) {
                        return done(new Error("user not found"), null);
                    }

                    else {
                        if (password == user.password) {
                            return done(null, user);
                        }
                        else {
                            return done(new Error("Invalid password"), null);
                        }
                    }
                });
            })
        );
    }
}