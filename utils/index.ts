export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': 'b01c4dfa4emsh2f1e85e66344aaep1c0b6fjsne0a907019d40',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { 
        headers: headers 
    })

    const result = await response.json()

    return result
}