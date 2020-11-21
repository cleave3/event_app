const { Router } = require("express");
const { setupSubscription, publishEvent, printData } = require("../controller/eventController");

const router = Router();

router.get("/", (req, res) => res.json({ status: 200, message: "event app is live" }));

router.post("/subscribe/:topic", setupSubscription);
router.post("/publish/:topic", publishEvent);
router.post("/event", printData);

module.exports = router;
