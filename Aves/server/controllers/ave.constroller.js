const Ave = require('../models/aves')
const aveCtrl = {};

aveCtrl.getAves = async (req, res) => {
    const aves = await Ave.find();
    res.json(aves);
  };

aveCtrl.createAves = async (req, res)=>{
    const ave = await new Ave(req.body);
    ave.save();
    console.log(req.body);
    res.json({
        status: 'recibida' 
    });
};
aveCtrl.getAve = async (req, res)=>{
    const ave = await Ave.findById(req.params.id);
    res.json(ave);
};
aveCtrl.editAves = async (req, res)=>{
    const {id} = req.params;
    const ave = {
        name: req.body.name,
        habitad: req.body.habitad,
        type_ave: req.body.type_ave
    };
    await Ave.findByIdAndUpdate(id, {$set:ave}, {new: true});
    res.json({
        status: 'ave actualizada'
    });
};
aveCtrl.deleteAves = async (req, res)=>{
    const {id} = req.params;
    await Ave.findByIdAndDelete(id);
    res.json({
        status: 'ave eliminada'
    });
};
module.exports = aveCtrl;