import { useEffect, useState } from "react"
import unitData from "../../data/unitData.json"

export default function UnitConverter() {
    const [ currencyApi, setCurrencyApi ] = useState()
    // useEffect(() => {
    //     fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_yGG55Osf5xOC1vj1dYcTLJLcbOBTj9d1NO0zSOZM")
    //         .then(res => res.json())
    //         .then(currency  => setCurrencyApi(currency))
    //     document.write(currencyApi)
    // },[0]) 

    let data = unitData
    const [ mainUnit, setMainUnit ] = useState(data[0])
    const [ inputUnit, setInputUnit ] = useState(mainUnit.submultipliers[0])
    const [ outputUnit, setOutputUnit ] = useState(mainUnit.submultipliers[1])
    const [ outputNumber, setOutputNumber ] = useState(0)

    function changeMainUnit(event) {
        let value = event.target.value
        setMainUnit(data[value])
        setInputUnit(mainUnit.submultipliers[0])
        setOutputUnit(mainUnit.submultipliers[1])
    }
    function changeInputUnit(event) {
        setInputUnit(mainUnit.submultipliers[event.target.value])
    }
    function changeOutputUnit(event) {
        setOutputUnit(mainUnit.submultipliers[event.target.value])
    }
    function changeValues(event) {
        let power = outputUnit.quantity/inputUnit.quantity
        setOutputNumber(Math.round(event.target.value * power * 1000)/1000)
    }

    return(
        <>
            <div className="title"> Unit Converter </div>
            <select 
                className="bg-dark text-white "
                onChange={changeMainUnit}
                style={{
                    margin : "3vh",
                    height : "6vh",
                    width : "40vw"
                }}
            >
                {data.map( item => (
                    <option 
                        className="fs-6"
                        value={item.unit.id}
                    >{item.unit.name}</option>
                ))}
            </select>

            <div
                className="d-flex flex-column"
                style={{ 
                    marginTop : "9vh"
                }}
            >
                <select 
                    className="bg-secondary text-white"
                    onChange={changeInputUnit}
                    style={{
                        height : "6vh",
                        width : "40vw",
                        margin : "2.6vw",
                        marginLeft : "8vw"
                    }}
                >
                    {mainUnit.submultipliers.map(
                        item => (
                            <option value={item.id}>{item.name}</option>
                        )
                    )}
                </select>

                <input 
                    className="fs-5"
                    style={{
                        height : "6vh",
                        width : "60vw",
                        margin : "2.6vw",
                        marginLeft : "30vw"
                    }}
                    placeholder="0"
                    onChange={changeValues}
                >
                </input>

            </div>
              
            <div
                className="d-flex flex-column"
                style={{ 
                    marginTop : "1vh"
                }}
            >
                
                <select 
                    className="bg-secondary text-white"
                    onChange={changeOutputUnit}
                    style={{
                        height : "6vh",
                        width : "40vw",
                        margin : "2.6vw",
                        marginLeft : "8vw"
                    }}
                >
                    {mainUnit.submultipliers.map(
                        item => (
                            <option value={item.id}>{item.name}</option>
                        )
                    )}
                </select>

                <div 
                    className="d-flex align-items-center justify-content-center bg-primary text-white fs-4"
                    style={{
                        height : "6vh",
                        width : "60vw",
                        margin : "2.6vw",
                        marginLeft : "30vw"
                    }}
                >
                    <div style={{ marginLeft : "1vw" }}>{outputNumber}</div>
                </div>
            </div>
        </>
    )
}