import { Leafer, Box, Rect, Frame, Group } from 'leafer-ui'
import '@leafer-in/state'
import '@leafer-in/animate'

const leafer = new Leafer({ view: window, fill: 'gray' })

const box = new Box({
  x: 100,
  y: 100,
  fill: '#32cd79',
  cornerRadius: 5,
  origin: 'center', // 从中心缩放

  button: true, // 标记为按钮，子元素 Text 将自动同步交互状态
  hoverStyle: {
    // 鼠标hover状态
    fill: '#FF4B4B',
    scale: 1.5,
    cornerRadius: 20,
  },
  pressStyle: {
    // 鼠标按下状态
    fill: '#FEB027',
    scale: 1.1,
    transitionOut: 'bounce-out', // 退出状态时的过渡方式
  },

  children: [
    {
      tag: 'Text',
      text: 'Button',
      fontSize: 16,
      fontWeight: 'bold',
      padding: [10, 20],
      fill: 'rgba(0,0,0,0.5)',
      hoverStyle: { fill: 'black' }, // 鼠标 hover 到 button 上的状态
    },
  ],
})

leafer.add(box)

const rect = new Rect({
  x: 300,
  y: 300,
  width: 100,
  height: 100,
  fill: '#32cd79',
  cornerRadius: 30,
  origin: 'center',
  hoverStyle: {
    scale: 1.5,
  },
  states: {
    // 自定义状态列表
    aaa: { fill: '#FEB027' },
    bbb: {
      animation: {
        keyframes: [{ rotation: 45 }, { rotation: 135, scale: 1.2 }],
        duration: 1,
        swing: true,
      },
    },
  },
  state: 'aaa', // 设置状态
  transition: 1,
})

leafer.add(rect)

rect.on('click', () => {
  // 点击切换状态
  rect.state = rect.state === 'aaa' ? 'bbb' : 'aaa'
})

const page1 = new Frame({
  x: 300,
  y: 100,
  width: 150,
  height: 100,
  fill: '#FEB027',
  animation: {
    // 入场动画
    keyframes: [
      { opacity: 0, offsetX: -150 },
      { opacity: 1, offsetX: 0 },
    ],
    duration: 0.8,
  },
  animationOut: {
    // 出场动画
    style: { opacity: 0, offsetX: 150 },
    duration: 0.8,
  },
})

const page2 = page1.clone({ fill: '#32cd79' }) // 克隆 page 并重新设置fill

const group = new Group({ children: [page1] })

leafer.add(group)

// 切换页面, 自动执行入场、出场动画
setInterval(() => {
  if (page1.parent) {
    group.add(page2)
    page1.remove()
  } else {
    group.add(page1)
    page2.remove()
  }
}, 2000)

const rect1 = new Rect({
  y: 200,
  cornerRadius: 50,
  fill: '#32cd79',
  animation: {
    style: { x: 500, cornerRadius: 0, fill: '#ffcd00' }, // style keyframe
    duration: 1,
    swing: true, // 摇摆循环播放
  },
})

leafer.add(rect1)

const rect2 = new Rect({
  x: 50,
  y: 400,
  cornerRadius: 50,
  fill: '#32cd79',
  around: 'center',
  animation: {
    keyframes: [
      { style: { x: 150, scaleX: 2, fill: '#ffcd00' }, duration: 0.5 }, // animate keyframe
      { style: { x: 50, scaleX: 1, fill: '#ffcd00' }, duration: 0.2 },
      {
        style: { x: 550, cornerRadius: 0, fill: '#ffcd00' },
        delay: 0.1,
        easing: 'bounce-out',
      },
      { x: 50, rotation: -720, cornerRadius: 50 }, // style keyframe
    ],
    duration: 3, // 自动分配剩余的时长给未设置 duration 的关键帧： (3 - 0.5 - 0.2 - 0.1) / 2
    loop: true,
    join: true, //  加入动画前的元素状态作为 from 关键帧
  },
})

leafer.add(rect2)