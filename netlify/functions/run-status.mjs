import { getStore } from "@netlify/blobs";

const STORE = "finance-agent-workshop-jobs";

export default async (request) => {
  const jobId = new URL(request.url).searchParams.get("job");
  if (!jobId) return new Response(JSON.stringify({ ok: false, error: "缺少 job" }), { status: 400, headers: { "content-type": "application/json" } });
  const item = await getStore(STORE).get(jobId, { type: "json" });
  if (!item) return new Response(JSON.stringify({ ok: true, status: "pending" }), { headers: { "content-type": "application/json" } });
  return new Response(JSON.stringify({ ok: true, ...item }), { headers: { "content-type": "application/json", "cache-control": "no-store" } });
};
