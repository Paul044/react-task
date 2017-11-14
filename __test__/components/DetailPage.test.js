import React from 'react';
import { shallow } from 'enzyme';
import DetailPage from 'components/DetailPage';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('<DetailPage />', () => {
    const wrapper = shallow(<DetailPage store={mockStore({ })} />);
    it('should be like snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
