import { App, Rect, Debug } from 'leafer-ui'

const app = new App({
  view: window,
  tree: { usePartRender: false },
})

Debug.showRepaint = true

app.tree.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
