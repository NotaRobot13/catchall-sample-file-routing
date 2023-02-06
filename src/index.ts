import express from 'express';
import createRouter from 'express-file-routing'

const app = express();

createRouter(app)

app.listen(8000, () => {
    console.log("catch-all demo listening on 8000")
})