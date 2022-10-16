document.addEventListener("DOMContentLoaded", () => {
    let div = document.createElement("div");
    div.style.textAlign = "center";
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "books");

    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-primary");
    button.innerHTML = "Search";
    button.addEventListener("click", book);
    let name = document.createElement("div");
    name.setAttribute("id", "Name");

    let isbn = document.createElement("div");
    isbn.setAttribute("id", "Isbn");

    let pages = document.createElement("div");
    pages.setAttribute("id", "Pages");

    let au = document.createElement("div");
    au.setAttribute("id", "Author");

    let pub = document.createElement("div");
    pub.setAttribute("id", "Published on");

    let rel = document.createElement("div");
    rel.setAttribute("id", "Released");

    let char1 = document.createElement("div");
    char1.setAttribute("id", "Character1");

    let char2 = document.createElement("div");
    char2.setAttribute("id", "Character2");

    let char3 = document.createElement("div");
    char3.setAttribute("id", "Character3");

    let char4 = document.createElement("div");
    char4.setAttribute("id", "Character4");

    let char5 = document.createElement("div");
    char5.setAttribute("id", "Character5");

    div.append(input, button, name, isbn, pages, au, pub, rel, char1, char2, char3, char4, char5);
    document.body.append(div);

    async function book() {

        let res = document.getElementById("books").value;
        let url = `https://anapioficeandfire.com/api/books/${res}`;
        try {
            let result = await fetch(url);
            let result1 = await result.json();

            console.log(result1.name);
            name.innerHTML = `Book Name : ${result1.name}`;
            isbn.innerHTML = `ISBN : ${result1.isbn}`;
            pages.innerHTML = `Number Of Pages : ${result1.numberOfPages}`;
            au.innerHTML = `Author : ${result1.authors}`;
            pub.innerHTML = `Publisher : ${result1.publisher}`;
            rel.innerHTML = `Released : ${result1.released}`;
            char1.innerHTML = `Character 1 : ${result1.characters[0]}`;
            char2.innerHTML = `Character 2 : ${result1.characters[1]}`;
            char3.innerHTML = `Character 3 : ${result1.characters[2]}`;
            char4.innerHTML = `Character 4 : ${result1.characters[3]}`;
            char5.innerHTML = `Character 5 : ${result1.characters[4]}`;
        }
        catch (error) {
            console.log(error);
        }

    }   
})