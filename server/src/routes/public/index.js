import express from "express";
import { postRouter } from "./posts.js";
import { seoRouter } from "./seo.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ success: true, data: "You are using Private API" });
});

router.use("/posts", postRouter);
router.use("/seo", seoRouter);

export const publicRoutes = router;
