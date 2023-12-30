

// const asyncHandler=(requestHandler)=>{
//     Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
// }




export const asyncHandler=(requestHandler)=>async (req,res,next)=>{
    try {
        return await(requestHandler(req,res,next));
    } catch (error) {
        console.log("Error ",error.message);
        res.status(error.statusCode || 500).josn({
            success:false,
            message:error.message || "Internal Server Error"
        })
    }
}