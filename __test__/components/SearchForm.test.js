import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import SearchForm from 'components/SearchForm';

import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('<SearchForm />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SearchForm store={mockStore({ })} />);
    });

    it('should be like snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have no selected first', () => {
        expect(wrapper.state().selected).toEqual(undefined);
    });

    it('should state as director', () => {
        wrapper.setState({ selected: 'director' });
        expect(wrapper.state().selected).toEqual('director');
    });

    it('should state as title', () => {
        wrapper.setState({ selected: 'title' });
        expect(wrapper.state().selected).toEqual('title');
    });
});
