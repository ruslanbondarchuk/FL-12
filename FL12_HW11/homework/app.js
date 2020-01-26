const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

let rootDir = document.createElement('ul');
rootNode.append(rootDir);

document.addEventListener('DOMContentLoaded', generateStructure(structure, rootDir));

function generateStructure(structure, location) {
for (let elem of structure) {
  if (elem.folder) {
    let Dir = document.createElement('ul');
    Dir.classList.add('folder');
    location.append(Dir);
    Dir.insertAdjacentHTML('afterbegin', `<i class="material-icons">folder_open</i>${elem.title}`);
    if (elem.children) {
      Dir.classList.add('caret');
      generateStructure(elem.children, Dir);
    }
  } else {
    let file = document.createElement('ul');
    location.append(file);
    file.insertAdjacentHTML('afterbegin', `<i class="material-icons">insert_drive_file</i>${elem.title}`)
    file.className ='file';
  }
}
}
let folders = document.getElementsByClassName('folder');
for (let i = 0; i < folders.length; i++) {
  folders[i].addEventListener('click', event => {
    for (let i = 0; i < event.target.childNodes.length; i++) {
       event.target.childNodes[i].classList.toggle('nested')
    }
  })
}















//
