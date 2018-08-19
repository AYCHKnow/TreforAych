 'use strict'

import Limit from './limit.js'
import Label from './label.js'

(function() {
  // Start labels
  const labels = new Label()
  labels.start()

  // Start lane limits
  const lanes = document.querySelectorAll(".list-header-name-assist")
  lanes.forEach((element, index, array) => {
    if(element.textContent.indexOf('[') !== -1) {
      setInterval(() => {
        new Limit(element).run()
      }, 2000)
    }
  });
})();
