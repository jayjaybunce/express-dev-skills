const mySkills = [
    {skill: 'HTML', comfortable: true, numProjects: '5'},
    {skill: 'CSS', comfortable: true, numProjects: '5'},
    {skill: 'JavaScript', comfortable: true, numProjects: '5'},
    {skill: 'Node', comfortable: false, numProjects: '2'},
    {skill: 'ReactJS', comfortable: false, numProjects: '1'},
    {skill: 'Python', comfortable: false, numProjects: '4'},
    {skill: 'Ruby', comfortable: false, numProjects: '1'}
]

function getOne(id){
    return mySkills[id]
}
function getAll(){
    return mySkills;
}
function create(skill){
    mySkills.push(skill)
}
function deleteSkill(idx){
    mySkills.splice(idx,1)
}
function update(idx,skill){
    mySkills.splice(idx,1,skill)
}

module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteSkill,
    update
}