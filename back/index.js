import { app } from "./src/app";
import "dotenv/config";

// .env로 적용 안돼서 config 파일로 대체
const PORT = process.env.SERVER_PORT || 5001;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
