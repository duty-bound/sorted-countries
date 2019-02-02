import { countries } from 'countries-list'
import * as R from 'ramda'

//export const getSortedCountries = R.sort(R.lt, R.pluck('name', R.values(countries)))
//R.sort takes a comparative function that returns an int as the first paratmeter, a list as the second parameter and returns a new array
//R.comparator takes a comparative function that returns a bool as its only parameter
//R.lt takes two vales as parameters,performs a logical '<' operation and returns the resulting bool
//
//So why doesn't R.sort(R.lt, R.pluck('name', R.values(countries))) work?
//Its because R.sort needs a comparative function that returns an int not a bool (like R.lt) in order to work


//export const getSortedCountries = R.sort(R.comparator(R.lt), R.pluck('name', R.values(countries)))


export const getSortedCountries =
  R.pipe(
    R.values,
    R.pluck('name'),
    R.sort(R.comparator(R.lt))
  )(countries)
