// 트랙 식별자(API 값) → 한국어 레이블
const TRACK_LABELS = {
  BACKEND: '백엔드',
  FRONTEND: '프론트엔드',
  MOBILE: '모바일',
};

// 미션 슬러그(API 값) → 한국어 이름 + 아이콘
const MISSION_META = {
  roomescape: { name: '방탈출 사용자 예약', icon: 'fa-door-open' },
  shopping: { name: '쇼핑 주문', icon: 'fa-cart-shopping' },
  payments: { name: '페이먼츠', icon: 'fa-credit-card' },
};

// API 미응답 시 사용할 폴백 트랙 목록
export const FALLBACK_TRACKS = ['BACKEND', 'FRONTEND', 'MOBILE'].map(
  (track) => ({ track, documentCount: 0 }),
);

export const trackLabel = (track) => TRACK_LABELS[track] ?? track;
export const missionDisplayName = (slug) => MISSION_META[slug]?.name ?? slug;
export const missionIcon = (slug) => MISSION_META[slug]?.icon ?? 'fa-code';
