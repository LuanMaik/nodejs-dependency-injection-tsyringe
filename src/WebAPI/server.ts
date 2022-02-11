import app from "./app";

const port = process.env.PORT || 3003;

export default () => {
    app.listen(port, () => {
        console.log(`Listen at http://localhost:${port}`);
    })
}