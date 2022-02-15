import request, {SuperTest} from "supertest";
import app from "@WebAPI/app";

describe("ProductController", () => {

    let client: SuperTest<any>;
    beforeAll(() => {
        client = request(app)
    })

    it("should return category list", async () => {
        const res = await client.get('/category');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(1);
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('name');
    })

    it("should create category", async () => {
        const res = await client.post('/category').send({
            name: "Mobile"
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toMatchObject({id: 1, name: 'Mobile'});
    })
})
