const express = require('express')
const router = express.Router()
const profileMocks = require('../../utils/mocks/ProfileMocks')

router.get('/', (req, res) => {
    const { query } = req.query

    res.status(200).json({
        data: profileMocks,
        message: "Perfiles Listados"
    })
})

module.exports = router;