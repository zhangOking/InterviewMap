/*
* throttle
* 限制一个函数在一定时间内只能执行一次
* @param[time]:Number 时间
* @param[func]:Function callback
* return
*/
export const throttleMaker = (time: number, func: Function) => {
  let timer: any = null
  const t = time
  const f = func

  const throttle = () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      f()
      timer = null
    }, t)
  }

  return throttle
}
