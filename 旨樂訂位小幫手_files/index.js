let sendButton = document.querySelector('button');
sendButton.addEventListener('click', send);

function send() {
  let month = document.querySelector('#monthValue').value;
  let day = document.querySelector('#dayValue').value;
  let type = document.querySelector('#typeValue').value;
  let time = document.querySelector('#timeValue').value;
  let adult = document.querySelector('#adultValue').value;
  let child = document.querySelector('#childValue').value;
  let guess = document.querySelector('#guessValue').value;
  let phone = document.querySelector('#phoneValue').value;
  let seat = document.querySelector('#seatValue').value;
  let memo = document.querySelector('#memoValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyANLeYOnUpAcc89jXI8cw2WuQvIsYoQwPsTeO_/exec",
    data: {
        "month": month,
        "day": day,
        "type": type,
        "time": time,
        "adult": adult,
        "child": child,
        "guess": guess,
        "phone": phone,
        "seat": seat,
        "memo": memo
    },
    success: function(response) {
      if(response == "成功"){
        alert("訂位成功");
      }
    },
  });
};

