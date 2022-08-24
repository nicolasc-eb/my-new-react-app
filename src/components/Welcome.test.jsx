import { fireEvent, render, screen } from '@testing-library/react';

import { Description } from './Description';
import { addNumberOfClicks } from './utils';
import { Welcome } from "./Welcome";

jest.mock('./Description', () => ({
    Description: () => (<div data-testid="welcome-text" />)
}));
jest.mock('./utils');

describe('Welcome component', () => {
    it('should render a welcome header with the expected name', () => {
        render(<Welcome name="John" />)

        expect(screen.getByText('Welcome John!')).toBeInTheDocument();
    });

    it('should render a section with the expected text', () => {
        Description.mock
        render(<Welcome />)

        // expect(
        //     screen.getByText('This is the best app. Click the button and see what happens!'),
        // ).toBeInTheDocument();
        expect(
            screen.getByTestId('welcome-text'),
        ).toBeInTheDocument();
    });

    // Note: test without mocking addNumberOfClicks
    // it('should render a button with the expected labels', () => {
    //     render(<Welcome />);
    //     const myButton = screen.getByTestId('my-button');

    //     expect(
    //         screen.getByText('You have click the button 0 times'),
    //     ).toBeInTheDocument();
        
    //     fireEvent.click(myButton);

    //     expect(
    //         screen.getByText('You have click the button 1 times'),
    //     ).toBeInTheDocument();
    // });

    it('should render a button with the expected labels', () => {
        addNumberOfClicks.mockReturnValue('MY_NEW_VALUE')
        render(<Welcome />);
        const myButton = screen.getByTestId('my-button');

        expect(
            screen.getByText('You have click the button 0 times'),
        ).toBeInTheDocument();
        
        fireEvent.click(myButton);

        expect(
            screen.getByText('You have click the button MY_NEW_VALUE times'),
        ).toBeInTheDocument();
    });
});
