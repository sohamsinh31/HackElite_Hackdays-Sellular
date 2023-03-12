import {config} from "dotenv"
import fastify from "fastify"
import cors from "cors"
config()

const app = fastify()
app.register(cors,{origin:process.env.CLIENT_URL})

app.listen({port:parseInt(process.env.PORT!)})