const button = document.getElementById('button');
const data = document.getElementById('data');
button.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      json.forEach((item) => {
        const element = document.createElement('li');
        element.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
        data.appendChild(element);
      });
    });
});