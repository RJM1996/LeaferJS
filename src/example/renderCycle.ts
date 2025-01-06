import {
  Leafer,
  Rect,
  RenderEvent,
  LayoutEvent,
  PropertyEvent,
  ChildEvent,
  WatchEvent,
} from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

// 数据变化事件
leafer.on(ChildEvent.ADD, function () {
  console.log(Date.now() + ' Child added')
})
leafer.on(ChildEvent.REMOVE, function () {
  console.log(Date.now() + ' Child removed')
})
leafer.on(PropertyEvent.CHANGE, function () {
  console.log(Date.now() + ' Property changed')
})

// 渲染事件
leafer.on(RenderEvent.REQUEST, function () {
  console.log(Date.now() + ' Render requested')
})
leafer.on(RenderEvent.START, function () {
  console.log(Date.now() + ' Render started')
})
leafer.on(RenderEvent.BEFORE, function () {
  console.log(Date.now() + ' Render before (Layout has ended)')
})
leafer.on(RenderEvent.RENDER, function () {
  console.log(Date.now() + ' Rendering')
})
leafer.on(RenderEvent.AFTER, function () {
  console.log(Date.now() + ' Render after')
})
leafer.on(RenderEvent.END, function () {
  console.log(Date.now() + ' Render ended')
})
leafer.on(RenderEvent.AGAIN, function () {
  console.log(Date.now() + ' Render again')
})

// 布局事件
leafer.on(LayoutEvent.REQUEST, function () {
  console.log(Date.now() + ' Layout requested')
})
leafer.on(LayoutEvent.START, function () {
  console.log(Date.now() + ' Layout started')
})
leafer.on(LayoutEvent.BEFORE, function () {
  console.log(Date.now() + ' Layout before')
})
leafer.on(LayoutEvent.LAYOUT, function () {
  console.log(Date.now() + ' Layouting')
})
leafer.on(LayoutEvent.AFTER, function () {
  console.log(Date.now() + ' Layout after')
})
leafer.on(LayoutEvent.END, function () {
  console.log(Date.now() + ' Layout ended')
})
leafer.on(LayoutEvent.AGAIN, function () {
  console.log(Date.now() + ' Layout again')
})

// 观察数据事件
leafer.on(WatchEvent.REQUEST, function () {
  console.log(Date.now() + ' Watch requested')
})
leafer.on(WatchEvent.DATA, function () {
  console.log(Date.now() + ' Watch data received')
})
