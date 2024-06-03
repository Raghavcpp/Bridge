const router = require('express').Router()
const problemCtrl = require("../controllers/problemCtrl")
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.get('/problem',auth, problemCtrl.getAllProblems );
router.post('/problem/add',auth, problemCtrl.addProblem );
router.get('/problem/:problemId',auth, problemCtrl.getProblem);
router.put('/problem/submit/:problemId',auth, problemCtrl.submitproblem );
router.put('/problem/:problemId',auth, problemCtrl.editproblem );
router.delete('/problem/:problemId',auth, problemCtrl.deleteproblem );

module.exports = router;