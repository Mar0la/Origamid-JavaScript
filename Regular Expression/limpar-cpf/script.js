const cpfsList = document.querySelectorAll('.cpf li')

const elementsInnerText = ([...elements]) => {
  return elements.map(element => element.innerText)
}

const limparcpf = (cpf) => {
  return cpf.replace(/\D/g, '')
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

const formatarCpfs = (cpfs) => {
  return cpfs.map(limparcpf).map(construirCPF)
}

const substituiCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements)
  const cpfsFormatados = formatarCpfs(cpfs)
  console.log(cpfsFormatados)

  cpfsElements.forEach((element, index) => {
    element.innerText =  cpfsFormatados[index]
  })
}

substituiCPFS(cpfsList)