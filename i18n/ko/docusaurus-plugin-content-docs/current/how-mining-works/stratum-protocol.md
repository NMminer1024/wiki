---
sidebar_position: 2
title: Stratum Protocol
---

# Stratum Protocol

**Stratum v1**은 Bitcoin 마이닝 풀이 마이너와 통신하는 데 사용하는 사실상의 프로토콜입니다. NMMiner는 Stratum v1 클라이언트입니다.

> 이 페이지는 모든 풀이 이해하는 **공개적이고 잘 알려진** Stratum 메시지만 문서화합니다. 풀별 확장 및 내부 구현 세부 사항은 범위를 벗어납니다.

## 연결

- **전송**: TCP, 또는 SSL 풀의 경우 TLS로 래핑된 TCP.
- **주소 체계**:
  - `stratum+tcp://host:port` — 일반 TCP.
  - `stratum+ssl://host:port` — TLS.
- **워커 신원**: 지갑 주소 뒤에 선택적으로 `.workerName`을 붙임, 예: `bc1q....workerName`.

마이너는 전체 세션 동안 소켓을 열린 상태로 유지합니다. 풀이 연결을 끊으면 NMMiner가 자동으로 재연결합니다.

## 메시지 흐름
