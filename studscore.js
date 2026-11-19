const stud = (req,res)=>{
    const scores = [
        {name:"garry",score:22,level:300},
        {name:"mark",score:12,level:300},
        {name:"stacy",score:88,level:300},
        {name:"adeife",score:67,level:300},
        {name:"ibukun",score:91,level:300},
    ]
    res.status(200).json({scores})
}
module.exports = stud