const Skills = require('../models/skills');

const index = (req, res) => {
  res.render('skills/index', {
    skills: Skills.getAll(),
    title: "All My Skills"
  })
}

const show = (req, res) => {
  res.render('skills/show', {
    skill: Skills.getOne(req.params.id),
    title: "My Skill"
  })
}

const newTodo = (req, res) => {
  res.render('skills/new', {
    title: "New Skill"
  })
}

const update = (req, res) => {
  console.log("REQ BODY", req.body);
  Skills.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

const edit = (req, res) => {
  const skill = Skills.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'Edit Skill',
    skill
  });
}

const deleteSkill = (req, res) => {
  Skills.deleteOne(req.params.id);
  res.redirect('/skills');
}

const create = (req, res) => {
  Skills.create(req.body);
  res.redirect('/skills');
}

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteSkill,
  edit,
  update,
}