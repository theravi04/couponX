import ClaimLog from '../models/claimLogModel.js';

export const abusePreventionMiddleware = async (req, res, next) => {
  const ip = req.body.ip || req.ip; // Prefer IP from frontend, fallback to server IP
  console.log("User IP:", ip);

  const cookie = req.cookies?.claim_cookie;

  const recentClaim = await ClaimLog.findOne({
    $or: [{ ip }, { cookie }],
    timestamp: { $gt: new Date(Date.now() - 3600 * 1000) } // 1-hour cooldown
  });

  if (recentClaim) {
    const remainingTime = Math.ceil((recentClaim.timestamp.getTime() + 3600 * 1000 - Date.now()) / 1000);
    return res.status(429).json({ message: `Please wait ${remainingTime} seconds before claiming again.` });
  }

  req.claimData = { ip, cookie: cookie || Math.random().toString(36).substring(2) };
  next();
};