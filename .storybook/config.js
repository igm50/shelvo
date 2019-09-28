import { configure } from '@storybook/react'
import requireContest from 'require-context.macro'

configure(requireContest('../src/stories', true, /\.stories\.tsx$/), module)
