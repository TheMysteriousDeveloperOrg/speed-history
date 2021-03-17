// Import the express module!
import * as express from 'express';
const router: any = express.Router();

// Routes

let id: Number, token: String, uid: String, password: String;

// Login API Script
router.get('/test', (req: any, res: any) => {
    res.json({ test: "test" })
})

// Export the Router
module.exports = router;