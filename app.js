const add = document.querySelector('#add');
const addNote = document.querySelector('#addNote');
const addTask = document.querySelector('#addTask');
const NewTaskDate = document.querySelector('#date');
const NewTaskValue = document.querySelector('#task');
const openMenu = document.querySelector('#open');
const closeMenu = document.querySelector('#close');
const menu = document.querySelector('#menu');

openMenu.addEventListener('click', () => {
  menu.classList.remove('translate-y-[-100%]');
});

closeMenu.addEventListener('click', () => {
  menu.classList.add('translate-y-[-100%]');
});
document.addEventListener('DOMContentLoaded', () => {
  let year = new Date().getFullYear();
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;
  NewTaskDate.value = `${year}-${month < 10 ? '0' + month : month}-${
    date < 10 ? '0' + date : date
  }`;
});

const main = document.querySelector('#main');

let noTask = document.createElement('p');
noTask.innerText = 'There is no task, add a new task!';
noTask.classList.add('my-20', 'mx-20', 'text-black', 'notask');
main.appendChild(noTask);

const bgColor = [
  'bg-pink-100',
  'bg-purple-100',
  'bg-indigo-100',
  'bg-lightBlue-100',
  'bg-teal-100',
  'bg-emerald-100',
  'bg-green-100',
  'bg-lime-100',
  'bg-yellow-100',
  'bg-amber-100',
  'bg-orange-100',
  'bg-red-100',
  'bg-pink-100',
  'bg-purple-100',
  'bg-indigo-100',
  'bg-teal-100',
  'bg-emerald-100',
  'bg-green-100',
  'bg-lime-100',
  'bg-yellow-100',
  'bg-amber-100',
  'bg-orange-100',
  'bg-red-100',
  'bg-pink-200',
  'bg-purple-200',
  'bg-indigo-200',
  'bg-teal-200',
  'bg-emerald-200',
  'bg-green-200',
  'bg-lime-200',
  'bg-yellow-200',
  'bg-amber-200',
  'bg-orange-200',
  'bg-red-200',
  'bg-pink-300',
  'bg-purple-300',
  'bg-indigo-300',
  'bg-teal-300',
  'bg-emerald-300',
  'bg-green-300',
  'bg-lime-300',
  'bg-yellow-300',
  'bg-amber-300',
  'bg-orange-300',
  'bg-red-300',
  'bg-pink-400',
  'bg-purple-400',
  'bg-indigo-400',
  'bg-teal-400',
  'bg-emerald-400',
  'bg-green-400',
  'bg-lime-400',
  'bg-yellow-400',
  'bg-amber-400',
  'bg-orange-400',
  'bg-red-400',
  'bg-pink-1000',
];
add.addEventListener('click', () => {
  addNote.classList.add('block');
  addNote.classList.remove('hidden');
  NewTaskDate.focus();
});
addTask.addEventListener('click', () => {
  if (NewTaskValue.value === '') {
    alert('Please enter a task');
  } else if (NewTaskDate.value === '') {
    alert('Please enter a date');
  } else {
    addNote.classList.remove('block');
    addNote.classList.add('hidden');
    let randomColor = Math.floor(Math.random() * 58);
    const main = document.querySelector('#main');
    const notask = document.querySelector('.notask');
    console.log(main.children.length);

    if (main.childNodes.length >= 1) {
      notask.classList.add('hidden');
    }

    const newDiv = document.createElement('div');
    newDiv.innerHTML += `
      <div class="supermain mx-10 my-10 flex">
        <div
          class="${bgColor[randomColor]} h-auto min-w-[300px] max-w-[400px] rounded cursor-pointer p-4  flex flex-col gap-4"
        >
          <div class="font-bold italic flex justify-between"
            > ${NewTaskDate.value}
            <div class="rounded-[5px]"
              ><img
              class ="delete"
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/30/filled-trash.png"
                alt="filled-trash" /></div></div>
          <div class="flex items-start gap-0 my-5 flexwrap-wrap">
            <img class="mt-2" width="24" height="24" src="https://img.icons8.com/material-rounded/24/task.png" alt="task"/><div class='done mt-[-8px] text-2xl mx-5'> <h1>${NewTaskValue.value}</h1> </div></div> 
    
        </div>
      </div>`;
    main.appendChild(newDiv);

    let done = document.querySelectorAll('.done');
    let fill = document.querySelectorAll('.fill');
    let supermain = document.querySelectorAll('.supermain');

    done.forEach((tick) => {
      tick.addEventListener('click', () => {
        tick.classList.toggle('line-through');
      });
    });

    let deleted = document.querySelectorAll('.delete');
    deleted.forEach((del) => {
      del.addEventListener('click', () => {
        supermain.forEach((item) => {
          item.addEventListener('dblclick', () => {
            item.remove();
          });
        });
      });
    });
  }
  console.log(NewTaskDate.value);
  console.log(NewTaskValue.value);
  NewTaskValue.value = '';
  NewTaskDate.value = '';
});
