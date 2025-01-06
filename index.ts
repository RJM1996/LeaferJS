import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  fill: '#32cd79',
  draggable: true,
})
const rect1 = Rect.one({
  x: 400,
  y: 100,
  width: 200,
  height: 200,
  fill: 'lightblue',
  draggable: true,
  stroke: 'red',
  strokeWidth: 2,
  dashPattern: [15, 3, 3, 3], // 绘制虚线
})
leafer.add(rect)
leafer.add(rect1)

setTimeout(() => {
  rect1.set({
    stroke: 'black',
  })
}, 2000)
