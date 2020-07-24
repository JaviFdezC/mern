const app = require('./app')
require('./database')

async function main() {
    await app.listen(4000)
    console.log('listen on port 4000')
}

main()