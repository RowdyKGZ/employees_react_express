const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
const {
  all,
  add,
  remove,
  edit,
  employee,
} = require("../controllers/employees");

// api/employees
router.get("/", auth, all);
router.get("/:id", auth, employee);
router.post("/add", auth, add);
router.delete("/remove", auth, remove);
router.put("/edit/:id", auth, edit);

module.exports = router;
