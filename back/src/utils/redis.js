import redis from "redis";
import { REDIS_PORT } from "../config";

const redisClient = redis.createClient(process.env.REDIS_PORT);

export { redisClient };
