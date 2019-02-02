import React from 'react';
import ReactDOM from 'react-dom';

import { getSortedCountries } from './get-sorted-countries'

const mountNode = document.getElementById('mountNode')

const component = <h1>Hello World!</h1>

console.log(getSortedCountries)

ReactDOM.render(component, mountNode)
