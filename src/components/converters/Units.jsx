import { useState } from "react"
import unitData from "../../data/unitData.json"

export default function UnitConverter() {
    let data = unitData
    const [ mainUnit, setMainUnit ] = useState(data[0])
    const [ inputUnit, setInputUnit ] = useState()
    const [ outputUnit, setOutputUnit ] = useState()
    const [ outputNumber, setOutputNumber ] = useState(0)

    function changeMainUnit(event) {
        let value = event.target.value
        setMainUnit(data[value])
        setInputUnit(mainUnit.submultipliers[0])
        setOutputUnit(mainUnit.submultipliers[0])
    }
    function changeInputUnit(event) {
        setInputUnit(mainUnit.submultipliers[event.target.value])
    }
    function changeOutputUnit(event) {
        setOutputUnit(mainUnit.submultipliers[event.target.value])
    }
    function changeValues(event) {
        let power = outputUnit.quantity/inputUnit.quantity
        console.log(power)
        setOutputNumber(event.target.value * power)
    }

    return(
        <>
            <div 
                className="fs-1"
                style={{ width : "80vw", marginTop : "5vw" }}
            >Unit Converter</div>

            <select onChange={changeMainUnit}
                style={{
                    margin : "3vh",
                    height : "6vh",
                    width : "40vw"
                }}>

                { data.map( item => (
                    <option 
                        className="fs-6"
                        value={item.unit.id}
                    >{item.unit.name}</option>
                ))}
            </select>

            <div
                className="d-flex flex-row"
                style={{ 
                    marginTop : "9vh"
                }}
            >
                <select 
                    onChange={changeInputUnit}
                    style={{
                        height : "6vh",
                        width : "40vw",
                        margin : "2.6vw"
                    }}
                >
                    {mainUnit.submultipliers.map(
                        item => (
                            <option value={item.id}>{item.name}</option>
                        )
                    )}
                </select>

                <select 
                    onChange={changeOutputUnit}
                    style={{
                        height : "6vh",
                        width : "40vw",
                        margin : "2.6vw"
                    }}
                >
                    {mainUnit.submultipliers.map(
                        item => (
                            <option value={item.id}>{item.name}</option>
                        )
                    )}
                </select>
            </div>
              
            <div
                className="d-flex flex-row"
                style={{ 
                    marginTop : "1vh"
                }}
            >
                <input 
                    style={{
                        height : "6vh",
                        width : "40vw",
                        margin : "2.6vw"
                    }}
                    placeholder="0"
                    onChange={changeValues}
                >
                </input>

                <div 
                    className="bg-light"
                    style={{
                        height : "6vh",
                        width : "40vw",
                        margin : "2.6vw"
                    }}
                >
                    {outputNumber}
                </div>
            </div>
        </>
    )
}