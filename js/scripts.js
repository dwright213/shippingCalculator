$(document).ready(function() {
  $("form#package").submit(function(event) {
    event.preventDefault();
    var inputShipTo = parseInt($("input#shipTo").val());
    var inputWeight = parseInt($("input#weight").val());
    var inputHeight = parseInt($("input#height").val());
    var inputWidth = parseInt($("input#width").val());
    var parcel = {
      shipTo: inputShipTo,
      weight: inputWeight,
      height: inputHeight,
      area: function()  {
        return (this.height * this.width);
      },
      cost: function() {
        return (this.weight * 10 * this.shipTo / 1000 );
      }
    };

    $("div#distanceSpacer").empty();

    var newParcel = {cost: parcel.cost()};
    if (inputShipTo > 12500) {
      alert("This shipping job would require Warp Zone, and that's cheating.");
    } else {

    $("div#distanceSpacer").append("<div id='path' style='width: " + parcel.shipTo + "px;'></div><div id='shippingLabel'><img src='img/parcel.gif' style='height: " + (parcel.height*3) + "px; width: " + (parcel.width*3) + "px;'><br><h2> Your Shipment Will Cost " + newParcel.cost + " Coins<br><small>Processing surcharges may apply.</small></h2></div>");
    }



  });
});
