import 'dotenv/config';
import { User } from "./schemas/User";
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';

const databaseUrl =
    process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, //how long do users stay logged in
    secret: process.env.COOKIE_SECRET
}

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        //TODO: add initial roles here
    }
});

export default withAuth(
    config({
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
            User
        }),
        ui: {
            // Show the ui only for people who pass this test
            isAccessAllowed: ({ session }) => {
                // returns true if there is a valid session
                return !!session?.data;
            }
        },
        session: withItemData(statelessSessions(sessionConfig), {
            // GraphQL Query
            User: 'id name email'
        })
    }));