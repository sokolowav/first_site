document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.humburger')
  burger.addEventListener('click', e => {
    const isActive = e.currentTarget.classList.value.indexOf('active') === -1 ? false : true
    if (!isActive) {
      burger.classList.add('active')
    } else {
      burger.classList.remove('active')
    }
  })

});
