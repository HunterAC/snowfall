let snow = [];
const total_flakes = 75;

function setup() {
    createCanvas(400, 400);

    for (let i = 0; i < total_flakes; i++) {
        snow.push(new Snowflake());
    }
}

function draw() {
    background(35);

    for (flake of snow) {
        flake.render();
        flake.update();
    }
}