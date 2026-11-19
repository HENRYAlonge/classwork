const stud = (req,res)=>{
    const scores = [
        {name:"garry",score:22},
        {name:"mark",score:12},
        {name:"stacy",score:88},
        {name:"adeife",score:67},
        {name:"ibukun",score:91},
    ]
    res.status(200).json({scores})
}
module.exports = stud