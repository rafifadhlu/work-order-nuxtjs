export const DockingData = () => {
  // prepare the place for incoming data
  const ships = useState<ShipSpec[]>('list', () => []);

  const getOnGoingJob = async function(){
    // get data from the api
    const {data, error} = await useFetch<APIresponse<ShipSpec>>('');
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
    getOnGoingJob
  }
}

