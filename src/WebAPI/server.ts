import app from "./app";
import registerDependencies from "@DI/DependenciesRegistration";
import {Express} from "express";
import registerRoutes from "@WebAPI/routes";
import cluster from "cluster";
import * as os from "os";


class Server {

    constructor(private app: Express) {}

    registerDependencies(): void {
        registerDependencies();
    }

    registerRoutes(): void {
        registerRoutes(this.app);
    }

    start(port: number): void {
        this.registerDependencies();
        this.registerRoutes();

        this.app.listen(port, () => {
            console.log(`Listen at http://localhost:${port}`);
        })
    }

    startMultiProcess(port: number): void {
        if(cluster.isPrimary){
            // get the number of available cpu cores
            const nCPUs = os.cpus().length;
            // fork worker processes for each available CPU core
            for(let i = 0; i< nCPUs; i++){
                cluster.fork()
            }
        }else{
            this.start(port);
        }
    }

}

const server = new Server(app);

export default server;