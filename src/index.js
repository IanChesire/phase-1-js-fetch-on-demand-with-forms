const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.querySelector('input#searchById');
    console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res => res.json())
    .then( data => {
        const title = document.querySelector('selection#movieDetails h4');
        const summary = document.querySelector('selection#movieDetails p');

        title.textContent = data.title;
        summary.textContent = data.summary;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);