const express = require('express')
const router = express.Router()


const {Profile} = require('../../models')

router.get('/', async (req, res, next) => {

    Profile.find().exec()
    .then(profiles => {
        res.send(profiles)
    }).catch(err => {
        res.status(409).send(err)
    });

    console.log('request ', req.query);
})

router.get('/:profileId' , async (req, res, next)=>{
    const { profileId } = req.params;

    console.log('request ', req.params)

    Profile.findById(profileId).exec()
    .then(profile => 
        profile 
        ? 
        res.send(profile) 
        : 
        res.status(404).send(
            {
                message : 'Perfil not found'
            }
        )
    ).catch(err =>
        res.status(409).send(err))

})

router.post('/', (req, res, next) => {

    const {id,firstName,lastName,email,jobTitle,twitter,avatarUrl} = req.body
    const newProfile = Profile( {id,firstName,lastName,email,jobTitle,twitter,avatarUrl})
    newProfile.save((err,profile)=>{
        err ? res.status(409).send(err) : res.status(201).send(profile)
    })

    console.log('request ', req.body);

})

router.put('/:profileId', async (req, res, next) => {

    const { profileId } = req.params;
    
    console.log('req ', req.params, req.body);

    Profile.findByIdAndUpdate(profileId,{$set:req.body},{new:true}).exec()
    .then(profile => res.send(profile))
    .catch(err => res.status(409).send(err))
})

router.delete('/:profileId', async (req, res, next) => {
    const { profileId } = req.params;

    console.log('req ', req.params);

    Profile.findByIdAndDelete(profileId).exec()
    .then(profile => res.send({message : 'Perfil eliminado'}))
    .catch(err => res.status(409).send(err))

})

module.exports = router;