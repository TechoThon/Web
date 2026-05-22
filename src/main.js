import './style.css';
import { PR_REVIEWS, MISSIONS, FIELDS } from './data.js';

const PAGE_SIZE = 3;

const state = {
  field: 'backend',
  mission: null,
  search: '',
  displayCount: PAGE_SIZE,
};

// ─── 초기화 ─────────────────────────────────────────────────────────────────

function init() {
  document.getElementById('app').innerHTML = buildLayout();
  attachEventListeners();
  renderResults();
}

// ─── 레이아웃 ────────────────────────────────────────────────────────────────

function buildLayout() {
  return `
    <div class="w-[1440px] min-h-screen bg-white text-[#1A1A1A] mx-auto">
      ${buildHeader()}
      <main class="px-[80px] py-[60px]">
        ${buildSearchSection()}
        ${buildFilterSection()}
        <section id="results-section">
          <div class="flex items-center justify-between mb-8">
            <h2 id="results-title" class="text-[24px] font-bold"></h2>
            <div class="flex items-center gap-2 text-[14px] text-[#666666]">
              <span class="font-medium text-black">최신순</span>
              <span class="text-[#EEEEEE]">|</span>
              <span>정확도순</span>
            </div>
          </div>
          <div id="results-grid" class="grid grid-cols-1 gap-6"></div>
          <div class="mt-12 flex justify-center">
            <button
              id="load-more-btn"
              class="px-10 py-4 border border-[#EEEEEE] rounded-2xl font-semibold text-[#666666] hover:bg-[#F5F5F7] transition-all hidden"
            >
              결과 더보기
            </button>
          </div>
        </section>
      </main>
      ${buildFooter()}
    </div>
  `;
}

function buildHeader() {
  return `
    <header class="sticky top-0 z-50 w-full h-[80px] bg-white/80 backdrop-blur-md border-b border-[#EEEEEE] flex items-center justify-between px-[80px]">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
          <i class="fa-solid fa-code-pull-request text-white text-xl"></i>
        </div>
        <span class="text-xl font-bold tracking-tight">PR Insight</span>
      </div>
      <nav class="flex items-center gap-8">
        <a href="#" class="text-[15px] font-medium text-[#1A1A1A]">홈</a>
        <a href="#" class="text-[15px] font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors">탐색</a>
        <a href="#" class="text-[15px] font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors">내 북마크</a>
        <div class="w-10 h-10 rounded-full overflow-hidden border border-[#EEEEEE]">
          <img src="https://vinsign.app/resources/avatars/avatar-1.png" alt="사용자 프로필" class="w-full h-full object-cover">
        </div>
      </nav>
    </header>
  `;
}

function buildSearchSection() {
  return `
    <section class="mb-[64px]">
      <h1 class="text-[42px] font-bold mb-4 leading-tight">리뷰어들은 이 질문에<br>어떻게 답변했을까요?</h1>
      <p class="text-[18px] text-[#666666] mb-10">키워드를 입력하여 수천 개의 PR 속에 담긴 리뷰어의 인사이트를 찾아보세요.</p>
      <div class="relative w-full max-w-[800px]">
        <i class="fa-solid fa-magnifying-glass absolute left-6 top-1/2 -translate-y-1/2 text-[#999999] text-xl"></i>
        <input
          id="search-input"
          type="text"
          placeholder="궁금한 키워드를 입력하세요 (예: 예외 처리, 트랜잭션, 컴포넌트 분리)"
          class="w-full h-[72px] bg-[#F5F5F7] rounded-2xl pl-[64px] pr-6 text-[18px] focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
        >
      </div>
    </section>
  `;
}

function buildFilterSection() {
  return `
    <section class="grid grid-cols-2 gap-12 mb-[80px]">
      <div>
        <h3 class="text-[14px] font-bold text-[#999999] uppercase tracking-wider mb-4">분야 선택</h3>
        <div id="field-buttons" class="flex gap-3">${buildFieldButtons()}</div>
      </div>
      <div>
        <h3 class="text-[14px] font-bold text-[#999999] uppercase tracking-wider mb-4">질문할 미션 선택</h3>
        <div id="mission-buttons" class="flex gap-3">${buildMissionButtons()}</div>
      </div>
    </section>
  `;
}

function buildFieldButtons() {
  return FIELDS.map(({ id, name }) => {
    const active = state.field === id;
    return `<button
      data-field="${id}"
      class="field-btn px-8 py-4 rounded-xl font-semibold text-[16px] transition-all ${
        active
          ? 'bg-black text-white'
          : 'bg-white border border-[#EEEEEE] text-[#666666] hover:bg-[#F5F5F7]'
      }"
    >${name}</button>`;
  }).join('');
}

function buildMissionButtons() {
  return MISSIONS.map(({ id, name, icon }) => {
    const active = state.mission === id;
    return `<button
      data-mission="${id}"
      class="mission-btn px-6 py-4 rounded-xl font-semibold text-[16px] flex items-center gap-2 transition-all ${
        active
          ? 'bg-[#F5F5F7] border border-transparent text-[#1A1A1A]'
          : 'bg-white border border-[#EEEEEE] text-[#666666] hover:bg-[#F5F5F7]'
      }"
    >
      <i class="fa-solid ${icon} text-[14px]"></i>
      ${name}
    </button>`;
  }).join('');
}

function buildFooter() {
  return `
    <footer class="mt-[100px] border-t border-[#EEEEEE] px-[80px] py-[60px] bg-white">
      <div class="flex justify-between items-start">
        <div>
          <div class="flex items-center gap-2 mb-6">
            <div class="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-code-pull-request text-white text-sm"></i>
            </div>
            <span class="text-lg font-bold">PR Insight</span>
          </div>
          <p class="text-[#999999] text-[14px]">© 2026 PR Insight. 모든 리뷰 데이터는 공개된 GitHub PR을 기반으로 합니다.</p>
        </div>
        <div class="flex gap-16">
          <div>
            <h4 class="font-bold mb-4">서비스</h4>
            <ul class="text-[#666666] text-[14px] space-y-2">
              <li><a href="#" class="hover:text-[#1A1A1A] transition-colors">미션 목록</a></li>
              <li><a href="#" class="hover:text-[#1A1A1A] transition-colors">리뷰어 랭킹</a></li>
              <li><a href="#" class="hover:text-[#1A1A1A] transition-colors">인사이트 리포트</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">고객지원</h4>
            <ul class="text-[#666666] text-[14px] space-y-2">
              <li><a href="#" class="hover:text-[#1A1A1A] transition-colors">이용안내</a></li>
              <li><a href="#" class="hover:text-[#1A1A1A] transition-colors">문의하기</a></li>
              <li><a href="#" class="hover:text-[#1A1A1A] transition-colors">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ─── 필터링 & 렌더링 ────────────────────────────────────────────────────────

function getFilteredReviews() {
  const keyword = state.search.toLowerCase();
  return PR_REVIEWS.filter((review) => {
    if (review.field !== state.field) return false;
    if (state.mission && review.mission !== state.mission) return false;
    if (keyword && !review.content.toLowerCase().includes(keyword)) return false;
    return true;
  });
}

function highlightKeyword(text, keyword) {
  if (!keyword) return text;
  const safePattern = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(
    new RegExp(`(${safePattern})`, 'gi'),
    '<mark class="bg-yellow-100 font-medium rounded px-0.5">$1</mark>',
  );
}

function buildCard(review) {
  const avatars = review.reviewers
    .map(
      (r) =>
        `<img src="${r.avatar}" class="w-12 h-12 rounded-full border-2 border-white ring-1 ring-gray-100" alt="${r.name}">`,
    )
    .join('');

  const nameList = review.reviewers.map((r) => `'${r.name}'`).join(', ');
  const content = highlightKeyword(review.content, state.search);

  return `
    <div class="group p-8 bg-white border border-[#EEEEEE] rounded-[24px] hover:border-black hover:shadow-xl transition-all duration-300">
      <div class="flex items-start justify-between mb-6">
        <div class="flex items-center gap-4">
          <div class="flex -space-x-3">
            ${avatars}
          </div>
          <div>
            <p class="text-[16px] text-[#1A1A1A]">
              이 질문에 대해 <span class="font-bold">${nameList}</span>님은 다음처럼 대답했어요
            </p>
            <p class="text-[13px] text-[#999999] mt-0.5">${review.date} • ${review.missionName} 미션</p>
          </div>
        </div>
        <a
          href="${review.prUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F5F7] text-[14px] font-semibold group-hover:bg-black group-hover:text-white transition-all whitespace-nowrap shrink-0"
        >
          <i class="fa-brands fa-github"></i>
          GitHub PR 보기
        </a>
      </div>
      <div class="bg-[#F8F9FA] p-6 rounded-2xl">
        <p class="text-[17px] leading-[1.7] text-[#333333]">
          &ldquo;${content}&rdquo;
        </p>
      </div>
    </div>
  `;
}

function renderResults() {
  const filtered = getFilteredReviews();
  const visible = filtered.slice(0, state.displayCount);

  // 결과 타이틀 업데이트
  const fieldObj = FIELDS.find((f) => f.id === state.field);
  const missionObj = MISSIONS.find((m) => m.id === state.mission);
  const titleLabel = state.search
    ? `'${state.search}'에 대한 리뷰어의 답변`
    : missionObj
      ? `'${missionObj.name}' 최신 리뷰어 답변`
      : `'${fieldObj.name}' 최신 리뷰어 답변`;

  document.getElementById('results-title').innerHTML =
    `${titleLabel} <span class="text-[#999999] ml-2">${filtered.length}</span>`;

  // 카드 렌더링
  const grid = document.getElementById('results-grid');
  if (visible.length === 0) {
    grid.innerHTML = `
      <div class="py-20 text-center">
        <i class="fa-regular fa-comment-dots text-5xl text-[#CCCCCC] mb-4 block"></i>
        <p class="text-[18px] text-[#999999]">해당 조건에 맞는 리뷰 데이터가 없습니다.</p>
      </div>
    `;
  } else {
    grid.innerHTML = visible.map(buildCard).join('');
  }

  // 더보기 버튼
  const btn = document.getElementById('load-more-btn');
  btn.classList.toggle('hidden', filtered.length <= state.displayCount);
}

function refreshFilterButtons() {
  document.getElementById('field-buttons').innerHTML = buildFieldButtons();
  document.getElementById('mission-buttons').innerHTML = buildMissionButtons();
}

// ─── 이벤트 바인딩 ───────────────────────────────────────────────────────────

function attachEventListeners() {
  const app = document.getElementById('app');

  app.addEventListener('click', (e) => {
    const fieldBtn = e.target.closest('[data-field]');
    if (fieldBtn) {
      if (state.field !== fieldBtn.dataset.field) {
        state.field = fieldBtn.dataset.field;
        state.mission = null;
        state.displayCount = PAGE_SIZE;
        refreshFilterButtons();
        renderResults();
      }
      return;
    }

    const missionBtn = e.target.closest('[data-mission]');
    if (missionBtn) {
      const clicked = missionBtn.dataset.mission;
      state.mission = state.mission === clicked ? null : clicked;
      state.displayCount = PAGE_SIZE;
      refreshFilterButtons();
      renderResults();
      return;
    }

    if (e.target.closest('#load-more-btn')) {
      state.displayCount += PAGE_SIZE;
      renderResults();
    }
  });

  let debounceTimer;
  app.addEventListener('input', (e) => {
    if (e.target.id !== 'search-input') return;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      state.search = e.target.value.trim();
      state.displayCount = PAGE_SIZE;
      renderResults();
    }, 300);
  });
}

init();
