const User = require("../models/user.js");

const newUser = new User(
  "test",
  "uğur",
  "test",
  "Walreuq",
  "test@test.com",
  "test",
  "test-image",
  ["test-image1", "test-image2"],
  "test description",
  "male",
  false
);

module.exports = newUser;
