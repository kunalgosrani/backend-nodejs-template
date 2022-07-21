import { HttpServer, express } from "http-rest-api"
import cors from "cors"
import { configs } from "./configs"
import { apis } from "./apis"

export default async function server() {
	console.log(`Server is starting...`)

	const app = new HttpServer(configs.server.port)
	app.use(cors())
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	app.registerRestApis(...apis)
	app.listen().then((port) =>
		console.log(
			`Server started on port ${port} in ${configs.server.environment} mode`,
		),
	)

	return app
}
