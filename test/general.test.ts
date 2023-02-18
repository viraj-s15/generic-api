import request from "supertest"
import app from "../src/app"
import { ObjectId } from "mongodb"

describe("GET /api/v1/general", () => {
	it("responds with a json message", async () => {
		request(app)
			.get("/api/v1/general")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(200, {
				name: "Item 1",
				description: "A very simple item indeed",
				type: "C",
				imageLinks: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
				displayIcon: "www.exampleImage.com",
				_id: new ObjectId()
			})
			.then((res) => {
				expect(res.body).toHaveProperty("name")
				expect(res.body).toHaveProperty("description")
				expect(res.body).toHaveProperty("type")
				expect(res.body).toHaveProperty("imageLinks")
				expect(res.body).toHaveProperty("displayIcon")
				expect(res.body).toHaveProperty("_id")
			})
	})
})
