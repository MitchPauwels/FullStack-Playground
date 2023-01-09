// Logic related to homepage
const Itemlist = require('../models/itemlist')

module.exports = {
    getIndex : async (req,res) => {
        try {
            const items = await Itemlist.find()
            res.render('index.ejs', {itemList: items})
        } catch (error) {
            if(error)return res.status(500).send(error)

        }
    },
    createItem : async (req,res) => {
        const newItem = Itemlist({
            textInput: req.body.textInput,
            numberInput:req.body.numberInput
        }) 
        try {
            await newItem.save()
            console.log(newItem);
            
        } catch (error) {
            if (error) return res.status(500).send(error)
            res.redirect('/')
        }
    },
}