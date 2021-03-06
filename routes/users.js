const router = require("express").Router();
const {
    userRegister,
    userLogin,
    userAuth,
    serializeUser,
    checkRole
  } = require("../controllers/Auth");
//Users Registration Route
router.post('/register-user', async(req,res)=>{
    await userRegister(req.body, "user", res);
});
//Owner User Registration Route
router.post('/register-owner-user', async(req,res)=>{
    await userRegister(req.body, "owner-user", res);
});

//Admin Registration Route
router.post('/register-admin', async(req,res)=>{
    await userRegister(req.body, "admin", res);
});







// User Login Route


router.post('/login-user', async(req,res)=>{
    await userLogin(req.body,"user",res);
});
//Owner User Login Route

router.post('/login-owner-user', async(req,res)=>{
    await userLogin(req.body,"owner-user",res);

});

//Admin Login Route

router.post('/login-admin', async(req,res)=>{
    await userLogin(req.body,"admin",res);

});


//Profile Route 
router.get("/profile", userAuth, async (req,res)=>{
      console.log(req.user);
    return res.json(serializeUser(req.user));
});
//Users Protected Route 

router.get('/user-protectd',userAuth,checkRole(['user']) ,async(req,res)=>{
    return res.json("hello User")
});

//Owner User Protected Route
router.get('/owner-user-protectd',userAuth,checkRole(['owner-user']) ,async(req,res)=>{
    return res.json("hello Owner-user")

});


//Admin Protected Route

router.get('/admin-protectd',userAuth,checkRole(['admin']) ,async(req,res)=>{
    return res.json("hello admin")

});

module.exports = router;







module.exports = router;
