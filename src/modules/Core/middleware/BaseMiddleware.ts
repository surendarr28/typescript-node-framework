export class BaseMiddleware {
    constructor() {

    }

    Authorization() {
        return (req, res, next) => {
            console.log("Authorization Before")
            next();
        }
    }

    Exception() {
        return (err, req, res, next) => {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    }

}