import React from 'react';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import { Landing } from './Landing.jsx';
import { Search } from '../Search/Search.jsx';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Landing />', () => {
  it(' should render', () => {
    const wrapper = shallow(
        <Landing />
    );
    expect(wrapper).toHaveLength(1);
  });
})