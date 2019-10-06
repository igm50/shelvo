import { addParameters, configure } from '@storybook/react'
import requireContest from 'require-context.macro'

const categories = [
  'atoms',
  'molecules',
  'organisms',
  'ecosystems',
  'environments'
]
const categoryNumber = id => {
  console.log(id)
  const categoryName = id.split('-')[0]
  return categories.indexOf(categoryName)
}

const compareCategory = (a, b) => {
  const aNumber = categoryNumber(a[1].id)
  const bNumber = categoryNumber(b[1].id)
  return aNumber.toString().localeCompare(bNumber.toString(), { numeric: true })
}

const compareComponent = (a, b) => {
  return a[1].id.localeCompare(b[1].id)
}

addParameters({
  options: {
    storySort: (a, b) => {
      const result = compareCategory(a, b)
      return result != 0 ? result : compareComponent(a, b)
    }
  }
})
configure(requireContest('../src', true, /\.stories\.tsx$/), module)
