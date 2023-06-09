const [eu, experiencia, projetos] = document.querySelectorAll("nav ul li");
const [secteu, sectexperiencia, sectprojetos] = document.querySelectorAll("section");

const mainEl = document.querySelector('main');
mainEl.addEventListener('scroll', () => {
  const posAtual = mainEl.scrollTop;
  const posicaoexperiencia = secteu.offsetHeight - 250;
  const posicaoprojetos = posicaoexperiencia + sectexperiencia.offsetHeight;

  console.log({posAtual, posicaoexperiencia, posicaoprojetos});
  
  if (posAtual <= posicaoexperiencia) {
    eu.className = 'active';
    experiencia.className = '';
    projetos.className = '';
  } else if (posAtual <= posicaoprojetos) {
    eu.className = '';
    experiencia.className = 'active';
    projetos.className = '';
  } else {
    eu.className = '';
    experiencia.className = '';
    projetos.className = 'active';
  }
})