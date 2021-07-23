const express = require('express');
const router = express.Router();
const data = require('../../rushing.json');
router.get('/',  (req, res)=> {
  try { 
    return res.status(200).json(data);
  } catch (error) {
    res.status(400);
  };
});

module.exports = router ;
