import express from "express";
import { 
    convertToMd5, 
    convertToSha1, 
    convertToSha512, 
    convertoToSha256, 
    decryptAES, 
    encryptToAES 
} from "../controllers/crypto.controller.js";

const router = express.Router();

router.route("/md5").post(convertToMd5);
router.route("/sha1").post(convertToSha1);
router.route("/sha256").post(convertoToSha256);
router.route("/sha512").post(convertToSha512);
router.route("/encryptaes").post(encryptToAES);
router.route("/decryptaes").post(decryptAES);


export default router;