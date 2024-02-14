function toggleMode() {
  const html = document.documentElement
  const title = document.getElementById("title")
  const tim = document.getElementById("tim")
  const claro = document.getElementById("claro")
  const boticario = document.getElementById("boticario")
  const eudora = document.getElementById("eudora")
  const atacadao = document.getElementById("atacadao")
  const carrefour = document.getElementById("carrefour")
  const natura = document.getElementById("natura")
  const boticarioColombia = document.getElementById("boticarioColombia")
  const quintoAndar = document.getElementById("quintoAndar")

  html.classList.toggle("homolog")

  if (html.classList.contains("homolog")) {
    title.textContent = "Portais Concentrix - Homologação"
    tim.setAttribute(
      "href",
      "https://homologtimnegocia.servicesdigital.com.br/"
    )
    claro.setAttribute("href", "https://hml.claronegocie.com.br/login")
    eudora.setAttribute("href", "https://hml.regularizaeudora.com.br/")
    boticario.setAttribute("href", "https://hml.regularizaboti.com.br/")
    carrefour.setAttribute(
      "href",
      "https://hml.cartaocarrefour.servicesdigital.com.br/access"
    )
    atacadao.setAttribute(
      "href",
      "https://hml.regularize.servicesdigital.com.br/"
    )
    natura.setAttribute("href", "https://hml.negocienaturaeavon.com.br/")
    quintoAndar.setAttribute(
      "href",
      "https://hml.negociequintoandar.com.br/"
    )
    boticarioColombia.setAttribute("href", "https://boticario-colombia-hml.engenhariapoc-wh.com/")
  } else {
    title.textContent = "Portais Concentrix - Produção"
    tim.setAttribute("href", "https://timnegocia.com.br/")
    claro.setAttribute("href", "https://claronegocie.com.br/")
    boticario.setAttribute("href", "https://regularizaboti.com.br/")
    eudora.setAttribute("href", "https://regularizaeudora.com.br/")
    atacadao.setAttribute("href", "https://regularize.servicesdigital.com.br/")
    carrefour.setAttribute(
      "href",
      "https://cartaocarrefour.servicesdigital.com.br/access"
    )
    natura.setAttribute("href", "https://negocienaturaeavon.com.br/")
    quintoAndar.setAttribute(
      "href",
      "https://negociequintoandar.com.br"
    )
    boticarioColombia.setAttribute(
      "href",
      "https://regularizagrupooboticario.com/"
    )
  }
}
