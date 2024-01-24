require("dotenv").config();

module.exports = {
  apps: [
    {
      name: `polypane-tunnel`,
      script: "node --experimental-modules ./bin/server.js --landing=https://polypane.app --domain=polypane.link --port=3005 --max-sockets=10 --secure --range=50000:52000",
      watch: false,
    },
  ],
};
