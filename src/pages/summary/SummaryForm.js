import React, { useState } from 'react';

function SummaryForm(props) {
    const [ check, setCheck ] = useState(false)

    return (
        <main>
            <div>
                <input
                    type="checkbox"
                    id="myCheckbox"
                    onChange={()=>{setCheck(prev => !prev)}}
                >
                </input>
                <label htmlFor='myCheckbox'>I agree to <a href='#'>terms and conditions</a></label>
            </div>
            <button
                style={{backgroundColor: check ? "blue" : "grey"}}
                disabled={!check}
            >Confirm order</button>
        </main>
    );
}

export default SummaryForm;