import express from "express";
import { getBlogList, getPost } from "#controllers";

const router = express.Router();

router.get("/blog-list", getBlogList);
router.get("/single/:slug", getPost);

export const postRouter = router;
