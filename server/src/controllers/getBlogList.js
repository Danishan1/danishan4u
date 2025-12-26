import { getBlogListService } from "#services";
import { sendResponse } from "#utils";

export const getBlogList = async (req, res) => {
  try {
    const content = await getBlogListService();
    sendResponse({ res, data: content });
  } catch (err) {
    sendResponse({ res, success: false, data: content, code: 404, error: err });
  }
};
