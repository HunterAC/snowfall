class Snowflake {
    constructor() {
        let x = random(width);
        let y = random(-100, -10);
        this.position = createVector(x, y);
        this.velocity = createVector(0, 2);
        this.accel = createVector(0, 0);

        this.ir = random(3, 8);
        this.or = random(this.ir+3, this.ir+6);
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.accel);

        if (this.position.y >= height) {
            this.position.y = random(-100, -10);
        }
    }

    render() {
        stroke(255);
        strokeWeight(this.ir);
        point(this.position.x, this.position.y);

        stroke('rgba(255,255,255,0.20)');
        strokeWeight(this.or);
        point(this.position.x, this.position.y);
    }
}