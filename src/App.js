import {useState, useEffect} from "react";
import './App.css';

const Tl = () => <h1 className="H1">hi!</h1>;

function App() {

    const [count, setCount] = useState([])
    const [dt, setDt] = useState(0)
    const Td1 = () => <td className="Cell1" >{count.close}</td>
    const Td2 = () => <td className="Cell2">{count.open}</td>
    const Td3 = () => <td className="Cell1">{dt}</td>
    const Tr = () => <tr><Td1/><Td2/><Td3/></tr>
    const Tbl=()=><table className="Tbl"><Tr/><Tr/><Tr/><Tr/><Tr/></table>

    useEffect(() => {fetch("/php/UsdKzt.json").then(result => result.json()).then(data => setCount(data))})

    useEffect(() => {setTimeout(() => {setDt((dt) => dt + 1)}, 2000)})


        return (<><Tbl/></>)
    }


    export {App, Tl}
