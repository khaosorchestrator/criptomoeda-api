let apiKey = {key: 'ba2d8ffd-1992-4339-8049-dccfc0502aca'}
    
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+apiKey.key)
  .then((res) => {
      if(res.ok) return res.json()
      throw new Error(`Erro ao executar a requisição, status: ${res.status}`)
  })
  .then((api) => {
      var text = ""
      
      for (let i = 0; i < 10; i++) {
        console.log(api)

        text = text + `
          <div class="media">
            <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="100">
            <div class="media-body">
              <h5 class="mt-2">${api.data[i].name}</h5>
              <p>${api.data[i].symbol}</p>
              <p>${api.data[i].first_historical_data}</p>
            </div>
          </div>
         `
        document.getElementById("coins").innerHTML = text
      }
  })
  .catch((error) => {
    console.error(error.message)
  })