export default class Category {
    private id: number;
    private name: string;

    constructor(name: string) {
        this.id = 1;
        this.name = name;
    }


    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}