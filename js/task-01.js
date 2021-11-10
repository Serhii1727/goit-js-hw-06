const categoriesListEl = document.querySelector('#categories');
console.log("Number of categories:", categoriesListEl.children.length);


const getList = categoriesListEl => {

    [...categoriesListEl.children].forEach(item => {
        const title = item.querySelector('h2').textContent;
        const number = item.querySelector('ul').children.length;
        console.log(`Category: ${title}`);
        console.log(`Elements: ${number}`);
    })
}

getList(categoriesListEl)