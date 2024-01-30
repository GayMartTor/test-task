document.addEventListener('DOMContentLoaded', function () {
    const customPrice = document.getElementById('customPrice','customPrice2','customPrice3');

    
    customPrice.addEventListener('click', function () {
      
      const apiKey = 'YOUR_API_KEY';
      fetch(`https://open.er-api.com/v6/latest/USD`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
        
          const exchangeRate = data.rates.EUR;

          
          const currentPriceElement = customPrice.querySelector('strong');
          const currentPrice = parseFloat(currentPriceElement.textContent);

        
          const updatedPrice = (currentPrice * exchangeRate).toFixed(2);

          
          customPrice.innerHTML = `€<strong>${updatedPrice}</strong>/Months`;
        })
        .catch(error => {
          console.error('Error fetching exchange rate:', error);
        });
    });
  });