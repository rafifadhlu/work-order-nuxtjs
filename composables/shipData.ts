export const useShipData = () => {
  // prepare the place for incoming data
  const ships = useState<ShipSpec[]>('list', () => []);

  const getAllShips = async function(){
    // get data from the api
    const {data, error} = await useFetch<APIresponse<ShipSpec>>('/api/ships/ships');
    // assigned to the local variable ships
    console.log("This is from composables");
    // console.log(data);
    if (data.value && data.value.status == 200) {
      console.log(data);
      ships.value = data.value.data;
      console.log(ships);
    } 
  }

  const getDetailShip = async function(ship_id:number){
    // get data from the api
    const {data, error} = await useFetch<APIresponse<ShipSpec>>(`/api/ships/detail/${ship_id}`);
    // assigned to the local variable ships
    console.log("This is from composables");
    console.log(data);
    if (data.value && data.value.status == 200) {
      console.log(data);
      ships.value = data.value.data;
      console.log(ships);
    } 
  }


  const createShipData = async function(shipData:ShipSpec){
    // get data from the api
    const {data, error} = await useFetch<APIresponse<ShipSpec>>(``);
    // assigned to the local variable ships
    console.log("This is from composables");
    if (data.value && data.value.status == 200) {
      console.log(data);
      ships.value = data.value.data;
      console.log(ships);
    } 
  }



  const dropShipById = async function(ship_id:number){
    // get data from the api
    const {data, error} = await useFetch<APIresponse<ShipSpec>>(``);
    // assigned to the local variable ships
    console.log("This is from composables");
    if (data.value && data.value.status == 200) {
      console.log(data);
      ships.value = data.value.data;
      console.log(ships);
    } 
  }

  const updateShip = async function(ship_id:number,newData:ShipSpec){
    // get data from the api
    const {data, error} = await useFetch<APIresponse<ShipSpec>>(``);
    // assigned to the local variable ships
    console.log("This is from composables");
    if (data.value && data.value.status == 200) {
      console.log(data);
      ships.value = data.value.data;
      console.log(ships);
    } 
  }






  
  return {
    ships,
    createShipData,
    getAllShips,
    getDetailShip,
    dropShipById,
    updateShip

  }
}

