import logger from "../utils/logger";

const testLogs = async (req, res) => {
  try {
    logger.error("esto es un error");
    logger.warn("esto es un warn");
    logger.info("esto es un info");
    logger.http("esto es un http");
    logger.verbose("esto es un verbose");
    logger.debug("esto es un debug");
    logger.silly("esto es un silly");
    res.send({ message: "Logs test" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { testLogs };
