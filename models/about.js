const aboutDescription = {
  title: "It's all about the skills",
  description: "I love learning new concepts and building up my developer skillsets. I look forward to learning more in the future."
}

const getDescription = () => aboutDescription;

const updateDescription = (update) => {
  Object.assign(aboutDescription, update);
}

module.exports = {
  getDescription,
  updateDescription
}