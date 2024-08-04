import { App } from "./App"
import dotenv from "dotenv"

dotenv.config();

console.log(process.env.REACT_APP_API_URL)
const root = document.querySelector("#root")
root.innerHTML = App()