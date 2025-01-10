
let forVar=0
let nOfNews=forVar+10

let newsContainer = document.getElementById("news-container")
let loader = document.getElementById('loader')

const createElementAndClassName = (element, className, text) => {
    const el = document.createElement(element);
    el.className = className
    if (text) el.innerText = text
    return el
}

function createCard(title, url, publishedTime){
    
   let millisecondDate = publishedTime * 1000
   let dateCard = new Date(millisecondDate)
   let readableDate = dateCard.toLocaleString()
    
    
    let card = createElementAndClassName('div', 'card text-center')
    let cardBody =  createElementAndClassName('div', 'card-body')
    let newsText = createElementAndClassName('h5','card-title', title)
    let link =  createElementAndClassName('a','btn btn-primary', 'Read More')
    let cardTime =  createElementAndClassName('div', 'card-footer', readableDate)
            
    
    newsContainer.append(card)
    card.appendChild(cardBody).appendChild(newsText)   
    cardBody.append(link)
    card.append(cardTime)

    link.href = url
    if (url==='No URL here'){
        button.classList.add('disabled');
        button.innerText = 'not available'
    }
}


function getData(){
  axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
  .then(response => {
    for(i=forVar; i<nOfNews; i++){
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json`)
      .then(res => {
        let myUrl = _.get(res, 'data.url', 'No URL here')
        createCard(res.data.title, myUrl, res.data.time)
      }).catch(err=> {
        console.log(err)
      })
    }
  }).catch(err=>{
    console.log(err);
  })
}

getData()
loader.addEventListener('click', ()=>{
  forVar+=10
  nOfNews=forVar+10
  getData()
})