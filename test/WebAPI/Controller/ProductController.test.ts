import request, {SuperTest} from "supertest";
import app from "@WebAPI/app";

describe("ProductController", () => {

    let client: SuperTest<any>;
    beforeAll(() => {
        client = request(app)
    })

    it("return products list", async () => {
        const res = await client.get('/product');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(3);
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('name');
        expect(res.body[0]).toHaveProperty('price');
    })

    it("create product", async () => {
        const res = await client.post('/product').send({
            name: "IMac",
            price: 15000
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toMatchObject({id: 1, name: 'IMac', price: 15000});
    })
})
