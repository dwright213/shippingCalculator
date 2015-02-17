$(document).ready(function() {
  $("form#package").submit(function(event) {
    event.preventDefault();
    var inputShipTo = parseInt($("input#shipTo").val());
    var inputShipFrom = parseInt($("input#shipFrom").val());
    var inputWeight = parseInt($("input#weight").val());
    var inputHeight = parseInt($("input#height").val());
    var inputWidth = parseInt($("input#width").val());
    var inputLength = parseInt($("input#length").val());
    var parcel = { shipTo: inputShipTo,
                    shipFrom: inputShipFrom,
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

    $("ul#packageInfo").append("<li>" + newParcel.cost + "</li>");
  });
});
