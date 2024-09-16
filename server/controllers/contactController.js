const sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    console.log("Contact message received:", { name, email, message });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending message:", error);
    res
      .status(500)
      .json({ message: "An error occurred while sending the message." });
  }
};

module.exports = { sendContactMessage };
