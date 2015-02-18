$(document).ready(function() {
  $("form#package").submit(function(event) {
    event.preventDefault();
    var inputShipTo = parseInt($("input#shipTo").val());
    var inputWeight = parseInt($("input#weight").val());
    var inputHeight = parseInt($("input#height").val());
    var inputWidth = parseInt($("input#width").val());
    var inputLength = parseInt($("input#length").val());
    var parcel = {
      shipTo: inputShipTo,
      weight: inputWeight,
      height: inputHeight,
      width: inputWidth,
      length: inputLength,
      volume: function()  {
        return (this.height * this.width * this.length);
      },
      cost: function() {
        return (this.weight * 10 * this.shipTo / 1000 );
      }
    };
    var newParcel = {cost: parcel.cost()};
    if (inputShipTo > 12500) {
      alert("This shipping job would require Warp Zone, and that's cheating.");
    } else {

    $("div#distanceSpacer").append("<div id='path' style='width: " + parcel.shipTo + "px;'></div><div width='300'><img src='img/parcel.png' style='height: 200px; width: 200px;'><br><h1> Your Shipment Will Cost " + newParcel.cost + " Coins</h1></div>");
    }



  });
});
