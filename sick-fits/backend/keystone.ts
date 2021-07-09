import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { User } from './schemas/User';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session'

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, // how long to stay signed in
    secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        // TODO: add initial roles here
    }
});

export default withAuth(
    config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        },
        
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL,
        // TODO: add data seeding here
    },
    lists: createSchema({
        // Schema items go in here
        User: User
    }),
    ui: {
        // show the UI only for people who pass this test:
        isAccessAllowed: ({ session }) => {
            console.log(session);
            return !!session?.data;
        },
    },
    session: withItemData(statelessSessions(sessionConfig), {
        User: `id`
    })
    // TODO: add session values here
    })
);