import React from 'react';
import Footer from '../footer';
import {create} from 'react-test-renderer';

describe('Snapshot test',() => {
    test('Testing Footer',() => {
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})