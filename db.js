var firebaseConfig = {
  apiKey: 'AIzaSyD6WObIn7BPXBLwyDLDp1f9KpC79DESE5E',
  authDomain: 'projeto-prop-leiteira.firebaseapp.com',
  projectId: 'projeto-prop-leiteira',
  storageBucket: 'projeto-prop-leiteira.appspot.com',
  messagingSenderId: '584139076339',
  appId: '1:584139076339:web:7b77d6a5b43f2c174f7d86'
}

firebase.initializeApp(firebaseConfig)

var firestore = firebase.firestore()

let submitButton = document.getElementById('submit')
submitButton.addEventListener('click', e => {
  e.preventDefault()

  let nomeAnimal = document.getElementById('nome').value
  let numeroAnimal = document.getElementById('numero').value
  let data_nasc = document.getElementById('data_nascimento').value
  let nomeMae = document.getElementById('nomeMae').value
  let numeroMae = document.getElementById('numeroMae').value
  let nomePai = document.getElementById('nomePai').value

  firestore
    .collection('dadosAnimais')
    .doc()
    .set({
      nomeAnimal: nomeAnimal,
      numeroAnimal: numeroAnimal,
      data_nasc: data_nasc,
      nomeMae: nomeMae,
      numeroMae: numeroMae,
      nomePai: nomePai
    })
    .then(() => {})
    .catch(error => {
      console.log(error)
    })

  function clearForm() {
    document.getElementById('contactForm').reset()
  }
  clearForm()
})

const apiResult = [
  {
    nomeAnimal: 'Bombom',
    numeroAnimal: 08,
    data_nasc: '12/06/2018',
    nomeMae: 'Dalila',
    numeroMae: 158,
    nomePai: 'Airlift'
  },
  {
    nomeAnimal: 'Bombom',
    numeroAnimal: 08,
    data_nasc: '12/06/2018',
    nomeMae: 'Dalila',
    numeroMae: 158,
    nomePai: 'Airlift'
  }
]

const container = document.getElementById('accordion')

apiResult.forEach((result, idx) => {
  // Create card element
  const card = document.createElement('div')
  card.classList = 'card-body'

  // Construct card content
  const content = `
  <div class="container">
    <div class="card col-6">
    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
      <div class="card-body ">

      <div class= "foto">
      </div>

        <div><h5>Nome: ${result.nomeAnimal}</h5> <br/>
        <p>Número: ${result.numeroAnimal}</p>
        <p>Data de Nascimento: ${result.data_nasc}</p>
        <p>Nome da mãe: ${result.nomeMae}</p>
        <p>Número da mãe: ${result.numeroMae}</p>
        <p>Nome do pai: ${result.nomePai}</p>
      </div>
    </div>
  </div>
  `

  // Append newyly created card element to the container
  container.innerHTML += content
})
