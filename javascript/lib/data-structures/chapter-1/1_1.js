module.exports = Strings_1_1 = (function() {
  return {
    /*
     * Tests to see if string contains all unique chars.
     * @param {String} str - The string to be checked for uniqueness
     * @returns {Boolean} true if string has only unique chars. False if a duplicate exists
     */
    isUnique: function(str) {
      var charMap = {};

      for (var i = 0; i < str.length; i++) {
        var character = str[i];
        if (charMap[character]) {
          return false;
        }
        charMap[character] = true;
      }
      return true;
   }
  };
}());
