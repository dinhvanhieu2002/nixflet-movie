import express from "express";
import userRouter from "./user.route.js";
import mediaRouter from "./media.route.js";
import personRouter from "./person.route.js";
import reviewRouter from "./review.route.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/reviews", reviewRouter);
router.use("/person", personRouter);
router.use("/:mediaType", mediaRouter);

export default router;
