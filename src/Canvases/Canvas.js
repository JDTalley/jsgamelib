export default class Canvas {
    constructor (id, alphaBool) {
      this.canvas = document.getElementById(id)
      this.context = this.canvas.getContext('2d', { alpha: alphaBool })
      this.width = this.canvas.width
      this.height = this.canvas.height
    }

    clearCanvas () {
        this.context.clearRect(0, 0, this.width, this.height)
      }
    
      setBackgroundColor (color) {
        this.context.fillStyle = color
        this.context.fillRect(0, 0, this.width, this.height)
      }    
}