const openMenu = () => {
  let item = document.getElementById('drop-link-container')

  if(item.style.display === 'flex') {
    item.style.display = 'none'
  } else {
    item.style.display = 'flex'
  }


  // for(let i = 0; i < items.length; i++) {
  //   if(items[i].style.display === 'flex') {
  //     items[i].style.display = 'none'
  //   } else {
  //     items[i].style.display = 'flex'
  //   }
  // }
}
