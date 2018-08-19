'use strict';

class Limit {
  constructor(lane) {
    this.title = lane
    this.limit = 1
    this.cards = 0
    this.status = 'good'
  }

  run() {
    this._laneLimit()
    this._numberOfCards()
    this._checkStatus()
    this._changeTitle()
  }

  _laneLimit() {
    const amount = this.title.textContent.match(/[0-9]/g).join("")
    this.limit =  amount ? parseInt(amount) : 0
  }

  _numberOfCards() {
    const container = this.title.parentElement.parentElement
    this.cards = container.getElementsByClassName('list-card').length
  }

  _checkStatus() {
    if(this.cards > this.limit) this.status = 'bad'
    else if(this.cards == this.limit) this.status = 'okay'
    else this.status = 'good'
  }

  _changeTitle() {
    const lane = this.title.parentNode.parentNode
    lane.style.background = this._laneColor()[this.status]
  }

  _laneColor() {
    return {
      'bad': '#ff3f34',
      'okay': '#ffa801',
      'good': '#e2e4e6'
    }
  }

}

export default Limit;
