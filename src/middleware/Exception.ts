export let Exception = () => {
    return (err, req, res, next) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}
