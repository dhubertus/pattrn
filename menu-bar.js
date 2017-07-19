const openMenu = () => {
  let item = document.getElementById('drop-link-container')

  if(item.style.display === 'flex') {
    item.style.display = 'none'
  } else {
    item.style.display = 'flex'
  }
}
