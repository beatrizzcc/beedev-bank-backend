import { GetAgencyController } from "./GetAgencyController.js"

export async function GetAgencyControllerFactory(req){

    const controller = new GetAgencyController()

    return await controller.get()
}