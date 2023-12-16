import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/addadmin").post(controller.AddAdmin);
// router.route("/gettask").get(controller.getTask);
// router.route("/deltask/:id").delete(controller.delTask);
export default router;