# 从 Chat 到 Agent：金融教师 AI Agent 入门

这个站点有两个入口：

- [`index.html`](index.html)：先演示 Product，再用三个选项卡展示 **Product、Approaches 对比、5 个 Evals**。
- [`handout.html`](handout.html)：给学习者阅读的跟随式讲义；学习者在 OpenCode 中打开工作文件夹，连接大模型，复刻文件版 Product，最后可选做 UI 网页。
- [`PROMPTS.md`](PROMPTS.md)：需要跟着 OpenCode 动手时使用的提示词附录。
- [`handout/SETUP.md`](handout/SETUP.md)：打开工作文件夹、连接模型和保存凭据的准备步骤。
- [`PUBLIC_DATA_GUIDE.md`](PUBLIC_DATA_GUIDE.md)：主线完成后的真实数据选读材料。

主线只使用明确标注的本地教学输入，不联网，也不把示例数字当成真实公司事实。真实 Hithink/CNINFO 材料、候选 PPT、四 Agent workflow、每天北京时间 02:00 的查新和结果页属于进阶扩展。

真实案例固定比较比亚迪（`002594.SZ`）2026H1 与 2025H1。H1 是截至 6 月 30 日的六个月累计数；没有原文或共识输入时，不写单季 Q2、beat/miss、earnings surprise、确定性原因或投资建议。候选稿与已批准稿分开保存，冲突时停下并保留人工复核项。

本仓库的预览由 Netlify 提供；本 PR 不自动合并到生产分支。

网站打开时先展示已冻结的本地 Qwen3.5-4B 运行结果。需要重跑时，在 Evals 工具栏临时粘贴自己的 `SILICONFLOW_API_KEY`，Key 只随本次请求发送，不写入浏览器存储、运行收据或 Netlify Blob。
