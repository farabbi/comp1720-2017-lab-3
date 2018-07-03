var w = [];
var t = [];
var s = [];

function setup() {
    createCanvas(800, 600);
    // any additional setup code goes here
    noStroke();
    w.push(random(10, 200));
    t.push(random(10, 255));
    s.push(width);
}

function draw() {
    background(255);
    var i;
    for (i = 0; s[i] <= width && i < s.length; i++) {
      fill(0, 0, 255, t[i]);
      rect(s[i], (height-w[i])/2, w[i], w[i]);
      console.log('width:' + w[i]);
      console.log('transparency:' + t[i]);
    }
    for (i = 0; i < s.length; i++) {
      s[i]--;
    }
    if (s[s.length - 1] + w[s.length - 1] <= width) {
      w.push(random(10, 200));
      t.push(random(10, 255));
      s.push(s[s.length - 1] + w[s.length - 1] + 10);
    }
    if (s[0] + w[0] < 0) {
      w.shift();
      t.shift();
      s.shift();
    }
    console.log('frameRate:' + frameRate());
}
