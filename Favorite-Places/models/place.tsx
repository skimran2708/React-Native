export class Place {
  title: string;
  imageUri: string;
  address: string;
  location: { lat: number; lng: number };
  id?: number;
  constructor(
    title: string,
    imageUri: string,
    location: { address: string; lat: number; lng: number },
    id?: number
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; // { lat: 0.141241, lng: 127.121 }
    this.id = id;
  }
}
