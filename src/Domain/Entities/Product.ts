export default class Product {

    private id: number;

    private name: string;

    private price: number;

    constructor(name: string, price: number) {
        this.id = 1;
        this.name = name;
        this.price = price;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}