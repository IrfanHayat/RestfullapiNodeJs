
const userModel = require("../Model/data-model");
const mongoose = require("mongoose")
exports.getAllUser = (req, res) => {
    userModel.find({}, (err, result) => {
        if (err) {
            throw err
        }
        res.status(201).json({
            result
        })

    })

}

exports.postUserData = (req, res) => {
    const user = new userModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        company: req.body.company

    })
    user.save().then(result => {
        res.status(201).json({
            result
        })
    })
}

exports.updateUserData = (req, res) => {
    const id = req.params.id;
    userModel.update({ _id: id }, { $set: { name: req.body.name, company: req.body.company } }, (err, result) => {
        if (err) {
            throw err
        }
        else {
            res.status(201).json({ result });
        }
    })


}

exports.deleteUserData = (req, res) => {
    const id = req.params.id;
    userModel.remove({ _id: id }, (err, result) => {
        res.status(201).json({
            message: "Data delete Successfull"
        })
    })

}
