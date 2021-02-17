const express = require('express')
const router = express.Router()

router.get('/signup', (req, res) => {

    res.json({
        data: 'The user has been saved in the database. Just tryna see my update'
    })

})


module.exports = router