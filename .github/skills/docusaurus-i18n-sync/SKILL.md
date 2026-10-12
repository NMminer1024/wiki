---
name: docusaurus-i18n-sync
description: '同步和维护 Docusaurus 多语言文档（i18n）与英文源文档的一致性。Use when 需要检查/对齐各语言翻译版本、修复过时或未完成的翻译、验证关键事实在各语言间一致、或将 Docusaurus 站点部署到 GitHub Pages 时遇到 SSH/网络/部署失败问题。关键词：Docusaurus, i18n, 翻译, 多语言, 文档同步, 一致性, 翻译对齐, 过时翻译, 未完成翻译, GitHub Pages 部署, SSH 443, 部署失败, docusaurus deploy.'
---

# Docusaurus i18n 同步与部署

以英文源文档为唯一基准，维护 `i18n/<lang>/` 各语言翻译的一致性，并安全部署到 GitHub Pages。

## 何时使用

- 用户问"各语言版本描述是否一致 / 对比各语言 / 以英文为准翻译 / 对齐翻译"
- 需要修复过时翻译（内容与英文矛盾）或未完成的翻译（正文在某个小节截断）
- 部署 Docusaurus 站点失败（SSH 认证、网络端口、gh-pages 分支缺失等）

## 目录结构约定

- 英文基准：`docs/`（40 个文件，7 个分类：`intro`、`api/`、`getting-started/`、`hardware/`、`how-mining-works/`、`reference/`、`user-guide/`）
- 各语言翻译：`i18n/<lang>/docusaurus-plugin-content-docs/current/<相对路径>`
- 语言：`de es ja ko pt-BR ru zh`（`en` 是 defaultLocale，无独立 i18n 目录）

## 同步流程

1. **确定基准**：英文 `docs/` 是唯一事实源。中文版（`zh`）通常已与英文同步，可作第二参考。
2. **排查差异**：逐一对比每语言每文件的 frontmatter、章节结构、关键事实、链接。两种典型问题：
   - **过时翻译**：整份是旧的独立翻译，事实与英文矛盾（如旧的 License 模型、旧热点名）。
   - **未完成翻译**：frontmatter 和开头已翻，但正文在某 `##`/`###` 标题处戛然而止，主体（JSON schema、表格、代码块、mermaid 图）缺失。
3. **修复**：以英文为准整体重译或补齐。保留各语言已有的标题翻译风格（不要用机器翻译推翻已有措辞）。
4. **改前备份**：改每个文件前 `Copy-Item xxx.md xxx.md.bak`（`fix-verification-rule` 要求闭环验证 + 可回退）。
5. **交叉验证**（见下）。
6. **构建 + 部署**（见下）。

## 验证方法（交叉检查）

- **截断检测**：翻译文件行数 < 英文版 70%（且英文 ≥ 20 行）→ 判定截断。用 PowerShell 遍历所有语言 × 文件。
- **旧错误事实零残留**：grep 旧错误词（如 `NMMiner-Setup`、`kostenlos`、`ASIC-Chip`、商业矿池名），应只命中 `.bak`，正式文件零命中。
- **关键事实 7 语言覆盖**：对每个关键事实 grep 7 语言对应文件，确认全部命中。

## 本项目关键事实清单（对照基准）

同步时逐条核对，任何语言违反即视为不一致：

1. **License 付费**：每台设备需付费 License（非"免费+可选提速"）。
2. **热点名**：激活/配置用 `nmap-2.4g`；初次配置的 WiFi SSID 用 `NMTech-2.4G`。**不是** `NMMiner-Setup`。
3. **商业矿池立场**：Braiins/F2Pool/Antpool 等大池应被"警告会拒 share"，**不是**推荐。
4. **Failover**：主池恢复后 **~10 秒自动切回**（v1.7.05 起），不是"不会自动切回"。
5. **`/api/system/info` schema**：用 `identity.hwModel/rssi`、`stratum.url/user`、`temps.vcore/asic`、`storage.fsTotal/fsUsed` 等字段（不是旧的 `chipModel/mac/totalKB`）。
6. **板卡算力**：精确值（如 D0 = 1035.9 KH/s、S3 = 400.9、C3 = 396.9、C5 = 150.2），**不是**"标准/授权"两档。
7. **Ladder 隐私**：只报钱包前 4 + 后 4 字符，**不上报** IP/hostname；URL 是 `ladder.nmminer.com`。
8. **固件升级**：升级后设置保留、无需重新激活授权。

## 部署踩坑

本项目用 **GitHub Actions 部署**（`.github/workflows/deploy.yml`，push 到 `main` 触发构建 + `actions/deploy-pages`）。**不要用 `docusaurus deploy`**——它假定 gh-pages 分支存在，而本仓库只有 `main`。

若 SSH push 失败，按序排查：

1. **密钥别名不匹配**：`docusaurus deploy` / 某些工具硬编码 `git@github.com`，而本机 remote 用别名（如 `github-nmminer1024`）。用 insteadOf 规则复用正确密钥：
   `git config --global url."git@github-nmminer1024:NMminer1024/".insteadOf "git@github.com:NMminer1024/"`
2. **22 端口被墙**：`github.com:22` 在 SSH 握手被 RST（GFW 典型，`Connection closed by ... port 22`）。改 `~/.ssh/config` 对应 Host 走 GitHub 的 SSH-over-HTTPS 端点：
   ```
   Host github-nmminer1024
       HostName ssh.github.com
       User git
       Port 443
       IdentityFile ~/.ssh/id_rsa_nmminer1024
   ```
   改前先备份 `~/.ssh/config`。验证：`ssh -T -o BatchMode=yes git@github-nmminer1024` 应输出 `Hi <user>! You've successfully authenticated`。

## 上线步骤

```powershell
npm run build        # 本地先验证 8 语言全部编译通过
git add -u           # 只暂存已跟踪 .md 的修改，不纳入 .bak
git commit -m "docs(i18n): sync ... with English source"
git push origin main # 触发 GitHub Actions 自动部署到 wiki.nmminer.com
```

验证：`git ls-remote origin main` 与 `git rev-parse HEAD` 应一致；部署结果看 GitHub 仓库 Actions 页。

## 注意事项

- `.bak` 备份默认**不提交**（未跟踪），确认线上无误后再决定清理或加入 `.gitignore`。
- 清理命令：`Get-ChildItem -Path "i18n" -Recurse -Filter "*.bak" | Remove-Item`
- `build/` 已 gitignore，构建产物不上传仓库。
