import express from "express"

import MessageResponse from "../interfaces/MessageResponse"
import GeneralSchema from "./general/general.route"

const router = express.Router()

router.get<{}, MessageResponse>("/", (req, res) => {
	res.json({
		message:
			"Go to the following path:http://localhost:5000/api/v1/general \nTo view the created"
	})
})

router.use("/general", GeneralSchema)

// http://localhost:5000/api/v1/general
// This is where it should be

export default router
