import { getPageSEO } from "#services";
import { sendResponse } from "#utils";

export const getSeoPageInfo = async (req, res) => {
  try {
    const { page } = req.params;
    
    const content = getPageSEO(page);

    sendResponse({ res, data: content });
  } catch (err) {
    sendResponse({ res, success: false, data: content, code: 404, error: err });
  }
};
