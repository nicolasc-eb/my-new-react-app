import { render } from '@testing-library/react';

import { Description } from './Description';

describe('Description component', () => {
    it('renders the expect component', () => {
        const component = render(<Description />);

        expect(component).toMatchSnapshot();
    });
});
