const axios = require("axios");
const { oauth2client } = require("../config/googleAuthConfigs");
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

const authController = async (req, res) => {
  try {
    const { code } = req.query;
    const resp = await oauth2client.getToken(code);
    oauth2client.setCredentials(resp.tokens);
    const userResp = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${resp.tokens.access_token}`
    );
    // console.log(userResp);
    const { email, name, picture, id } = userResp.data;
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        name,
        email,
        googleId: id,
        profileImg: picture,
      });
    }
    const userData = await user.save();
    const { _id } = userData;
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES || "1d",
    });

    return res.status(200).json({
      statusCode: 200,
      success: true,
      token,
      data: userData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      statusCode: 500,
      success: false,
      message: "INTERNAL_SERVER_ERROR",
      error: err,
    });
  }
};

module.exports = authController;
