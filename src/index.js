const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', e => {
    e.preventDefault();
    // const input = this.querySelector('input#searchById');
    // console.log(e);

    fetch(`http://localhost:3000/movies`)
    .then(res => res.json())
    .then( data => {
        console.log(data);
    })
  })
}

document.addEventListener('DOMContentLoaded', init);