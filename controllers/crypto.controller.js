import CryptoJS from "crypto-js";
import { sendStatus } from "../constants/regular.js";

/**
 * Controller function to generate md5 hash..
 */
export const convertToMd5 = async (req,res) => {
   try{
        const {data} = req.body;
        if(!data){
            return res.status(400).json({
                success:false,
                message:"Please enter a text to hash !! "
            })
        }
        const hashedText = CryptoJS.MD5(data).toString();
        res.status(200).json({
            success:true,
            hashedText:hashedText
        });
   }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error "
        })
   }
}

/**
 * Controller function to hash in sha1
 */
export const convertToSha1 = async(req,res) => {
    try{
        const {data} = req.body;
        if(!data){
            return res.status(400).json({
                success:false,
                message:"Please enter text to hash !! "
            })
        }
        const hashedText = CryptoJS.SHA1(data).toString();
        res.status(200).json({
            success:true,
            hashedText:hashedText
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error "
        })
    }
}

/**
 * controller function to hash in sha256
 */
export const convertoToSha256 = async(req,res) => {
    try{
        const {data} = req.body;
        if(!data){
            return res.status(400).json({
                success:false,
                message:"Text is required "
            })
        }
        const hashedText = CryptoJS.SHA256(data).toString();
        res.status(200).json({
            success:true,
            hashedText:hashedText
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error !! "
        })
    }
}

/**
 * Controller function to convert plain text to sha512 
 */
export const convertToSha512 = async(req,res) => {
    try{
        const {data} = req.body;
        if(!data){
            return res.status(400).json({
                success:false,
                message:"Text is required "
            })
        }
        const hashedText = CryptoJS.SHA512(data).toString();
        res.status(200).json({
            success:true,
            hashedText:hashedText
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error !! "
        })
    }
}

/**
 * Controller function to encrypt using AES symmetric key algo ...
 */
export const encryptToAES = async(req,res) => {
    try{
        const {data,key} = req.body;
        if(!data){
            return res.status(400).json({
                success:false,
                message:"Plain text is required "
            })
        }
        let encryptedText;
        if(!key){
            encryptedText = CryptoJS.AES.encrypt(data,"aditya1234raj").toString();
        }else{
            encryptedText = CryptoJS.AES.encrypt(data,key).toString();
        }
        res.status(200).json({
            success:true,
            encryptedText:encryptedText
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error !! "
        })
    }
}

export const decryptAES = async(req,res) => {
    try{
        const {ciphertext,key} = req.body;
        if(!ciphertext && !key){
            return res.status(400).json({
                success:false,
                message:"Cipher text and key is required "
            })
        }
        const pt = CryptoJS.AES.decrypt(ciphertext,key).toString(CryptoJS.enc.Utf8);
        res.status(200).json({
            success:true,
            plainText:pt
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error!! "
        })
    }
}

