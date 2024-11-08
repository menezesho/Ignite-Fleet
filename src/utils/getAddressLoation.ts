import { reverseGeocodeAsync, LocationObjectCoords } from "expo-location";

export async function getAddressLocation(coords: LocationObjectCoords) {
  const { latitude, longitude } = coords;

  try {
    const addressResponse = await reverseGeocodeAsync({ latitude, longitude });

    return addressResponse[0]?.street;
  } catch (error) {
    console.error(error);
  }
}