import type { GuideCategory } from "@/lib/guides";
import type { Locale } from "@/lib/i18n/locales";

export type GuideSummary = {
  category: string;
  h1: string;
  description: string;
};

export type Dictionary = {
  common: {
    brandAria: string;
    brandText: string;
    languageSwitcherLabel: string;
  };
  header: {
    nav: {
      studio: string;
      templates: string;
      how: string;
      guides: string;
      about: string;
      contact: string;
      privacy: string;
    };
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    description: string;
  };
  home: {
    metadata: {
      title: string;
      description: string;
    };
    hero: {
      eyebrow: string;
      headingStart: string;
      headingAccent: string;
      headingEnd: string;
      freeLine: string;
      lead: string;
      primaryCta: string;
      secondaryCta: string;
      trust: string[];
      floatTitle: string;
      floatBody: string;
    };
    how: {
      eyebrow: string;
      heading: string;
      body: string;
      steps: Array<{ title: string; body: string }>;
    };
    guides: {
      eyebrow: string;
      heading: string;
      body: string;
      cta: string;
      cardCta: string;
    };
    privacy: {
      eyebrow: string;
      heading: string;
      body: string;
      cta: string;
    };
  };
  maker: {
    introEyebrow: string;
    heading: string;
    description: string;
    generateCta: string;
    generatingCta: string;
    controlsAria: string;
    photosTitle: string;
    cropTitle: string;
    styleTitle: string;
    before: string;
    after: string;
    beforeImage: string;
    afterImage: string;
    upload: string;
    uploadHint: string;
    livePreview: string;
    previewAria: string;
    dragNote: string;
    reset: string;
    download: string;
    frameFamily: string;
    cropControls: {
      zoom: string;
      horizontal: string;
      vertical: string;
    };
    ratios: {
      wide: string;
      story: string;
    };
    status: {
      initial: string;
      chooseImage: string;
      fileTooLarge: string;
      photoAdded: string;
      readFailed: string;
      previewFailed: string;
      styleChanged: string;
      addTwoFirst: string;
      generating: string;
      pngReady: string;
      renderFailed: string;
      generateBeforeDownload: string;
      downloadStarted: string;
    };
  };
  templates: {
    eyebrow: string;
    heading: string;
    body: string;
    useButton: string;
    useAriaPrefix: string;
    names: Record<string, string>;
  };
  slider: {
    ariaLabel: string;
    handleLabel: string;
    valueTextSuffix: string;
  };
  guidesPage: {
    metadata: {
      title: string;
      description: string;
    };
    hero: {
      eyebrow: string;
      heading: string;
      body: string;
      makerCta: string;
    };
    featured: {
      eyebrow: string;
      heading: string;
      body: string;
      cta: string;
    };
    all: {
      eyebrow: string;
      heading: string;
      body: string;
      cta: string;
    };
    categories: Record<GuideCategory, string>;
    guideSummaries: Record<string, GuideSummary>;
  };
};

const templateIds = {
  serifLandscape: "frame-16x9-serif-line",
  luxuryLandscape: "frame-16x9-luxury-caption",
  editorialLandscape: "frame-16x9-editorial-tag",
  serifPortrait: "frame-9x16-serif-line",
  luxuryPortrait: "frame-9x16-luxury-caption",
  editorialPortrait: "frame-9x16-editorial-tag",
} as const;

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    common: {
      brandAria: "Before & After Studio",
      brandText: "Before & After",
      languageSwitcherLabel: "Language",
    },
    header: {
      nav: {
        studio: "Studio",
        templates: "Templates",
        how: "How it works",
        guides: "Guides",
        about: "About Us",
        contact: "Contact",
        privacy: "Privacy",
      },
      cta: "Start creating",
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
    },
    footer: {
      description:
        "Make clean, shareable before & after images from two photos. No account, nothing stored.",
    },
    home: {
      metadata: {
        title: "Free Before and After Photo Maker | Side by Side Photo Editor",
        description:
          "Make a free before and after photo or side-by-side image from two pictures. Upload, align, choose a clean frame, and export one PNG.",
      },
      hero: {
        eyebrow: "Before & After Studio",
        headingStart: "Free",
        headingAccent: "Before and After",
        headingEnd: " Photo Maker",
        freeLine: "Turn two photos into one clean comparison.",
        lead:
          "Use this before and after photo maker to create a side-by-side image from two pictures. Upload, align, frame, and export one polished PNG. No sign-up, and nothing is saved to a gallery.",
        primaryCta: "Start creating",
        secondaryCta: "Browse templates",
        trust: ["No account", "Private by default", "Free PNG export"],
        floatTitle: "Drag to compare",
        floatBody: "Before ↔ After",
      },
      how: {
        eyebrow: "How it works",
        heading: "Four steps, start to finish",
        body: "Add photos, line them up, choose a style, and download — the workflow stays obvious.",
        steps: [
          { title: "Upload", body: "Drop in your before and after photos." },
          { title: "Align", body: "Pan and zoom each side until it lines up." },
          { title: "Frame", body: "Pick an editorial layout that fits." },
          { title: "Export", body: "Download one polished, shareable PNG." },
        ],
      },
      guides: {
        eyebrow: "Guides",
        heading: "Learn when and how to use the layout",
        body:
          "Practical articles cover side-by-side photos, personal use cases, privacy, medical-photo caution, memories, and progress images without relying on borrowed sample results.",
        cta: "Read guides",
        cardCta: "Read guide",
      },
      privacy: {
        eyebrow: "Simple privacy",
        heading: "No account. Nothing saved.",
        body:
          "Preview and crop right in your browser. When you generate, the images are used once to create your PNG — never stored in a gallery or database.",
        cta: "Make one now",
      },
    },
    maker: {
      introEyebrow: "The studio",
      heading: "Build your comparison",
      description: "Upload two photos, align each side, choose a frame, then download your PNG.",
      generateCta: "Generate PNG",
      generatingCta: "Generating...",
      controlsAria: "Image and template controls",
      photosTitle: "Photos",
      cropTitle: "Crop",
      styleTitle: "Style",
      before: "Before",
      after: "After",
      beforeImage: "Before image",
      afterImage: "After image",
      upload: "Upload",
      uploadHint: "Click or drop",
      livePreview: "Live preview",
      previewAria: "Before and after template preview",
      dragNote: "Drag a photo to crop.",
      reset: "Reset",
      download: "Download",
      frameFamily: "Frame",
      cropControls: {
        zoom: "Zoom",
        horizontal: "Left/right",
        vertical: "Up/down",
      },
      ratios: {
        wide: "Wide",
        story: "Story",
      },
      status: {
        initial: "Add two photos to start.",
        chooseImage: "Choose an image file.",
        fileTooLarge: "Use an image under 12MB.",
        photoAdded: "Photo added.",
        readFailed: "Could not read that image.",
        previewFailed: "Preview failed.",
        styleChanged: "Style changed.",
        addTwoFirst: "Add two photos first.",
        generating: "Generating...",
        pngReady: "PNG ready.",
        renderFailed: "Render failed. Try again.",
        generateBeforeDownload: "Generate before downloading.",
        downloadStarted: "Download started.",
      },
    },
    templates: {
      eyebrow: "Templates",
      heading: "Clean layouts for any comparison",
      body: "Choose a simple frame. Your photos automatically fill the before and after slots.",
      useButton: "Use",
      useAriaPrefix: "Use",
      names: {
        [templateIds.serifLandscape]: "Serif Line Landscape",
        [templateIds.luxuryLandscape]: "Luxury Caption Landscape",
        [templateIds.editorialLandscape]: "Editorial Tag Landscape",
        [templateIds.serifPortrait]: "Serif Line Portrait",
        [templateIds.luxuryPortrait]: "Luxury Caption Portrait",
        [templateIds.editorialPortrait]: "Editorial Tag Portrait",
      },
    },
    slider: {
      ariaLabel: "Interactive before and after comparison of a room makeover",
      handleLabel: "Drag to compare before and after",
      valueTextSuffix: "before",
    },
    guidesPage: {
      metadata: {
        title: "Before and After Photo Guides | Before & After Photo Maker",
        description:
          "Practical guides for making before and after photos, side-by-side images, progress photos, meaningful comparisons, and careful medical photo layouts.",
      },
      hero: {
        eyebrow: "Guides",
        heading: "Before and after photo guides for real use cases",
        body:
          "Learn when to use a before and after layout, how to make a clear side-by-side photo, and what to watch for with privacy, memories, progress, and sensitive images.",
        makerCta: "Open maker",
      },
      featured: {
        eyebrow: "Start here",
        heading: "Most useful guides",
        body:
          "These pages focus on the workflow behind the image, not borrowed result photos or thin sample pages.",
        cta: "Read guide",
      },
      all: {
        eyebrow: "All guides",
        heading: "Use cases, layout choices, and privacy notes",
        body:
          "A smaller article set gives the site stronger pages and avoids relying on copyrighted or artificial sample images.",
        cta: "Read guide",
      },
      categories: {
        "How-to": "How-to",
        Layout: "Layout",
        "Use cases": "Use cases",
        Privacy: "Privacy",
        Memories: "Memories",
        Progress: "Progress",
      },
      guideSummaries: {},
    },
  },
  jp: {
    common: {
      brandAria: "Before & After Studio",
      brandText: "Before & After",
      languageSwitcherLabel: "言語",
    },
    header: {
      nav: {
        studio: "スタジオ",
        templates: "テンプレート",
        how: "使い方",
        guides: "ガイド",
        about: "概要",
        contact: "お問い合わせ",
        privacy: "プライバシー",
      },
      cta: "作成を始める",
      openMenu: "ナビゲーションを開く",
      closeMenu: "ナビゲーションを閉じる",
    },
    footer: {
      description:
        "2枚の写真から、すっきり共有しやすいBefore & After画像を作成。アカウント不要で、画像は保存されません。",
    },
    home: {
      metadata: {
        title: "無料の Before and After Photo Maker | 横並び写真エディター",
        description:
          "2枚の写真から無料でBefore & After画像や横並び画像を作成。アップロード、位置合わせ、フレーム選択、PNG書き出しまで簡単です。",
      },
      hero: {
        eyebrow: "Before & After Studio",
        headingStart: "無料の",
        headingAccent: "Before and After",
        headingEnd: " Photo Maker",
        freeLine: "2枚の写真を1枚の比較画像に。",
        lead:
          "2枚の写真を横並びの比較画像に仕上げるBefore & After Photo Makerです。アップロード、位置合わせ、フレーム選択、PNG書き出しまで数ステップ。登録不要で、画像がギャラリーに保存されることはありません。",
        primaryCta: "作成を始める",
        secondaryCta: "テンプレートを見る",
        trust: ["アカウント不要", "初期設定でプライベート", "PNGを無料書き出し"],
        floatTitle: "ドラッグして比較",
        floatBody: "変更前 ↔ 変更後",
      },
      how: {
        eyebrow: "使い方",
        heading: "完成まで4ステップ",
        body: "写真を追加し、位置を合わせ、スタイルを選び、ダウンロード。迷わず進められる流れです。",
        steps: [
          { title: "アップロード", body: "変更前と変更後の写真を追加します。" },
          { title: "位置合わせ", body: "それぞれの写真をパン、ズームして揃えます。" },
          { title: "フレーム", body: "用途に合う上品なレイアウトを選びます。" },
          { title: "書き出し", body: "共有しやすい1枚のPNGとして保存します。" },
        ],
      },
      guides: {
        eyebrow: "ガイド",
        heading: "いつ、どう使うかを学ぶ",
        body:
          "横並び写真、個人利用、プライバシー、医療写真への注意、思い出、進捗画像まで、実用的な使い方をまとめています。",
        cta: "ガイドを読む",
        cardCta: "ガイドを読む",
      },
      privacy: {
        eyebrow: "シンプルなプライバシー",
        heading: "アカウント不要。保存もしません。",
        body:
          "プレビューとトリミングはブラウザ上で行えます。生成時の画像はPNG作成に一度だけ使われ、ギャラリーやデータベースに保存されません。",
        cta: "今すぐ作る",
      },
    },
    maker: {
      introEyebrow: "スタジオ",
      heading: "比較画像を作成",
      description: "2枚の写真をアップロードし、左右を整え、フレームを選んでPNGをダウンロードします。",
      generateCta: "PNGを生成",
      generatingCta: "生成中...",
      controlsAria: "画像とテンプレートの操作",
      photosTitle: "写真",
      cropTitle: "トリミング",
      styleTitle: "スタイル",
      before: "変更前",
      after: "変更後",
      beforeImage: "変更前の画像",
      afterImage: "変更後の画像",
      upload: "アップロード",
      uploadHint: "クリックまたはドロップ",
      livePreview: "ライブプレビュー",
      previewAria: "Before & Afterテンプレートのプレビュー",
      dragNote: "写真をドラッグしてトリミングできます。",
      reset: "リセット",
      download: "ダウンロード",
      frameFamily: "フレーム",
      cropControls: {
        zoom: "ズーム",
        horizontal: "左右",
        vertical: "上下",
      },
      ratios: {
        wide: "横長",
        story: "ストーリー",
      },
      status: {
        initial: "まず2枚の写真を追加してください。",
        chooseImage: "画像ファイルを選択してください。",
        fileTooLarge: "12MB未満の画像を使用してください。",
        photoAdded: "写真を追加しました。",
        readFailed: "この画像を読み込めませんでした。",
        previewFailed: "プレビューに失敗しました。",
        styleChanged: "スタイルを変更しました。",
        addTwoFirst: "先に2枚の写真を追加してください。",
        generating: "生成中...",
        pngReady: "PNGの準備ができました。",
        renderFailed: "生成に失敗しました。もう一度お試しください。",
        generateBeforeDownload: "ダウンロード前に生成してください。",
        downloadStarted: "ダウンロードを開始しました。",
      },
    },
    templates: {
      eyebrow: "テンプレート",
      heading: "どんな比較にも合う、すっきりしたレイアウト",
      body: "シンプルなフレームを選ぶだけで、写真が変更前と変更後の枠に収まります。",
      useButton: "使う",
      useAriaPrefix: "使用するテンプレート",
      names: {
        [templateIds.serifLandscape]: "セリフライン 横長",
        [templateIds.luxuryLandscape]: "ラグジュアリーキャプション 横長",
        [templateIds.editorialLandscape]: "エディトリアルタグ 横長",
        [templateIds.serifPortrait]: "セリフライン 縦長",
        [templateIds.luxuryPortrait]: "ラグジュアリーキャプション 縦長",
        [templateIds.editorialPortrait]: "エディトリアルタグ 縦長",
      },
    },
    slider: {
      ariaLabel: "部屋の変化を比較するインタラクティブなBefore & After",
      handleLabel: "ドラッグして変更前と変更後を比較",
      valueTextSuffix: "変更前",
    },
    guidesPage: {
      metadata: {
        title: "Before and After写真ガイド | Before & After Photo Maker",
        description:
          "Before & After写真、横並び画像、進捗写真、思い出の比較、医療写真レイアウトの注意点をまとめた実用ガイド。",
      },
      hero: {
        eyebrow: "ガイド",
        heading: "実用シーン向けBefore & After写真ガイド",
        body:
          "Before & Afterレイアウトを使うタイミング、見やすい横並び写真の作り方、プライバシーや繊細な画像で注意すべき点を学べます。",
        makerCta: "メーカーを開く",
      },
      featured: {
        eyebrow: "まずはこちら",
        heading: "特に役立つガイド",
        body: "借り物の結果写真ではなく、画像を作るワークフローに焦点を当てたページです。",
        cta: "ガイドを読む",
      },
      all: {
        eyebrow: "すべてのガイド",
        heading: "用途、レイアウト選び、プライバシーの注意点",
        body: "少数の実用的な記事に絞り、薄いサンプルページではなく強いページ構成にしています。",
        cta: "ガイドを読む",
      },
      categories: {
        "How-to": "作り方",
        Layout: "レイアウト",
        "Use cases": "用途",
        Privacy: "プライバシー",
        Memories: "思い出",
        Progress: "進捗",
      },
      guideSummaries: {},
    },
  },
  kr: {
    common: {
      brandAria: "Before & After Studio",
      brandText: "Before & After",
      languageSwitcherLabel: "언어",
    },
    header: {
      nav: {
        studio: "스튜디오",
        templates: "템플릿",
        how: "사용 방법",
        guides: "가이드",
        about: "소개",
        contact: "문의",
        privacy: "개인정보",
      },
      cta: "만들기 시작",
      openMenu: "내비게이션 열기",
      closeMenu: "내비게이션 닫기",
    },
    footer: {
      description:
        "사진 두 장으로 깔끔하게 공유할 수 있는 Before & After 이미지를 만드세요. 계정이 필요 없고 이미지는 저장되지 않습니다.",
    },
    home: {
      metadata: {
        title: "무료 Before and After Photo Maker | 나란히 비교 사진 편집기",
        description:
          "사진 두 장으로 Before & After 이미지나 나란히 비교 이미지를 무료로 만드세요. 업로드, 정렬, 프레임 선택, PNG 내보내기까지 간단합니다.",
      },
      hero: {
        eyebrow: "Before & After Studio",
        headingStart: "무료",
        headingAccent: "Before and After",
        headingEnd: " Photo Maker",
        freeLine: "사진 두 장을 하나의 비교 이미지로.",
        lead:
          "사진 두 장으로 나란히 비교 이미지를 만드는 Before & After Photo Maker입니다. 업로드하고, 맞추고, 프레임을 고른 뒤 완성된 PNG를 내보내세요. 가입은 필요 없고 이미지는 갤러리에 저장되지 않습니다.",
        primaryCta: "만들기 시작",
        secondaryCta: "템플릿 보기",
        trust: ["계정 불필요", "기본적으로 비공개", "무료 PNG 내보내기"],
        floatTitle: "드래그해서 비교",
        floatBody: "전 ↔ 후",
      },
      how: {
        eyebrow: "사용 방법",
        heading: "처음부터 완성까지 네 단계",
        body: "사진을 추가하고, 위치를 맞추고, 스타일을 고른 뒤 다운로드합니다. 흐름은 단순하게 유지됩니다.",
        steps: [
          { title: "업로드", body: "전후 비교할 사진 두 장을 추가합니다." },
          { title: "정렬", body: "각 사진을 이동하고 확대해 자연스럽게 맞춥니다." },
          { title: "프레임", body: "용도에 맞는 깔끔한 레이아웃을 선택합니다." },
          { title: "내보내기", body: "공유하기 좋은 완성 PNG 한 장을 다운로드합니다." },
        ],
      },
      guides: {
        eyebrow: "가이드",
        heading: "언제, 어떻게 레이아웃을 쓰는지 알아보기",
        body:
          "나란히 비교 사진, 개인 사용 사례, 개인정보, 의료 사진 주의점, 추억, 진행 이미지까지 실용적인 내용을 다룹니다.",
        cta: "가이드 읽기",
        cardCta: "가이드 읽기",
      },
      privacy: {
        eyebrow: "간단한 개인정보 보호",
        heading: "계정 없음. 저장 없음.",
        body:
          "미리보기와 자르기는 브라우저에서 진행됩니다. 생성 시 이미지는 PNG를 만들기 위해 한 번만 사용되며 갤러리나 데이터베이스에 저장되지 않습니다.",
        cta: "지금 만들기",
      },
    },
    maker: {
      introEyebrow: "스튜디오",
      heading: "비교 이미지 만들기",
      description: "사진 두 장을 업로드하고, 각 영역을 맞춘 뒤 프레임을 선택해 PNG를 다운로드하세요.",
      generateCta: "PNG 생성",
      generatingCta: "생성 중...",
      controlsAria: "이미지와 템플릿 설정",
      photosTitle: "사진",
      cropTitle: "자르기",
      styleTitle: "스타일",
      before: "전",
      after: "후",
      beforeImage: "전 이미지",
      afterImage: "후 이미지",
      upload: "업로드",
      uploadHint: "클릭 또는 드롭",
      livePreview: "실시간 미리보기",
      previewAria: "Before & After 템플릿 미리보기",
      dragNote: "사진을 드래그해 자르기를 조정하세요.",
      reset: "초기화",
      download: "다운로드",
      frameFamily: "프레임",
      cropControls: {
        zoom: "확대",
        horizontal: "좌우",
        vertical: "상하",
      },
      ratios: {
        wide: "와이드",
        story: "스토리",
      },
      status: {
        initial: "시작하려면 사진 두 장을 추가하세요.",
        chooseImage: "이미지 파일을 선택하세요.",
        fileTooLarge: "12MB 이하의 이미지를 사용하세요.",
        photoAdded: "사진이 추가되었습니다.",
        readFailed: "이 이미지를 읽을 수 없습니다.",
        previewFailed: "미리보기에 실패했습니다.",
        styleChanged: "스타일이 변경되었습니다.",
        addTwoFirst: "먼저 사진 두 장을 추가하세요.",
        generating: "생성 중...",
        pngReady: "PNG가 준비되었습니다.",
        renderFailed: "생성에 실패했습니다. 다시 시도하세요.",
        generateBeforeDownload: "다운로드 전에 먼저 생성하세요.",
        downloadStarted: "다운로드가 시작되었습니다.",
      },
    },
    templates: {
      eyebrow: "템플릿",
      heading: "어떤 비교에도 어울리는 깔끔한 레이아웃",
      body: "간단한 프레임을 선택하면 사진이 전후 슬롯에 자동으로 채워집니다.",
      useButton: "사용",
      useAriaPrefix: "사용할 템플릿",
      names: {
        [templateIds.serifLandscape]: "세리프 라인 가로형",
        [templateIds.luxuryLandscape]: "럭셔리 캡션 가로형",
        [templateIds.editorialLandscape]: "에디토리얼 태그 가로형",
        [templateIds.serifPortrait]: "세리프 라인 세로형",
        [templateIds.luxuryPortrait]: "럭셔리 캡션 세로형",
        [templateIds.editorialPortrait]: "에디토리얼 태그 세로형",
      },
    },
    slider: {
      ariaLabel: "방 변화 전후를 비교하는 인터랙티브 슬라이더",
      handleLabel: "드래그해서 전후를 비교",
      valueTextSuffix: "전",
    },
    guidesPage: {
      metadata: {
        title: "Before & After 사진 가이드 | Before & After Photo Maker",
        description:
          "Before & After 사진, 나란히 비교 이미지, 진행 사진, 의미 있는 비교, 의료 사진 레이아웃 주의점을 다루는 실용 가이드입니다.",
      },
      hero: {
        eyebrow: "가이드",
        heading: "실제 사용 사례를 위한 Before & After 사진 가이드",
        body:
          "전후 레이아웃을 언제 써야 하는지, 명확한 나란히 비교 사진을 어떻게 만드는지, 개인정보와 민감한 이미지에서 무엇을 주의해야 하는지 알아보세요.",
        makerCta: "메이커 열기",
      },
      featured: {
        eyebrow: "여기서 시작",
        heading: "가장 유용한 가이드",
        body: "빌려온 결과 사진이 아니라 이미지 제작 흐름에 초점을 둔 페이지입니다.",
        cta: "가이드 읽기",
      },
      all: {
        eyebrow: "모든 가이드",
        heading: "사용 사례, 레이아웃 선택, 개인정보 주의점",
        body: "작은 기사 묶음으로 더 탄탄한 페이지를 만들고, 저작권이 불확실한 샘플 이미지 의존을 줄입니다.",
        cta: "가이드 읽기",
      },
      categories: {
        "How-to": "사용 방법",
        Layout: "레이아웃",
        "Use cases": "사용 사례",
        Privacy: "개인정보",
        Memories: "추억",
        Progress: "진행",
      },
      guideSummaries: {},
    },
  },
  ar: {
    common: {
      brandAria: "Before & After Studio",
      brandText: "Before & After",
      languageSwitcherLabel: "اللغة",
    },
    header: {
      nav: {
        studio: "الاستوديو",
        templates: "القوالب",
        how: "طريقة العمل",
        guides: "الأدلة",
        about: "من نحن",
        contact: "اتصل بنا",
        privacy: "الخصوصية",
      },
      cta: "ابدأ الإنشاء",
      openMenu: "فتح التنقل",
      closeMenu: "إغلاق التنقل",
    },
    footer: {
      description:
        "أنشئ صور Before & After واضحة وقابلة للمشاركة من صورتين. دون حساب، ودون حفظ الصور.",
    },
    home: {
      metadata: {
        title: "Before and After Photo Maker مجاني | محرر صور المقارنة",
        description:
          "أنشئ صورة Before & After مجانية أو صورة مقارنة جنبًا إلى جنب من صورتين. ارفع الصور، واضبط المحاذاة، واختر إطارًا نظيفًا، ثم صدّر PNG.",
      },
      hero: {
        eyebrow: "Before & After Studio",
        headingStart: "مجانًا",
        headingAccent: "Before and After",
        headingEnd: " Photo Maker",
        freeLine: "حوّل صورتين إلى صورة مقارنة واحدة.",
        lead:
          "استخدم Before & After Photo Maker لإنشاء صورة مقارنة جنبًا إلى جنب من صورتين. ارفع الصور، واضبطها، واختر الإطار، ثم صدّر ملف PNG مصقولًا. لا حاجة للتسجيل، ولا يتم حفظ أي شيء في معرض.",
        primaryCta: "ابدأ الإنشاء",
        secondaryCta: "تصفح القوالب",
        trust: ["بدون حساب", "خصوصية افتراضية", "تصدير PNG مجاني"],
        floatTitle: "اسحب للمقارنة",
        floatBody: "قبل ↔ بعد",
      },
      how: {
        eyebrow: "طريقة العمل",
        heading: "أربع خطوات من البداية إلى النهاية",
        body: "أضف الصور، واضبط المحاذاة، واختر النمط، ثم نزّل النتيجة. يبقى المسار واضحًا.",
        steps: [
          { title: "رفع", body: "أضف صورتي قبل وبعد." },
          { title: "محاذاة", body: "حرّك وكبّر كل جانب حتى يتطابق بصريًا." },
          { title: "إطار", body: "اختر تخطيطًا أنيقًا يناسب الاستخدام." },
          { title: "تصدير", body: "نزّل صورة PNG مصقولة وجاهزة للمشاركة." },
        ],
      },
      guides: {
        eyebrow: "الأدلة",
        heading: "تعرّف إلى وقت استخدام التخطيط وطريقته",
        body:
          "مقالات عملية عن الصور جنبًا إلى جنب، وحالات الاستخدام الشخصية، والخصوصية، والحذر مع الصور الطبية، والذكريات، وصور التقدم.",
        cta: "اقرأ الأدلة",
        cardCta: "اقرأ الدليل",
      },
      privacy: {
        eyebrow: "خصوصية بسيطة",
        heading: "لا حساب. لا حفظ.",
        body:
          "يمكنك المعاينة والقص داخل المتصفح. عند الإنشاء، تُستخدم الصور مرة واحدة لإنشاء PNG فقط، ولا تُحفظ في معرض أو قاعدة بيانات.",
        cta: "أنشئ الآن",
      },
    },
    maker: {
      introEyebrow: "الاستوديو",
      heading: "أنشئ المقارنة",
      description: "ارفع صورتين، واضبط كل جانب، واختر إطارًا، ثم نزّل ملف PNG.",
      generateCta: "إنشاء PNG",
      generatingCta: "جارٍ الإنشاء...",
      controlsAria: "عناصر التحكم في الصور والقوالب",
      photosTitle: "الصور",
      cropTitle: "القص",
      styleTitle: "النمط",
      before: "قبل",
      after: "بعد",
      beforeImage: "صورة قبل",
      afterImage: "صورة بعد",
      upload: "رفع",
      uploadHint: "انقر أو أفلت الملف",
      livePreview: "معاينة مباشرة",
      previewAria: "معاينة قالب قبل وبعد",
      dragNote: "اسحب الصورة لضبط القص.",
      reset: "إعادة ضبط",
      download: "تنزيل",
      frameFamily: "إطار",
      cropControls: {
        zoom: "تكبير",
        horizontal: "يمين/يسار",
        vertical: "أعلى/أسفل",
      },
      ratios: {
        wide: "عريض",
        story: "ستوري",
      },
      status: {
        initial: "أضف صورتين للبدء.",
        chooseImage: "اختر ملف صورة.",
        fileTooLarge: "استخدم صورة أقل من 12MB.",
        photoAdded: "تمت إضافة الصورة.",
        readFailed: "تعذرت قراءة هذه الصورة.",
        previewFailed: "فشلت المعاينة.",
        styleChanged: "تم تغيير النمط.",
        addTwoFirst: "أضف صورتين أولًا.",
        generating: "جارٍ الإنشاء...",
        pngReady: "ملف PNG جاهز.",
        renderFailed: "فشل الإنشاء. حاول مرة أخرى.",
        generateBeforeDownload: "أنشئ الصورة قبل التنزيل.",
        downloadStarted: "بدأ التنزيل.",
      },
    },
    templates: {
      eyebrow: "القوالب",
      heading: "تخطيطات نظيفة لأي مقارنة",
      body: "اختر إطارًا بسيطًا، وستملأ صورك خانات قبل وبعد تلقائيًا.",
      useButton: "استخدم",
      useAriaPrefix: "استخدم قالب",
      names: {
        [templateIds.serifLandscape]: "خط Serif أفقي",
        [templateIds.luxuryLandscape]: "تعليق فاخر أفقي",
        [templateIds.editorialLandscape]: "وسم تحريري أفقي",
        [templateIds.serifPortrait]: "خط Serif عمودي",
        [templateIds.luxuryPortrait]: "تعليق فاخر عمودي",
        [templateIds.editorialPortrait]: "وسم تحريري عمودي",
      },
    },
    slider: {
      ariaLabel: "مقارنة تفاعلية قبل وبعد لتجديد غرفة",
      handleLabel: "اسحب للمقارنة بين قبل وبعد",
      valueTextSuffix: "قبل",
    },
    guidesPage: {
      metadata: {
        title: "أدلة صور Before & After | Before & After Photo Maker",
        description:
          "أدلة عملية لإنشاء صور Before & After، وصور جنبًا إلى جنب، وصور تقدم، ومقارنات ذات معنى، وتخطيطات صور طبية بحذر.",
      },
      hero: {
        eyebrow: "الأدلة",
        heading: "أدلة صور Before & After لاستخدامات حقيقية",
        body:
          "تعرّف متى تستخدم تخطيط قبل وبعد، وكيف تنشئ صورة مقارنة واضحة، وما الذي يجب الانتباه له في الخصوصية والذكريات والتقدم والصور الحساسة.",
        makerCta: "افتح الأداة",
      },
      featured: {
        eyebrow: "ابدأ هنا",
        heading: "الأدلة الأكثر فائدة",
        body: "تركّز هذه الصفحات على سير عمل الصورة، لا على صور نتائج مستعارة أو صفحات عينة ضعيفة.",
        cta: "اقرأ الدليل",
      },
      all: {
        eyebrow: "كل الأدلة",
        heading: "حالات الاستخدام وخيارات التخطيط وملاحظات الخصوصية",
        body: "مجموعة أصغر من المقالات تمنح الموقع صفحات أقوى وتقلل الاعتماد على صور عينات اصطناعية أو محمية.",
        cta: "اقرأ الدليل",
      },
      categories: {
        "How-to": "طريقة الاستخدام",
        Layout: "التخطيط",
        "Use cases": "حالات الاستخدام",
        Privacy: "الخصوصية",
        Memories: "الذكريات",
        Progress: "التقدم",
      },
      guideSummaries: {},
    },
  },
  fr: {
    common: {
      brandAria: "Before & After Studio",
      brandText: "Before & After",
      languageSwitcherLabel: "Langue",
    },
    header: {
      nav: {
        studio: "Studio",
        templates: "Modèles",
        how: "Fonctionnement",
        guides: "Guides",
        about: "À propos",
        contact: "Contact",
        privacy: "Confidentialité",
      },
      cta: "Commencer",
      openMenu: "Ouvrir la navigation",
      closeMenu: "Fermer la navigation",
    },
    footer: {
      description:
        "Créez des images Before & After nettes et faciles à partager à partir de deux photos. Sans compte, rien n'est stocké.",
    },
    home: {
      metadata: {
        title: "Before and After Photo Maker gratuit | Éditeur photo côte à côte",
        description:
          "Créez gratuitement une image Before & After ou une comparaison côte à côte à partir de deux photos. Importez, alignez, choisissez un cadre et exportez un PNG.",
      },
      hero: {
        eyebrow: "Before & After Studio",
        headingStart: "Gratuit",
        headingAccent: "Before and After",
        headingEnd: " Photo Maker",
        freeLine: "Transformez deux photos en une comparaison nette.",
        lead:
          "Utilisez Before & After Photo Maker pour créer une image côte à côte à partir de deux photos. Importez, alignez, encadrez et exportez un PNG soigné. Aucun compte requis, et rien n'est enregistré dans une galerie.",
        primaryCta: "Commencer",
        secondaryCta: "Voir les modèles",
        trust: ["Sans compte", "Privé par défaut", "Export PNG gratuit"],
        floatTitle: "Faites glisser pour comparer",
        floatBody: "Avant ↔ Après",
      },
      how: {
        eyebrow: "Fonctionnement",
        heading: "Quatre étapes, du début à la fin",
        body: "Ajoutez les photos, alignez-les, choisissez un style, puis téléchargez. Le flux reste évident.",
        steps: [
          { title: "Importer", body: "Ajoutez vos photos avant et après." },
          { title: "Aligner", body: "Déplacez et zoomez chaque côté jusqu'à ce que tout corresponde." },
          { title: "Encadrer", body: "Choisissez une mise en page éditoriale adaptée." },
          { title: "Exporter", body: "Téléchargez un PNG propre et prêt à partager." },
        ],
      },
      guides: {
        eyebrow: "Guides",
        heading: "Apprendre quand et comment utiliser la mise en page",
        body:
          "Des articles pratiques couvrent les photos côte à côte, les usages personnels, la confidentialité, les précautions médicales, les souvenirs et les images de progression.",
        cta: "Lire les guides",
        cardCta: "Lire le guide",
      },
      privacy: {
        eyebrow: "Confidentialité simple",
        heading: "Pas de compte. Rien n'est enregistré.",
        body:
          "Prévisualisez et recadrez directement dans votre navigateur. Lors de la génération, les images servent une seule fois à créer le PNG, sans galerie ni base de données.",
        cta: "Créer maintenant",
      },
    },
    maker: {
      introEyebrow: "Le studio",
      heading: "Construisez votre comparaison",
      description: "Importez deux photos, alignez chaque côté, choisissez un cadre, puis téléchargez votre PNG.",
      generateCta: "Générer le PNG",
      generatingCta: "Génération...",
      controlsAria: "Contrôles d'image et de modèle",
      photosTitle: "Photos",
      cropTitle: "Recadrage",
      styleTitle: "Style",
      before: "Avant",
      after: "Après",
      beforeImage: "Image avant",
      afterImage: "Image après",
      upload: "Importer",
      uploadHint: "Cliquez ou déposez",
      livePreview: "Aperçu en direct",
      previewAria: "Aperçu du modèle avant après",
      dragNote: "Faites glisser une photo pour la recadrer.",
      reset: "Réinitialiser",
      download: "Télécharger",
      frameFamily: "Cadre",
      cropControls: {
        zoom: "Zoom",
        horizontal: "Gauche/droite",
        vertical: "Haut/bas",
      },
      ratios: {
        wide: "Large",
        story: "Story",
      },
      status: {
        initial: "Ajoutez deux photos pour commencer.",
        chooseImage: "Choisissez un fichier image.",
        fileTooLarge: "Utilisez une image de moins de 12MB.",
        photoAdded: "Photo ajoutée.",
        readFailed: "Impossible de lire cette image.",
        previewFailed: "L'aperçu a échoué.",
        styleChanged: "Style modifié.",
        addTwoFirst: "Ajoutez d'abord deux photos.",
        generating: "Génération...",
        pngReady: "PNG prêt.",
        renderFailed: "La génération a échoué. Réessayez.",
        generateBeforeDownload: "Générez l'image avant de la télécharger.",
        downloadStarted: "Téléchargement lancé.",
      },
    },
    templates: {
      eyebrow: "Modèles",
      heading: "Des mises en page nettes pour toute comparaison",
      body: "Choisissez un cadre simple. Vos photos remplissent automatiquement les zones avant et après.",
      useButton: "Utiliser",
      useAriaPrefix: "Utiliser",
      names: {
        [templateIds.serifLandscape]: "Ligne serif paysage",
        [templateIds.luxuryLandscape]: "Légende élégante paysage",
        [templateIds.editorialLandscape]: "Étiquette éditoriale paysage",
        [templateIds.serifPortrait]: "Ligne serif portrait",
        [templateIds.luxuryPortrait]: "Légende élégante portrait",
        [templateIds.editorialPortrait]: "Étiquette éditoriale portrait",
      },
    },
    slider: {
      ariaLabel: "Comparaison interactive avant après d'une pièce rénovée",
      handleLabel: "Faire glisser pour comparer avant et après",
      valueTextSuffix: "avant",
    },
    guidesPage: {
      metadata: {
        title: "Guides photo Before & After | Before & After Photo Maker",
        description:
          "Guides pratiques pour créer des photos Before & After, des images côte à côte, des photos de progression, des comparaisons utiles et des mises en page médicales prudentes.",
      },
      hero: {
        eyebrow: "Guides",
        heading: "Guides avant après pour des cas d'usage réels",
        body:
          "Apprenez quand utiliser une mise en page avant après, comment créer une photo côte à côte claire, et quoi surveiller pour la confidentialité, les souvenirs, la progression et les images sensibles.",
        makerCta: "Ouvrir l'outil",
      },
      featured: {
        eyebrow: "Commencer ici",
        heading: "Les guides les plus utiles",
        body: "Ces pages se concentrent sur le flux de travail derrière l'image, pas sur des résultats empruntés.",
        cta: "Lire le guide",
      },
      all: {
        eyebrow: "Tous les guides",
        heading: "Usages, choix de mise en page et notes de confidentialité",
        body: "Un ensemble d'articles plus réduit crée des pages plus solides et évite de dépendre d'images d'exemple artificielles ou protégées.",
        cta: "Lire le guide",
      },
      categories: {
        "How-to": "Tutoriel",
        Layout: "Mise en page",
        "Use cases": "Usages",
        Privacy: "Confidentialité",
        Memories: "Souvenirs",
        Progress: "Progression",
      },
      guideSummaries: {},
    },
  },
  es: {
    common: {
      brandAria: "Before & After Studio",
      brandText: "Before & After",
      languageSwitcherLabel: "Idioma",
    },
    header: {
      nav: {
        studio: "Estudio",
        templates: "Plantillas",
        how: "Cómo funciona",
        guides: "Guías",
        about: "Acerca de",
        contact: "Contacto",
        privacy: "Privacidad",
      },
      cta: "Empezar",
      openMenu: "Abrir navegación",
      closeMenu: "Cerrar navegación",
    },
    footer: {
      description:
        "Crea imágenes Before & After limpias y fáciles de compartir a partir de dos fotos. Sin cuenta y sin guardar nada.",
    },
    home: {
      metadata: {
        title: "Before and After Photo Maker gratis | Editor de fotos lado a lado",
        description:
          "Crea gratis una imagen Before & After o una comparación lado a lado con dos fotos. Sube, alinea, elige un marco y exporta un PNG.",
      },
      hero: {
        eyebrow: "Before & After Studio",
        headingStart: "Gratis",
        headingAccent: "Before and After",
        headingEnd: " Photo Maker",
        freeLine: "Convierte dos fotos en una comparación clara.",
        lead:
          "Usa Before & After Photo Maker para crear una imagen lado a lado con dos fotos. Sube, alinea, enmarca y exporta un PNG pulido. No necesitas registrarte y nada se guarda en una galería.",
        primaryCta: "Empezar",
        secondaryCta: "Ver plantillas",
        trust: ["Sin cuenta", "Privado por defecto", "Exportación PNG gratis"],
        floatTitle: "Arrastra para comparar",
        floatBody: "Antes ↔ Después",
      },
      how: {
        eyebrow: "Cómo funciona",
        heading: "Cuatro pasos de principio a fin",
        body: "Añade fotos, alinéelas, elige un estilo y descarga. El flujo se mantiene claro.",
        steps: [
          { title: "Sube", body: "Añade tus fotos de antes y después." },
          { title: "Alinea", body: "Mueve y acerca cada lado hasta que encaje." },
          { title: "Enmarca", body: "Elige un diseño editorial que funcione." },
          { title: "Exporta", body: "Descarga un PNG pulido y listo para compartir." },
        ],
      },
      guides: {
        eyebrow: "Guías",
        heading: "Aprende cuándo y cómo usar el diseño",
        body:
          "Artículos prácticos sobre fotos lado a lado, usos personales, privacidad, cautela con fotos médicas, recuerdos e imágenes de progreso.",
        cta: "Leer guías",
        cardCta: "Leer guía",
      },
      privacy: {
        eyebrow: "Privacidad simple",
        heading: "Sin cuenta. Nada guardado.",
        body:
          "Previsualiza y recorta directamente en el navegador. Al generar, las imágenes se usan una vez para crear tu PNG y no se guardan en una galería ni en una base de datos.",
        cta: "Crear ahora",
      },
    },
    maker: {
      introEyebrow: "El estudio",
      heading: "Crea tu comparación",
      description: "Sube dos fotos, alinea cada lado, elige un marco y descarga tu PNG.",
      generateCta: "Generar PNG",
      generatingCta: "Generando...",
      controlsAria: "Controles de imagen y plantilla",
      photosTitle: "Fotos",
      cropTitle: "Recorte",
      styleTitle: "Estilo",
      before: "Antes",
      after: "Después",
      beforeImage: "Imagen de antes",
      afterImage: "Imagen de después",
      upload: "Subir",
      uploadHint: "Haz clic o arrastra",
      livePreview: "Vista previa en vivo",
      previewAria: "Vista previa de plantilla antes y después",
      dragNote: "Arrastra una foto para recortarla.",
      reset: "Restablecer",
      download: "Descargar",
      frameFamily: "Marco",
      cropControls: {
        zoom: "Zoom",
        horizontal: "Izquierda/derecha",
        vertical: "Arriba/abajo",
      },
      ratios: {
        wide: "Ancho",
        story: "Historia",
      },
      status: {
        initial: "Añade dos fotos para empezar.",
        chooseImage: "Elige un archivo de imagen.",
        fileTooLarge: "Usa una imagen de menos de 12MB.",
        photoAdded: "Foto añadida.",
        readFailed: "No se pudo leer esa imagen.",
        previewFailed: "Falló la vista previa.",
        styleChanged: "Estilo cambiado.",
        addTwoFirst: "Añade primero dos fotos.",
        generating: "Generando...",
        pngReady: "PNG listo.",
        renderFailed: "Falló la generación. Inténtalo de nuevo.",
        generateBeforeDownload: "Genera antes de descargar.",
        downloadStarted: "Descarga iniciada.",
      },
    },
    templates: {
      eyebrow: "Plantillas",
      heading: "Diseños limpios para cualquier comparación",
      body: "Elige un marco simple. Tus fotos llenan automáticamente los espacios de antes y después.",
      useButton: "Usar",
      useAriaPrefix: "Usar",
      names: {
        [templateIds.serifLandscape]: "Línea serif horizontal",
        [templateIds.luxuryLandscape]: "Subtítulo elegante horizontal",
        [templateIds.editorialLandscape]: "Etiqueta editorial horizontal",
        [templateIds.serifPortrait]: "Línea serif vertical",
        [templateIds.luxuryPortrait]: "Subtítulo elegante vertical",
        [templateIds.editorialPortrait]: "Etiqueta editorial vertical",
      },
    },
    slider: {
      ariaLabel: "Comparación interactiva de antes y después de una habitación renovada",
      handleLabel: "Arrastra para comparar antes y después",
      valueTextSuffix: "antes",
    },
    guidesPage: {
      metadata: {
        title: "Guías de fotos Before & After | Before & After Photo Maker",
        description:
          "Guías prácticas para crear fotos Before & After, imágenes lado a lado, fotos de progreso, comparaciones significativas y diseños médicos cuidadosos.",
      },
      hero: {
        eyebrow: "Guías",
        heading: "Guías de fotos antes y después para casos reales",
        body:
          "Aprende cuándo usar un diseño antes y después, cómo crear una foto lado a lado clara y qué cuidar con privacidad, recuerdos, progreso e imágenes sensibles.",
        makerCta: "Abrir editor",
      },
      featured: {
        eyebrow: "Empieza aquí",
        heading: "Guías más útiles",
        body: "Estas páginas se centran en el flujo detrás de la imagen, no en resultados prestados ni páginas de muestra débiles.",
        cta: "Leer guía",
      },
      all: {
        eyebrow: "Todas las guías",
        heading: "Usos, decisiones de diseño y notas de privacidad",
        body: "Un conjunto de artículos más pequeño crea páginas más fuertes y evita depender de imágenes de muestra protegidas o artificiales.",
        cta: "Leer guía",
      },
      categories: {
        "How-to": "Tutorial",
        Layout: "Diseño",
        "Use cases": "Usos",
        Privacy: "Privacidad",
        Memories: "Recuerdos",
        Progress: "Progreso",
      },
      guideSummaries: {},
    },
  },
};

const localizedGuideSummaries: Record<Exclude<Locale, "en">, Record<string, GuideSummary>> = {
  jp: {
    "how-to-make-a-before-and-after-photo": {
      category: "作り方",
      h1: "Before & After写真の作り方",
      description: "2枚の写真から、フレーム、位置合わせ、ラベル、PNG書き出しまで含めて見やすい比較画像を作る方法。",
    },
    "side-by-side-photo-vs-before-after-photo": {
      category: "レイアウト",
      h1: "横並び写真とBefore & After写真の違い",
      description: "横並び比較を使う場面、Before & Afterと呼ぶ場面、見やすい比較レイアウトの選び方を整理します。",
    },
    "before-and-after-photo-use-cases": {
      category: "用途",
      h1: "Before & After写真の活用例",
      description: "住まい、修理、編集、思い出、個人記録、小規模サービス投稿などの実用的な使い方。",
    },
    "medical-before-and-after-photo-guidelines": {
      category: "プライバシー",
      h1: "医療・美容のBefore & After写真で注意すること",
      description: "医療や美容写真を並べるときのプライバシー、同意、ラベル、慎重な表現に関する一般的なガイド。",
    },
    "meaningful-before-and-after-photo-ideas": {
      category: "思い出",
      h1: "意味のあるBefore & After写真アイデア",
      description: "家族、ペット、引っ越し、旅行、古い写真など、思い出や節目を残すための比較アイデア。",
    },
    "progress-photo-ideas": {
      category: "進捗",
      h1: "進捗写真のアイデア",
      description: "フィットネス、習慣、学習、スタイル、プロジェクトを誠実に記録するための進捗写真アイデア。",
    },
  },
  kr: {
    "how-to-make-a-before-and-after-photo": {
      category: "사용 방법",
      h1: "Before & After 사진 만드는 방법",
      description: "사진 두 장으로 프레임, 정렬, 라벨, PNG 내보내기까지 포함한 명확한 전후 비교 이미지를 만드는 방법입니다.",
    },
    "side-by-side-photo-vs-before-after-photo": {
      category: "레이아웃",
      h1: "나란히 사진과 Before & After 사진의 차이",
      description: "언제 나란히 비교를 쓰고, 언제 전후 사진이라고 부르는지, 가장 명확한 비교 레이아웃을 고르는 방법입니다.",
    },
    "before-and-after-photo-use-cases": {
      category: "사용 사례",
      h1: "Before & After 사진 사용 사례",
      description: "집 프로젝트, 수리, 편집, 추억, 개인 기록, 작은 서비스 게시물에 쓸 수 있는 실용적인 사례입니다.",
    },
    "medical-before-and-after-photo-guidelines": {
      category: "개인정보",
      h1: "의료 Before & After 사진 가이드",
      description: "의료 및 미용 사진을 배열할 때 개인정보, 동의, 라벨, 신중한 표현을 다루는 일반 가이드입니다.",
    },
    "meaningful-before-and-after-photo-ideas": {
      category: "추억",
      h1: "의미 있는 Before & After 사진 아이디어",
      description: "가족, 반려동물, 이사, 여행, 오래된 사진처럼 개인적인 변화와 추억을 담는 비교 아이디어입니다.",
    },
    "progress-photo-ideas": {
      category: "진행",
      h1: "진행 사진 아이디어",
      description: "운동, 습관, 학습, 스타일 변화, 프로젝트를 과장 없이 기록하기 위한 진행 사진 아이디어입니다.",
    },
  },
  ar: {
    "how-to-make-a-before-and-after-photo": {
      category: "طريقة الاستخدام",
      h1: "كيفية إنشاء صورة Before & After",
      description: "طريقة إنشاء صورة مقارنة واضحة من صورتين مع إطار ومحاذاة وتسميات وتصدير PNG.",
    },
    "side-by-side-photo-vs-before-after-photo": {
      category: "التخطيط",
      h1: "الصورة جنبًا إلى جنب مقابل صورة Before & After",
      description: "متى تستخدم صورة جنبًا إلى جنب، ومتى تسميها قبل وبعد، وكيف تختار أوضح تخطيط للمقارنة.",
    },
    "before-and-after-photo-use-cases": {
      category: "حالات الاستخدام",
      h1: "حالات استخدام صور Before & After",
      description: "أمثلة عملية للمنزل والإصلاحات والتعديلات والذكريات والسجلات الشخصية ومنشورات الخدمات الصغيرة.",
    },
    "medical-before-and-after-photo-guidelines": {
      category: "الخصوصية",
      h1: "إرشادات صور Before & After الطبية",
      description: "دليل عام حول الخصوصية والموافقة والتسميات واللغة الحذرة عند ترتيب صور طبية أو تجميلية.",
    },
    "meaningful-before-and-after-photo-ideas": {
      category: "الذكريات",
      h1: "أفكار ذات معنى لصور Before & After",
      description: "أفكار للذكريات والعائلة والحيوانات الأليفة والانتقال والسفر والصور القديمة والمحطات الشخصية.",
    },
    "progress-photo-ideas": {
      category: "التقدم",
      h1: "أفكار لصور التقدم",
      description: "أفكار عملية لصور تقدم في اللياقة والعادات والتعلم وتغييرات الأسلوب والمشاريع دون مبالغة.",
    },
  },
  fr: {
    "how-to-make-a-before-and-after-photo": {
      category: "Tutoriel",
      h1: "Comment créer une photo avant après",
      description: "Créer une comparaison claire avec deux photos, un cadrage simple, des libellés lisibles et un export PNG.",
    },
    "side-by-side-photo-vs-before-after-photo": {
      category: "Mise en page",
      h1: "Photo côte à côte ou photo avant après",
      description: "Comprendre quand utiliser une comparaison côte à côte, quand parler d'avant après et comment choisir la mise en page la plus claire.",
    },
    "before-and-after-photo-use-cases": {
      category: "Usages",
      h1: "Cas d'usage des photos avant après",
      description: "Usages pratiques pour maison, réparations, retouches, souvenirs, archives personnelles et petits posts de service.",
    },
    "medical-before-and-after-photo-guidelines": {
      category: "Confidentialité",
      h1: "Bonnes pratiques pour les photos avant après médicales",
      description: "Guide général sur confidentialité, consentement, libellés et formulation prudente pour les photos médicales ou esthétiques.",
    },
    "meaningful-before-and-after-photo-ideas": {
      category: "Souvenirs",
      h1: "Idées de photos avant après qui ont du sens",
      description: "Idées simples pour souvenirs, famille, animaux, déménagements, voyages, anciennes photos et moments personnels.",
    },
    "progress-photo-ideas": {
      category: "Progression",
      h1: "Idées de photos de progression",
      description: "Idées pratiques pour fitness, habitudes, apprentissage, style, projets et étapes personnelles sans exagérer les résultats.",
    },
  },
  es: {
    "how-to-make-a-before-and-after-photo": {
      category: "Tutorial",
      h1: "Cómo crear una foto antes y después",
      description: "Crea una comparación clara con dos fotos, encuadre simple, etiquetas legibles y exportación PNG.",
    },
    "side-by-side-photo-vs-before-after-photo": {
      category: "Diseño",
      h1: "Foto lado a lado frente a foto antes y después",
      description: "Cuándo usar una comparación lado a lado, cuándo llamarla antes y después y cómo elegir el diseño más claro.",
    },
    "before-and-after-photo-use-cases": {
      category: "Usos",
      h1: "Casos de uso de fotos antes y después",
      description: "Usos prácticos para hogar, reparaciones, ediciones, recuerdos, registros personales y posts de servicios pequeños.",
    },
    "medical-before-and-after-photo-guidelines": {
      category: "Privacidad",
      h1: "Guía para fotos médicas antes y después",
      description: "Guía general sobre privacidad, consentimiento, etiquetas y lenguaje cuidadoso al organizar fotos médicas o estéticas.",
    },
    "meaningful-before-and-after-photo-ideas": {
      category: "Recuerdos",
      h1: "Ideas significativas para fotos antes y después",
      description: "Ideas para recuerdos, familia, mascotas, mudanzas, viajes, fotos antiguas y otros hitos personales.",
    },
    "progress-photo-ideas": {
      category: "Progreso",
      h1: "Ideas para fotos de progreso",
      description: "Ideas prácticas para fitness, hábitos, aprendizaje, estilo, proyectos y metas personales sin exagerar resultados.",
    },
  },
};

for (const locale of Object.keys(localizedGuideSummaries) as Array<Exclude<Locale, "en">>) {
  dictionaries[locale].guidesPage.guideSummaries = localizedGuideSummaries[locale];
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getGuideSummary(locale: Locale, slug: string) {
  return dictionaries[locale].guidesPage.guideSummaries[slug];
}

export function getTemplateName(locale: Locale, templateId: string, fallback: string) {
  return dictionaries[locale].templates.names[templateId] ?? fallback;
}
