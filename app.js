(function(doc) {

  var canvas = doc.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var numbers = generateRandomNumbers();
  ctx.height = 100;
  ctx.width = 800;

  function generateRandomNumbers () {
    var byteArray = [];
    for (var i = 1; i <= 80000; i++) {
      var temp = Math.random();
      var byte = (.5 > temp > 0) ? 0 : 1;
      byteArray.push(byte);
    }
    return byteArray;
  }

  function draw() {
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    var currentY = 0;
    var currentX = 0;
    var i = 0;
    while(currentX < ctx.width && currentY <= ctx.height) {
      console.log(currentY);
      ctx.fillStyle = (numbers[i] === 1) ? 'white' : 'black';
      ctx.beginPath();
      ctx.arc(currentX, currentY, 1, 0, 2*Math.PI);
      ctx.fill();
      ctx.closePath();
      i++;
      currentX++;
      if (currentX === ctx.width) {
        currentX = 0;
        currentY++;
      }
    }
  }

  draw();

})(document);
