import express from "express";
import { getSeoPageInfo } from "#controllers";

const router = express.Router();

router.get("/pages/:page", getSeoPageInfo);

export const seoRouter = router;
