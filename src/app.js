import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

    const app = express();
    app.use(cors({
    origin: process.env.CORS_ORIGINSS,
    credentials: true
    }));
        
    // json data is accepted
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ limit: '16kb' }))
//public asset for pdf image,video 
app.use(express.static('public'))

//import routes

import userRouter from './routes/user.routes.js';

//routes declaration
app.use('/api/v1/users',userRouter)
    
export default {app}