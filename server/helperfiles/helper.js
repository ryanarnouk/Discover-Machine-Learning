module.exports = {
  hotdogOrNot: function(data) {
    let result = 0;

    for (let array of data) {
      if (array['name'] === 'hot dog') {
        result = Math.round(array['value'] * 100)
      }
    }
    return result;
  },
  
  getMessage: function(per) {
    let message = "";

    if (per < 10) {
      message = "Not a Hotdog";
    } else if(per < 60 && per > 10) {
      message = "Maybe a hotdog";
    } else if(per >= 60) {
      message = "Hotdog!"
    }

    return message;
  }
}