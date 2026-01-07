import { ShipSpec,APIresponse } from "~/utils/types";
// import docking and ship data json
import dockingData from '~~/data/docking.json'
import shipClients from '~~/data/masterships.json'

export default defineEventHandler((event): APIresponse<ShipSpec> => {
  console.log('--- API Ships detail Hit ---')
  
  try {
    // get id from user
    const shipId = event.context.params?.id;
    console.log('Ship ID from route:', shipId);

    if(!shipId)throw new Error("Ship ID is required");

    // parse to the number
    const id = Number(shipId);

    // get data from the json in data by the id
    const data = shipClients.find((ship:any)=>ship.id === id);

    if(!data){
      throw new Error("");
    }
    return {
      status:200,
      message:"Succesfull fetched",
      data:[data]
    };
    
  } catch (error) {
    return {
      status:200,
      message:"Failed fetch data",
      data:[]

    };
  }
})
