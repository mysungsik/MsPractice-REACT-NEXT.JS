import { loadFileData, loadFilePath } from "../api/feedback";

function handler(req, res) {
  const filePath = loadFilePath();
  const fileData = loadFileData(filePath);
  const feedbackId = req.query.feedbackid;
  const filteredData = fileData.find((data) => data.id === feedbackId);

  res.status(200).json({
    feedback: filteredData,
  });
}

export default handler;
