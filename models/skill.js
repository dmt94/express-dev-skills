const skills = [
  {
    id: 1,
    name: 'javascript',
    link: 'https://www.javascript.com',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  },
  {
    id: 2,
    name: 'html',
    link: 'https://html.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png',
  },
  {
    id: 3,
    name: 'css3',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
  },
  {
    id: 4,
    name: 'express',
    link: 'https://expressjs.com',
    icon: 'https://expressjs.com/images/express-facebook-share.png',
  },
];

const getAll = () => skills;
const getOne = (id) => skills.find(skill => skill.id === id)

module.exports = {
  getAll,
  getOne
}