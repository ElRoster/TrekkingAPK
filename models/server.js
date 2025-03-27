const express = require('express');
const cors = require('cors');
const dbConnect = require("../database/config.js"); 
const GuideRoute = require('../routes/GuideRoute');
const UserRoute = require('../routes/UserRoute.js');

class Server {
    constructor() {
        this.app = express();
        this.listen();
        this.dbConnection();
        this.route();
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running`);
        });
    }

    route() {
        this.app.use(express.json());
        this.app.use(cors());
        
        // Rutas
        this.app.use('/api/guides', GuideRoute);
        this.app.use('/api/users', UserRoute);


    }

    async dbConnection() {
        await dbConnect();
    }
}

module.exports = Server;
