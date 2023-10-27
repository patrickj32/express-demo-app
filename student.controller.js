const studentController = {
    findAll: function (req, res) {
        res.send('heres all the students')
    },

    findById: function (req, res) {
        res.send(`this students Id is ${req.params.id}!`)
    },
}



module.exports= studentController