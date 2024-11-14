const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
let btn = document.getElementById("btn")
let loaders = document.getElementById("loaders")
let container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
  return [
    "Halo selamat datang di fidBot. Siapa namamu?",
    `Hay ${data?.nama}, usiamu berapa?`,
    `Ohhh ${data?.usia}, diusiamu sekarang hoby kamu apa?`,
    `Wawww sama dong, hobyku juga ${data?.hoby}. Btw dah punya pacar?`,
    `ohh ${data?.pacar}. Yaudah kalo gitu, makasih infonya!!`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let dataUsers = []

function botStart() {
  if (jawaban.value.length < 1) return alert('tolong isi terlebih dahulu')
  init++
  if (init === 1) {
    botDelay({ nama: jawaban.value })
  } else if (init === 2) {
    botDelay({ usia: jawaban.value })
  } else if (init === 3) {
    botDelay({ hoby: jawaban.value })
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value })
  } else if (init === 5) {
    alert(`Terimakasih ${dataUsers[0]}, anda akan dikembalikan ke tampilan awal`)
    location.reload()
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block"
  container[0].style.filter = "blur(8px)"
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
  }, [1000])
  dataUsers.push(jawaban.value)
  jawaban.value = ""
}