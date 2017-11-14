import React from 'react';
import { shallow } from 'enzyme';
import AdditionalInfo from 'components/AdditionalInfo';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('<AdditionalInfo />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AdditionalInfo store={mockStore({ })} />);
    });
    it('should be like snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
