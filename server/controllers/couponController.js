import Coupon from '../models/couponModel.js';
import ClaimLog from '../models/claimLogModel.js';

export const claimCoupon = async (req, res) => {
  try {
    const { code } = req.body;

    if(!code){
        return res.status(400).json({ message: 'Coupon code is required' });
    }

    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }

    if (coupon.claimed) {
      return res.status(400).json({ message: 'Coupon already claimed' });
    }

    coupon.claimed = true;
    await coupon.save();

    // Log the claim
    const { ip, cookie } = req.claimData;
    await ClaimLog.create({ ip, cookie });

    // Set a cookie to track the claim
    res.cookie('claim_cookie', cookie, { httpOnly: true, maxAge: 3600 * 1000 });

    res.status(200).json({ message: 'Coupon claimed successfully', coupon: coupon.code });

  } catch (error) {
    console.error('Error claiming coupon:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

export const addCoupon = async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) {
      return res.status(400).json({ message: 'Coupon code is required' });
    }

    const newCoupon = new Coupon({ code, claimed: false });
    await newCoupon.save();

    res.status(201).json({ message: 'Coupon added successfully', coupon: newCoupon });
  } catch (error) {
    console.error('Error adding coupon:', error);
    res.status(400).json({ message: 'Invalid coupon data', error });
  }
};

export const getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json({ message: 'Coupons retrieved successfully', coupons });
  } catch (error) {
    console.error('Error fetching coupons:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
