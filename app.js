(function(doc) {

  var ws = new WebSocket('ws://localhost:8080/');
  var canvas = doc.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var currentY = 0;
  var currentX = 0;
  ctx.height = 100;
  ctx.width = 800;

  ws.onmessage = function(e) {
    ctx.fillStyle = (parseInt(e.data)) ? '#ffffff' : '#000000';
    ctx.fillRect(currentX, currentY, 1, 1);
    ++currentX;
    if (currentX >= 800) {
      currentX = 0;
      ++currentY;
    }
  };

  // function liveDraw(byte) {
  //   ctx.fillStyle = (parseInt(byte)) ? '#ffffff' : '#000000';
  //   ctx.fillRect(currentX, currentY, 1, 1);
  //   ++currentX;
  //   if (currentX >= 800) {
  //     currentX = 0;
  //     ++currentY;
  //   }
  // }

})(document);
