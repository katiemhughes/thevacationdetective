const { PORT = 4500 } = process.env;

const app = require("./server");

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
