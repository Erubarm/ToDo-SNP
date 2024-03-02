const main = document.querySelector('main');
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const taskCross = document.getElementById('cross');
console.log(ul)

console.log(input)

input.addEventListener('keyup', event => {
    if (event.code === 'Enter') {
        const li = document.createElement('li');
        li.innerHTML += `
        <div class="li-inner">
            <div class="task__input-text">
                <input type="checkbox">
                <p>${input.value}</p>
            </div>
            <button id="cross" class="button__cross"><img src="/assets/icons/cross.svg" alt="cross"></button>
        </div>
        `
        ul.appendChild(li);
    }
})




