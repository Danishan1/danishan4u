import express from "express";
import { getBlogList, getPost, getPostMetaInfo } from "#controllers";

const router = express.Router();

router.get("/blog-list", getBlogList);
router.get("/single/:slug", getPost);
router.get("/meta-info/:slug", getPostMetaInfo);

export const postRouter = router;
