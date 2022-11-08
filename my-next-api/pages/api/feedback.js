import fs from "fs";
import path from "path";

export function loadFilePath() {
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  return filePath;
}
export function loadFileData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method == "POST") {
    const newFeedBack = {
      id: req.body.enteredId,
      email: req.body.enteredEmail,
      text: req.body.enteredText,
      date: new Date().toISOString(),
    };

    const filePath = loadFilePath();
    const data = loadFileData(filePath);
    data.push(newFeedBack);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedBack });
  } else {
    const filePath = loadFilePath();
    const data = loadFileData(filePath);
    res.status(400).json({ message: "nope!", feedback: data });
  }
}

export default handler;
