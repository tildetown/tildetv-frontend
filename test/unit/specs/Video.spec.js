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
      id: 'JwMfT2cZGHg',
      date: 1492256083,
      title: 'What if Barry Bonds had played without a baseball bat? | Chart Party',
      description: 'A must watch even if you don\'t like sports. Jon Bois from SB Nation uses some neat statistics to figure out if baseballer Barry Bonds would still do well, even without carrying a bat.',
      user: 'resir014',
      tags: ['sports', 'statistics'],
      contentWarnings: []
    })).to.contain('What if Barry Bonds had played without a baseball bat? | Chart Party')

    expect(getRenderedText(Video, {
      id: 'uNjxe8ShM-8',
      date: 1492414194,
      title: 'On The Turing Completeness of PowerPoint (SIGBOVIK)',
      description: 'A parody talk researching the turing-completeness of PowerPoint.',
      user: 'resir014',
      tags: [],
      contentWarnings: []
    })).to.contain('On The Turing Completeness of PowerPoint (SIGBOVIK)')
  })
})
