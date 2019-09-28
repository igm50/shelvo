import { configure } from '@storybook/react'
import requireContest from 'require-context.macro'

configure(requireContest('../src', true, /\.stories\.tsx$/), module)
