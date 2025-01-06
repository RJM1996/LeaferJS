import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
  x: 100,
  y: 100,
  width: 200,
  height: 200,
  fill: '#32cd79',
  cornerRadius: [50, 80, 0, 80],
  draggable: true,
  event: {
    created() {
      console.log('rect created', Date.now())
    },
    mounted: () => {
      console.log('rect mounted, leafer', rect.leafer, Date.now()) // 元素已挂载到 leafer 的树结构上，可以被渲染
    },
    unmounted() {
      console.log('rect unmounted', Date.now())
    },
  },
})

leafer.add(rect)

setTimeout(() => {
  rect.remove()
}, 2000)
