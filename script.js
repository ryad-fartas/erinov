let formationIndex = 0
let eventsIndex = 0

function slideFormation(direction) {
  const track = document.getElementById("formationTrack")
  const cards = track.querySelectorAll(".card")
  const cardWidth = 320 + 24 // Updated card width to match new min-width

  formationIndex += direction

  const maxIndex = Math.max(0, cards.length - 3)

  if (formationIndex > maxIndex) {
    formationIndex = maxIndex
  } else if (formationIndex < 0) {
    formationIndex = 0
  }

  const offset = -formationIndex * cardWidth
  track.style.transform = `translateX(${offset}px)`
}

function slideEvents(direction) {
  const track = document.getElementById("eventsTrack")
  const cards = track.querySelectorAll(".event-card")
  const cardWidth = 720 + 74 // Updated card width to match new min-width

  eventsIndex += direction

  const maxIndex = Math.max(0, cards.length - 3)

  if (eventsIndex > maxIndex) {
    eventsIndex = maxIndex
  } else if (eventsIndex < 0) {
    eventsIndex = 0
  }

  const offset = -eventsIndex * cardWidth
  track.style.transform = `translateX(${offset}px)`
}

function openModal(imageSrc, title) {
  const modal = document.getElementById("imageModal")
  const modalImage = document.getElementById("modalImage")
  const modalTitle = document.getElementById("modalTitle")

  modalImage.src = imageSrc
  modalTitle.textContent = title
  modal.classList.add("show")
}

function closeModal() {
  const modal = document.getElementById("imageModal")
  modal.classList.remove("show")
}

// Close modal when pressing Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal()
  }
})

function handleSubmit(event) {
  event.preventDefault()
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  console.log("Formulaire soumis:", { name, email, message })
  alert("Merci! Votre message a été envoyé.")

  event.target.reset()
}
