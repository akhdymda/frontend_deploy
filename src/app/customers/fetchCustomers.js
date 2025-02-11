export default async function fetchCustomers() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "/allcustomers", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch customers");
  }
  return res.json();
}
// API＿ENDPOINTが設定されていないため、.envファイルをルートディレクトリ（frontend）に作成。API＿ENDPOINTにFastAPIのローカルアドレス（"http://127.0.0.1:8000"）を代入する