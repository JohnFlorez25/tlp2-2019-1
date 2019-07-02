const express = require('express')
const router = express.Router();
const profileMocks = require('../../utils/mocks/ProfileMocks')

router.get('/', (req, res) => {

    console.log('request ', req.query)

    res.status(200).json({
        data: profileMocks,
        message: "Perfiles Listados"
    })
})

router.get('/:profileId', function(req, res) {
    
    const { profileId } = req.params;

    console.log('request ', req.params)

    res.status(200).json({
        data: profileMocks[0],
        message: 'profile retrieved'
    });
});


router.put('/:productId', function(req, res) {

    const { profileId } = req.params;
    //informacion que voy a actualizar
    const { body: profile } = req;

    res.status(200).json({
        data: profileMocks,
        message: 'profile updated'
    });
});

router.post('/', (req, res) => {

    console.log('request', req.body)
    const {body: profile } = req;

    profileMocks.push(profile);

    res.status(200).json({
        data: profileMocks[profileMocks.length-1],
        message: 'Perfil agregado'
    })
})


router.delete('/:profileId', function(req, res) {

    const { profileId } = req.params;

    console.log('req ', req.params);

    res.status(200).json({
        data: profileMocks[profileId],
        message: 'profile deleted'
    });
});

module.exports = router