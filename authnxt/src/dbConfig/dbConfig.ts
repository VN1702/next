import mongoose from "mongoose";
export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('Mongodb connected successfully!');
        });
        connection.on('error',(err)=>{
            console.log('Mongodb connection failed!' +err);
            process.exit();
        });
    }catch(error){
        console.log('Somthing goes wrong!');
        console.log(error);
    }


}