import request from "supertest"

import app from "../src/app"

describe("app", () => {
	it("responds with a not found message", (done) => {
		request(app)
			.get("/idk-how-you-ended-up-here")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(404, done)
	})
})
