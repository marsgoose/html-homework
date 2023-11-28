//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.




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
    {name: 'Turtles All the Way Down 2-part'},
    {name: 'The Snow Queen 2-part'},
    {name: 'THE TINDERBOX 2-part'},
    {name: 'A Christmas Carol 2-part'},
    {name: 'Death on the Nile 2-part'},
    {name: 'Pollyanna 2-part'},
    {name: 'Mowgli 2-part'},
    {name: 'Robinson Crusoe 2-part'},
    {name: 'Pollyanna Grows Up 2-part'},
    {name: 'The Adventures of Tom Sawyer 2-part'}
]

let i= 0
while (i < books.length) {
    let book = books[i]
    document.write(`<h1>${i} ${book.name}</h1>`)
    i++
}