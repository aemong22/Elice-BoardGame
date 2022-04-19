import { app } from "./src/app";

console.log(process.env.SERVER_PORT);
const PORT = process.env.SERVER_PORT || 5001;

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});
