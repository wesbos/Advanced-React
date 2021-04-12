import { config, createSchema } from '@keystone-next/keystone/schema'
import 'dotenv/config';
import { User } from './schemas/User';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial'

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 365, // How long they stay signed in?
    secret: process.env.COOKIE_SECRET
}

export default config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        },
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL
        // TODO: Add data seeding here
    },
    lists: createSchema({
        // Schema items go in here
        User: User
    }),
    ui: {
        // TODO: change this for roles
        isAccessAllowed: () => true,
    }
});