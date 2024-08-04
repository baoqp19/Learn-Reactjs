import moment from 'moment'


import "./assets/style.css"
import "./assets/style.scss"
import { header } from './components/Header'
import { footer } from './components/Footer'
import config from "./config.json"
import img1 from "./image/23IT018.jpg"

const { VERSION_API, PAGE_LIMIT } = config
console.log(`SERVER_API=${VERSION_API}`, `PAGE_LIMIT=${PAGE_LIMIT}`)
console.log(config)
console.log(img1)

export const App = () => {
    return `
    ${header()}
     <h1> Xin chao </h1> ${moment().format("DD/MM/YYYY hh:mm:ss")}
      ${footer()} 
     <div class="content>
        <h2> Hoc JS khong kho!!! </h2>
     </div>
    `
}