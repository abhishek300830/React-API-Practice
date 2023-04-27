import express from "express";
import {
  DisplayLog,
  addingUserAPI,
  deleteUserAPI,
  updataDatAPI,
} from "../controllers/api.js";

const router = express.Router();

router.get("/getusers", DisplayLog);
router.post("/adduser", addingUserAPI);
router.delete("/deleteuser/:id", deleteUserAPI);
router.put("/updateuser/:id", updataDatAPI);

export default router;
