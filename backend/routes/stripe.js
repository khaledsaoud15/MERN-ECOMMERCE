const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51JqmK8EBLIyni22eD5kboc6VSqKgTfaX2wUTRd6XOFjGwO2u9yQDij5ZJJUqchE49iswaUfPO5R2Rv1bVkACIBf8006vPo6VQ5"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
