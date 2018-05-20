(function(doc) {

  var ws = new WebSocket('ws://localhost:8080/');
  var canvas = doc.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var currentY = 0;
  var currentX = 0;
  ctx.height = 100;
  ctx.width = 800;

  ws.onmessage = function(e) {
    liveDraw(e.data);
  };

  function liveDraw(byte) {
    if (currentX < ctx.width && currentY <= ctx.height) {
      ctx.fillStyle = (parseInt(byte) === 1) ? '#000000' : '#ffffff';
      ctx.fillRect(currentX, currentY, 1, 1);
      currentX++;
    } else {
      currentX = 0;
      currentY++;
    }
  }

})(document);
