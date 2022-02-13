import app from "./app";

export default () => {
    const port = process.env.PORT || 3003;
    app.listen(port, () => {
        console.log(`Listen at http://localhost:${port}`);
    })
}