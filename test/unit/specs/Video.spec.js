import Vue from 'vue'
import Video from '@/components/Video'

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData }).$mount()
  return vm.$el.textContent
}

describe('Video.vue', () => {
  it('renders correctly with different props', () => {
    expect(getRenderedText(Video, {
      contentWarnings: [],
      description: 'A must watch even if you don\'t like sports. Jon Bois from SB Nation uses some neat statistics to figure out if baseballer Barry Bonds would still do well, even without carrying a bat.',
      title: 'What if Barry Bonds had played without a baseball bat? | Chart Party',
      addedtime: 1492256083,
      tags: ['sports', 'statistics'],
      id: {
        v: 'JwMfT2cZGHg'
      },
      user: 'resir014'
    })).to.contain('What if Barry Bonds had played without a baseball bat? | Chart Party')

    expect(getRenderedText(Video, {
      contentWarnings: [],
      description: 'A parody talk researching the turing-completeness of PowerPoint.',
      title: 'On The Turing Completeness of PowerPoint (SIGBOVIK)',
      addedtime: 1492414194,
      tags: [],
      id: {
        v: 'uNjxe8ShM-8'
      },
      user: 'resir014'
    })).to.contain('On The Turing Completeness of PowerPoint (SIGBOVIK)')
  })
})
