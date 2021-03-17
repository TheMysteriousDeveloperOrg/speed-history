// Import the express module!
import * as express from 'express';
const router: any = express.Router();

// Routes

let id;

router.get("/:reqid", (req: { reqid: number; }, res: { send: (arg0: string) => void; }) => {
    id = req.params.reqid;
    res.send(`The requested URL: \n${id}`);
})

// Export the Router
module.exports = router;