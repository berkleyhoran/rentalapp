function getAllHouses(){
    for(let i = 0; i < list.length; i++){
        console.log(list[i]);
    }
}

function logFirstAvailable(){
    let counter = 0;

    for(let q = 0; q < list.length; q++){
        if(list[q].flag == true){
            availableHouses.push(list[q].address);
        }
    }

    console.log(availableHouses);

    for(let i = 0; i < list.length; i++){
        if(list[i].flag == true){
            console.log(list[i].address + " is available");
            break;
        }
    }
}

getAllHouses();
logFirstAvailable();
