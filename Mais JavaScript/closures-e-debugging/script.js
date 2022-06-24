function contagem() {
  let total = 0
  return function incrementado() {
    total++
    console.log(total)
  }
}

const ativarIcremento = contagem()
ativarIcremento()
ativarIcremento()
ativarIcremento()