/**
 * User Schema Defination
 */
import * as mongoose from "mongoose";
import {IUser as IUser} from "./user";
import {IUserDocument as IUserDocument} from "./userDocuments";

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

export let User: mongoose.Model<IUserDocument> = mongoose.model<IUserDocument>("users", userSchema);