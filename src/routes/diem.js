const express=require('express');
const router=express.Router();
const newsController=require('../app/controllers/DiemController');



router.use('/create',newsController.createget);
router.use('/createpost',newsController.createpost);
router.use('/show',newsController.showdiem);
router.use('/searchget',newsController.searchget);
router.use('/searchpost',newsController.searchpost);

module.exports=router;