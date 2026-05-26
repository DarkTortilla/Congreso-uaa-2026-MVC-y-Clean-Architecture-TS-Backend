import mongoose from 'mongoose';

const dbUri = 'mongodb://localhost:27017';
const dbName = 'casiopaDB';

export const dbConnection = async () =>{
    try {
       await mongoose.connect(`${dbUri}/${dbName}`);
       console.log('database connected');
    } catch (error) {
      // TODO global erro handler  
    }
}

// export async function dbConnection(){

// }