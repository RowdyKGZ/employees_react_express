const express = require("express");
const router = express.Router();
const { login, register, current } = require("../controllers/users");

/* api/user/login */
router.post("/login", login);

router.post("/register", register);

router.get("/current", current);

module.exports = router;
