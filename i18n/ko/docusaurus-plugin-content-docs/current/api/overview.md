---
sidebar_position: 1
title: API Overview
---

# API Overview

모든 NMMiner 기기는 **포트 80**에서 HTTP 서버를 실행하며, 완전한 REST 스타일 API를 노출합니다. 동일한 API가 다음에서 사용됩니다:

- 내장 [NM Monitor](../user-guide/nm-monitor.md) 브라우저 UI.
- [Swarm](../user-guide/swarm.md) 애그리게이터.
- 상태를 읽거나 설정을 적용하려는 모든 사용자 — 여러분, 대시보드, Grafana 플러그인, Python 스크립트 등.

> ✅ 이 페이지는 **공개 계약**을 문서화합니다: 경로, 메서드, 요청 본문, 응답 본문, 상태 코드.
> ❌ 구현을 문서화하지 **않습니다**. 기기를 HTTP를 통해 접근 가능한 블랙박스로 취급하십시오.

## 기본 URL
