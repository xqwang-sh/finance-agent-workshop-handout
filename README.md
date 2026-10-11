# 从Chat到Agent：金融智能体搭建入门

这是一个面向金融教师的 110–120 分钟现场实操讲义。课程用一页“业绩简报更新器”把 Agent 的核心方法拆成产品、做法和评测三件事，再把同一接口扩展到真实 A 股数据。

## 课程结构

主线先在 `byd_earnings` 文件夹中完成一个本地、可解释、可评测的最小闭环：

1. 定义使用者、输入、输出和完成标准；
2. 用明确标注的教学输入跑一次 Chat 基线；
3. 运行五个小评测：数字、累计口径、单位、来源冲突、能力边界；
4. 比较一次 Chat、固定 workflow、Generate–Evaluate–Repair；
5. 交付一页候选简报和人工复核清单。

主线完成后，进阶区沿同一产品接口继续：真实 Hithink/CNINFO 材料、5 页候选 PPT、四 Agent 加 Skill 的 workflow、每天北京时间 02:00 查新和本地结果页。

## 入口文件

- [HTML 讲义](金融教师AI-Agent实操讲义.html)
- [主线与进阶提示词](PROMPTS.md)
- [讲座设计](LECTURE_DESIGN.md)
- [讲师流程](INSTRUCTOR_RUN_OF_SHOW.md)
- [真实数据指南](PUBLIC_DATA_GUIDE.md)
- `source/lesson.json`：唯一的学习内容来源
- `source/build_handout.py`：生成 HTML、`PROMPTS.md` 和 `source/content.json`

## 构建

```bash
python3 source/build_handout.py
```

主线提示词不要求联网或凭据。进阶真实数据时，个人 Hithink Key 必须保存在项目外的标准系统凭据位置；提示词、日志、截图和压缩包都不能包含 Key。

## 进阶金融边界

真实案例是比亚迪（`002594.SZ`）2026H1，对比 2025H1。H1 表示截至 6 月 30 日的六个月累计数；不把它写成单独 Q2。收入、营业成本、营业利润、归母净利润和基本每股收益固定核对，现金流、资产结构、市场反应、估值、评级、目标价和交易建议留在范围之外。没有分析师共识输入时，不写 beat/miss 或 earnings surprise。

候选 PPT 和已批准 PPT 分开保存。`verification_receipt.json` 通过后才生成候选稿，人工逐页确认后才允许批准。自动化只处理明确观察名单，事件材料独立保存，结果页保留失败步骤和上一次成功结果。

## 检查

```bash
python3 /Users/xqwang/.codex/skills/kami/scripts/build.py --check-content \
  "$(pwd)/source/content.json" "$(pwd)/金融教师AI-Agent实操讲义.html"
python3 /Users/xqwang/.codex/skills/kami/scripts/build.py --check-placeholders \
  "$(pwd)/金融教师AI-Agent实操讲义.html"
python3 qa/check_contracts.py
python3 -m unittest handout/workflow/test_workflow.py -v
python3 -m unittest handout/workflow/test_agent_workflow.py -v
```

浏览器验收覆盖 1280、375 和 320 像素，并检查无横向溢出、无外部运行时请求。真实数据和自动化的详细合同仍以 `AGENTS.md` 与 `handout/` 中的固定测试为准。
