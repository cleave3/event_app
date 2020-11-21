const events = require("../events/event");

class EventController {
  static setupSubscription({ params: { topic } }, res) {
    try {
      const event = events.find(event => event.topic == topic);
      if (event) throw new Error("An event with this topic already exist");

      const data = { topic, data: { msg: "" } };
      events.push(data);

      return res.status(201).json({ status: 201, message: "subscription setup successfully" });
    } catch ({ message: error }) {
      return res.status(400).json({ status: 400, error });
    }
  }

  static publishEvent({ params: { topic }, body: { message } }, res) {
    try {
      if (!message || message.trim() == "") throw new Error("message is required");

      const event = events.find(event => event.topic == topic);
      if (!event) throw new Error("Event not found");

      event.data.message = message;
      const payload = { topic, data: { msg: message } };
      return res.status(200).json(payload);
    } catch ({ message: error }) {
      return res.status(400).json({ status: 400, error });
    }
  }

  static printData(req, res) {
    return res.status(200).json(events);
  }
}

module.exports = EventController;
