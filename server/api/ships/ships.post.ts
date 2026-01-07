import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

import { ShipSpec,APIresponse } from "~/utils/types";
// import docking and ship data json
import dockingData from '~~/data/docking.json'
import shipClients from '~~/data/masterships.json'

export default defineEventHandler(async(event): Promise<APIresponse<ShipSpec>> => {
  console.log('--- API Ships Hit ---')
  
  try {
    // get data from the json in data
    const body = await readBody<ShipSpec>(event);

    const filePath = resolve('data/masterships.json');
    const ships: ShipSpec[] = JSON.parse(readFileSync(filePath, 'utf-8'));

    ships.push(body);

    const newship:ShipSpec = body;

    writeFileSync(filePath, JSON.stringify(ships, null, 2))

     return {
      status: 200,
      message: 'success add',
      data: [newship]
    }

    
  } catch (error) {
    return {
      status:200,
      message:"Failed add data",
      data:[]

    };
  }
})
