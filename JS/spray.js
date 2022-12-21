class Spray extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
    this.timeout;
    this.density = 50;

    this.test = function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }
  }

  onMouseDown(coord, event) {
    this.context.lineJoin = this.context.lineCap = "round";
    this.origX = coord[0];
    this.origY = coord[1];
    this.context.fillStyle = "#000000"
    this.context.beginPath()

    this.timeout = setTimeout(function doSpray() {
      for (var i = this.density; i--; ) {
        var angle = this.test(0, Math.PI * 2);
        var radius = this.test(0, 30);
        this.context.globalAlpha = Math.random();
        this.context.fillRect(
          this.origX + radius * Math.cos(angle),
          this.origY + radius * Math.sin(angle),
          this.test(1, 2),
          this.test(1, 2)
        );
      }
      if (!this.timeout) return;
      this.timeout = setTimeout(doSpray, 50);
    }, 50);
  }

  onDragging(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onMouseMove() {}
  onMouseUp() {
    clearTimeout(this.timeout)
  }
  onMouseLeave() {}
  onMouseEnter() {}

}
