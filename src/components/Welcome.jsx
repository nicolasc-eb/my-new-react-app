import React, {useState} from 'react';

import { Description } from './Description';
import { addNumberOfClicks } from './utils';

export const Welcome = ({ name = "Jack" }) => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    return (
        <>
            <h2>{`Welcome ${name}!`}</h2>
            <section>
                <Description />
                <button
                    onClick={() => setNumberOfClicks(addNumberOfClicks(numberOfClicks))}
                    data-testid="my-button"
                >
                    {`You have click the button ${numberOfClicks} times`}
                </button>
            </section>
        </>
    );
};
