module.exports = (req, res, next) => {
  try {
    if (req.headers.x_custom_auth) {
      if (req.headers.x_custom_auth == process.env.TWILIO_AUTH) {
        next();
      } else {
        return res.status(403).send({
          message: 'NOT AUTHORIZED',
        });
      }
    }else{
        return res.status(403).send({
            message: 'PLEASE SEND AUTH HEADER',
          });
    }
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid or expired token',
    });
  }
};
