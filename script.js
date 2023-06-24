function toggleMode() {
  const html = document.documentElement;
  const title = document.getElementById('title');

  html.classList.toggle('homolog');
  
  if (html.classList.contains('homolog')) {
    title.textContent = "Portais Webhelp - Homologação"
  } else {
    title.textContent = "Portais Webhelp - Produção"
  }
}