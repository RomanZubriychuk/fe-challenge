import {Gender} from "./gender.enum";

export interface User {
  gender: Gender,
  name: string,
  email: string,
  id: string
  location: Location
}

interface Location {
  street: { number: number, "name": string },
  city: string,
  state: string,
  country: string,
  postcode: number,
}
