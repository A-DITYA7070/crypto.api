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
        if(!data && !key){
            return res.status(400).json({
                success:false,
                message:"Plain text and key is required "
            })
        }
        const encryptedText = CryptoJS.AES.encrypt(data,key).toString();
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

/**
 * Controller function to decrypt AES
 */
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

export const encryptToDES = async(req,res) => {
    try{
        const {data,key} = req.body;
        if(!data && !key){
            return res.status(400).json({
                success:false,
                message:"Data and key is required !! "
            })
        }
        const encryptedText = CryptoJS.DES.encrypt(data,key).toString();
        res.status(200).json({
            success:true,
            encryptedText:encryptedText
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error !!"
        })
    }
}

/**
 * Controller function for decryption in DES..
 */
export const decryptToDES = async(req,res) => {
    try{
        const {ciphertext,key} = req.body;
        if(!ciphertext && !key){
            return res.status(400).json({
                success:false,
                message:"ciphertext and key is required  !! "
            })
        }
        const decryptedText = CryptoJS.DES.decrypt(ciphertext,key).toString(CryptoJS.enc.Utf8);
        res.status(200).json({
            success:true,
            decryptedText:decryptedText
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error !!"
        })
    }
}

/**
 * Controller function to encrypt to 3DES
 */
export const encryptTo3DES = async (req,res) => {
    try{
        const {data,key} = req.body;
        if(!data && !key){
            return res.status(400).json({
                success:false,
                message:"Bad request !"
            })
        }
        const encryptedText = CryptoJS.TripleDES.encrypt(data,key).toString();
        res.status(200).json({
            success:true,
            encryptedText:encryptedText
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error !!"
        })
    }
}

/**
 * Controller function to decrypt 3DES 
 */
export const decrypt3DES = async(req,res) => {
    try{
        const {ciphertext,key} = req.body;
        if(!ciphertext && !key){
            return res.status(400).json({
                success:false,
                message:"Bad request !!"
            })
        }
        const decryptedText = CryptoJS.TripleDES.decrypt(ciphertext,key).toString(CryptoJS.enc.Utf8);
        res.status(200).json({
            success:true,
            plainText:decryptedText
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error !!"
        })
    }
}

/**
 * Controller function to encrypt using blowfish algorithm
 */
export const encryptToBlowfish = async(req,res) => {
    try{
        const {data,key} = req.body;
        if(!data && !key){
            return res.status(400).json({
                success:false,
                message:"Bad request !!"
            })
        }
        const encryptedText = CryptoJS.Blowfish.encrypt(data,key).toString();
        res.status(200).json({
            success:true,
            encryptedText:encryptedText
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error !!"
        })
    }
}

/**
 * Controller function to decrypt using algo blowfish  
 */
export const decryptBlowfish = async(req,res) => {
    try{
        const {ciphertext,key} = req.body;
        if(!ciphertext && !key){
            return res.status(400).json({
                success:false,
                message:"Bad request !!"
            })
        }
        const decryptedText = CryptoJS.Blowfish.decrypt(ciphertext,key).toString(CryptoJS.enc.Utf8);
        res.status(200).json({
            success:true,
            decryptedText:decryptedText
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error !!"
        })
    }
}

/**
 * Controller function to encrypt using RC4
 */
export const encryptRC4 = async(req,res) => {
    try{
        const {data,key} = req.body;
        if(!data && !key){
            return res.status(400).json({
                success:false,
                message:"Bad request !! "
            })
        }
        const encryptedText = CryptoJS.RC4.encrypt(data,key).toString();
        res.status(200).json({
            success:true,
            encryptedText:encryptedText
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error "
        })
    }
}

export const decryptRc4 = async(req,res) => {
    try{
        const {ciphertext,key} = req.body;
        if(!ciphertext && !key){
            return res.status(400).json({
                success:false,
                message:"Bad request !!"
            })
        }
        const decryptedText = CryptoJS.RC4.decrypt(ciphertext,key).toString(CryptoJS.enc.Utf8);
        res.status(200).json({
            success:true,
            plainText:decryptedText
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error !!"
        })
    }
}