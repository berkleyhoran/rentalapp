

enum dwellingType{
    rambler,
    twoStory,
    oneStory,
    duplex
}

class House {
    address: number;
    rooms: number;
    baths: number;
    sqfeet: number;
    dwellingType
    flag: boolean;
}

class Person{
    name: string;
    lastName: string;
    email: string;
    phone: string;
    dob: number;
}

class Owner extends Person{
    numOfProperties: number;
}
class Manager extends Person{
    managedProperties: number;
}
class Renter extends Person{
    rented: boolean;
}

interface Agreement<T> {
    getNewestItem: () => T;
    addItem: (newItem: T) => void;
    getAllItems: () => Array<T>;
}