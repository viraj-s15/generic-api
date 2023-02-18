import { Router, Request, Response } from "express"
import { GeneralData, GeneralSchemaWithId } from "./general.model"
import { ObjectId } from "mongodb"

// This is where the default routes are set, edit below to change

const router = Router()

router.get("/", async (req: Request, res: Response<GeneralSchemaWithId>) => {
	const result = await GeneralData.find()
	const data = await result.toArray()
	// once the data is populated in the database we can uncomment the below line
	// res.json(data)
	res.json({
		_id: new ObjectId(),
		name: "Item 1",
		description: "A very simple item indeed",
		type: "C",
		imageLinks: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
		displayIcon: "www.exampleImage.com"
	})
})

export default router
