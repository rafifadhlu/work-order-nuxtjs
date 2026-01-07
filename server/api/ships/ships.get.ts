import { ShipSpec,APIresponse } from "~/utils/types";
// import docking and ship data json
import dockingData from '~~/data/docking.json'
import shipClients from '~~/data/masterships.json'

export default defineEventHandler((event): APIresponse<ShipSpec> => {
  console.log('--- API Ships Hit ---')
  
  try {
    // get data from the json in data
    const data = shipClients;
    if(!data){
      throw new Error("");
    }
    return {
      status:200,
      message:"Succesfull fetched",
      data:data
    };
    
  } catch (error) {
    return {
      status:200,
      message:"Failed fetch data",
      data:[]

    };
  }
})
