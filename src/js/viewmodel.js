var MapViewModel = function () {
  var self = this;
  self.pokestops = ko.observableArray();
  self.gyms = ko.observableArray();
};

ko.applyBindings(new MapViewModel());
