import express from 'express'
import { protectRoute } from '../middleware/authMiddleWare.js';
import { getMessages, getUsersForSidebar, sendMessage } from '../controllers/messageController.js';


const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar); // Static route
router.get("/:id", protectRoute, getMessages);         // Dynamic route
router.post("/send/:id", protectRoute, sendMessage);

export default router;