import 'dotenv/config';
import { User } from "./schemas/User";
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseUrl =
    process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, //how long do users stay logged in
    cookieSecret: process.env.COOKIE_SECRET
}

export default config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true
        }
    },
    db: {
        adapter: 'mongoose',
        url: databaseUrl,
        // TODO: add data seeding here
    },
    lists: createSchema({
        //Schema goes here
        User
    }),
    ui: {
        //TODO: change this when implementing roles
        isAccessAllowed: () => true
    },
    //TODO: Add session values here 
});