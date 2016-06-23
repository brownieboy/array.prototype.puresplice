if (typeof Array.pureSplice === "undefined") {
    Array.prototype.pureSplice = function(start, deleteCount = 1) { // eslint-disable-line no-extend-native
      try {
          var newArray = [
              ...this.slice(0, start),
              ...this.slice(start + deleteCount)
          ];
          return newArray;
      } catch (e) {
          return this;
      }
    };
}
