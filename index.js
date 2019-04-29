const menuIcon = document.getElementsByClassName('menu-icon')[0]
const sidebar = document.getElementsByClassName('sidebar')[0]
const sidebarCloseIcon = document.getElementsByClassName(
  'sidebar__close-icon'
)[0]

function toggleClassName(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className)
  } else {
    element.classList.add(className)
  }
}

menuIcon.addEventListener('click', function() {
  toggleClassName(sidebar, 'active')
})
sidebarCloseIcon.addEventListener('click', function() {
  toggleClassName(sidebar, 'active')
})

function submitForm() {
  let first = document.getElementById('first-name').value
  let last = document.getElementById('last-name').value

  alert(`Data saved for ${first} ${last}`)
}
