import broadcast from "./broadcast.png";
import costcalc from "./costcalc.png";
import creative from "./creative.png";
import dev from "./dev.png";
import indiabills from "./indiabills.png";
import indiabillsweb from "./indiabillsweb.png";
import itsrighttime from "./itsrighttime.png";
import jkc from "./jkc.png";
import mailserver from "./mailserver.png";
import portfolio from "./portfolio.png";
import server from "./server.png";
import socketio from "./socketio.png";
import uicomponent from "./uicomponent.png";
import utils from "./utils.png";
import casgampro from "./casgampro.png";

const images = {
  broadcast,
  costcalc,
  creative,
  dev,
  indiabills,
  indiabillsweb,
  itsrighttime,
  jkc,
  mailserver,
  portfolio,
  server,
  socketio,
  uicomponent,
  utils,
  casgampro,
};

export const getImages = (name) => {
  return images[name] || null;
};
