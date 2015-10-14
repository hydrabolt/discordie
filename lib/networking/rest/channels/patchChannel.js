"use strict";

const Constants = require("../../../Constants");
const Events = Constants.Events;
const Endpoints = Constants.Endpoints;
const apiRequest = require("../../../core/ApiRequest");

module.exports = function(channelId, name, position, topic) {
  return new Promise((rs, rj) => {
    apiRequest
    .patch(`${Endpoints.CHANNELS}/${channelId}`)
    .auth(this.token)
    .send({
      name: name,
      position: position,
      topic: topic
    })
    .end((err, res) => {
      if (!res.ok)
        return rj(err);

      this._channels.update(res.body);
      rs(res.body);
    });
  });
}