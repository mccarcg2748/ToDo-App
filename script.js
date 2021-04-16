const input = document.getElementById('input');
const inputbtn = document.getElementById('input-btn');
const box2 = document.getElementById('box2');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const modaltext = document.querySelector('.modal-text');
const completedIcon = document.getElementById('completed-icon');
const toDoIcon = document.getElementById('to-do');
const box5 = document.getElementById('box5');
const complete = document.getElementById('btn1');
const del = document.getElementById('btn2');
const stored = localStorage.getItem('arrValues');
const storedcomp = localStorage.getItem('completedValues')
let arr = [];
let arr2 = [];
let arr3 = [];


console.log(window.localStorage.getItem('arrValues'));





//Input Event Listener for NEWLY CREATED DIV
inputbtn.addEventListener('click', () => {
  const div = document.createElement('div');
  for(var i = 0; i < arr.length; i++){
    if(input.value === arr[i]){
      alert('Cannot list the same task more than once');
      box2.removeChild('div');
    }
  }
  arr.push(input.value);
  if(input.value.length === 0){
    alert('Input cannot be blank');
    arr.pop();
    box2.removeChild('div');
  }
  console.log(arr);
  div.style.color = "white";
  div.style.textDecoration = "underline";
  div.style.border = 'solid 1px';
  div.style.borderRight = "none";
  div.style.borderLeft = "none";
  div.style.cursor = "pointer";
  div.style.padding = "10px";
  div.style.wordWrap = 'break-word';
  div.id = 'newdivs'
  div.innerHTML = input.value;
  localStorage.setItem('arrValues', arr);
  document.getElementById('box2').appendChild(div);
  div.addEventListener('click', () => {
    console.log('You did it Con!');
    modal.style.display = 'flex';
    modaltext.innerHTML = div.innerHTML;
    close.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    del.addEventListener('click', () => {
      arr2.push(div.innerHTML);
      for(i = 0; i < arr.length; i++){
        if(arr2[0] == arr[i]){
          delete arr[i];
          arr = arr.filter(Boolean);
        }
      }
      arr2.pop();
      arr = arr.filter(Boolean);
      localStorage.setItem('arrValues', arr);
      console.log(window.localStorage.getItem('arrValues'));
      console.log(arr);
      modal.style.display = 'none';
      console.log(window.localStorage.getItem('arrValues'));
      document.getElementById('box2').removeChild(div);
    });
    complete.addEventListener('click', () => {
      arr2.push(div.innerHTML);
      for(i = 0; i < arr.length; i++){
        if(arr2[0] == arr[i]){
          arr3.push(arr[i]);
          delete arr[i];
          console.log(arr3);
          arr = arr.filter(Boolean);
          console.log(arr);
        }
      }
      arr2.pop();
      arr = arr.filter(Boolean);
      localStorage.setItem('arrValues', arr);
      localStorage.setItem('completedValues', arr3);
      modal.style.display = 'none';
      document.getElementById('box2').removeChild(div);
      console.log(window.localStorage.getItem('completedValues'));
    })
  });
});


//Switch back and forth between to-do and completed
completedIcon.addEventListener('click', () => {
  completedIcon.style.textDecoration = 'underline';
  toDoIcon.style.textDecoration = 'none';
  inputbtn.addEventListener('click', () => {
    if(input.value.length >= 1 && completedIcon.style.textDecoration === 'underline'){
    console.log(arr);
    console.log(arr);
    let myNode = document.getElementById('newdivs');
    box2.removeChild(myNode);
    localStorage.setItem('arrValues', arr);
    }
  })
  for(var i = 0; i < arr.length; i++){
    let myNode = document.getElementById('newdivs');
    if(myNode !== null){
    box2.removeChild(myNode);
    }
  }
  console.log(box2.childNodes);
  arr3 = arr3.filter(Boolean);
  console.log(arr3);
  if(box2.childNodes.length == 3 && arr3.length > 0){
    console.log(arr3);
    console.log('success');
  for(let i = 0; i < arr3.length; i++){
    let div = document.createElement('div');
    div.style.color = "white";
    div.style.textDecoration = "underline";
    div.style.border = 'solid 1px';
    div.style.borderRight = "none";
    div.style.borderLeft = "none";
    div.style.cursor = "pointer";
    div.style.padding = "10px";
    div.style.wordWrap = 'break-word';
    div.id = 'completedDivs';
    div.innerHTML = arr3[i];
    document.getElementById('box2').appendChild(div);
    div.addEventListener('click', () => {
      console.log('You did it Con!');
      modal.style.display = 'flex';
      complete.style.display = 'none';
      del.style.width = '100%';
      modaltext.innerHTML = div.innerHTML;
      close.addEventListener('click', () => {
        modal.style.display = 'none';
      });
      del.addEventListener('click', () => {
        arr2.push(div.innerHTML);
        for(i = 0; i < arr3.length; i++){
          if(arr2[0] == arr3[i]){
            delete arr3[i];
            arr3 = arr3.filter(Boolean);
          }
        }
        arr2.pop();
        arr3 = arr3.filter(Boolean);
        localStorage.setItem('completedValues', arr3);
        console.log(window.localStorage.getItem('arrValues'));
        console.log(arr);
        modal.style.display = 'none';
        console.log(window.localStorage.getItem('arrValues'));
        document.getElementById('box2').removeChild(div);
      });
      complete.addEventListener('click', () => {
        arr2.push(div.innerHTML);
        for(i = 0; i < arr.length; i++){
          if(arr2[0] == arr[i]){
            arr3.push(arr[i]);
            delete arr[i];
            console.log(arr);
            arr = arr.filter(Boolean);
            console.log(arr);
          }
        }
        arr2.pop();
        arr = arr.filter(Boolean);
        localStorage.setItem('arrValues', arr);
        localStorage.setItem('completedValues', arr3);
        modal.style.display = 'none';
        document.getElementById('box2').removeChild(div);
        console.log(window.localStorage.getItem('completedValues'));
      })
    });
  }
}
});

toDoIcon.addEventListener('click', () => {
  toDoIcon.style.textDecoration = 'underline';
  completedIcon.style.textDecoration = 'none';
  for(var i = 0; i < arr3.length; i++){
    let myNode = document.getElementById('completedDivs');
    if(myNode !== null){
    box2.removeChild(myNode);
    }
  }

  if(box2.childNodes.length == 3){
  for(let i = 0; i < arr.length; i++){
    let div = document.createElement('div');
    div.style.color = "white";
    div.style.textDecoration = "underline";
    div.style.border = 'solid 1px';
    div.style.borderRight = "none";
    div.style.borderLeft = "none";
    div.style.cursor = "pointer";
    div.style.padding = "10px";
    div.style.wordWrap = 'break-word';
    div.id = 'newdivs';
    div.innerHTML = arr[i];
    document.getElementById('box2').appendChild(div);
    div.addEventListener('click', () => {
      console.log('You did it Con!');
      modal.style.display = 'flex';
      modaltext.innerHTML = div.innerHTML;
      close.addEventListener('click', () => {
        modal.style.display = 'none';
      });
      del.addEventListener('click', () => {
        arr2.push(div.innerHTML);
        for(i = 0; i < arr.length; i++){
          if(arr2[0] == arr[i]){
            delete arr[i];
            arr = arr.filter(Boolean);
          }
        }
        arr2.pop();
        arr = arr.filter(Boolean);
        localStorage.setItem('arrValues', arr);
        console.log(window.localStorage.getItem('arrValues'));
        console.log(arr);
        modal.style.display = 'none';
        console.log(window.localStorage.getItem('arrValues'));
        document.getElementById('box2').removeChild(div);
      });
      complete.addEventListener('click', () => {
        arr2.push(div.innerHTML);
        for(i = 0; i < arr.length; i++){
          if(arr2[0] == arr[i]){
            arr3.push(arr[i]);
            delete arr[i];
            console.log(arr);
            arr = arr.filter(Boolean);
            console.log(arr);
          }
        }
        arr2.pop();
        arr = arr.filter(Boolean);
        localStorage.setItem('arrValues', arr);
        localStorage.setItem('completedValues', arr3);
        modal.style.display = 'none';
        document.getElementById('box2').removeChild(div);
        console.log(window.localStorage.getItem('completedValues'));
      })
    });
  }
}
});

//Check local storage and add divs accordingly
if(localStorage.getItem('completedValues') !== null && localStorage !== undefined){
  console.log(window.localStorage.getItem('completedValues'))
  let newarr2 = storedcomp.split(',');
  for(let i = 0; i < newarr2.length; i++){
    console.log(arr3);
    if(newarr2[i] != undefined){
    arr3.push(newarr2[i]);
    arr3 = arr3.filter(Boolean);
    console.log(arr3);
    }
    else{
    console.log(arr3);
    }
  }
}
if(localStorage.getItem('arrValues')){
  console.log(arr3);
  let newarr = stored.split(',');
  for(var i = 0; i < newarr.length; i++) {
    if(newarr[i].length === 0) {
      newarr.splice(newarr[i], 1);
    }
    if(newarr[i] == undefined){
      newarr.splice(newarr[i], 1);
      document.getElementById('box2').removeChild(div);
    }
    newarr = newarr.filter(Boolean);
    let div = document.createElement('div');
    div.style.color = "white";
    div.style.textDecoration = "underline";
    div.style.border = 'solid 1px';
    div.style.borderRight = "none";
    div.style.borderLeft = "none";
    div.style.cursor = "pointer";
    div.style.padding = "10px";   
    div.style.wordWrap = 'break-word';
    div.id = 'newdivs';
    div.innerHTML = newarr[i];
    arr.push(newarr[i]);
    document.getElementById('box2').appendChild(div);
    div.addEventListener('click', () => {
      console.log('You did it Con!');
      modal.style.display = 'flex';
      modaltext.innerHTML = div.innerHTML;
      close.addEventListener('click', () => {
        modal.style.display = 'none';
      });
      del.addEventListener('click', () => {
        arr2.push(div.innerHTML);
        for(i = 0; i < arr.length; i++){
          if(arr2[0] == arr[i]){
            console.log(arr);
            delete arr[i];
            console.log(arr);
            arr = arr.filter(Boolean);
            console.log(arr);
          }
        }
        arr2.pop();
        arr = arr.filter(Boolean);
        console.log(arr2);
        console.log(newarr);
        localStorage.setItem('arrValues', arr);
        console.log(window.localStorage.getItem('arrValues'));
        modal.style.display = 'none';
        document.getElementById('box2').removeChild(div);
      });
      complete.addEventListener('click', () => {
        console.log(arr3);
        arr2.push(div.innerHTML);
        for(i = 0; i < arr.length; i++){
          if(arr2[0] == arr[i]){
            arr3.push(arr[i]);
            console.log(arr3);
            delete arr[i];
            console.log(arr);
            arr = arr.filter(Boolean);
            console.log(arr);
          }
        }
        arr2.pop();
        arr = arr.filter(Boolean);
        localStorage.setItem('arrValues', arr);
        localStorage.setItem('completedValues', arr3);
        modal.style.display = 'none';
        document.getElementById('box2').removeChild(div);
      })
  });
  }
}
