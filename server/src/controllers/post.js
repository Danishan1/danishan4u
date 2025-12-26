import { getBlogListService, getIdBySlug, getPostBySlug } from "#services";
import { sendResponse } from "#utils";

export const getPost = (req, res) => {
  const { slug } = req.params;
  const finalSlug = slug.split("__").join("/");
  const id = getIdBySlug(finalSlug);

  if (id === null)
    sendResponse({ res, success: false, code: 404, error: "Invalid Route" });

  try {
    const content = getPostBySlug(id);
    sendResponse({ res, data: content });
  } catch (err) {
    sendResponse({ res, success: false, code: 404, error: err });
  }
};
