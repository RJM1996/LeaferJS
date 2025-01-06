import { Leafer, Rect, LeaferEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

const printEvent = (e: LeaferEvent) => {
  console.log(Date.now(), e.type)
}

leafer.on(LeaferEvent.START, printEvent)

leafer.on(LeaferEvent.BEFORE_READY, printEvent)

leafer.on(LeaferEvent.READY, printEvent)

leafer.on(LeaferEvent.AFTER_READY, printEvent)

leafer.on(LeaferEvent.VIEW_READY, printEvent)

// stop
leafer.on(LeaferEvent.STOP, printEvent)

// restart
leafer.on(LeaferEvent.RESTART, printEvent)

// end
leafer.on(LeaferEvent.END, printEvent)

setTimeout(() => {
  leafer.stop()
}, 1000)

// restart
setTimeout(() => {
  leafer.start()
}, 2000)

// end
setTimeout(() => {
  leafer.destroy()
}, 3000)
