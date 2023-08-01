
export default function Standard() {
    return (
        <div className="standard-calculator">
            <div className="title" style={{ marginRight : 0 }}>Standard</div>

            <div className="standard-display-container"> 
                <div className="standard-input-container">100 + 20</div>
                <div className="standard-output-container">120</div>
            </div>

            <div className="standard-input-pad">
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