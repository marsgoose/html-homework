//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині

let books=[
    {name: 'Turtles All the Way Down'},
    {name: 'The Snow Queen'},
    {name: 'THE TINDERBOX'},
    {name: 'A Christmas Carol'},
    {name: 'Death on the Nile'},
    {name: 'Pollyanna'},
    {name: 'Mowgli'},
    {name: 'Robinson Crusoe'},
    {name: 'Pollyanna Grows Up'},
    {name: 'The Adventures of Tom Sawyer'},
    {name: '2-part Turtles All the Way Down'},
    {name: '2-part The Snow Queen'},
    {name: '2-part THE TINDERBOX'},
    {name: '2-part A Christmas Carol'},
    {name: '2-part Death on the Nile'},
    {name: '2-part Pollyanna'},
    {name: '2-part Mowgli'},
    {name: '2-part Robinson Crusoe'},
    {name: '2-part Pollyanna Grows Up'},
    {name: '2-part The Adventures of Tom Sawyer'}
]

let i= 0
while (i < books.length) {
    let book = books[i]
    document.write(`<h1>${book.name}</h1>`)
    i++
}
