const mySkills = require('../data/models/dev-skills')


function index(req,res){
    res.render('./dev-skills/index',{
        title: '-My Developer Skills-',
        myDevSkills: mySkills.getAll()

    })
}

function show(req,res){
    res.render('./dev-skills/show',{
        title: 'Skill',
        idx: req.params.id,
        mySkill: mySkills.getOne(req.params.id)
    })
}


function newTodo(req,res){
    res.render('./dev-skills/new')
}

function create(req,res){
    if(!validInput(req.body)){
        res.redirect('/dev-skills/new')
        return;
    }
    skill = req.body
    !!req.body.comfortable? skill.comfortable = true : skill.comfortable = false
    mySkills.create(skill)
    res.redirect('/dev-skills')
}
function deleteSkill(req,res){
    mySkills.delete(req.params.id)
    res.redirect('/dev-skills')
}

function edit(req,res){
    res.render('./dev-skills/edit',{
        idx: req.params.id,
        skill: mySkills.getOne(req.params.id)
    })
}
function update(req,res){
    mySkills.update(req.params.id,req.body)
    res.redirect('/dev-skills')
}


function validInput(skill){
    let skills = mySkills.getAll()
    let oneSkill = skill.skill
    let alreadyExists;
    skills.forEach((el,idx)=>{
        if(skills[idx].skill.toLowerCase() === oneSkill){
            alreadyExists = true;
        }
    })
    let isProjNumANum;
    if(!!parseInt(skill.numProjects)){
        isProjNumANum = true;
    }
    if(!alreadyExists && isProjNumANum){
        return true;
    }
}
module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteSkill,
    edit,
    update

    
}