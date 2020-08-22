const server = require("./api/server.js");

const server = express() 
const port = process.env.PORT || 8000


server.use(express.json())
server.use("/", welcomeRouter)
server.use("/", accountsRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})



server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})