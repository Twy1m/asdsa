const CryptoJs = require("crypto-js");

const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(400).json("token inexistente");
  }

  try {
    let bytes = CryptoJs.AES.decrypt(token, "senha").toString(
      CryptoJs.enc.Utf8,
    );
    if (!bytes) {
      return res.status(400).json("token invalido");
    }

    bytes = JSON.parse(bytes);

    if (!bytes) {
      return res.status(400).json("token invalido");
    }

    if (bytes.expiraEm < Date.now()) {
      return res.status(400).json("token expirado");
    }

    next()
  } catch (err) {
    console.error("erro", err);
    res.status(500).json({ message: "erro ao autenticar" });
  }
};

module.exports = authMiddleware