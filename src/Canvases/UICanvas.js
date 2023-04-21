const Canvas = require('./Canvas');

export default class UICanvas extends Canvas {
  constructor (id, alphaBool) {
    super(id, alphaBool);
  }

  drawText (text, x, y, font, fillStyle, alignment) {
    this.context.translate(x, y)

    if (font) {
      this.context.font = font
    } else {
      this.context.font = '16px Arial'
    }

    if (fillStyle) {
      this.context.fillStyle = fillStyle
    } else {
      this.context.fillStyle = '#000'
    }

    if (alignment) {
      this.context.textAlign = alignment
    } else {
      this.context.textAlign = 'left'
    }

    this.context.fillText(text, 0, 0)

    this.context.setTransform(1, 0, 0, 1, 0, 0)
  }
}
