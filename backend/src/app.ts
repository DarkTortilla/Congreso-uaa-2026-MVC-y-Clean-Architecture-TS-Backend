import { exit } from 'node:process';
import server from './server.ts';

server.listen(3000, (error: any)=>{
    if(error){
        // global error handler
        exit(1);
    }
    console.log(`server runnig at port ${3000}`)
});