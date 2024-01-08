export const reqTime = function (req, res, next) {
    req.reqTime = Date.now()
    console.log(req.reqTime)
    next()
}

