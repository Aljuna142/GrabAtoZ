//import errorHandler line missing
const errorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 500;


    if(process.env.Node_ENV == 'development'){
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            stack:err.stack,
            error :err
          }); 
    }


    if(process.env.Node_ENV == 'production'){
        let message =err.message;
        let error = new Error(message);



        if(err.name=="ValidationError"){
            message= Objects.value(err.errors).map(value=> value.message)
            error =new Error(message) ;// will do correction in this line late

        }
if(err.name == 'CastError'){
    message= `Resource not found: ${err.path}`;
    error= new Error(message) // will do some changes later 
}

        res.status(err.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error'

    })
    
  };
}
  export default errorMiddleware;


  