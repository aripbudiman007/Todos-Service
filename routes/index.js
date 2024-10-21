const router = require('express').Router();

const todoRoutes = require('./todoRoutes');
const authRoutes = require('./authRoutes');
const authentication = require('../middleware/authentication');

router.use("/auth",  authRoutes);
router.use("/todos", authentication, todoRoutes);

module.exports = router