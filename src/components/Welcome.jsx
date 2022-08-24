import React, {useState} from 'react';

import { Description } from './Description';
import { addNumberOfClicks } from './utils';

export const Welcome = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    return (
        <>
            <h2>Welcome!</h2>
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
