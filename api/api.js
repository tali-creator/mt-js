const metaData = async() => {
    try {
        const res = await fetch('https://reqres.in/api/users');
        if (!res.ok) {
            throw new Error(`Problem Fetxhinf Data  ${res.status}`)
        }
        const dataObj = await res.json();
        const ul = document.querySelector('ul');
        dataObj.data.forEach(function(data){
            ul.innerHTML += `<li class="p=1 shadow-md m-2 text-center">
            <img src="${data.avatar}">
            <span>${data.first_name} ${data.last_name} </span>
            `
        })
    }catch(error){
        console.error('faild to fetch data', error);
        
    }
};
metaData();