const carList = document.getElementById("car-list")
const brands = document.getElementById("brands")
const models = document.getElementById("models")
const highToLow = document.getElementById("high-low")
const lowToHigh = document.getElementById("low-high")
const years = document.getElementById("years")

const cars = [
    {
        id: 1,
        brand: "Toyota",
        model: "Corolla",
        year: 2018,
        price: 12500,
        mileage: 65000,
        fuel: "Petrol",
        transmission: "Automatic",
        location: "Lisbon",
        image: "https://picsum.photos/200"
    },
    {
        id: 2,
        brand: "Toyota",
        model: "Prius",
        year: 2016,
        price: 18900,
        mileage: 82000,
        fuel: "Diesel",
        transmission: "Manual",
        location: "Porto",
        image: "https://picsum.photos/200"
    },
    {
        id: 3,
        brand: "Mercedes-Benz",
        model: "C-Class",
        year: 2019,
        price: 27500,
        mileage: 40000,
        fuel: "Petrol",
        transmission: "Automatic",
        location: "Faro",
        image: "https://picsum.photos/200"
    },
    {
        id: 4,
        brand: "Audi",
        model: "A4",
        year: 2017,
        price: 21000,
        mileage: 70000,
        fuel: "Diesel",
        transmission: "Automatic",
        location: "Coimbra",
        image: "https://picsum.photos/200"
    },
    {
        id: 5,
        brand: "Volkswagen",
        model: "Golf",
        year: 2015,
        price: 13900,
        mileage: 90000,
        fuel: "Petrol",
        transmission: "Manual",
        location: "Braga",
        image: "https://picsum.photos/200"
    },
    {
        id: 6,
        brand: "Ford",
        model: "Focus",
        year: 2018,
        price: 13200,
        mileage: 60000,
        fuel: "Diesel",
        transmission: "Manual",
        location: "Setúbal",
        image: "https://picsum.photos/200"
    },
    {
        id: 7,
        brand: "Honda",
        model: "Civic",
        year: 2020,
        price: 22500,
        mileage: 30000,
        fuel: "Petrol",
        transmission: "Automatic",
        location: "Lisbon",
        image: "https://picsum.photos/200"
    },
    {
        id: 8,
        brand: "Hyundai",
        model: "i30",
        year: 2019,
        price: 15800,
        mileage: 45000,
        fuel: "Petrol",
        transmission: "Manual",
        location: "Faro",
        image: "https://picsum.photos/200"
    },
    {
        id: 9,
        brand: "Kia",
        model: "Ceed",
        year: 2017,
        price: 14200,
        mileage: 72000,
        fuel: "Diesel",
        transmission: "Manual",
        location: "Porto",
        image: "https://picsum.photos/200"
    },
    {
        id: 10,
        brand: "Peugeot",
        model: "308",
        year: 2016,
        price: 11900,
        mileage: 85000,
        fuel: "Diesel",
        transmission: "Manual",
        location: "Coimbra",
        image: "https://picsum.photos/200"
    },
    {
        id: 11,
        brand: "Renault",
        model: "Megane",
        year: 2018,
        price: 13500,
        mileage: 65000,
        fuel: "Petrol",
        transmission: "Manual",
        location: "Braga",
        image: "https://picsum.photos/200"
    },
    {
        id: 12,
        brand: "Nissan",
        model: "Qashqai",
        year: 2019,
        price: 21900,
        mileage: 50000,
        fuel: "Diesel",
        transmission: "Automatic",
        location: "Lisbon",
        image: "https://picsum.photos/200"
    },
    {
        id: 13,
        brand: "Mazda",
        model: "Mazda3",
        year: 2021,
        price: 24500,
        mileage: 20000,
        fuel: "Petrol",
        transmission: "Automatic",
        location: "Faro",
        image: "https://picsum.photos/200"
    },
    {
        id: 14,
        brand: "Skoda",
        model: "Octavia",
        year: 2017,
        price: 14800,
        mileage: 78000,
        fuel: "Diesel",
        transmission: "Manual",
        location: "Porto",
        image: "https://picsum.photos/200"
    },
    {
        id: 15,
        brand: "Volvo",
        model: "S60",
        year: 2018,
        price: 23000,
        mileage: 60000,
        fuel: "Petrol",
        transmission: "Automatic",
        location: "Coimbra",
        image: "https://picsum.photos/200"
    },
    {
        id: 16,
        brand: "Tesla",
        model: "Model 3",
        year: 2022,
        price: 38900,
        mileage: 15000,
        fuel: "Electric",
        transmission: "Automatic",
        location: "Lisbon",
        image: "https://picsum.photos/200"
    },
    {
        id: 17,
        brand: "Chevrolet",
        model: "Cruze",
        year: 2015,
        price: 9800,
        mileage: 110000,
        fuel: "Petrol",
        transmission: "Manual",
        location: "Setúbal",
        image: "https://picsum.photos/200"
    },
    {
        id: 18,
        brand: "Fiat",
        model: "Tipo",
        year: 2019,
        price: 12800,
        mileage: 55000,
        fuel: "Diesel",
        transmission: "Manual",
        location: "Faro",
        image: "https://picsum.photos/200"
    },
    {
        id: 19,
        brand: "Jeep",
        model: "Compass",
        year: 2020,
        price: 26500,
        mileage: 40000,
        fuel: "Petrol",
        transmission: "Automatic",
        location: "Porto",
        image: "https://picsum.photos/200"
    },
    {
        id: 20,
        brand: "Land Rover",
        model: "Range Rover Evoque",
        year: 2018,
        price: 34500,
        mileage: 68000,
        fuel: "Diesel",
        transmission: "Automatic",
        location: "Lisbon",
        image: "https://picsum.photos/200"
    }
];

//product rendering

const carsMenu = (cars) => {


    carList.innerHTML = ""
    cars.forEach(car => {
        const { brand, price, model, year, image } = car

        const displaycar = document.createElement("div")
        displaycar.id = "displayCar"

        displaycar.innerHTML =
            `
            <div id = "images">
            <img class = "image" src=${image}/>
            </div> 
            <div id = "carInfo">
            <p id = "price"> ${price} ₾</p>
            <h1 id = "brand">${brand}</h1>
            <h2>Model: ${model}</h2>
            <p id = "year">Year: ${year}</p>
            </div>
            
            
`
        carList.appendChild(displaycar)
    });
}





//select options creation


const optionElements = (optiotThatHasToBeRendered) => {
    const optionElement = document.createElement("option")
    optionElement.textContent = optiotThatHasToBeRendered
    optionElement.value = optiotThatHasToBeRendered
    return optionElement
}


const displayOptions = (cars) => {
    let uniqueBrands = new Set(cars.map(e => e.brand))
    let uniqueModels = new Set(cars.map(e => e.model))
    let uniqueYears = new Set(cars.map(e => e.year))

    uniqueBrands.forEach(brand => brands.appendChild(optionElements(brand)))

    uniqueModels.forEach(model => models.appendChild(optionElements(model)))

    uniqueYears.forEach(year => years.appendChild(optionElements(year)))

}







//sorting and filtering 

let filteredCars = cars



const carSort = (filteredCars, type) => {

    let sortedCars = filteredCars.sort((car1, car2) => car1.price - car2.price)
    if (type === "high-low") { sortedCars = sortedCars.reverse() }
    carsMenu(sortedCars)
}


const filterBrands = () => {
    const brandValue = brands.value === "all" ? false : brands.value


    const filteredBrand = brandValue ? cars.filter((car) => { return car.brand === brandValue }) : cars

    filteredCars = filteredBrand

    carsMenu(filteredCars)

}



const filterModels = (filteredCars) => {
    const modelValue = models.value === "all" ? false : models.value
    const filteredModel = modelValue ? filteredCars.filter((car) => { return car.model === modelValue }) : filteredCars

    carsMenu(filteredModel)

}

const filterYears = (filteredCars) => {
    const yearValue = years.value == "all" ? false : years.value
    const filteredYear = yearValue ? filteredCars.filter((car) => { return car.year == yearValue }) : filteredCars
    carsMenu(filteredYear)
}







// executing events
brands.onchange = () => filterBrands(cars)
models.onchange = () => filterModels(filteredCars)
years.onchange = () => filterYears(filteredCars)
highToLow.onclick = () => carSort(filteredCars, "high-low")
lowToHigh.onclick = () => carSort(filteredCars, "low-high")



// starting events
displayOptions(cars)
carsMenu(cars)















//new Set([])


