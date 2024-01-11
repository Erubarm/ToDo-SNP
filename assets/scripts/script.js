const main = document.querySelector('main');
const input = document.querySelector('input')
const ul = document.querySelector('ul')

console.log(ul)

console.log(input)

document.addEventListener('keyup', event => {
    if (event.code === 'Enter') {
        const li = document.createElement('li');
        li.innerHTML += `
        <div class="li-inner">
            <input type="checkbox">
            <p>${input.value}</p>
        </div>
        `
        ul.appendChild(li);
    }
})