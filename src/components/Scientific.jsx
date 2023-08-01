
export default function Scientific() {
    return (
        <div className="standard-calculator">
            <div className="title" style={{ marginRight: 0 }}>Scientific</div>

            <div className="scientific-display-container">
                <div className="standard-input-container">100 + 20</div>
                <div className="standard-output-container">120</div>
            </div>

            <div className="scientific-input-pad">

                <button className="d-flex flex-row justify-content-center" >
                    <div className="align-self-center">2</div>
                    <div className="superscript">nd</div>
                </button>
                <button>pi</button>
                <button>e</button>
                <button>CE</button>
                <button>←</button>

                <button>sin</button>
                <button>cos</button>
                <button>tan</button>
                <button>1/x</button>
                <button>[x]</button>
                
                <button>sec</button>
                <button>csc</button>
                <button>cot</button>
                <button>exp</button>
                <button>mod</button>

                <button className="d-flex flex-row justify-content-center" >
                    <div className="align-self-center">x</div>
                    <div className="superscript">2</div>
                </button>
                <button>(</button>
                <button>)</button>
                <button>n!</button>
                <button>÷</button>

                <button className="d-flex flex-row justify-content-center" >
                    <div className="align-self-center">x</div>
                    <div className="superscript">y</div>
                </button>
                <button >7</button>
                <button >8</button>
                <button >9</button>
                <button >x</button>

                <button className="d-flex flex-row justify-content-center" >
                    <div className="align-self-center">10</div>
                    <div className="superscript">x</div>
                </button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>

                <button>log</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>

                <button>In</button>
                <button>+/-</button>
                <button>0</button>
                <button>.</button>
                <button>=</button>
            </div>
        </div>
    )
}