function techList(techs, name) {
  return techs.length ? techs.sort().map((tech) => ({ tech, name })) : 'Vazio!';
}

module.exports = techList;
