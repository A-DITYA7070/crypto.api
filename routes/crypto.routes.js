import express from "express";
import { 
    convertToMd5, 
    convertToSha1, 
    convertToSha512, 
    convertoToSha256, 
    decrypt3DES, 
    decryptAES, 
    decryptBlowfish, 
    decryptRc4, 
    decryptToDES, 
    encryptRC4, 
    encryptTo3DES, 
    encryptToAES, 
    encryptToBlowfish, 
    encryptToDES
} from "../controllers/crypto.controller.js";

const router = express.Router();

router.route("/md5").post(convertToMd5);
router.route("/sha1").post(convertToSha1);
router.route("/sha256").post(convertoToSha256);
router.route("/sha512").post(convertToSha512);
router.route("/encryptaes").post(encryptToAES);
router.route("/decryptaes").post(decryptAES);
router.route("/encryptdes").post(encryptToDES);
router.route("/decryptdes").post(decryptToDES);
router.route("/encrypt3des").post(encryptTo3DES);
router.route("/decrypt3des").post(decrypt3DES);
router.route("/encryptblowfish").post(encryptToBlowfish);
router.route("/decryptblowfish").post(decryptBlowfish);
router.route("/encryptrc4").post(encryptRC4);
router.route("/decryptrc4").post(decryptRc4);


export default router;