// This file needs to be edited to fit the application it will be used in, do not forget to rename the folder as well
import * as z from "zod"
import { dataBase } from "../../dataBase"
import { WithId } from "mongodb"

const GeneralSchema = z.object({
	name: z.string().min(1).default("Generic item"),
	description: z.string().default("Default desc"),
	type: z.string().default("Type not specified in API"),
	imageLinks: z.array(z.string()),
	displayIcon: z.string()
})

export type GeneralSchema = z.infer<typeof GeneralSchema>
// mongo returns data with the _id prop
export type GeneralSchemaWithId = WithId<GeneralSchema>
export const GeneralData = dataBase.collection<GeneralSchema>("generalData")
