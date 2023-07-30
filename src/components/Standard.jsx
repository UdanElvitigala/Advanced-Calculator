
export default function Standard() {
    return (
        <div class="calculator">
            <div class="title">Mathematicor</div>

            <div class="display-container">
                <div class="input-container">100 + 20</div>
                <div class="output-container">120</div>
            </div>

            <div class="input-pad">
                <button >AC</button>
                <button >( )</button>
                <button >%</button>
                <button class="functions">÷</button>

                <button >7</button>
                <button >8</button>
                <button >9</button>
                <button class="functions">*</button>

                <button >4</button>
                <button >5</button>
                <button >6</button>
                <button class="functions">+</button>
                
                <button >1</button>
                <button >2</button>
                <button >3</button>
                <button class="functions">-</button>

                <button >.</button>
                <button >0</button>
                <button >←</button>
                <button >=</button>
            </div>
        </div>
    )
}