const asyncHandler = require('express-async-handler');

//#######################################//#######################################v
//@desc     Get Goals
//@routes   GET /api/goals
//@access   Private

const getGoal = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Get goals'});
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

    res.status(200).json({message: 'Set Goals'});
});



//#######################################//#######################################
//@desc     Update Goals
//@routes   PUT /api/goals/:id
//@access   Private

const updateGoal = asyncHandler (async function (req, res) {
    res.status(200).json({message: `Update Goals ${req.params.id}`});
});



//#######################################//#######################################
//@desc     Delete Goals
//@routes   DELETE /api/goals/:id
//@access   Private

const deleteGoal = asyncHandler (async function (req, res) {
    res.status(200).json({message: `Deleted Goals ${req.params.id}`});
});


//#######################################//#######################################
module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
};