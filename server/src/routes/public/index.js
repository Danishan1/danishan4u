import express from "express";
import { postRouter } from "./posts.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ success: true, data: "You are using Private API" });
});

router.use("/posts", postRouter);

export const publicRoutes = router;
