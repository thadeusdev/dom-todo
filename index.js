document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        toDo(e.target.new_todo.value)
    })
})

function toDo(todo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    p.textContent = `${todo} `
    p.appendChild(btn)
    console.log(p)
    console.log(btn)
    document.querySelector('#todo_container').appendChild(p)
}

function handleDelete(e){
    e.target.parentNode.remove()
}