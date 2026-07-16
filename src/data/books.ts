import type { Book, Chapter } from '@/types';

export const STATIC_BOOK: Book = {
  id: 'the-mystery-of-god',
  title: 'The Mystery Of God',
  subtitle: 'Understanding Humanity in Christ Before Adam',
  slug: 'the-mystery-of-god',
  description: 'Before Adam was formed from dust, God already had a complete and perfect vision of humanity. That vision was not abstract — it was personal, living, and fully expressed in Christ. This book explores the profound truth that humanity did not originate in Adam\'s mind, history, or biology, but in divine intention. Adam is not the starting point of humanity\'s meaning — Christ is.',
  coverImage: '/images/mystery-of-god-cover.png',
  author: 'Moshoeshoe Koali',
  category: 'Christian',
  featured: true,
  published: true,
  tags: ['theology', 'christ', 'adam', 'humanity', 'salvation', 'eternal-purpose'],
  language: 'English',
  readingTime: 0,
  createdAt: new Date('2026-01-01'),
  updatedAt: new Date('2026-07-15'),
  views: 0,
  averageRating: 0,
  totalReviews: 0,
};

export const STATIC_CHAPTERS: Chapter[] = [
  {
    id: 'ch-1',
    bookId: 'the-mystery-of-god',
    title: 'BEFORE ADAM THERE WAS CHRIST',
    slug: 'before-adam-there-was-christ',
    chapterNumber: 1,
    content: `<blockquote>
<strong>CHAPTER THEME:</strong><br />
Christ is not the result of human failure, but the eternal source from which humanity was designed; Adam is the first unfolding of that eternal design in time.
</blockquote>

<h2>INTRODUCTION</h2>
<p>The Bible does not begin with religion, sin, or salvation but it begins with God. Within God's creative act, there is a mystery that runs deeper than most surface readings of Genesis: humanity did not originate in Adam's mind, history, or biology but in divine intention.</p>
<p>Adam appears as the first human in time, but not necessarily the first human in meaning. When the New Testament speaks about Christ as "the image of the invisible God" and as the One through whom all things were created, it forces a re-evaluation of Genesis itself.</p>
<p>This chapter establishes a foundational truth that will govern the entire book: Humanity does not define Christ. Christ defines humanity even before Adam existed.</p>

<h2>SECTION A — SIMPLE TRUTH</h2>
<p>Before Adam was formed from dust, God already had a complete and perfect vision of humanity. That vision was not abstract, it was personal, living, and fully expressed in Christ.</p>
<p>This means:</p>
<ul>
  <li>Adam is not the starting point of humanity's meaning</li>
  <li>Adam is the starting point of humanity's appearance in time</li>
  <li>Christ is the starting point of humanity's identity in eternity</li>
</ul>
<p>So, humanity is not something God is experimenting with but something God already fully knows in Christ. Adam is the first visible form of that invisible reality.</p>
<p>This is why the New Testament does not describe Christ as a reaction to Adam — but as the One through whom Adam himself exists.</p>

<div class="my-8 flex justify-center">
  <svg viewBox="0 0 800 400" width="100%" class="max-w-2xl rounded-2xl border border-slate-200/50 bg-slate-50/50 p-6 dark:border-slate-800/50 dark:bg-slate-900/50">
    <defs>
      <linearGradient id="eternityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" />
        <stop offset="100%" stop-color="#8b5cf6" />
      </linearGradient>
      <linearGradient id="historyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" />
        <stop offset="100%" stop-color="#ef4444" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <g transform="translate(100, 200)">
      <circle cx="0" cy="0" r="80" fill="url(#eternityGrad)" opacity="0.15" filter="url(#glow)" />
      <circle cx="0" cy="0" r="60" fill="url(#eternityGrad)" opacity="0.8" />
      <text x="0" y="-10" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="16px">CHRIST</text>
      <text x="0" y="15" text-anchor="middle" fill="#e0e7ff" font-size="11px">The Eternal Image</text>
      <text x="0" y="30" text-anchor="middle" fill="#e0e7ff" font-size="11px">& Blueprint</text>
    </g>

    <path d="M 230 200 L 570 200" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 6" opacity="0.5" />
    <polygon points="570,195 585,200 570,205" fill="currentColor" opacity="0.8" />

    <path d="M 160 170 C 260 100, 500 100, 600 170" fill="none" stroke="url(#eternityGrad)" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 4" />
    <text x="380" y="90" text-anchor="middle" fill="currentColor" font-weight="semibold" font-size="12px">Christ-Shaped Blueprint Design Flow</text>

    <g transform="translate(620, 200)">
      <circle cx="0" cy="0" r="70" fill="url(#historyGrad)" opacity="0.15" />
      <circle cx="0" cy="0" r="50" fill="url(#historyGrad)" opacity="0.8" />
      <text x="0" y="-8" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="14px">ADAM</text>
      <text x="0" y="12" text-anchor="middle" fill="#fee2e2" font-size="10px">First Physical</text>
      <text x="0" y="25" text-anchor="middle" fill="#fee2e2" font-size="10px">Expression</text>
    </g>

    <text x="100" y="320" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="13px">ETERNITY</text>
    <text x="100" y="340" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">Before Creation</text>

    <text x="620" y="320" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="13px">TIME & HISTORY</text>
    <text x="620" y="340" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">Genesis 1 & 2</text>

    <rect x="250" y="230" width="260" height="90" rx="12" fill="currentColor" opacity="0.05" />
    <rect x="250" y="230" width="260" height="90" rx="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.15" />
    <text x="380" y="255" text-anchor="middle" fill="currentColor" font-weight="semibold" font-size="12px">"Adam is a type of the One</text>
    <text x="380" y="275" text-anchor="middle" fill="currentColor" font-weight="semibold" font-size="12px">who was to come."</text>
    <text x="380" y="295" text-anchor="middle" fill="currentColor" opacity="0.6" font-style="italic" font-size="11px">— Romans 5:14</text>
  </svg>
</div>

<h2>SECTION B — BIBLICAL FOUNDATION</h2>
<p>To understand this properly, we must read Scripture not as isolated verses, but as one continuous revelation.</p>

<h3>1. Christ as the Creative Source</h3>
<blockquote>"Through Him all things were made; without Him nothing was made that has been made." (John 1:3)</blockquote>
<p>This includes Adam. Adam is not outside Christ's creative agency. Adam exists inside Christ's creative action. So Adam cannot be the origin of humanity's meaning — because Adam himself has an origin.</p>

<h3>2. Christ as the Image Before Adam</h3>
<blockquote>"Christ is the image of the invisible God." (Colossians 1:15)</blockquote>
<p>Now compare this with Genesis: "Let us make man in our image." (Genesis 1:26)</p>
<p>A theological question emerges: If Christ is the true image of God, then what "image" is humanity created in? The answer becomes unavoidable in this framework: Humanity is created in a Christ-shaped image. This means Adam is not the definition of humanity, he is the first expression of a Christ-defined design.</p>

<h3>3. Adam as Type, Not Origin</h3>
<blockquote>"Adam … is a type of the one who was to come." (Romans 5:14)</blockquote>
<p>A "type" in biblical language means: pattern, shadow, foreshadowing reality, incomplete representation.</p>
<p>This is critical: Paul does NOT say Christ is a type of Adam. He says Adam is a type of Christ. That reverses the entire interpretive direction. Adam is not the reference point. Christ is.</p>

<h3>4. Two Orders of Humanity</h3>
<blockquote>"The first man is of the earth; the second man is from heaven." (1 Corinthians 15:47)</blockquote>
<p>This introduces two levels of humanity: Earth-derived humanity (Adam) and Heaven-originated humanity (Christ). This is not just moral difference. It is origin difference. One comes from dust. One comes from eternal reality.</p>

<h2>SECTION C — DEEP REVELATION</h2>

<h3>1. Adam is Real, But Not Ultimate</h3>
<p>Adam is not symbolic fiction. Adam is real history. But real history does not always equal ultimate meaning. Adam is the first appearance of humanity in time, not the final explanation of humanity in eternity. So Adam must be interpreted, not just accepted.</p>

<h3>2. Christ is Not Inserted into History</h3>
<p>A shallow view says: Adam sinned → God sent Christ. But Scripture reveals something deeper: Christ is not inserted after Adam. Christ is embedded before Adam.</p>
<p>This means: Christ is not reacting to human history. Human history is unfolding within Christ's eternal purpose. So Adam does not define Christ. Christ defines what Adam was always pointing toward.</p>

<h3>3. Humanity Was Never Neutral in God's Mind</h3>
<p>God did not create humanity without identity. He did not create Adam and later "discover" Christ as the solution. Instead: Humanity already had meaning before it had form and that meaning is Christ. So Adam is not the beginning of God's idea of humanity. Adam is the beginning of humanity appearing in physical reality.</p>

<h3>4. The Hidden Direction of Creation</h3>
<p>Creation is not random movement forward but it is directional revelation. Everything is moving toward: revelation of Christ, formation of Christ-image in humanity, restoration of divine likeness. So Adam is not the center of the story but Adam is the opening page of a story whose center is already established.</p>

<h2>TRANSFORMATION STATEMENT</h2>
<p>When this truth is understood deeply:</p>
<ul>
  <li>Identity is no longer based on origin in Adam</li>
  <li>Identity becomes rooted in destiny in Christ</li>
  <li>Salvation becomes restoration of original design, not just forgiveness</li>
  <li>Life becomes alignment with eternal purpose, not just moral effort</li>
</ul>
<p>A person begins to see themselves not as a broken version of Adam, but as a being created for Christ-expression.</p>

<p class="font-bold border-l-4 border-amber-500 pl-4 py-1 my-6 bg-amber-50/5 dark:bg-amber-950/5">
  Adam is not the explanation of humanity. Christ is. Adam is humanity's beginning in time. Christ is humanity's meaning in eternity.
</p>`,
    estimatedReadingTime: 15,
    createdAt: new Date('2026-01-01'),
  },
  {
    id: 'ch-2',
    bookId: 'the-mystery-of-god',
    title: 'THE LAMB BEFORE THE FOUNDATION OF THE WORLD',
    slug: 'the-lamb-before-the-foundation-of-the-world',
    chapterNumber: 2,
    content: `<blockquote>
<strong>CHAPTER THEME:</strong><br />
Christ is revealed as "the Lamb before creation," meaning redemption is not God's reaction to sin, but part of His eternal design before Adam, Eden, or the fall existed.
</blockquote>

<h2>INTRODUCTION</h2>
<p>One of the most mysterious statements in Scripture is that Christ is "the Lamb slain from the foundation of the world." This creates a deep theological tension because a "Lamb" implies sacrifice and sacrifice implies sin. But the text places the Lamb before the foundation of the world — which is before Adam, before Eden, and before any recorded sin.</p>
<p>This forces a radical question: Was redemption introduced after sin or was it already embedded in eternity? This chapter explores the possibility that salvation is not a response to failure, but a revelation of eternal purpose.</p>

<h2>SECTION A — SIMPLE TRUTH</h2>
<p>Before the world was created, God already had a complete plan for humanity that included Christ as the Lamb. This means:</p>
<ul>
  <li>God did not wait for Adam to sin before planning salvation</li>
  <li>Redemption was already part of God's eternal design</li>
  <li>The cross is not God's reaction, it is God's revelation</li>
</ul>
<p>So salvation is not something God "added later." It is something God already carried within His eternal purpose.</p>

<div class="my-8 flex justify-center">
  <svg viewBox="0 0 800 400" width="100%" class="max-w-2xl rounded-2xl border border-slate-200/50 bg-slate-50/50 p-6 dark:border-slate-800/50 dark:bg-slate-900/50">
    <defs>
      <linearGradient id="bluePurple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4f46e5" />
        <stop offset="100%" stop-color="#9333ea" />
      </linearGradient>
      <linearGradient id="roseOrange" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e11d48" />
        <stop offset="100%" stop-color="#f97316" />
      </linearGradient>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <line x1="80" y1="200" x2="720" y2="200" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" opacity="0.3" />

    <g transform="translate(160, 200)">
      <circle cx="0" cy="0" r="70" fill="url(#bluePurple)" opacity="0.15" filter="url(#softGlow)" />
      <circle cx="0" cy="0" r="50" fill="url(#bluePurple)" opacity="0.85" />
      <text x="0" y="-8" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="14px">THE LAMB</text>
      <text x="0" y="12" text-anchor="middle" fill="#f5f3ff" font-weight="semibold" font-size="11px">Slain before</text>
      <text x="0" y="25" text-anchor="middle" fill="#f5f3ff" font-weight="semibold" font-size="11px">creation</text>
    </g>

    <g transform="translate(400, 200)">
      <circle cx="0" cy="0" r="50" fill="currentColor" opacity="0.05" />
      <circle cx="0" cy="0" r="35" fill="currentColor" opacity="0.2" />
      <text x="0" y="-5" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="12px">CREATION</text>
      <text x="0" y="12" text-anchor="middle" fill="currentColor" opacity="0.7" font-size="10px">Adam & Eden</text>
    </g>

    <g transform="translate(640, 200)">
      <circle cx="0" cy="0" r="70" fill="url(#roseOrange)" opacity="0.15" filter="url(#softGlow)" />
      <circle cx="0" cy="0" r="50" fill="url(#roseOrange)" opacity="0.85" />
      <text x="0" y="-8" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="14px">THE CROSS</text>
      <text x="0" y="12" text-anchor="middle" fill="#fff1f2" font-weight="semibold" font-size="11px">Revelation</text>
      <text x="0" y="25" text-anchor="middle" fill="#fff1f2" font-weight="semibold" font-size="11px">in Time</text>
    </g>

    <path d="M 210 160 C 320 80, 480 80, 590 160" fill="none" stroke="url(#bluePurple)" stroke-width="3" stroke-linecap="round" />
    <path d="M 590 160 L 592 150 M 590 160 L 580 162" stroke="url(#bluePurple)" stroke-width="3" stroke-linecap="round" />
    
    <text x="400" y="70" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="13px">ETERNAL PLAN REVEALED IN TIME</text>
    <text x="400" y="90" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">Redemption is not a reaction, it is the design.</text>

    <text x="160" y="300" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="12px">ETERNITY</text>
    <text x="160" y="320" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">Revelation 13:8</text>

    <text x="400" y="300" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="12px">BEGINNING</text>
    <text x="400" y="320" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">Genesis 1:1</text>

    <text x="640" y="300" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="12px">HISTORY</text>
    <text x="640" y="320" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">1 Peter 1:20</text>
  </svg>
</div>

<h2>SECTION B — BIBLICAL FOUNDATION</h2>
<p>To understand this properly, we must read Scripture not as isolated verses, but as one continuous revelation.</p>

<h3>1. The Lamb Before Creation</h3>
<blockquote>"The Lamb slain from the foundation of the world." (Revelation 13:8)</blockquote>
<p>This is not describing an event in time. It is describing a reality in eternity. It means that before creation began, the reality of Christ as sacrificial Lamb already existed in God's purpose.</p>

<h3>2. Christ Chosen Before Time</h3>
<blockquote>"He was foreknown before the foundation of the world." (1 Peter 1:20)</blockquote>
<p>Christ is not introduced after humanity falls. He is "foreknown" before time begins. This places Christ outside historical reaction and inside eternal intention.</p>

<h3>3. Eternal Purpose in Christ</h3>
<blockquote>"He purposed in Christ before the ages." (Ephesians 1:9–10)</blockquote>
<p>God's purpose is not developed through time. It is established before time. Time unfolds what eternity already decided.</p>

<h3>4. The Creative Role of Christ</h3>
<blockquote>"Through Him all things were created." (Colossians 1:16)</blockquote>
<p>This includes Adam, Eden, the tree, the garden, history itself. Nothing in creation exists outside Christ's creative framework.</p>

<h2>SECTION C — DEEP REVELATION</h2>

<h3>1. The Lamb Does Not Begin With Sin</h3>
<p>The word "Lamb" is usually associated with sacrifice, blood, and atonement. But Scripture places the Lamb before sin enters history. This means the Lamb is not first about sin. The Lamb is first about identity in God's purpose. Sin reveals the need for redemption. But Christ reveals the meaning of existence itself.</p>

<h3>2. Redemption Is Not God's Emergency Plan</h3>
<p>A shallow view of salvation says: Humanity failed → God reacted → Christ was sent. But the deeper biblical pattern says: God's eternal purpose already included Christ → creation unfolds → sin enters history → Christ is revealed in time what already existed in eternity.</p>
<p>So the cross is not divine improvisation. It is divine revelation in history of what was already true in eternity.</p>

<h3>3. Why the Lamb Exists Before the Fall</h3>
<p>If sin had not yet occurred, why is the Lamb already present? Because the Lamb is not only about what is wrong. The Lamb is about: divine love before creation, self-giving nature of God, eternal relationship within God Himself, the expression of God's character in creation. So the Lamb is not only a solution. The Lamb is a revelation of who God is eternally.</p>

<h3>4. Creation Was Always Moving Toward Christ</h3>
<p>Creation is not moving toward an unknown future. Creation is moving toward a known center: Christ revealed. So Adam is not the center. Eden is not the center. Sin is not the center. History is not the center. Christ is the center before time begins.</p>

<h3>5. The Mystery of Divine Intention</h3>
<p>God does not create without meaning already established. Nothing in creation is random experimentation. Everything exists inside eternal intention. So humanity is not accidental, experimental, or reactive. Humanity is intentional, Christ-shaped, and eternally purposed.</p>

<h2>TRANSFORMATION STATEMENT</h2>
<p>When this truth is understood:</p>
<ul>
  <li>Salvation is no longer seen as a backup plan</li>
  <li>Christ is seen as eternal meaning, not temporary solution</li>
  <li>Faith becomes participation in eternal purpose, not just forgiveness</li>
  <li>Life becomes aligned with divine intention rather than human survival</li>
</ul>
<p>It reshapes how a person sees God completely.</p>

<p class="font-bold border-l-4 border-amber-500 pl-4 py-1 my-6 bg-amber-50/5 dark:bg-amber-950/5">
  The Lamb was not introduced after sin entered the world. The Lamb was already present before the world began. Therefore, redemption is not God's reaction to failure — but the unveiling of His eternal purpose in Christ.
</p>`,
    estimatedReadingTime: 12,
    createdAt: new Date('2026-01-05'),
  },
  {
    id: 'ch-3',
    bookId: 'the-mystery-of-god',
    title: 'HUMANITY IN THE MIND OF GOD',
    slug: 'humanity-in-the-mind-of-god',
    chapterNumber: 3,
    content: `<blockquote>
<strong>CHAPTER THEME:</strong><br />
Humanity did not begin in dust or history, but in the eternal thought of God, fully expressed in Christ before Adam was formed.
</blockquote>

<h2>INTRODUCTION</h2>
<p>Before anything existed — before earth, time, Eden, or Adam — there was thought within God. Not human thought. Divine thought.</p>
<p>Scripture repeatedly shows that creation is not random, nor reactive, but intentional. This means humanity was not an afterthought formed from circumstance, but a deliberate expression of God's eternal purpose.</p>
<p>To understand Adam correctly, we must go further back than Genesis 2. We must go into the "mind of God" revealed through Christ.</p>
<p>This chapter explores a radical idea: Humanity existed first as divine intention before it existed as physical form.</p>

<h2>SECTION A — SIMPLE TRUTH</h2>
<p>Before God created Adam, He already had a complete idea of what humanity should be. That idea is not guesswork or evolution. It is perfect, complete, and fully revealed in Christ.</p>
<p>So:</p>
<ul>
  <li>Adam is the first physical expression of humanity</li>
  <li>Christ is the eternal definition of humanity</li>
  <li>Humanity itself began as a thought in God, not a biological event</li>
</ul>
<p>This means humanity is not accidental — it is intentional.</p>

<div class="my-8 flex justify-center">
  <svg viewBox="0 0 800 400" width="100%" class="max-w-2xl rounded-2xl border border-slate-200/50 bg-slate-50/50 p-6 dark:border-slate-800/50 dark:bg-slate-900/50">
    <defs>
      <linearGradient id="thoughtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" />
        <stop offset="100%" stop-color="#ec4899" />
      </linearGradient>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2563eb" />
        <stop offset="100%" stop-color="#3b82f6" />
      </linearGradient>
    </defs>

    <g transform="translate(400, 200)">
      <circle cx="0" cy="0" r="90" fill="url(#thoughtGrad)" opacity="0.15" />
      <circle cx="0" cy="0" r="70" fill="url(#thoughtGrad)" opacity="0.85" />
      <text x="0" y="-12" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="15px">DIVINE INTENTION</text>
      <text x="0" y="10" text-anchor="middle" fill="#fdf2f8" font-size="11px">"He chose us in Him</text>
      <text x="0" y="25" text-anchor="middle" fill="#fdf2f8" font-size="11px">before creation"</text>
      <text x="0" y="42" text-anchor="middle" fill="#fdf2f8" font-size="9px" opacity="0.8">Ephesians 1:4</text>
    </g>

    <path d="M 310 180 C 220 150, 160 160, 160 200" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" opacity="0.5" />
    <g transform="translate(160, 200)">
      <circle cx="0" cy="0" r="45" fill="currentColor" opacity="0.05" />
      <circle cx="0" cy="0" r="35" fill="currentColor" opacity="0.15" />
      <text x="0" y="-5" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="11px">IDENTITY</text>
      <text x="0" y="10" text-anchor="middle" fill="currentColor" opacity="0.7" font-size="9px">Defined in Christ</text>
    </g>

    <path d="M 490 220 C 580 250, 640 240, 640 200" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" opacity="0.5" />
    <g transform="translate(640, 200)">
      <circle cx="0" cy="0" r="45" fill="currentColor" opacity="0.05" />
      <circle cx="0" cy="0" r="35" fill="currentColor" opacity="0.15" />
      <text x="0" y="-5" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="11px">EXISTENCE</text>
      <text x="0" y="10" text-anchor="middle" fill="currentColor" opacity="0.7" font-size="9px">Formed in Dust</text>
    </g>

    <text x="400" y="320" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="13px">THE DESIGN PRECEDES THE PHYSICAL</text>
    <text x="400" y="340" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">Humanity began as a thought in God, not a biological event.</text>
  </svg>
</div>

<h2>SECTION B — BIBLICAL FOUNDATION</h2>

<h3>1. Creation Begins in Divine Will</h3>
<blockquote>"He chose us in Him before the foundation of the world." (Ephesians 1:4)</blockquote>
<p>Before physical creation, there is already divine choice. This means identity exists before existence. God does not discover humanity. He defines humanity before it appears.</p>

<h3>2. Christ as the Eternal Image</h3>
<blockquote>"He is the image of the invisible God." (Colossians 1:15)</blockquote>
<p>If Christ is the image of God, then Christ is also the image according to which humanity is designed. So humanity is not self-defined. Humanity is Christ-defined.</p>

<h3>3. All Things Held in Christ</h3>
<blockquote>"In Him all things hold together." (Colossians 1:17)</blockquote>
<p>This means creation is not independent from Christ. Everything — origin, structure, meaning, purpose — is sustained in Him.</p>

<h3>4. The Eternal Purpose</h3>
<blockquote>"According to the eternal purpose that He accomplished in Christ Jesus." (Ephesians 3:11)</blockquote>
<p>God does not improvise history. He executes eternal purpose within time.</p>

<h2>SECTION C — DEEP REVELATION</h2>

<h3>1. Humanity Begins as Divine Thought</h3>
<p>Before Adam is formed from dust, humanity already exists as an idea in God. But this is not abstract imagination. In God, thought is not passive — it is creative reality. So divine thought is not speculation. Divine thought is design reality. Humanity therefore begins as God's intentional expression of Himself in creation.</p>

<h3>2. Christ Is the Content of God's Thought About Humanity</h3>
<p>God does not think about humanity separately from Christ. God thinks humanity in Christ. So Christ is not inserted into human history later. Christ is the content of divine intention before history begins.</p>
<p>This means: God's thought = Christ-shaped humanity. Humanity in God's mind = Christ expressed in creation. Adam = first temporal unfolding of that eternal thought.</p>

<h3>3. Adam Is Not the Definition — He Is the Expression</h3>
<p>Adam is not the standard of humanity. He is the first visible manifestation of a deeper invisible design. So Adam is real, important, historical — but not final. Adam is what divine intention looks like when it enters time for the first time.</p>

<h3>4. Why Humanity Cannot Be Understood from Adam Alone</h3>
<p>If we start from Adam alone, humanity looks incomplete, fallen, fragmented, confused. But if we start from Christ, humanity becomes intentional, meaningful, Christ-shaped, destiny-driven. So interpretation changes based on origin reference.</p>

<h3>5. The Direction of Identity</h3>
<p>Humanity is not defined backward from Adam. Humanity is defined forward from Christ. This means we are not trying to "return to Eden only." We are moving toward Christ as fulfillment of original intention. Eden is beginning imagery. Christ is completed reality.</p>

<h2>TRANSFORMATION STATEMENT</h2>
<p>When this truth is understood:</p>
<ul>
  <li>You stop seeing yourself as an accident of history</li>
  <li>You begin to see yourself as intentional design</li>
  <li>Your identity is no longer based on failure in Adam</li>
  <li>Your identity becomes rooted in intention in Christ</li>
  <li>Life becomes discovery of divine purpose, not self-construction</li>
</ul>

<p class="font-bold border-l-4 border-amber-500 pl-4 py-1 my-6 bg-amber-50/5 dark:bg-amber-950/5">
  Humanity did not begin in the dust of Adam. Humanity began in the thought of God. And that thought is fully revealed in Christ.
</p>`,
    estimatedReadingTime: 14,
    createdAt: new Date('2026-01-10'),
  },
  {
    id: 'ch-4',
    bookId: 'the-mystery-of-god',
    title: 'CHRIST: THE TRUE IMAGE OF HUMANITY',
    slug: 'christ-the-true-image-of-humanity',
    chapterNumber: 4,
    content: `<blockquote>
<strong>CHAPTER THEME:</strong><br />
Christ is not merely an example of humanity; He is the original image according to which humanity was conceived, created, and ultimately fulfilled.
</blockquote>

<h2>INTRODUCTION</h2>
<p>One of the most important questions a human being can ask is: What does it truly mean to be human? For centuries, people have looked to culture, philosophy, science, politics, achievement, or even religion to answer that question. Yet Scripture presents a different answer.</p>
<p>The Bible does not define humanity by what humanity says about itself. It defines humanity by what God reveals in Christ. This means that if we want to understand humanity, we must look beyond Adam, beyond civilization, beyond history, and beyond ourselves. We must look to Christ.</p>
<p>Many believers see Christ primarily as Savior. While that is true, it is only part of the revelation. The New Testament presents Christ not only as the Savior of humanity but also as the true image of humanity. He does not merely show us how God saves humans. He shows us what a human being was always intended to be.</p>

<h2>SECTION A — SIMPLE TRUTH</h2>
<p>When people read Genesis, they often assume that Adam is the model of humanity. After all, Adam appears first. But appearing first does not necessarily mean being ultimate.</p>
<p>A blueprint exists before a building is constructed. A thought exists before it is spoken. A destination exists before a journey begins.</p>
<p>Likewise, Christ exists as God's perfect image before humanity appears in history. Therefore, Adam is not the original pattern. Adam is the first earthly expression of a pattern already present in God. Christ is that pattern.</p>
<p>This changes how we understand human identity. Humanity is not defined by its beginning in Adam. Humanity is defined by its fulfillment in Christ.</p>

<div class="my-8 flex justify-center">
  <svg viewBox="0 0 800 400" width="100%" class="max-w-2xl rounded-2xl border border-slate-200/50 bg-slate-50/50 p-6 dark:border-slate-800/50 dark:bg-slate-900/50">
    <defs>
      <linearGradient id="glowBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2563eb" />
        <stop offset="100%" stop-color="#1d4ed8" />
      </linearGradient>
    </defs>

    <g transform="translate(180, 200)">
      <rect x="-90" y="-90" width="180" height="180" rx="16" fill="currentColor" opacity="0.05" />
      <rect x="-90" y="-90" width="180" height="180" rx="16" fill="none" stroke="currentColor" stroke-width="2" opacity="0.2" />
      <text x="0" y="-55" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="14px">FIRST ADAM</text>
      <circle cx="0" cy="-10" r="25" fill="currentColor" opacity="0.15" />
      <path d="M -15 25 L 15 25" stroke="currentColor" stroke-width="2" opacity="0.3" />
      <text x="0" y="45" text-anchor="middle" fill="currentColor" opacity="0.7" font-size="11px">Earthly & Incomplete</text>
      <text x="0" y="60" text-anchor="middle" fill="currentColor" opacity="0.7" font-size="11px">"The Seed Pattern"</text>
    </g>

    <g transform="translate(400, 200)">
      <path d="M -60 0 L 40 0" stroke="url(#glowBlue)" stroke-width="4" stroke-linecap="round" />
      <polygon points="40,-8 56,0 40,8" fill="#2563eb" />
      <text x="-10" y="-20" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="12px">CONFORMED TO</text>
    </g>

    <g transform="translate(620, 200)">
      <rect x="-90" y="-90" width="180" height="180" rx="16" fill="url(#glowBlue)" opacity="0.1" />
      <rect x="-90" y="-90" width="180" height="180" rx="16" fill="none" stroke="#2563eb" stroke-width="2" />
      <text x="0" y="-55" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="14px">LAST ADAM (CHRIST)</text>
      <circle cx="0" cy="-10" r="25" fill="#2563eb" opacity="0.25" />
      <polygon points="0,-18 3,-7 14,-7 5,0 9,11 0,4 -9,11 -5,0 -14,-7 -3,-7" fill="#2563eb" opacity="0.8" />
      <text x="0" y="45" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="11px">Heavenly & Perfect</text>
      <text x="0" y="60" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="11px">"The Original Image"</text>
    </g>

    <text x="400" y="60" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="15px">IMAGE CONFORMITY FLOW</text>
    <text x="400" y="82" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">We do not define Christ by Adam; we understand humanity through Christ.</text>
  </svg>
</div>

<h2>SECTION B — BIBLICAL FOUNDATION</h2>

<h3>1. Christ Is the Image of the Invisible God</h3>
<blockquote>"He is the image of the invisible God." (Colossians 1:15)</blockquote>
<p>Paul does not say Christ merely reflects God. He says Christ is the image of God. In Christ, the invisible becomes visible. The unknowable becomes knowable. The hidden becomes revealed.</p>

<h3>2. Humanity Was Created in God's Image</h3>
<blockquote>"Let us make mankind in our image, according to our likeness." (Genesis 1:26)</blockquote>
<p>This raises a profound question: What exactly is that image? The New Testament answers by revealing Christ as the image of God. Therefore, when humanity is created in God's image, the fullest understanding of that image is eventually revealed in Christ.</p>

<h3>3. Christ Reveals Perfect Humanity</h3>
<p>Throughout the Gospels, Jesus demonstrates humanity as God intended it: complete dependence on the Father, perfect love, perfect obedience, perfect compassion, perfect authority, perfect humility.</p>
<p>Jesus does not become less human because of His union with God. He becomes the fullest expression of humanity. Simple morality diminishes humanity. Christ reveals humanity in its fullness.</p>

<h3>4. The Heavenly Man</h3>
<blockquote>"The first man was of the dust of the earth; the second man is of heaven." (1 Corinthians 15:47)</blockquote>
<p>Paul is not merely comparing two individuals. He is revealing two orders of humanity. Adam represents humanity originating from earth. Christ reveals humanity originating from heaven.</p>

<h2>SECTION C — DEEP REVELATION</h2>

<h3>1. The Image Is a Person</h3>
<p>Many people think the image of God is: intelligence, creativity, morality, self-awareness. While these may reflect aspects of the image, the New Testament points us toward something deeper. The image of God is ultimately revealed in a person. That person is Christ.</p>

<h3>2. Humanity Was Designed for Christ-Likeness</h3>
<p>If Christ is the true image, then humanity was designed from the beginning with Christ as its reference point. The purpose of humanity is not merely existence. The purpose of humanity is likeness. Not merely looking like Christ externally, but sharing in His life, character, and relationship with the Father.</p>

<h3>3. Adam Reveals Potential; Christ Reveals Fulfillment</h3>
<p>Adam reveals possibility. Christ reveals completion. Adam reveals beginning. Christ reveals destiny. Adam reveals humanity in seed form. Christ reveals humanity in harvest form. A seed is not false because it is incomplete. It is simply unfinished. Likewise, Adam is not wrong because he is first. He is simply not final.</p>

<h3>4. Why Christ Must Be the Starting Point</h3>
<p>One of the greatest mistakes in theology is beginning with fallen humanity and trying to work upward toward God. The New Testament does the reverse. It begins with Christ and then explains humanity through Him. Instead of asking "What does humanity tell us about God?" we ask "What does Christ reveal about humanity?"</p>

<h3>5. The Hidden Meaning of the New Creation</h3>
<p>The goal of salvation is not merely to forgive sins. The goal is to restore humanity into conformity with Christ. God is not merely rescuing people from judgment. He is bringing humanity into the image that existed in His heart before creation.</p>

<h2>TRANSFORMATION STATEMENT</h2>
<p>When Christ is understood as the true image of humanity:</p>
<ul>
  <li>Identity is no longer built on weakness or failure</li>
  <li>Humanity is understood through divine intention rather than human limitation</li>
  <li>Spiritual growth becomes participation in Christ's life</li>
  <li>Salvation becomes restoration into the image of God</li>
  <li>The believer sees Christ not only as the One who saves them, but also as the One who reveals what they were created to become</li>
</ul>

<p class="font-bold border-l-4 border-amber-500 pl-4 py-1 my-6 bg-amber-50/5 dark:bg-amber-950/5">
  Adam reveals humanity's beginning. Christ reveals humanity's meaning. To see Christ is not only to see God — it is to see humanity as it was always intended to be.
</p>`,
    estimatedReadingTime: 16,
    createdAt: new Date('2026-01-15'),
  },
  {
    id: 'ch-5',
    bookId: 'the-mystery-of-god',
    title: 'ADAM: THE FIRST EXPRESSION OF HUMANITY',
    slug: 'adam-the-first-expression-of-humanity',
    chapterNumber: 5,
    content: `<blockquote>
<strong>CHAPTER THEME:</strong><br />
Adam was not created as the final revelation of humanity, but as the first expression of a divine purpose that would ultimately be fulfilled in Christ.
</blockquote>

<h2>INTRODUCTION</h2>
<p>Few figures in Scripture have shaped humanity's understanding of itself more than Adam. For many believers, Adam is viewed primarily through the lens of the Fall. He is remembered as the man who sinned, lost paradise, and brought death into the world. While those realities are important, they can sometimes prevent us from seeing something equally important: Who was Adam before the Fall? And why was Adam created the way he was?</p>
<p>When God formed Adam from the dust of the earth, He was not making a mistake that would later need correction. Nor was Adam a failed version of Christ. Adam was exactly what God intended him to be at that stage of revelation.</p>
<p>To understand Christ correctly, we must first understand Adam correctly — not merely as a sinner, but as the first manifestation of humanity in God's unfolding purpose.</p>

<h2>SECTION A — SIMPLE TRUTH</h2>
<p>Adam was the first human being created by God. He was real. He was good. He was created in God's image. Yet Adam was also unfinished. This does not mean he was defective. A seed is not defective because it is not yet a tree. A child is not defective because they are not yet an adult.</p>
<p>Likewise, Adam was complete for his stage, but he was not the final expression of humanity. This is why the New Testament speaks of Christ as the Last Adam. The first Adam introduces humanity. The Last Adam completes the revelation of humanity. Adam is therefore best understood as the beginning of a journey rather than the destination.</p>

<div class="my-8 flex justify-center">
  <svg viewBox="0 0 800 400" width="100%" class="max-w-2xl rounded-2xl border border-slate-200/50 bg-slate-50/50 p-6 dark:border-slate-800/50 dark:bg-slate-900/50">
    <defs>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" />
        <stop offset="100%" stop-color="#047857" />
      </linearGradient>
    </defs>

    <path d="M 80 300 L 720 300" stroke="currentColor" stroke-width="2" opacity="0.3" />

    <g transform="translate(180, 300)">
      <path d="M -15 0 C -15 -20, 15 -20, 15 0 Z" fill="#b45309" opacity="0.8" />
      <rect x="-10" y="0" width="20" height="8" rx="3" fill="#78350f" />
      <text x="0" y="-35" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="12px">ADAM (SEED)</text>
      <text x="0" y="-20" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="10px">Physical Potential</text>
    </g>

    <path d="M 180 270 C 300 240, 500 150, 620 180" fill="none" stroke="url(#greenGrad)" stroke-width="3" stroke-dasharray="4 2" opacity="0.5" />

    <g transform="translate(620, 200)">
      <circle cx="0" cy="-30" r="45" fill="url(#greenGrad)" opacity="0.15" />
      <circle cx="0" cy="-30" r="35" fill="url(#greenGrad)" opacity="0.85" />
      <rect x="-6" y="5" width="12" height="95" fill="#78350f" />
      
      <text x="0" y="-95" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="12px">CHRIST (HARVEST)</text>
      <text x="0" y="-80" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="10px">Spiritual Maturity</text>
    </g>

    <text x="400" y="80" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="15px">DEVELOPMENTAL PURPOSE FLOW</text>
    <text x="400" y="102" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">A seed is not a failure; it is simply unfinished. Christ is the full harvest.</text>
  </svg>
</div>

<h2>SECTION B — BIBLICAL FOUNDATION</h2>

<h3>1. Formed from the Dust</h3>
<p>Genesis tells us: "Then the Lord God formed man from the dust of the ground and breathed into his nostrils the breath of life." Adam is formed from two realities: dust from the earth, breath from God. This means humanity stands at the intersection of heaven and earth.</p>

<h3>2. Adam Became a Living Soul</h3>
<blockquote>"Man became a living soul."</blockquote>
<p>The text does not say Adam was given a soul. It says Adam became a living soul. Paul later contrasts this with Christ: "The first Adam became a living soul; the last Adam became a life-giving spirit." Adam possesses life. Christ imparts life.</p>

<h3>3. Everything God Made Was Good</h3>
<p>After creation, God declares: "It was very good." This includes Adam. Therefore Adam should not be viewed primarily as a failure. Adam is God's good creation. The Fall reveals what happened to Adam. It does not define why Adam was created.</p>

<h3>4. The First Man Was Earthly</h3>
<blockquote>"The first man was of the dust of the earth." (1 Corinthians 15:47)</blockquote>
<p>This is not criticism. It is description. The earthly comes first. The spiritual comes afterward. This order appears throughout creation: seed before harvest, child before maturity, foundation before building, dawn before noon.</p>

<h2>SECTION C — DEEP REVELATION</h2>

<h3>1. Why Did God Begin with Dust?</h3>
<p>If Christ is the ultimate revelation of humanity, why did God begin with Adam? Why start with dust? Because God often reveals His purposes through process rather than instant completion. Creation itself unfolds in stages. Light appears before humanity. Foundations appear before fulfillment.</p>

<h3>2. The Mystery of Incompleteness</h3>
<p>Modern thinking views incompleteness as failure. Scripture presents incompleteness as potential. An acorn is incomplete compared to an oak tree. Yet the oak tree already exists within the acorn as destiny. Likewise, Adam contains within himself a destiny that is fully revealed in Christ.</p>

<h3>3. Adam as Humanity in Seed Form</h3>
<p>The first Adam reveals humanity in seed form. The Last Adam reveals humanity in full maturity. This perspective changes how we read Genesis. Instead of asking "How do we get back to Adam?" a deeper question emerges: "Where was humanity always meant to go?" The answer is not backward. The answer is forward. Toward Christ.</p>

<h3>4. Why Adam Cannot Be the Final Standard</h3>
<p>If Adam is the final standard, then humanity's highest goal is merely to return to Eden. But the New Testament points beyond Eden. The story does not end in a garden. It ends in a transformed creation. The movement of Scripture is not simply restoration. It is fulfillment.</p>

<h3>5. The Hidden Glory of the First Adam</h3>
<p>Adam's greatest significance may not be what he accomplished. It may be what he pointed toward. Like a signpost on a road, Adam directs attention beyond himself. His life announces: "There is more to come." The first man introduces the mystery. The Last Adam reveals it.</p>

<h2>TRANSFORMATION STATEMENT</h2>
<p>When Adam is understood as the first expression rather than the final expression of humanity:</p>
<ul>
  <li>The focus shifts from failure to purpose</li>
  <li>The story of humanity becomes developmental rather than merely corrective</li>
  <li>Christ is seen as fulfillment, not merely repair</li>
  <li>The believer begins to understand spiritual growth as participation in humanity's intended destiny</li>
  <li>Instead of living with the mindset of recovering what was lost, one begins to pursue what was always intended</li>
</ul>

<p class="font-bold border-l-4 border-amber-500 pl-4 py-1 my-6 bg-amber-50/5 dark:bg-amber-950/5">
  Adam was not the end of God's vision for humanity. He was the first chapter. Christ is the revelation of how that story was always meant to unfold.
</p>`,
    estimatedReadingTime: 13,
    createdAt: new Date('2026-01-20'),
  },
];

export function getStaticBookBySlug(slug: string): Book | undefined {
  if (STATIC_BOOK.slug === slug) return STATIC_BOOK;
  return undefined;
}

export function getStaticChapterBySlug(bookSlug: string, chapterSlug: string): Chapter | undefined {
  if (bookSlug !== STATIC_BOOK.slug) return undefined;
  return STATIC_CHAPTERS.find(c => c.slug === chapterSlug);
}

export function getStaticBookReadingTime(): number {
  return STATIC_CHAPTERS.reduce((sum, ch) => sum + ch.estimatedReadingTime, 0);
}
