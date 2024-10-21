const errorHandler = (err, req, res, next) => {
  let statusCode
  let errors = []
  let status

  console.log(err.name)

  switch (err.name) {
    case 'DATA_NOT_FOUND': 
      statusCode = 404
      status = "NOT_FOUND"
      errors.push({
        message: "Data Not Found"
      })
      break;
    case 'SequelizeValidationError':
      statusCode = 400
      status = "BAD_REQUEST"
      err.errors.forEach((error) => {
          errors.push({
            "field": error.path,
            "type": error.type,
            "message": error.message
        })
      })
      break; 
    case 'NOT_LOGIN': 
      statusCode = 400
      status = "TOKEN_NOT_FOUND"
      errors = "Missing Token"
      break;
    default: 
      statusCode = 500
      errors.push(err.name)
      break;
  }

  res.status(statusCode).json({
    code: statusCode,
    status,
    errors
  })
}

module.exports = errorHandler