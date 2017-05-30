import * as express from "express";
import * as passport from "passport";

import {ExpressConfigManager as ExpressConfigManager} from "./express-config";
import {RouteRegistration as RouteRegistration} from "./../controller/routes";
import {AuthenticationConfigManager as AuthenticationConfigManager} from "./authentication";


export class MiddlewareConfigManager {

    private app: express.Application
    constructor() {

        let app = express();

        AuthenticationConfigManager.configure();

        this.app = ExpressConfigManager.configure(app);
        
        this.app.use(passport.initialize());

        RouteRegistration.configure(this.app);
    }

    public get application(): express.Application {

        return this.app;
    }
}
