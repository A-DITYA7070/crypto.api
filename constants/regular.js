

export const sendStatus = async(req,res,statusCode,message) => {
    return res.status(statusCode).json({
        success:false,
        message:message
    })
}

