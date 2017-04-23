import Vue from 'vue'
import Hello from '@/components/Hello'

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData }).$mount()
  return vm.$el.textContent
}

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    expect(getRenderedText(Hello, {})).to.contain('tildetv is a new way to enjoy media on the internet.')
  })
})
