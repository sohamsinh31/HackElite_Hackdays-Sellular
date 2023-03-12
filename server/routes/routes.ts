import {FastifyInstance} from "fastify"

export async function useRoutes(app: FastifyInstance) {
    app.post("/signup")
} 