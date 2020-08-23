const server = require("./api/server.js");
const accountRoutes = require('./routes/accountRoutes')
const port = process.env.PORT || 8000
server.use("/accounts", accountRoutes)
server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
