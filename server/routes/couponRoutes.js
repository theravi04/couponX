import express from 'express';
import { claimCoupon, addCoupon, getCoupons } from '../controllers/couponController.js';
import { abusePreventionMiddleware } from '../utils/ipMiddleware.js';

const router = express.Router();

router.post('/claim',abusePreventionMiddleware, claimCoupon);
router.post('/add', addCoupon);     
router.get('/all', getCoupons);

export default router;
