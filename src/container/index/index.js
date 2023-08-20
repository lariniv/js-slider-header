class Slider {
  static #content = null
  static #left = null
  static #right = null

  static #max = null
  static #count = 1

  static init = () => {
    this.#content = document.querySelector(
      '.slider__content',
    )

    this.#left = document.querySelector(
      '.slider__arrow--left',
    )

    this.#right = document.querySelector(
      '.slider__arrow--right',
    )

    this.#max = this.#content.childElementCount

    this.#left.onclick = () => this.#slide('left')
    this.#right.onclick = () => this.#slide('right')

    // console.log(
    //   this.#content,
    //   this.#left,
    //   this.#right,
    //   this.#max,
    // )
  }

  static #slide = (side) => {
    const offsetWidth = this.#content.offsetWidth
    const scrollLeft = this.#content.scrollLeft
    const scrollWidth = this.#content.scrollWidth

    if (side === 'left') {
      if (scrollLeft !== 0) {
        this.#content.scrollBy({
          top: 0,
          left: -offsetWidth,
          behavior: 'smooth',
        })
      } else {
        this.#content.scrollTo({
          top: 0,
          left: scrollWidth - offsetWidth,
          behavior: 'smooth',
        })
      }
    }

    if (side === 'right') {
      if (scrollLeft + offsetWidth !== scrollWidth) {
        this.#content.scrollBy({
          top: 0,
          left: offsetWidth,
          behavior: 'smooth',
        })
      } else {
        this.#content.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }
    }
  }
}

Slider.init()

class Header {
  static #height = null
  static #wrapper = null
  static #button = null

  static #isOpen = false

  static init = () => {
    this.#height = document.querySelector(
      '.header__bottom',
    ).offsetHeight

    this.#wrapper = document.querySelector(
      '.header__wrapper',
    )
    this.#button = document.querySelector('.header__icon')

    this.#button.onclick = this.#toggle
  }

  static #toggle = () => {
    this.#button.classList.toggle('header__icon--open')
    this.#button.classList.toggle('header__icon--close')
    if (this.#isOpen) {
      this.#wrapper.style.height = 0
    } else {
      this.#wrapper.style.height = `${this.#height}px`
    }

    this.#isOpen = !this.#isOpen
  }
}

Header.init()
