import { addNumberOfClicks } from "./utils";

describe('utils', () =>{
    describe('addNumberOfClicks', () => {
        it('returns the expected value', () => {
            const mockCurrentNumberOfClicks = 3;

            expect(addNumberOfClicks(mockCurrentNumberOfClicks)).toEqual(4);
        });
    });
});
