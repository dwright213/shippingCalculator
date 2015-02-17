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
        return (this.volume() * this.weight);
      }
    };

    var newParcel = {cost: parcel.cost()};
    $("div#distanceSpacer").append("<div style='width: " + parcel.shipTo + "px; height: 50px; float: left; background-color: hsla(150, 100%, 100%, 0.43);'></div><div width='300'><h1>Your Parcel Will Cost " + newParcel.cost + " Coins</h1></div>");
  });
});
