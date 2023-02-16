const skills = [
  {
    id: 1,
    name: 'javascript',
    link: 'https://www.javascript.com',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    description: 'I love JS...'
  },
  {
    id: 2,
    name: 'html',
    link: 'https://html.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png',
    description: 'I love HTML...'
  },
  {
    id: 3,
    name: 'css3',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
    description: 'I love css3...'
  },
  {
    id: 4,
    name: 'express',
    link: 'https://expressjs.com',
    icon: 'https://expressjs.com/images/express-facebook-share.png',
    description: 'I love express...'
  },
];

const getAll = () => skills;

const getOne = (id) => skills.find(skill => skill.id === parseInt(id));

const update = (id, updatedSkill) => {
  const chosenSkill = skills.find(skill => skill.id === parseInt(id));
  Object.assign(chosenSkill, updatedSkill);
};

const deleteOne = (id) => {
  const idxToDel = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idxToDel, 1);
}

const create = (skill) => {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

module.exports = {
  getAll,
  getOne,
  deleteOne,
  create,
  update
}