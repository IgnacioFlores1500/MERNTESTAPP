
const asyncHandler = require('express-async-handler');
const { update } = require('../models/goalModel.js');
const Goal = require('../models/goalModel.js')

//#######################################//#######################################v
//@desc     Get Goals
//@routes   GET /api/goals
//@access   Private

const getGoal = asyncHandler( async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});



//#######################################//#######################################
//@desc     Set Goal
//@routes   POST /api/goals
//@access   Private

const setGoal = asyncHandler (async function (req, res) {
    //Note for here, we are adding error/exception handling for cases where we get bad or no input
    if (!req.body.text) {
        res.status(400);
        throw new Error ('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    });
    res.status(200).json(goal);
});



//#######################################//#######################################
//@desc     Update Goals
//@routes   PUT /api/goals/:id
//@access   Private

const updateGoal = asyncHandler (async function (req, res) {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400);
        throw new Error('Goal not Found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,
         {
             new: true,
         })
    res.status(200).json(updatedGoal);
});



//#######################################//#######################################
//@desc     Delete Goals
//@routes   DELETE /api/goals/:id
//@access   Private

const deleteGoal = asyncHandler (async function (req, res) {

    const goal = await Goal.findById(req.params.id);

    if (!goal){
        res.status(400);
        throw new Error('Goal not found');
    }

    await goal.remove();
    res.status(200).json({id: req.params.id});
});


//#######################################//#######################################
module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
};