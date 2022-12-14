import AdminJS from "adminjs";
import mongoose from "mongoose";

const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const AdminJSMongoose = require("@adminjs/mongoose");
const AdminJSExpress = require('@adminjs/express')
const resources = require('./admin.resources')
AdminJS.registerAdapter(AdminJSMongoose)

const adminJs = new AdminJS({
    databases: [mongoose],
    rootPath: '/admin',
    resources: resources,
    dashboard: {
        handler: async () => {

        },
        component: AdminJS.bundle('./dashboard.component.tsx')
    },
    branding: {
        companyName: 'auto-sto',
    },
})

const ADMIN = {
    email: process.env.DEFAULT_ADMIN_LOGIN,
    password: process.env.DEFAULT_ADMIN_PASSWORD
}

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
    cookieName: process.env.COOKIE_NAME,
    cookiePassword: process.env.COOKIE_PASSWORD,
    authenticate: async (email: string, password: string) => {
        if (email === ADMIN.email && password === ADMIN.password) {
            return ADMIN
        }
        return null
    }
}, null, {
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({mongooseConnection: mongoose.connection})
});

module.exports = router
