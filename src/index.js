const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook
} = require("tapable");
import Car from './Car'

console.log('hello world!!!')

// const hook = new SyncBailHook()
// hook.tap('logPlugin', () => console.log('被勾了'))
// hook.call()

const car = new Car()
// car.hooks.startHook.tap('aaaaaaaaaa', () => console.log('start'))
// car.hooks.brake.tap('aa', () => console.log('1'))
// car.hooks.brake.tap('aa', () => { console.log('2'); return 1; })
// car.hooks.brake.tap('aa', () => console.log('3'))

// car.hooks.loop.tap('sddsd', () => {
//   const r = Math.random()
//   console.log(r)
//   if (r < 0.05) {
//     return undefined
//   }
//   return 1
// })

car.hooks.asyncHook.tapAsync('async', (callback) => {
  console.log('loading')
  setTimeout(() => {
    callback()
  }, 3000)
})

car.hooks.asyncHook.callAsync(() => { console.log('finish')})

car.start()
car.hooks.brake.call()
