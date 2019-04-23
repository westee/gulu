let onClickDocument = (e) => {
  let {
    target
  } = e
  event.forEach(item => {
    if (item.el === target || item.el.contains(target)) {
      return
    } else {
      item.callback()
    }
  });
}
document.addEventListener('click', onClickDocument)

let event = []
export default {
  bind(el, binding) {
    event.push({
      el,
      "callback": binding.value
    })
  }
}

let removeEvent = () => {
  document.removeEventListener('click', onClickDocument)
}
export {
  removeEvent
}