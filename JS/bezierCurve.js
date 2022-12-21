class BezierCurve extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        // this.color = currentColor;   
        // this.lineWidth = lineWidth;   
        this.lineMade = false;        
            
    }

    onMouseDown(coord, event){
        if (this.lineMade === false) {
            this.origX = coord[0];
            this.origY = coord[1];
        } else {
    }
}

    onDragging(coord, event){

        if (this.lineMade === false) {     

            this.lineXEnd = coord[0];
            this.lineYEnd = coord[1];
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.lineTo(coord[0], coord[1]);

            this.contextDraft.lineWidth = 5;
            this.contextDraft.strokeStyle = "#000000";
            // this.contextDraft.shadowBlur = 0;
            // this.contextDraft.shadowColor = "#000000";

            this.contextDraft.stroke();
            // this.lineMade = true;

        } else if (this.lineMade === true) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.quadraticCurveTo(coord[0], coord[1],this.lineXEnd, this.lineYEnd);
            this.contextDraft.stroke();

            this.contextDraft.lineWidth = 5;
            this.contextDraft.strokeStyle = "#000000";
            // this.contextDraft.shadowBlur = 0;
            // this.contextDraft.shadowColor = currentColor;

            this.contextDraft.beginPath();
            this.contextDraft.arc(coord[0], coord[1],10, 0, 2 * Math.PI);
            this.contextDraft.fillStyle = 'black';
            this.contextDraft.fill();
        }


        // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextDraft.beginPath();
        // this.contextDraft.moveTo(this.origX, this.origY);
        // this.contextDraft.bezierCurveTo(coord[0], coord[1], coord[0], coord[1], (this.origX+500), (this.origY));
        // this.contextDraft.lineWidth = lineWidth;
        // this.contextDraft.strokeStyle = currentColor;
        // this.contextDraft.shadowBlur = 0;
        // this.contextDraft.shadowColor = currentColor;
        // this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        if (this.lineMade === false) {     
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.beginPath();

            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.lineTo(coord[0], coord[1]);

            this.contextDraft.lineWidth = 5;
            this.contextDraft.strokeStyle = "#000000";
            // this.contextDraft.shadowBlur = 0;
            // this.contextDraft.shadowColor = currentColor;
            this.contextDraft.stroke();
            
            // CIRCLE
            this.contextDraft.beginPath();
            this.contextDraft.arc((coord[0]+this.origX)/2, (coord[1]+this.origY)/2,10, 0, 2 * Math.PI);
            this.contextDraft.fillStyle = 'black';
            this.contextDraft.fill();

            this.lineMade = true;

        } else if (this.lineMade === true) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.beginPath();

            this.contextReal.moveTo(this.origX, this.origY);
            this.contextReal.quadraticCurveTo(coord[0], coord[1],this.lineXEnd, this.lineYEnd);

            this.contextReal.lineWidth = 5;
            this.contextReal.strokeStyle = "#000000";
            // this.contextReal.shadowBlur = 0;
            // this.contextReal.shadowColor = currentColor;
            this.contextReal.stroke();

            this.lineMade = false;
        }
     }
    onMouseLeave(){}
    onMouseEnter(){}
}
