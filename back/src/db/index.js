import mongoose from "mongoose";
import config from "../config";
import { User } from "./models/User";
import { TokenRepository } from "./models/Token";

const DB_URL = `${config.MONGODB_URL}/${config.CLUSTER_NANE}?retryWrites=true&w=majority`;

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", () =>
    console.log("Database connection success cluster: " + config.CLUSTER_NANE)
);
db.on("error", (error) =>
    console.error(
        `********************\nDatabase connection error....\nCannot connect to ${config.CLUSTER_NANE}\n********************\n ${error}`
    )
);

export { User, TokenRepository };
