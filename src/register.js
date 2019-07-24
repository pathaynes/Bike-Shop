export function findProduct(bikes, code){

    for(let i = 0; i < bikes.length; i++){
        const bike = bikes[i];

        if(bike.code === code) {
            return bike;
        }
    }
    return null;
}