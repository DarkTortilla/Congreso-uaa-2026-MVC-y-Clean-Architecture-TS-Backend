import mongoose from 'mongoose';

const dbUri = 'mongodb://localhost:27017';
const dbName = 'casiopeDB';

export const dbConnection = async () =>{
    try {
       await mongoose.connect(`${dbUri}/${dbName}`);
    } catch (error) {
      // TODO global erro handler  
    }
}

// export function dbConnection(){

// }