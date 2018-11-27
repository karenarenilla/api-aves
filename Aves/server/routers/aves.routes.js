const express = require('express');
const aveCtrl = require('../controllers/ave.constroller');
const router = express.Router();

router.get('/listar-aves', aveCtrl.getAves);
router.post('/crear-ave', aveCtrl.createAves);
router.get('/:id', aveCtrl.getAve);
router.put('/:id', aveCtrl.editAves);
router.delete('/:id', aveCtrl.deleteAves);

module.exports = router;