import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';
dotenv.config({
    path : './env'
})


connectDB()
.then( ()=>{
    app.listen( process.env.PORT || 8000 , ()=>{
        console.log(`server is running in ${process.env.PORT}`)
    } )
    app.on('error', (error) => {
                console.log( "connection error in app.on" , error)
                throw error
            })
} )
.catch( (err)=>{
    console.log(" Mongo DB connection error " , err )
} )













// const app = express()
//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on('error', (error) => {
//                 console.log(error)
//                 throw error
//             })

//             app.listen(process.env.PORT , ()=>{
//                 console.log(`server is running on ${process.env.PORT} `);
                
//             })

//         } catch (error) {
//             console.error("ERROR :", error)
//             throw error
//         }
//     })()