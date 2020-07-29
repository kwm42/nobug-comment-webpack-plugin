import { SyncHook, SyncBailHook, SyncLoopHook, AsyncParallelHook } from 'tapable';

export default class Car {
  constructor() {
    this.hooks = {
      startHook: new SyncHook(),
      brake: new SyncBailHook(),
      loop: new SyncLoopHook(),
      asyncHook: new AsyncParallelHook()
    }
  }

  start() {
    this.hooks.startHook.call();
    this.hooks.loop.call();
  }
}
