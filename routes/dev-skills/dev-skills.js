const express = require('express')

const router = express.Router();
const mySkillsCtrl = require('../../controllers/dev-skills')



router.get('/',mySkillsCtrl.index)
router.get('/new',mySkillsCtrl.new)
router.get('/:id',mySkillsCtrl.show)
router.post('/new',mySkillsCtrl.create)
router.delete('/:id',mySkillsCtrl.delete)
router.get('/:id/edit',mySkillsCtrl.edit)
router.put('/:id',mySkillsCtrl.update)

module.exports = router;



