import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^((?!.*?(Ecosystems|Environments)).)*$/
})
