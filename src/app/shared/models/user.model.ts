import {Gender} from "./gender.enum";

export interface User {
  gender: Gender,
  name: Name,
  email: string,
  id: string
}

interface Name {
  title: string,
  first: string,
  last: string
}

interface Location {
  street: { number: number, "name": string },
  city: string,
  state: string,
  country: string,
  postcode: number,
}
