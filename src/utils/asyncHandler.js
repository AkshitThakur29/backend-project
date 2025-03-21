const asyncHandler=(requestHandler)=>{
 return (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
}
}
export {asyncHandler}


// or same code writen as 

// const asynsHandler=(fn)=>async(req,res,next)=>{   // higher order function.

//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code||500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }