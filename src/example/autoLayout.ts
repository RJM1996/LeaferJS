import { Leafer, Rect } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'

const leafer = new Leafer({ view: window })

const red = new Rect({ fill: '#FF4B4B', height: 300 })
const yellow = new Rect({ fill: '#FEB027', height: 300 })
const green = new Rect({ fill: '#79CB4D', height: 300 })

const flow = new Flow({
  children: [red, yellow, green],
  fill: '#676',
  x: 100,
  y: 100,
  width: 400,
  height: 400,
  flowAlign: 'center',
})

leafer.add(flow)
