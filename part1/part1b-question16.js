let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const c in statistics) {
    if(c.charAt(0) === 'r' || statistics[c] % 2 != 0) {
        console.log(statistics[c]);
    }
}