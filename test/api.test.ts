import request from "supertest"

import app from "../src/app"

describe("GET /api/v1", () => {
	it("responds with a json message", (done) => {
		request(app)
			.get("/api/v1")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(
				200,
				{
					message:
						"Go to the following path:http://localhost:5000/api/v1/general \nTo view the created"
				},
				done
			)
	})
})
