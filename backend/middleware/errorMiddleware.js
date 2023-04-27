const notFound = (req,res,next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
   next(error);
 }

 const errorHandler = (err,req,res) =>{
    const StatusCode = res.StatusCode === 200 ? 500 : res.StatusCode ;
    res.status(StatusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack ,
    })
}

export {notFound,errorHandler};