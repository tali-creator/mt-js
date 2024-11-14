let lists = document.querySelector('.list-items');
lists.addEventListener('click', function (e) {
    if (e.target.className == "name") {
        const li = e.target.parentElement;
        lists.removeChild(li);
    }
})

const submit = document.forms['addForm'];

submit.addEventListener('submit', function (e) {
    e.preventDefault()
    let input = submit.querySelector('input[type="text"]').value;
    input.value = '';
    let li = document.createElement('li');
    const deleteBtn = document.createElement('span');

    li.textContent = input;
    deleteBtn.textContent = ' delete';
    deleteBtn.classList.add('name');

    li.appendChild(deleteBtn);
    lists.appendChild(li)
})

const search = document.forms['search-form'].querySelector("input")

search.addEventListener('keyup', function (e) {
    const terms = e.target.value.toLowerCase();
    const bookList = lists.getElementsByTagName('li');
    Array.from(bookList).forEach(function (book){
        const title = book.textContent
        if(title.toLowerCase().indexOf(terms) != -1){
            book.style.display = "block";
        }else{
            book.style.display = "none";
        }
    })
})