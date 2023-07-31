
export default function Scientific() {
    return (
        <div className="calculator">
            <div className="title" style={{ marginRight : 0 }}>Scientific</div>

            <div className="display-container"> 
                <div className="input-container">100 + 20</div>
                <div className="output-container">120</div>
            </div>

            <div className="input-pad">
                <button >AC</button>
                <button >( )</button>
                <button >%</button>
                <button className="functions">÷</button>

                <button >7</button>
                <button >8</button>
                <button >9</button>
                <button className="functions">*</button>

                <button >4</button>
                <button >5</button>
                <button >6</button>
                <button className="functions">+</button>
                
                <button >1</button>
                <button >2</button>
                <button >3</button>
                <button className="functions">-</button>

                <button >.</button>
                <button >0</button>
                <button >←</button>
                <button >=</button>
            </div>
        </div>
    )
}