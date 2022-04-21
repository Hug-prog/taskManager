import Tokens from "../models/Token.js";

export async function createRefreshToken(token, userId) {
  try {
    const refreshToken = await Tokens.create({
      userId,
      token,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getToken(tokenQuerie) {
  try {
    const token = await Tokens.find({ token: tokenQuerie });
    return token;
  } catch (error) {
    console.log(error);
    return false;
  }
}
