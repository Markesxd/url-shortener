import mongoose from "mongoose";

const cs = process.env.CONNECT_STRING;

if(!cs){
    throw new Error('No database configured.');
}

mongoose.connection
.on('error', () => console.error('Fail to connect'))
.once('open', () => console.log('Connection Sucessful'));

export const connection = mongoose.createConnection(cs);