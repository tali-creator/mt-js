const list = document.querySelector("#list");

list.addEventListener('click', function(e){
        if(e.target.className == "delete"){
            const li = e.target.parentElement;
            list.removeChild(li)
        }
    });

    const addForm = document.forms['add-item'];
        addForm.addEventListener('submit', function(e){
            e.preventDefault()
            const input = addForm.querySelector('input');

            // create element
            let li = document.createElement("li");
            let deletebtn = document.createElement('span');
            let item = document.createElement('span');
            
            item.textContent = input.value;
            deletebtn.textContent = "delete";
            deletebtn.classList ="delete";

            li.appendChild(item);
            li.appendChild(deletebtn);
            list.appendChild(li)
            input.value = '';        })

    const searchItems = document.forms['search'].querySelector('input');
        searchItems.addEventListener('keyup', function(e){
            const inputSearch = e.target.value.toLowerCase();
            const items = list.getElementsByTagName("li");
            Array.from(items).forEach(function(item){
                    const itemTxt = item.textContent;
                    if(itemTxt.toLowerCase().indexOf(inputSearch) != -1){
                        item.style.display ='flex';
                    }else{
                        item.style.display = 'none';
                    }
                })
        })