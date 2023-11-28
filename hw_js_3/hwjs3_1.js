//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


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
    {name: 'The Adventures of Tom Sawyer'}
]


for (const book of books) {
    document.write(`<div>${book.name}</div>`)
}
