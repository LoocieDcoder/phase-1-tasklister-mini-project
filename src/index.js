document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener(submit), (e)=> {
    e.preventDefault();
    buildToDo (e.target.new_todo.value);
    FormData.reset();
  }
});

