function addTask(textFromLoad = null, done = false) {
  const input = document.getElementById('taskInput');
  const taskText = textFromLoad || input.value.trim();
  if (taskText === "") return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = done;

  const spanText = document.createElement("span");
  spanText.textContent = taskText;
  spanText.classList.add("task-text");

  const taskList = document.getElementById('taskList');

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      spanText.classList.add("done");
      taskList.appendChild(li); // pindah ke bawah
    } else {
      spanText.classList.remove("done");
      taskList.insertBefore(li, taskList.firstChild); // naik ke atas
    }
    saveTasks(); // jangan lupa simpan perubahan
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Hapus';
  delBtn.classList.add('delete-btn');
  delBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(checkbox);
  li.appendChild(spanText);
  li.appendChild(delBtn);

  if (checkbox.checked) {
    taskList.appendChild(li);
  } else {
    taskList.insertBefore(li, taskList.firstChild);
  }

  if (!textFromLoad) {
    input.value = '';
    saveTasks();
  }
}
