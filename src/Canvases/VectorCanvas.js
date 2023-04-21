import Canvas from './Canvas';

export default class VectorCanvas extends Canvas {
  constructor (id, alphaBool) {
    super(id, alphaBool);
  }

  drawVectorRectangle (xPos, yPos, width, height, rotation, fillColor, lineWidth, strokeStyle) {
    if (fillColor) {
      this.context.fillStyle = fillColor
    }

    if (lineWidth) {
      this.context.lineWidth = lineWidth
    } else {
      this.context.lineWidth = 1
    }

    if (strokeStyle) {
      this.context.strokeStyle = strokeStyle
    } else {
      this.context.strokeStyle = '#FFF'
    }

    this.context.translate(Math.floor(xPos), Math.floor(yPos))

    if (rotation) {
      this.context.rotate(rotation * Math.PI / 180)
    }

    this.context.beginPath()

    this.context.rect(xPos, yPos, width, height)

    if (rotation) {
      this.context.rotate(-rotation * Math.PI / 180)
    }

    if (fillColor) {
      this.context.fill()
    }

    if (strokeStyle) {
      this.context.stroke()
    }

    this.context.setTransform(1, 0, 0, 1, 0, 0)
  }

  drawVectorShape (xPos, yPos, shapeBounds, rotation, fillColor, lineWidth, strokeStyle) {
    if (fillColor) {
      this.context.fillStyle = fillColor
    }

    if (lineWidth) {
      this.context.lineWidth = lineWidth
    } else {
      this.context.lineWidth = 1
    }

    if (strokeStyle) {
      this.context.strokeStyle = strokeStyle
    } else {
      this.context.strokeStyle = '#FFF'
    }

    this.context.translate(Math.floor(xPos), Math.floor(yPos))

    if (rotation) {
      this.context.rotate(rotation * Math.PI / 180)
    }

    this.context.beginPath()

    this.context.moveTo(Math.floor(shapeBounds[0].x), Math.floor(shapeBounds[0].y))

    for (let i = 1; i < shapeBounds.length; i++) {
      this.context.lineTo(Math.floor(shapeBounds[i].x), Math.floor(shapeBounds[i].y))
    }

    if (rotation) {
      this.context.rotate(-rotation * Math.PI / 180)
    }

    if (fillColor) {
      this.context.fill()
    }

    if (strokeStyle) {
      this.context.stroke()
    }

    this.context.setTransform(1, 0, 0, 1, 0, 0)
  }
}
