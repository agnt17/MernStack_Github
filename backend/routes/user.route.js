import express from "express";
import {
  getUserProfileAndRepos,
  likeprofile,
  getlikes,
} from "../controllers/user.controller.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
router.get("/likes", ensureAuthenticated, getlikes);
router.post("/like/:username", ensureAuthenticated, likeprofile);
export default router;
