document.getElementById('formTask').addEventListener('submit', saveTask)

function saveTask(e) {
 let title = document.getElementById('title').value
 let description = document.getElementById('description').value
 console.log(description)

 let task = {
  title,
  description,
 }

 if (localStorage.getItem('tasks') === null) {
  let tasks = []
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
 } else {
  let tasks = JSON.parse(localStorage.getItem('tasks'))
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
 }

 getTasks()
 document.getElementById('formTask').reset()
 e.preventDefault()
}

function deleteTask(title) {
 console.log(title)
 let tasks = JSON.parse(localStorage.getItem('tasks'))
 for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].title == title) {
   tasks.splice(i, 1)
  }
 }

 localStorage.setItem('tasks', JSON.stringify(tasks))
 getTasks()
}

var resultado = window.confirm('Estas seguro?')
if (resultado === true) {
 window.alert('Okay, si estas seguro.')
} else {
 window.alert('Pareces indeciso')
}
getTasks()
