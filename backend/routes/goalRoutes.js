const express = require('express');
const router = express.Router();
const {getGoal,setGoal,updateGoal,deleteGoal} = require('../controllers/goalController')

//Before
// router.get('/', (req,res) => {
//     res.status(200).json({message: 'Get Goals'})
// });

//Beforex2
// router.get('/', getGoal);
// router.post('/', setGoal);
// router.put('/:id', updateGoal);
// router.delete('/:id', deleteGoal);

router.route('/').get(getGoal).post(setGoal);
router.route('/:id').delete(deleteGoal).put(updateGoal);


module.exports = router;