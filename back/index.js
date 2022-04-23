// import "dotenv/config";
import { app } from "./src/app";
import { SERVER_PORT } from "./src/config";

// .env로 적용 안돼서 config 파일로 대체
const PORT = process.env.SERVER_PORT || 5001;
// const PORT = 5002;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
