
let newsContainer = document.getElementById("news-container")

function createElementAndClassName(element, className, text) {
    const el = document.createElement(element);
    el.className = className
    if (text) el.innerText = text
    return el
}

export function createCard(title, url, publishedTime) {

    let millisecondDate = publishedTime * 1000
    let dateCard = new Date(millisecondDate)
    let readableDate = dateCard.toLocaleString()


    let card = createElementAndClassName('div', 'card text-center')
    let cardBody = createElementAndClassName('div', 'card-body')
    let newsText = createElementAndClassName('h5', 'card-title', title)
    let link = createElementAndClassName('a', 'btn btn-primary', 'Read More')
    let cardTime = createElementAndClassName('div', 'card-footer', readableDate)


    newsContainer.append(card)
    card.appendChild(cardBody).appendChild(newsText)
    cardBody.append(link)
    card.append(cardTime)

    link.href = url
    if (url === 'No URL here') {
        link.classList.add('disabled');
        link.innerText = 'not available'
    }
}
