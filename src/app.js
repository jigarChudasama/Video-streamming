import exprass from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = exprass()

app.use(cors({
    origin : process.env.CORD_ORIGEN,
    credentials : true
}))
app.use(exprass.json({limit : '16kb'}))
app.use(exprass.urlencoded({extended : true ,limit : '16kb'}))
app.use(exprass.static('public'))
app.use(cookieParser())

export { app }  