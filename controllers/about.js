const About = require('../models/about');
const about = About.getDescription();

const aboutDescription = (req, res) => {
  res.render('index', {
    title: about.title,
    description: about.description
  })
}

const edit = (req, res) => {
  res.render('partials/about-edit', {
    title: about.title,
    description: about.description
  })
}

const update = (req, res) => {
  About.updateDescription(req.body);
  res.redirect(`/`);
}

module.exports = {
  aboutDescription,
  edit,
  update
}