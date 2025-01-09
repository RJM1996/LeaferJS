import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

const app = new App({
  view: window,
  fill: '#F2F2F2',
  editor: {
    stroke: '#01CAC8',
    strokeWidth: 3,
    skewable: false,
    boxSelect: false,
  }, //  配置 editor 会自动创建并添加 app.editor 实例、tree 层、sky 层
  tree: { type: 'design' },
  sky: {
    move: { disabled: true },
  },
})

const width = 512
const height = 512
function setTreePostion() {
  // const horizontalPadding = 375
  // const verticalPadding = 88

  // const target = app.view as HTMLDivElement
  // const scale = Math.min(
  //   (target.clientWidth - horizontalPadding * 2) / width,
  //   (target.clientHeight - verticalPadding * 2) / height
  // )
  // const x =
  //   (target.clientWidth - horizontalPadding - width * scale) / 2 +
  //   horizontalPadding / 2
  // const y =
  //   (target.clientHeight - verticalPadding - height * scale) / 2 +
  //   verticalPadding / 2
  // app.tree.scale = scale
  // app.tree.x = x
  // app.tree.y = y

  // 计算 x, y 将app.tree上下左右居中
  const target = app.view as HTMLDivElement
  const x = (target.clientWidth - width) / 2
  const y = (target.clientHeight - height) / 2
  console.log({ x, y })
  app.tree.x = x
  app.tree.y = y
}

app.tree.add(
  Frame.one(
    {
      draggable: false,
      // 页面内容
      children: [
        Rect.one(
          {
            id: 'rect1',
            editable: true,
            fill: '#FEB027',
            locked: true,
          },
          0,
          0,
          400,
          500
        ),
        Rect.one(
          {
            id: 'rect2',
            editable: true,
            fill: 'lightblue',
            locked: true,
          },
          100,
          100,
          400,
          500
        ),
      ],
      fill: '#ccc',
      overflow: 'hide',
    },
    0,
    0,
    width,
    height
  )
)

setTreePostion()


// 创建两个按钮，用于删除rect1和rect2
const btn1 = document.createElement('button')
btn1.innerText = '删除rect1'
btn1.style.position = 'absolute'
btn1.onclick = () => {
  app.tree.findOne('#rect1').remove()
}
document.body.appendChild(btn1)

const btn2 = document.createElement('button')
btn2.innerText = '删除rect2'
btn2.style.position = 'absolute'
btn2.style.top = '50px'
btn2.onclick = () => {
  app.tree.findOne('#rect2').remove()
}
document.body.appendChild(btn2)

const btn3 = document.createElement('button')
btn3.innerText = '取消选中'
btn3.style.position = 'absolute'
btn3.style.top = '100px'
btn3.onclick = () => {
  app.editor.cancel()
}
document.body.appendChild(btn3)
