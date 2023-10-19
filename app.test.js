const request = require("supertest");

const app = require("./app");
const db = require("./fakeDb");
let items = [];

beforeEach(function () {
  items = [{ name: "popsicle", price: 1.45 },
{ name: "cheerios", price: 3.40 }];
});

afterEach(function() {
  db.Items.deleteAll();
});

describe("GET /items", function () {
  test("valid", async function () {
    const resp = await request(app).get("/items");
    expect(resp.body).toEqual({ items: [
      { name: "popsicle", price: 1.45 },
      { name: "cheerios", price: 3.40 }
    ]});
  });

//   test("invalid", async function () {
//     const resp = await request(app).get("/hello/Joel");
//     expect(resp.status).toEqual(401);
//   });
// });

// test("GET /users", async function () {
//   const resp = await request(app).get("/users");
//   expect(resp.body).toEqual([{ id: 1, name: "elie" }]);
// });

// test("DELETE /users", async function () {
//   const resp = await request(app).delete("/users/1");
//   expect(resp.body).toEqual({ message: "Deleted" });
//   expect(db.User.all().length).toEqual(0);
});

