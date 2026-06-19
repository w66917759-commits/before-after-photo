import type { Locale } from "@/lib/i18n/locales";

type MetadataCopy = {
  title: string;
  description: string;
};

type TextItem = {
  title: string;
  body: string;
};

export type UtilityPageDictionary = {
  about: {
    metadata: MetadataCopy;
    hero: {
      eyebrow: string;
      heading: string;
      body: string;
      makerCta: string;
      contactCta: string;
    };
    values: {
      eyebrow: string;
      heading: string;
      body: string;
      items: TextItem[];
    };
    feedback: {
      eyebrow: string;
      heading: string;
      body: string;
      cta: string;
    };
  };
  contact: {
    metadata: MetadataCopy;
    hero: {
      eyebrow: string;
      heading: string;
      body: string;
      emailCta: string;
      makerCta: string;
    };
    email: {
      eyebrow: string;
      body: string;
      cta: string;
    };
    topics: {
      eyebrow: string;
      heading: string;
      body: string;
      items: TextItem[];
    };
    final: {
      eyebrow: string;
      heading: string;
      body: string;
      cta: string;
    };
  };
};

export const utilityPageDictionaries: Record<Locale, UtilityPageDictionary> = {
  en: {
    about: {
      metadata: {
        title: "About Us | Before & After Photo Maker",
        description:
          "Learn about Before & After Photo Maker, a simple browser-first tool for making clean before and after images from two photos.",
      },
      hero: {
        eyebrow: "About Us",
        heading: "A focused before and after photo maker for everyday comparisons",
        body:
          "Before & After Photo Maker helps people turn two photos into one clean comparison image. It is made for room updates, personal progress, creative edits, restoration work, small business posts, and any moment where the change should be obvious at a glance.",
        makerCta: "Open maker",
        contactCta: "Contact us",
      },
      values: {
        eyebrow: "What we care about",
        heading: "Clean comparisons without extra friction",
        body:
          "The product stays intentionally narrow: upload two photos, line them up, choose a clean frame, and download a PNG.",
        items: [
          {
            title: "Photo-first editing",
            body:
              "The tool is built around two real photos, with crop and alignment controls that keep the comparison clear.",
          },
          {
            title: "Private by default",
            body:
              "Uploads are used to create the final PNG and are not stored in a public gallery or searchable database.",
          },
          {
            title: "Simple output",
            body:
              "Frames, labels, and export options stay focused on one goal: a polished image that is easy to share.",
          },
        ],
      },
      feedback: {
        eyebrow: "Feedback",
        heading: "Help shape the next version",
        body:
          "Send feedback about templates, export quality, layout needs, privacy questions, or use cases that should be easier to support.",
        cta: "Get in touch",
      },
    },
    contact: {
      metadata: {
        title: "Contact | Before & After Photo Maker",
        description:
          "Contact Before & After Photo Maker for product feedback, support questions, privacy requests, and partnership inquiries.",
      },
      hero: {
        eyebrow: "Contact",
        heading: "Contact Before & After Photo Maker",
        body:
          "For support, product feedback, privacy questions, or business inquiries, email the project directly. Include the page URL, browser, and a short description if you are reporting an issue.",
        emailCta: "Email us",
        makerCta: "Open maker",
      },
      email: {
        eyebrow: "Email",
        body:
          "This is the best channel for bug reports, template requests, privacy questions, and feedback about the before and after workflow.",
        cta: "Send email",
      },
      topics: {
        eyebrow: "Topics",
        heading: "What to contact us about",
        body:
          "A little context helps us respond faster, especially for export issues or template suggestions.",
        items: [
          {
            title: "Product questions",
            body:
              "Ask about photo upload, crop controls, templates, export behavior, or expected image quality.",
          },
          {
            title: "Feedback",
            body:
              "Share layout requests, use cases, accessibility notes, or anything that would make the maker more useful.",
          },
          {
            title: "Privacy requests",
            body:
              "Send questions about how uploaded photos are handled during preview and PNG generation.",
          },
        ],
      },
      final: {
        eyebrow: "Start creating",
        heading: "Need to test the tool first?",
        body:
          "Open the maker, upload two photos, adjust the crop, and generate a PNG before sending detailed feedback.",
        cta: "Open maker",
      },
    },
  },
  jp: {
    about: {
      metadata: {
        title: "概要 | Before & After Photo Maker",
        description:
          "Before & After Photo Maker は、2枚の写真からすっきりした比較画像を作るブラウザ中心のシンプルなツールです。",
      },
      hero: {
        eyebrow: "概要",
        heading: "日常の比較に集中した Before & After Photo Maker",
        body:
          "Before & After Photo Maker は、2枚の写真を1枚の見やすい比較画像にまとめるためのツールです。部屋の変化、個人の進捗、クリエイティブ編集、修復作業、小規模ビジネスの投稿など、変化をひと目で伝えたい場面に向いています。",
        makerCta: "メーカーを開く",
        contactCta: "問い合わせる",
      },
      values: {
        eyebrow: "大切にしていること",
        heading: "余計な手間のない、見やすい比較",
        body:
          "機能は意図的に絞っています。2枚の写真を追加し、位置を合わせ、きれいなフレームを選んでPNGをダウンロードします。",
        items: [
          {
            title: "写真を中心にした編集",
            body: "実際の2枚の写真を軸に、比較が伝わるようトリミングと位置合わせを調整できます。",
          },
          {
            title: "初期設定でプライベート",
            body:
              "アップロードした画像は最終PNGの作成に使われ、公開ギャラリーや検索可能なデータベースには保存されません。",
          },
          {
            title: "シンプルな書き出し",
            body: "フレーム、ラベル、書き出しは、共有しやすい1枚の画像を作ることに集中しています。",
          },
        ],
      },
      feedback: {
        eyebrow: "フィードバック",
        heading: "次の改善にご協力ください",
        body:
          "テンプレート、書き出し品質、必要なレイアウト、プライバシーの質問、対応してほしい用途などをお送りください。",
        cta: "連絡する",
      },
    },
    contact: {
      metadata: {
        title: "お問い合わせ | Before & After Photo Maker",
        description:
          "Before & After Photo Maker への製品フィードバック、サポート、プライバシーに関する質問、ビジネス関連のお問い合わせはこちら。",
      },
      hero: {
        eyebrow: "お問い合わせ",
        heading: "Before & After Photo Maker へのお問い合わせ",
        body:
          "サポート、製品フィードバック、プライバシーに関する質問、ビジネス関連のお問い合わせはメールでお送りください。不具合報告の場合は、ページURL、ブラウザ、短い状況説明を添えると確認しやすくなります。",
        emailCta: "メールする",
        makerCta: "メーカーを開く",
      },
      email: {
        eyebrow: "メール",
        body:
          "不具合報告、テンプレートの要望、プライバシーに関する質問、Before & After ワークフローへのフィードバックに最適な連絡先です。",
        cta: "メールを送る",
      },
      topics: {
        eyebrow: "内容",
        heading: "お問い合わせいただける内容",
        body: "書き出しの問題やテンプレート提案では、少し詳しい状況があるとより早く確認できます。",
        items: [
          {
            title: "製品に関する質問",
            body: "写真のアップロード、トリミング操作、テンプレート、書き出し、期待できる画質について質問できます。",
          },
          {
            title: "フィードバック",
            body: "レイアウトの要望、用途、アクセシビリティの指摘、改善してほしい点を共有してください。",
          },
          {
            title: "プライバシーに関する質問",
            body: "プレビューやPNG生成時にアップロード画像がどう扱われるかについてお問い合わせください。",
          },
        ],
      },
      final: {
        eyebrow: "作成を始める",
        heading: "先にツールを試しますか？",
        body:
          "メーカーを開き、2枚の写真をアップロードしてトリミングを調整し、PNGを生成してから詳しいフィードバックを送れます。",
        cta: "メーカーを開く",
      },
    },
  },
  kr: {
    about: {
      metadata: {
        title: "소개 | Before & After Photo Maker",
        description:
          "Before & After Photo Maker는 사진 두 장으로 깔끔한 전후 비교 이미지를 만드는 브라우저 중심의 간단한 도구입니다.",
      },
      hero: {
        eyebrow: "소개",
        heading: "일상적인 비교에 집중한 Before & After Photo Maker",
        body:
          "Before & After Photo Maker는 사진 두 장을 하나의 깔끔한 비교 이미지로 만드는 데 도움을 드립니다. 공간 변화, 개인 기록, 창작 편집, 복원 작업, 소규모 비즈니스 게시물처럼 변화가 한눈에 보여야 하는 상황에 맞게 설계되었습니다.",
        makerCta: "메이커 열기",
        contactCta: "문의하기",
      },
      values: {
        eyebrow: "중요하게 생각하는 것",
        heading: "불필요한 과정 없이 깔끔한 비교",
        body:
          "제품 범위는 의도적으로 단순합니다. 사진 두 장을 올리고, 위치를 맞추고, 깔끔한 프레임을 선택한 뒤 PNG를 다운로드합니다.",
        items: [
          {
            title: "사진 중심 편집",
            body: "두 장의 실제 사진을 기준으로 자르기와 정렬을 조절해 비교가 명확하게 보이도록 합니다.",
          },
          {
            title: "기본적으로 비공개",
            body:
              "업로드한 이미지는 최종 PNG를 만드는 데 사용되며 공개 갤러리나 검색 가능한 데이터베이스에 저장되지 않습니다.",
          },
          {
            title: "단순한 결과물",
            body: "프레임, 라벨, 내보내기 옵션은 공유하기 좋은 완성 이미지 한 장에 집중합니다.",
          },
        ],
      },
      feedback: {
        eyebrow: "피드백",
        heading: "다음 버전을 함께 다듬어 주세요",
        body:
          "템플릿, 내보내기 품질, 필요한 레이아웃, 개인정보 질문, 더 쉽게 지원했으면 하는 사용 사례를 보내 주세요.",
        cta: "문의하기",
      },
    },
    contact: {
      metadata: {
        title: "문의 | Before & After Photo Maker",
        description:
          "Before & After Photo Maker에 제품 피드백, 지원 질문, 개인정보 요청, 비즈니스 문의를 보낼 수 있습니다.",
      },
      hero: {
        eyebrow: "문의",
        heading: "Before & After Photo Maker에 문의하기",
        body:
          "지원, 제품 피드백, 개인정보 질문, 비즈니스 문의는 프로젝트 이메일로 보내 주세요. 문제를 신고할 때는 페이지 URL, 브라우저, 간단한 설명을 함께 적어 주시면 확인이 빠릅니다.",
        emailCta: "이메일 보내기",
        makerCta: "메이커 열기",
      },
      email: {
        eyebrow: "이메일",
        body:
          "버그 신고, 템플릿 요청, 개인정보 질문, 전후 비교 워크플로에 대한 피드백을 보내기에 가장 좋은 채널입니다.",
        cta: "이메일 보내기",
      },
      topics: {
        eyebrow: "주제",
        heading: "문의할 수 있는 내용",
        body: "내보내기 문제나 템플릿 제안은 상황을 조금 더 알려 주시면 더 빨리 답변할 수 있습니다.",
        items: [
          {
            title: "제품 질문",
            body: "사진 업로드, 자르기 컨트롤, 템플릿, 내보내기 방식, 예상 이미지 품질에 대해 질문할 수 있습니다.",
          },
          {
            title: "피드백",
            body: "레이아웃 요청, 사용 사례, 접근성 의견, 메이커를 더 유용하게 만드는 제안을 공유해 주세요.",
          },
          {
            title: "개인정보 요청",
            body: "미리보기와 PNG 생성 과정에서 업로드한 사진이 어떻게 처리되는지 문의할 수 있습니다.",
          },
        ],
      },
      final: {
        eyebrow: "만들기 시작",
        heading: "먼저 도구를 테스트하시겠어요?",
        body:
          "메이커를 열고 사진 두 장을 업로드한 뒤 자르기를 조정하고 PNG를 생성한 다음 자세한 피드백을 보내 주세요.",
        cta: "메이커 열기",
      },
    },
  },
  ar: {
    about: {
      metadata: {
        title: "من نحن | Before & After Photo Maker",
        description:
          "Before & After Photo Maker أداة بسيطة تعمل من المتصفح لإنشاء صور مقارنة واضحة من صورتين.",
      },
      hero: {
        eyebrow: "من نحن",
        heading: "أداة Before & After Photo Maker مركزة للمقارنات اليومية",
        body:
          "يساعد Before & After Photo Maker على تحويل صورتين إلى صورة مقارنة واضحة واحدة. صُمم لتحديثات الغرف، والتقدم الشخصي، والتعديلات الإبداعية، وأعمال الترميم، ومنشورات الأعمال الصغيرة، وكل لحظة يجب أن يظهر فيها التغيير بوضوح.",
        makerCta: "افتح الأداة",
        contactCta: "اتصل بنا",
      },
      values: {
        eyebrow: "ما نهتم به",
        heading: "مقارنات واضحة من دون تعقيد",
        body:
          "يبقى المنتج محدودًا عن قصد: ارفع صورتين، واضبط محاذاتهما، واختر إطارًا نظيفًا، ثم نزّل ملف PNG.",
        items: [
          {
            title: "تحرير يبدأ من الصورة",
            body: "تعتمد الأداة على صورتين حقيقيتين مع عناصر قص ومحاذاة تحافظ على وضوح المقارنة.",
          },
          {
            title: "خصوصية افتراضية",
            body:
              "تُستخدم الصور المرفوعة لإنشاء ملف PNG النهائي ولا تُحفظ في معرض عام أو قاعدة بيانات قابلة للبحث.",
          },
          {
            title: "نتيجة بسيطة",
            body: "تركز الإطارات والتسميات وخيارات التصدير على هدف واحد: صورة مصقولة يسهل مشاركتها.",
          },
        ],
      },
      feedback: {
        eyebrow: "الملاحظات",
        heading: "ساعدنا في تحسين الإصدار التالي",
        body:
          "أرسل ملاحظاتك حول القوالب، وجودة التصدير، واحتياجات التخطيط، وأسئلة الخصوصية، وحالات الاستخدام التي يجب دعمها بسهولة أكبر.",
        cta: "تواصل معنا",
      },
    },
    contact: {
      metadata: {
        title: "اتصل بنا | Before & After Photo Maker",
        description:
          "تواصل مع Before & After Photo Maker لأسئلة الدعم، وملاحظات المنتج، وطلبات الخصوصية، والاستفسارات التجارية.",
      },
      hero: {
        eyebrow: "اتصل بنا",
        heading: "تواصل مع Before & After Photo Maker",
        body:
          "للدعم أو ملاحظات المنتج أو أسئلة الخصوصية أو الاستفسارات التجارية، أرسل بريدًا إلكترونيًا إلى المشروع مباشرة. عند الإبلاغ عن مشكلة، أضف رابط الصفحة والمتصفح ووصفًا قصيرًا.",
        emailCta: "راسلنا",
        makerCta: "افتح الأداة",
      },
      email: {
        eyebrow: "البريد الإلكتروني",
        body:
          "هذه أفضل قناة لتقارير الأخطاء، وطلبات القوالب، وأسئلة الخصوصية، والملاحظات حول سير عمل صور قبل وبعد.",
        cta: "إرسال بريد",
      },
      topics: {
        eyebrow: "الموضوعات",
        heading: "ما الذي يمكنك التواصل بشأنه",
        body: "يساعدنا القليل من السياق على الرد بسرعة أكبر، خصوصًا في مشكلات التصدير أو اقتراحات القوالب.",
        items: [
          {
            title: "أسئلة المنتج",
            body: "اسأل عن رفع الصور، وعناصر القص، والقوالب، وسلوك التصدير، وجودة الصورة المتوقعة.",
          },
          {
            title: "الملاحظات",
            body: "شارك طلبات التخطيط، وحالات الاستخدام، وملاحظات سهولة الوصول، وأي شيء يجعل الأداة أكثر فائدة.",
          },
          {
            title: "طلبات الخصوصية",
            body: "أرسل أسئلتك حول كيفية التعامل مع الصور المرفوعة أثناء المعاينة وإنشاء ملف PNG.",
          },
        ],
      },
      final: {
        eyebrow: "ابدأ الإنشاء",
        heading: "هل تريد تجربة الأداة أولًا؟",
        body:
          "افتح الأداة، وارفع صورتين، واضبط القص، وأنشئ ملف PNG قبل إرسال ملاحظات مفصلة.",
        cta: "افتح الأداة",
      },
    },
  },
  fr: {
    about: {
      metadata: {
        title: "À propos | Before & After Photo Maker",
        description:
          "Découvrez Before & After Photo Maker, un outil simple dans le navigateur pour créer des images avant/après nettes à partir de deux photos.",
      },
      hero: {
        eyebrow: "À propos",
        heading: "Un Before & After Photo Maker conçu pour les comparaisons du quotidien",
        body:
          "Before & After Photo Maker aide à transformer deux photos en une comparaison claire. Il convient aux transformations de pièces, aux progrès personnels, aux retouches créatives, aux restaurations, aux publications de petites entreprises et à tout moment où le changement doit se comprendre d'un coup d'œil.",
        makerCta: "Ouvrir l'outil",
        contactCta: "Nous contacter",
      },
      values: {
        eyebrow: "Nos priorités",
        heading: "Des comparaisons propres, sans friction",
        body:
          "Le produit reste volontairement ciblé : importez deux photos, alignez-les, choisissez un cadre propre et téléchargez un PNG.",
        items: [
          {
            title: "Édition centrée sur la photo",
            body: "L'outil part de deux vraies photos, avec des contrôles de recadrage et d'alignement qui gardent la comparaison lisible.",
          },
          {
            title: "Privé par défaut",
            body:
              "Les images importées servent à créer le PNG final et ne sont pas stockées dans une galerie publique ni dans une base consultable.",
          },
          {
            title: "Sortie simple",
            body: "Les cadres, libellés et options d'export restent concentrés sur un objectif : une image soignée, facile à partager.",
          },
        ],
      },
      feedback: {
        eyebrow: "Retours",
        heading: "Aidez-nous à améliorer la prochaine version",
        body:
          "Envoyez vos retours sur les modèles, la qualité d'export, les besoins de mise en page, les questions de confidentialité ou les usages à mieux prendre en charge.",
        cta: "Nous contacter",
      },
    },
    contact: {
      metadata: {
        title: "Contact | Before & After Photo Maker",
        description:
          "Contactez Before & After Photo Maker pour vos retours produit, questions de support, demandes de confidentialité et demandes professionnelles.",
      },
      hero: {
        eyebrow: "Contact",
        heading: "Contacter Before & After Photo Maker",
        body:
          "Pour le support, les retours produit, les questions de confidentialité ou les demandes professionnelles, écrivez directement au projet. Si vous signalez un problème, ajoutez l'URL de la page, le navigateur et une courte description.",
        emailCta: "Envoyer un e-mail",
        makerCta: "Ouvrir l'outil",
      },
      email: {
        eyebrow: "E-mail",
        body:
          "C'est le meilleur canal pour les rapports de bug, les demandes de modèles, les questions de confidentialité et les retours sur le flux avant/après.",
        cta: "Envoyer un e-mail",
      },
      topics: {
        eyebrow: "Sujets",
        heading: "Pourquoi nous contacter",
        body:
          "Un peu de contexte nous aide à répondre plus vite, surtout pour les problèmes d'export ou les suggestions de modèles.",
        items: [
          {
            title: "Questions produit",
            body: "Posez vos questions sur l'import photo, les contrôles de recadrage, les modèles, l'export ou la qualité d'image attendue.",
          },
          {
            title: "Retours",
            body: "Partagez vos demandes de mise en page, vos usages, vos notes d'accessibilité ou ce qui rendrait l'outil plus utile.",
          },
          {
            title: "Demandes de confidentialité",
            body: "Envoyez vos questions sur la manière dont les photos importées sont traitées pendant l'aperçu et la génération PNG.",
          },
        ],
      },
      final: {
        eyebrow: "Commencer",
        heading: "Vous voulez d'abord tester l'outil ?",
        body:
          "Ouvrez l'outil, importez deux photos, ajustez le recadrage et générez un PNG avant d'envoyer un retour détaillé.",
        cta: "Ouvrir l'outil",
      },
    },
  },
  es: {
    about: {
      metadata: {
        title: "Acerca de | Before & After Photo Maker",
        description:
          "Conoce Before & After Photo Maker, una herramienta sencilla en el navegador para crear imágenes claras de antes y después con dos fotos.",
      },
      hero: {
        eyebrow: "Acerca de",
        heading: "Un Before & After Photo Maker enfocado en comparaciones cotidianas",
        body:
          "Before & After Photo Maker ayuda a convertir dos fotos en una comparación clara. Está pensado para cambios en habitaciones, progreso personal, ediciones creativas, restauraciones, publicaciones de pequeños negocios y cualquier momento en el que el cambio deba entenderse de un vistazo.",
        makerCta: "Abrir creador",
        contactCta: "Contactar",
      },
      values: {
        eyebrow: "Lo que cuidamos",
        heading: "Comparaciones limpias sin fricción",
        body:
          "El producto se mantiene deliberadamente enfocado: sube dos fotos, alínealas, elige un marco limpio y descarga un PNG.",
        items: [
          {
            title: "Edición centrada en la foto",
            body: "La herramienta parte de dos fotos reales, con controles de recorte y alineación que mantienen clara la comparación.",
          },
          {
            title: "Privado por defecto",
            body:
              "Las imágenes subidas se usan para crear el PNG final y no se guardan en una galería pública ni en una base de datos buscable.",
          },
          {
            title: "Salida sencilla",
            body: "Marcos, etiquetas y exportación se centran en un objetivo: una imagen pulida y fácil de compartir.",
          },
        ],
      },
      feedback: {
        eyebrow: "Comentarios",
        heading: "Ayuda a dar forma a la próxima versión",
        body:
          "Envía comentarios sobre plantillas, calidad de exportación, necesidades de diseño, preguntas de privacidad o casos de uso que deberían ser más fáciles.",
        cta: "Contactar",
      },
    },
    contact: {
      metadata: {
        title: "Contacto | Before & After Photo Maker",
        description:
          "Contacta con Before & After Photo Maker para comentarios de producto, soporte, solicitudes de privacidad y consultas comerciales.",
      },
      hero: {
        eyebrow: "Contacto",
        heading: "Contactar con Before & After Photo Maker",
        body:
          "Para soporte, comentarios de producto, preguntas de privacidad o consultas comerciales, escribe directamente al proyecto. Si informas de un problema, incluye la URL de la página, el navegador y una breve descripción.",
        emailCta: "Enviar correo",
        makerCta: "Abrir creador",
      },
      email: {
        eyebrow: "Correo",
        body:
          "Este es el mejor canal para informes de errores, solicitudes de plantillas, preguntas de privacidad y comentarios sobre el flujo de antes y después.",
        cta: "Enviar correo",
      },
      topics: {
        eyebrow: "Temas",
        heading: "Sobre qué puedes escribirnos",
        body:
          "Un poco de contexto nos ayuda a responder más rápido, sobre todo en problemas de exportación o sugerencias de plantillas.",
        items: [
          {
            title: "Preguntas de producto",
            body: "Pregunta sobre subida de fotos, controles de recorte, plantillas, exportación o calidad de imagen esperada.",
          },
          {
            title: "Comentarios",
            body: "Comparte solicitudes de diseño, casos de uso, notas de accesibilidad o cualquier cosa que haga el creador más útil.",
          },
          {
            title: "Solicitudes de privacidad",
            body: "Envía preguntas sobre cómo se tratan las fotos subidas durante la vista previa y la generación PNG.",
          },
        ],
      },
      final: {
        eyebrow: "Empieza a crear",
        heading: "¿Necesitas probar primero la herramienta?",
        body:
          "Abre el creador, sube dos fotos, ajusta el recorte y genera un PNG antes de enviar comentarios detallados.",
        cta: "Abrir creador",
      },
    },
  },
};

export function getUtilityPageDictionary(locale: Locale) {
  return utilityPageDictionaries[locale];
}
