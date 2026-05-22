const R = {
  gump: { name: '검프', avatar: 'https://vinsign.app/resources/avatars/avatar-1.png' },
  brown: { name: '브라운', avatar: 'https://vinsign.app/resources/avatars/avatar-2.png' },
  neo: { name: '네오', avatar: 'https://vinsign.app/resources/avatars/avatar-3.png' },
  matt: { name: '맷', avatar: 'https://vinsign.app/resources/avatars/avatar-4.png' },
  joy: { name: '조이', avatar: 'https://vinsign.app/resources/avatars/avatar-5.png' },
  sara: { name: '사라', avatar: 'https://vinsign.app/resources/avatars/avatar-6.png' },
};

export const FIELDS = [
  { id: 'backend', name: '백엔드' },
  { id: 'frontend', name: '프론트엔드' },
  { id: 'mobile', name: '모바일' },
];

export const MISSIONS = [
  { id: 'escape', name: '방탈출 사용자 예약', icon: 'fa-door-open' },
  { id: 'shopping', name: '쇼핑 주문', icon: 'fa-cart-shopping' },
  { id: 'payments', name: '페이먼츠', icon: 'fa-credit-card' },
];

export const PR_REVIEWS = [
  // ── 백엔드 / 방탈출 ──────────────────────────────────────────────────
  {
    id: 1,
    field: 'backend',
    mission: 'escape',
    missionName: '방탈출 사용자 예약',
    reviewers: [R.gump, R.brown],
    date: '2026.03.15',
    prUrl: 'https://github.com',
    content:
      '사용자 정의 예외를 만들 때는 단순히 에러 메시지만 전달하는 것이 아니라, 발생한 컨텍스트 정보를 충분히 담는 것이 중요합니다. 런타임 예외를 상속받아 불필요한 try-catch를 줄이고, GlobalExceptionHandler를 통해 일관된 응답 형식을 유지하는 방향을 추천드려요.',
  },
  {
    id: 2,
    field: 'backend',
    mission: 'escape',
    missionName: '방탈출 사용자 예약',
    reviewers: [R.neo],
    date: '2026.03.10',
    prUrl: 'https://github.com',
    content:
      '예약 서비스에서 트랜잭션 경계를 명확히 설정하는 것이 핵심입니다. @Transactional(readOnly = true)를 읽기 전용 메서드에 기본으로 적용하고, 쓰기 작업에만 @Transactional을 명시하면 불필요한 dirty checking을 방지할 수 있어요.',
  },
  {
    id: 3,
    field: 'backend',
    mission: 'escape',
    missionName: '방탈출 사용자 예약',
    reviewers: [R.joy, R.sara],
    date: '2026.03.05',
    prUrl: 'https://github.com',
    content:
      '도메인 객체의 불변성을 보장하려면 setter를 제거하고 생성자나 정적 팩토리 메서드를 통해서만 객체를 생성하도록 해야 합니다. 이렇게 하면 객체 상태 변화를 추적하기 쉽고, 예기치 않은 사이드 이펙트를 방지할 수 있어요.',
  },
  {
    id: 4,
    field: 'backend',
    mission: 'escape',
    missionName: '방탈출 사용자 예약',
    reviewers: [R.matt],
    date: '2026.03.01',
    prUrl: 'https://github.com',
    content:
      'REST API 설계 시 예약 상태 변경은 PATCH를 활용하고, 리소스 중심의 URL 설계를 유지하는 것이 중요합니다. 예약 취소가 DELETE인지 PATCH /reservations/{id}/cancel인지 팀과 명확한 기준을 세우고 시작하세요.',
  },

  // ── 백엔드 / 쇼핑 ───────────────────────────────────────────────────
  {
    id: 5,
    field: 'backend',
    mission: 'shopping',
    missionName: '쇼핑 주문',
    reviewers: [R.joy],
    date: '2026.02.28',
    prUrl: 'https://github.com',
    content:
      '비즈니스 로직에서의 예외 처리는 도메인 언어로 표현되어야 합니다. 예를 들어 DataNotFoundException 보다는 OrderNotFoundException이 훨씬 명확하죠. 로깅 시에는 stack trace를 모두 남기기보다 필요한 정보만 필터링해서 남기는 것이 좋습니다.',
  },
  {
    id: 6,
    field: 'backend',
    mission: 'shopping',
    missionName: '쇼핑 주문',
    reviewers: [R.brown],
    date: '2026.02.20',
    prUrl: 'https://github.com',
    content:
      '주문 상태 전이를 관리할 때는 유효하지 않은 상태 전이를 도메인 객체 내부에서 검증하는 것이 좋습니다. PENDING에서 CANCELLED로 직접 가는 것이 허용되는지 등을 명시적으로 정의해두면 협업 시 실수를 방지할 수 있어요.',
  },
  {
    id: 7,
    field: 'backend',
    mission: 'shopping',
    missionName: '쇼핑 주문',
    reviewers: [R.neo, R.matt],
    date: '2026.02.15',
    prUrl: 'https://github.com',
    content:
      'JPA를 사용할 때 N+1 문제는 반드시 확인해야 합니다. 연관된 엔티티를 조회할 때 fetch join이나 @EntityGraph를 활용하면 쿼리 수를 효과적으로 줄일 수 있어요. 특히 주문 목록 조회처럼 다량의 데이터를 다룰 때는 더욱 중요합니다.',
  },

  // ── 백엔드 / 페이먼츠 ───────────────────────────────────────────────
  {
    id: 8,
    field: 'backend',
    mission: 'payments',
    missionName: '페이먼츠',
    reviewers: [R.neo, R.sara, R.matt],
    date: '2026.01.12',
    prUrl: 'https://github.com',
    content:
      '결제 도메인에서는 예외가 발생했을 때 데이터의 원자성(Atomicity)을 보장하는 것이 최우선입니다. 트랜잭션 롤백 전략을 명확히 하고, 외부 API 연동 실패 시의 재시도 로직이나 서킷 브레이커 도입을 고려해보는 것이 좋겠네요.',
  },
  {
    id: 9,
    field: 'backend',
    mission: 'payments',
    missionName: '페이먼츠',
    reviewers: [R.gump],
    date: '2026.01.08',
    prUrl: 'https://github.com',
    content:
      '결제 금액 검증은 클라이언트에서 받은 값을 그대로 신뢰하지 말고, 반드시 서버에서 실제 주문 금액과 재검증해야 합니다. 멱등성 키를 활용해 중복 결제를 방지하고, 결제 완료 후에는 이벤트를 발행해 다른 도메인과의 결합도를 낮추세요.',
  },
  {
    id: 10,
    field: 'backend',
    mission: 'payments',
    missionName: '페이먼츠',
    reviewers: [R.brown, R.joy],
    date: '2026.01.05',
    prUrl: 'https://github.com',
    content:
      '외부 결제 API와의 통신 실패 시 어디까지 보상 트랜잭션을 처리할지 설계해야 합니다. Saga 패턴을 도입하거나, 최소한 실패 케이스에 대한 알림과 수동 처리 프로세스를 문서화해두는 것이 좋아요.',
  },

  // ── 프론트엔드 / 방탈출 ─────────────────────────────────────────────
  {
    id: 11,
    field: 'frontend',
    mission: 'escape',
    missionName: '방탈출 사용자 예약',
    reviewers: [R.gump],
    date: '2026.03.18',
    prUrl: 'https://github.com',
    content:
      '컴포넌트를 분리할 때는 단순히 UI 구조만 보는 것이 아니라, 관심사의 분리 관점에서 접근해야 합니다. 하나의 컴포넌트가 너무 많은 책임을 가지면 재사용성이 떨어지고 테스트가 어려워져요. Props의 수가 5개를 넘어간다면 분리를 고려해볼 시점입니다.',
  },
  {
    id: 12,
    field: 'frontend',
    mission: 'escape',
    missionName: '방탈출 사용자 예약',
    reviewers: [R.joy, R.matt],
    date: '2026.03.01',
    prUrl: 'https://github.com',
    content:
      '비동기 처리 시 에러 핸들링을 빠뜨리는 경우가 많습니다. try-catch만으로 처리하기보다는 Error Boundary를 활용해 컴포넌트 레벨에서 에러를 잡고, 사용자에게 의미 있는 피드백을 제공하는 것이 중요합니다. 로딩 상태와 에러 상태를 명확히 UI로 표현해주세요.',
  },

  // ── 프론트엔드 / 쇼핑 ───────────────────────────────────────────────
  {
    id: 13,
    field: 'frontend',
    mission: 'shopping',
    missionName: '쇼핑 주문',
    reviewers: [R.brown, R.sara],
    date: '2026.02.22',
    prUrl: 'https://github.com',
    content:
      '전역 상태 관리는 정말 필요한 경우에만 사용하는 것이 좋습니다. 컴포넌트 간 공유가 필요한 데이터인지, 단순히 prop drilling이 불편해서 전역으로 올린 것인지 구분해야 해요. 서버 상태는 React Query 같은 전용 라이브러리로 분리하면 관리가 훨씬 수월합니다.',
  },
  {
    id: 14,
    field: 'frontend',
    mission: 'shopping',
    missionName: '쇼핑 주문',
    reviewers: [R.neo],
    date: '2026.02.10',
    prUrl: 'https://github.com',
    content:
      '장바구니처럼 사용자의 로컬 상태가 중요한 기능은 새로고침 시에도 데이터가 유지되어야 합니다. localStorage나 sessionStorage를 활용하되, 민감한 데이터는 저장하지 않도록 주의하고, 스토리지 접근 실패 케이스도 반드시 처리해두세요.',
  },

  // ── 프론트엔드 / 페이먼츠 ───────────────────────────────────────────
  {
    id: 15,
    field: 'frontend',
    mission: 'payments',
    missionName: '페이먼츠',
    reviewers: [R.neo],
    date: '2026.01.15',
    prUrl: 'https://github.com',
    content:
      '접근성(Accessibility)은 나중에 추가하는 것이 아니라 처음부터 고려해야 합니다. 결제 폼에서 aria-label과 aria-describedby를 올바르게 사용하면 스크린리더 사용자도 불편함 없이 서비스를 이용할 수 있어요. 키보드 네비게이션도 반드시 테스트해보세요.',
  },

  // ── 모바일 / 방탈출 ─────────────────────────────────────────────────
  {
    id: 16,
    field: 'mobile',
    mission: 'escape',
    missionName: '방탈출 사용자 예약',
    reviewers: [R.matt],
    date: '2026.03.20',
    prUrl: 'https://github.com',
    content:
      'Activity/Fragment의 생명주기를 정확히 이해하고, 생명주기에 맞는 리소스 초기화와 해제를 해야 합니다. 특히 onStop과 onDestroy에서 네트워크 요청 취소, 리스너 해제를 하지 않으면 메모리 릭이 발생하기 쉬워요. ViewModel을 활용해 생명주기와 독립적으로 데이터를 관리하세요.',
  },

  // ── 모바일 / 쇼핑 ───────────────────────────────────────────────────
  {
    id: 17,
    field: 'mobile',
    mission: 'shopping',
    missionName: '쇼핑 주문',
    reviewers: [R.joy, R.sara],
    date: '2026.02.25',
    prUrl: 'https://github.com',
    content:
      'Coroutine을 사용할 때 적절한 Dispatcher 선택이 중요합니다. IO 작업에 Dispatchers.IO, UI 업데이트에 Dispatchers.Main을 사용하고, CPU 집약적인 작업에는 Dispatchers.Default를 활용하세요. viewModelScope나 lifecycleScope를 활용하면 메모리 릭을 방지할 수 있습니다.',
  },

  // ── 모바일 / 페이먼츠 ───────────────────────────────────────────────
  {
    id: 18,
    field: 'mobile',
    mission: 'payments',
    missionName: '페이먼츠',
    reviewers: [R.gump, R.neo],
    date: '2026.01.18',
    prUrl: 'https://github.com',
    content:
      '결제 화면에서 백그라운드로 전환될 때 민감한 정보가 스크린샷에 노출되지 않도록 FLAG_SECURE를 설정해야 합니다. 결제 중 화면 회전이나 앱 종료 시 상태를 안전하게 복구하는 로직이 필요하고, 사용자가 실수로 뒤로가기를 눌렀을 때의 UX도 신중하게 설계하세요.',
  },
];
