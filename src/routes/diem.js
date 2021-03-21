const express=require('express');
const router=express.Router();
const newsController=require('../app/controllers/DiemController');



router.use('/create',newsController.getCreate);
router.use('/createpost',newsController.postCreate);
router.use('/show',newsController.fetchDiem);
router.use('/searchget',newsController.getSearch);
router.use('/searchpost',newsController.postSearch);

module.exports=router;