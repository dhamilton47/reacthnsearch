import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';

import App from '../components/App/App';
import Home from '../pages/Home';
import About from '../pages/About';

import Footer from '../components/HackerNewsSearch/MainFooter';
import Items from '../components/HackerNewsSearch/Items';
import SearchWrapper from '../components/HackerNewsSearch/SearchWrapper';
import Item from '../components/HackerNewsSearch/Item/Item';
import { PageHeader } from "../components/HackerNewsSearch/PageHeader";
import MainSection from "../components/HackerNewsSearch/MainSection";

Enzyme.configure({ adapter: new Adapter()});

describe('App', () => {
	it('should render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App/>,div);
		ReactDOM.unmountComponentAtNode(div);
	});
});


/*
describe('Home', () => {
	it('should render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Home/>,div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render SearchContainer and ItemContainer', () => {
		const wrapper = shallow(<Home/>);
		expect(wrapper.containsAllMatchingElements([
			<PageHeader/>,
			<MainSection/>
		])).to.equal(true);
	});
});
*/
/*
describe('About', () => {
	it('should render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<About/>,div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render SearchContainer and ItemContainer', () => {
		const wrapper = shallow(<About/>);
		expect(wrapper.containsAllMatchingElements([
			<PageHeader/>,
			<MainSection/>
		])).to.equal(true);
	});
});
 */
/*
describe('Items', () => {
	it('should render Item', () => {
		const wrapper = shallow(<Items/>);
		expect(wrapper.containsAllMatchingElements([
			<Item/>
		])).to.equal(true);
	});
});
*/
