'use strict';

class Label {
  constructor() {
    this.targets = [
      'Bug',
      'Blocked'
    ]
    this.imageURL = `https://s3.amazonaws.com/crystal-cdn/images/<NAME>-background.png`
  }

  start() {
    setInterval(() => {
      const labels = document.querySelectorAll(".list-card-labels")
      labels.forEach((element) => this._setCardBackground(element))
    }, 2000)
  }

  _setCardBackground(element) {
    const card = element.parentElement.parentElement
    const imageName = this._isTargetCard(element.textContent)

    card.style.backgroundImage = this._backgroundImage(imageName)
    card.style.backgroundSize = 'cover'
  }

  _backgroundImage(imageName) {
    return `url(${this.imageURL.replace('<NAME>', imageName)})`
  }

  _isTargetCard(content) {
    let targetName = 'none'
    this.targets.forEach((target) => {
      if(content.indexOf(target) !== -1) targetName = target
    })
    return targetName
  }
}

export default Label;
