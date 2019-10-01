import { addParameters, configure } from '@storybook/react'
import requireContest from 'require-context.macro'

const categories = ["atoms", "molecules", "organisms", "ecosystems", "environments"]
const categoryNumber = id => {
  console.log(id)
  const categoryName = id.split("-")[0]
  return categories.indexOf(categoryName)
}

addParameters({
  options: {
    storySort: (a, b) => {
      const aNumber = categoryNumber(a[1].id)
      const bNumber = categoryNumber(b[1].id)
      return aNumber.toString().localeCompare(bNumber.toString(), {numeric: true})
    }
  }
})
configure(requireContest('../src', true, /\.stories\.tsx$/), module)
