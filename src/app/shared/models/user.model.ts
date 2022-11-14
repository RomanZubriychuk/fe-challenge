import { Gender } from "./gender.enum";

export interface User {
  gender: Gender,
  name: string,
  email: string,
  id: {name: string, value: string}
  location: Location
  picture: {
    large: string,
    medium: string,
    thumbnail: string,
  }
  phone: string
}

interface Location {
  street: { number: number, "name": string },
  city: string,
  state: string,
  country: string,
  postcode: number,
}
