var dragSrcEl = null;
  
function dragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); 
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragEnter(e) {
  this.classList.add('over');
}

function dragLeave(e) {
  this.classList.remove('over');
}

function drop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

function dragEnd(e) {
  [].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });
}

var cols = document.querySelectorAll('.row .col.s12.m4');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', dragStart, false);
  col.addEventListener('dragenter', dragEnter, false);
  col.addEventListener('dragover', dragOver, false);
  col.addEventListener('dragleave', dragLeave, false);
  col.addEventListener('drop', drop, false);
  col.addEventListener('dragend', dragEnd, false);
});
