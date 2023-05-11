export default function (context, inject) {
    inject('smoothScroll', function (selector) {
      const target = document.querySelector(selector)
      if (!target) {
        return
      }
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const targetTop = target.getBoundingClientRect().top + scrollTop
      const distance = Math.abs(targetTop - scrollTop)
      const duration = Math.min(Math.max(distance / 2, 250), 1000)
      const easing = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      let start = null
  
      const step = timestamp => {
        if (!start) {
          start = timestamp
        }
        const progress = timestamp - start
        const percent = Math.min(progress / duration, 1)
        const eased = easing(percent)
        window.scrollTo(0, Math.round(scrollTop + (targetTop - scrollTop) * eased))
        if (progress < duration) {
          requestAnimationFrame(step)
        }
      }
  
      requestAnimationFrame(step)
    })
  }
  