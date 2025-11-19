import { QuizQuestion } from "../types";

export const QUESTION_BANK: Record<string, QuizQuestion[]> = {
  "01 情報とメディアの特性": [
    {
      question: "観測や調査などで得られる客観的事実のことを何というか。",
      options: ["データ", "情報", "知識", "知恵"],
      correctAnswerIndex: 0,
      explanation: "データは事実そのものであり、それを分析して意味を持たせたものが「情報」、さらに体系化したものが「知識」となります。"
    },
    {
      question: "情報社会（Society 4.0）に続く、サイバー空間とフィジカル空間を融合させた新しい社会を何と呼ぶか。",
      options: ["Society 5.0", "Industry 4.0", "Web 3.0", "Metaverse"],
      correctAnswerIndex: 0,
      explanation: "Society 5.0は、狩猟、農耕、工業、情報社会に続く、日本が提唱する未来社会の姿です。"
    },
    {
      question: "情報の特性として、一度生成されると完全には消えない性質を何というか。",
      options: ["残存性", "複製性", "伝播性", "個別性"],
      correctAnswerIndex: 0,
      explanation: "デジタルデータなどはコピーしても劣化せず（複製性）、容易に広まり（伝播性）、一度出回ると完全に消すことが難しい（残存性）という特性があります。"
    },
    {
      question: "情報をとりいれるもととなるものを何というか。",
      options: ["情報源", "データベース", "メディア", "サーバー"],
      correctAnswerIndex: 0,
      explanation: "情報をとりいれる「情報源」よりデータを得て、情報として分析します。"
    },
    {
      question: "得られた情報を、ほかの情報とつきあわせて確認することを何というか。",
      options: ["クロスチェック", "ダブルチェック", "バックアップ", "フィードバック"],
      correctAnswerIndex: 0,
      explanation: "相互確認（クロスチェック）を行うことで、誤った情報や偽の情報を取り除く「情報の検証」を行います。"
    }
  ],
  "02 問題解決": [
    {
      question: "問題解決において、「あるべき姿（理想）」と「現実」のギャップのことを何と定義するか。",
      options: ["問題", "課題", "リスク", "インシデント"],
      correctAnswerIndex: 0,
      explanation: "問題解決の手法では、理想と現実の差を「問題」と捉え、それを埋める行為を解決と呼びます。"
    },
    {
      question: "ブレーンストーミングの4つのルールに含まれないものはどれか。",
      options: ["質より量を重視する", "批判をしない", "他人の意見に便乗する", "結論を急ぐ"],
      correctAnswerIndex: 3,
      explanation: "ブレーンストーミングでは、自由な発想を促すため、批判禁止・質より量・自由奔放・便乗（結合・改善）がルールとされます。"
    },
    {
      question: "業務改善の手法である「PDCAサイクル」の「A」は何を表しているか。",
      options: ["Act（改善）", "Action（行動）", "Analyze（分析）", "Approve（承認）"],
      correctAnswerIndex: 0,
      explanation: "Plan（計画）→Do（実行）→Check（評価）→Act（改善）のサイクルを指します。"
    },
    {
      question: "作業計画を視覚的に表現するために用いられる工程表を何というか。",
      options: ["ガントチャート", "フローチャート", "レーダーチャート", "パレート図"],
      correctAnswerIndex: 0,
      explanation: "ガントチャートは、横軸に時間をとり、作業の開始・終了や進捗状況を棒グラフで表したものです。"
    },
    {
      question: "一方の要素を改善すると、他方の要素が悪化するような状態を何というか。",
      options: ["トレードオフ", "ジレンマ", "パラドックス", "ボトルネック"],
      correctAnswerIndex: 0,
      explanation: "トレードオフの関係にある場合、両立させるための工夫や妥協点の探索が必要になります。"
    }
  ],
  "03 情報モラル": [
    {
      question: "コンピュータの画面を長時間見続けることで起きる、目の疲れや身体の不調を何というか。",
      options: ["VDT障害", "テクノ不安症", "テクノ依存症", "ドライアイ症候群"],
      correctAnswerIndex: 0,
      explanation: "Visual Display Terminals（VDT）障害は、ディスプレイ作業による心身の不調の総称です。"
    },
    {
      question: "情報技術を使える人と使えない人の間に生じる、社会的・経済的な格差のことを何というか。",
      options: ["デジタルデバイド", "情報格差", "アクセシビリティ", "フィルタリング"],
      correctAnswerIndex: 0,
      explanation: "デジタルデバイド（情報格差）は、IT利用能力の差が機会や利益の差につながる問題を指します。"
    },
    {
      question: "特定の条件に基づいて、有害なサイトへのアクセスを制限する機能を何というか。",
      options: ["フィルタリング", "ファイアウォール", "モニタリング", "ブロッキング"],
      correctAnswerIndex: 0,
      explanation: "フィルタリングは、青少年などを有害情報から守るためにWebサイトの閲覧制限を行う機能です。"
    },
    {
      question: "過度に情報機器に依存してしまう精神的な症状を何というか。",
      options: ["テクノ依存症", "テクノ不安症", "ネット中毒", "スマホ首"],
      correctAnswerIndex: 0,
      explanation: "テクノ依存症は、情報機器がないと不安になったり、日常生活に支障をきたしたりする状態です。"
    },
    {
      question: "情報社会で適正な活動を行うための「考え方と態度」を指す言葉はどれか。",
      options: ["情報モラル", "情報マナー", "情報リテラシー", "情報倫理"],
      correctAnswerIndex: 0,
      explanation: "「モラル」は目に見えない考え方や態度を指し、「マナー」は目に見える行動や作法を指します。"
    }
  ],
  "04 個人情報": [
    {
      question: "個人情報における「基本四情報」に含まれないものはどれか。",
      options: ["電話番号", "氏名", "住所", "性別"],
      correctAnswerIndex: 0,
      explanation: "基本四情報は「氏名、住所、生年月日、性別」を指します。電話番号は含まれません。"
    },
    {
      question: "個人の私生活上の自由、またその権利のことを何というか。",
      options: ["プライバシー権", "肖像権", "パブリシティ権", "知る権利"],
      correctAnswerIndex: 0,
      explanation: "プライバシー権は、私的な情報を他人から干渉されたり侵害されたりしない権利です。"
    },
    {
      question: "写真データなどに含まれる、撮影地点の緯度経度などの位置情報を何というか。",
      options: ["ジオタグ", "Exif情報", "メタデータ", "タイムスタンプ"],
      correctAnswerIndex: 0,
      explanation: "ジオタグ（Geotag）は、GPS機能付きカメラなどで撮影した際に付加される位置情報です。プライバシー流出の原因になることがあります。"
    },
    {
      question: "利用者が「サービスの中止」を伝えるまではサービスの提供を続ける方式を何というか。",
      options: ["オプトアウト", "オプトイン", "クーリングオフ", "デフォルト"],
      correctAnswerIndex: 0,
      explanation: "逆に、利用者が「利用する意思」を伝えるまで提供しない方式をオプトインといいます。"
    },
    {
      question: "本物そっくりの偽サイトに誘導し、IDやパスワードなどを不正に入手する詐欺手法はどれか。",
      options: ["フィッシング詐欺", "ワンクリック詐欺", "スパイウェア", "キーロガー"],
      correctAnswerIndex: 0,
      explanation: "金融機関などを装ったメールから偽サイトへ誘導し情報を釣る（Fishing）行為です。"
    }
  ],
  "05 知的財産権": [
    {
      question: "産業財産権のうち、技術的なアイデアのうち「高度なもの」を保護する権利はどれか。",
      options: ["特許権", "実用新案権", "意匠権", "商標権"],
      correctAnswerIndex: 0,
      explanation: "特許権は高度な発明を保護し、出願から20年間有効です。小発明は実用新案権となります。"
    },
    {
      question: "著作権の保護期間は、原則として著作者の死後何年か。",
      options: ["70年", "50年", "20年", "100年"],
      correctAnswerIndex: 0,
      explanation: "現在の日本の著作権法では、保護期間は原則として著作者の死後70年までとされています。"
    },
    {
      question: "著作権を放棄するのではなく、「表示」などの条件を守れば自由に利用してよいという意思表示をするための組織・ライセンスはどれか。",
      options: ["クリエイティブ・コモンズ", "コピーライト", "パブリックドメイン", "フリーウェア"],
      correctAnswerIndex: 0,
      explanation: "クリエイティブ・コモンズ（CC）ライセンスは、著作者が自らの著作物の利用条件を表示する仕組みです。"
    },
    {
      question: "物品の形状や構造などの技術面のアイデア（小発明）を保護する権利はどれか。",
      options: ["実用新案権", "特許権", "意匠権", "商標権"],
      correctAnswerIndex: 0,
      explanation: "実用新案権は、特許よりも簡易な考案を保護し、保護期間は出願から10年です。"
    },
    {
      question: "著作権は、創作した時点で自動的に権利が発生するという考え方を何というか。",
      options: ["無方式主義", "方式主義", "登録主義", "審査主義"],
      correctAnswerIndex: 0,
      explanation: "特許権などの産業財産権は届け出が必要な「方式主義」ですが、著作権は何もせずとも発生する「無方式主義」です。"
    }
  ],
  "06 情報セキュリティ": [
    {
      question: "情報セキュリティの3要素（CIA）の「A」は何を表すか。",
      options: ["可用性 (Availability)", "真正性 (Authenticity)", "責任追跡性 (Accountability)", "機密性 (Confidentiality)"],
      correctAnswerIndex: 0,
      explanation: "機密性(Confidentiality)、完全性(Integrity)、可用性(Availability)が情報セキュリティの3要素です。"
    },
    {
      question: "ファイルを勝手に暗号化し、元に戻すための「身代金」を要求するマルウェアはどれか。",
      options: ["ランサムウェア", "スパイウェア", "トロイの木馬", "ワーム"],
      correctAnswerIndex: 0,
      explanation: "Ransom（身代金）とSoftwareを組み合わせた造語です。"
    },
    {
      question: "外部からの不正アクセスを防ぐために、ネットワークの出入り口に設置する仕組みはどれか。",
      options: ["ファイアウォール", "アンチウイルスソフト", "生体認証", "VPN"],
      correctAnswerIndex: 0,
      explanation: "ファイアウォール（防火壁）は、許可された通信のみを通し、不正な通信を遮断します。"
    },
    {
      question: "情報セキュリティにおいて、「情報が正確で、破壊・改竄・消去されていない状態」を保つことを何というか。",
      options: ["完全性", "機密性", "可用性", "真正性"],
      correctAnswerIndex: 0,
      explanation: "完全性（Integrity）は、データが正しい状態であることを保証する性質です。"
    },
    {
      question: "コンピュータの技術を用いず、人の心理的な隙をついて情報を不正入手する行為を何というか。",
      options: ["ソーシャルエンジニアリング", "フィッシング", "ハッキング", "クラッキング"],
      correctAnswerIndex: 0,
      explanation: "肩越しにパスワードを盗み見たり（ショルダーハッキング）、電話でパスワードを聞き出したりする行為を指します。"
    }
  ],
  "07 情報技術の発展": [
    {
      question: "店舗で商品を販売した時点での情報を管理・活用するシステムを何というか。",
      options: ["POSシステム", "GPS", "ETC", "ATM"],
      correctAnswerIndex: 0,
      explanation: "Point Of Sales（販売時点情報管理）システムのことです。"
    },
    {
      question: "「モノのインターネット」と呼ばれ、あらゆるモノがネットにつながる仕組みを何というか。",
      options: ["IoT", "AI", "Big Data", "Cloud"],
      correctAnswerIndex: 0,
      explanation: "Internet of Thingsの略で、家電やセンサーなどが相互に通信する環境を指します。"
    },
    {
      question: "インターネットを経由して、サーバやソフトウェアなどを利用するサービス形態を何というか。",
      options: ["クラウドコンピューティング", "グリッドコンピューティング", "エッジコンピューティング", "モバイルコンピューティング"],
      correctAnswerIndex: 0,
      explanation: "ユーザーは手元のPCにソフトをインストールせずとも、ネット上でサービスを利用できます（Gmailなど）。"
    },
    {
      question: "現実空間にデジタルの情報を重ね合わせて表示する技術を何というか。",
      options: ["AR (拡張現実)", "VR (仮想現実)", "MR (複合現実)", "SR (代替現実)"],
      correctAnswerIndex: 0,
      explanation: "Augmented Reality（拡張現実）は、スマホカメラなどを通して現実世界に情報を付加します。"
    },
    {
      question: "有料道路での自動料金支払いができるシステムの略称はどれか。",
      options: ["ETC", "GPS", "ATM", "POS"],
      correctAnswerIndex: 0,
      explanation: "Electronic Toll Collection Systemの略です。"
    }
  ],
  "08 メディアとコミュニケーション": [
    {
      question: "相手と同じ時間を共有して行う「同期型コミュニケーション」の例はどれか。",
      options: ["電話", "電子メール", "SNSの書き込み", "YouTube動画"],
      correctAnswerIndex: 0,
      explanation: "電話やWeb会議はリアルタイムで反応がある同期型、メールなどは好きな時に確認できる非同期型です。"
    },
    {
      question: "メディアからの情報を主体的に読み解き、活用する能力のことを何というか。",
      options: ["メディアリテラシー", "情報モラル", "デジタルスキル", "ネットマナー"],
      correctAnswerIndex: 0,
      explanation: "情報の真偽を見極め（信憑性の確認）、適切に扱う能力のことです。"
    },
    {
      question: "多数の人々が相互に情報発信や共有を行うサービスの総称はどれか。",
      options: ["ソーシャルメディア", "マスメディア", "マルチメディア", "パーソナルメディア"],
      correctAnswerIndex: 0,
      explanation: "SNS（ソーシャルネットワーキングサービス）などがこれに含まれます。"
    },
    {
      question: "コミュニケーションのタイミングが異なり、自分の都合の良い時に送受信できる形態を何というか。",
      options: ["非同期型", "同期型", "分散型", "集中型"],
      correctAnswerIndex: 0,
      explanation: "メールやLINEのメッセージ機能などが該当します。記録に残りやすい利点がありますが、即時性は低いです。"
    },
    {
      question: "インターネット上の情報について正しい態度はどれか。",
      options: ["客観的に捉え、他の情報と比較する", "すべて正しいと信じる", "拡散数が多い情報を信用する", "自分に都合の良い情報だけを集める"],
      correctAnswerIndex: 0,
      explanation: "ネット上の情報は玉石混交であるため、クロスチェック（情報の検証）が必要です。"
    }
  ],
  "09 情報デザイン": [
    {
      question: "言語に頼らず、視覚的に意味を伝えるための図記号を何というか。",
      options: ["ピクトグラム", "アイコン", "ロゴタイプ", "シンボル"],
      correctAnswerIndex: 0,
      explanation: "非常口のマークのように、文字を使わずに直感的に情報を伝える図形です。"
    },
    {
      question: "年齢や障害の有無にかかわらず、誰もが使いやすいように設計することを何というか。",
      options: ["ユニバーサルデザイン", "バリアフリー", "アクセシビリティ", "ユーザビリティ"],
      correctAnswerIndex: 0,
      explanation: "「すべての人のためのデザイン」という意味です。バリアフリーは障壁を取り除くことに重点を置きます。"
    },
    {
      question: "ものと人の動作の関係性を示唆する、知覚的・視覚的な手がかりのことを何というか。",
      options: ["アフォーダンス", "シグニファイア", "メタファー", "インタラクション"],
      correctAnswerIndex: 0,
      explanation: "ドアノブの形状が「回すこと」を示唆するように、使い方のヒントとなる性質のことです。"
    },
    {
      question: "情報をわかりやすくするために、整理・まとめ・強調などを行うことを情報の何というか。",
      options: ["構造化", "抽象化", "可視化", "体系化"],
      correctAnswerIndex: 0,
      explanation: "順序、階層、分岐などを整理して構造を作ることで、情報が理解しやすくなります。"
    },
    {
      question: "色覚の多様性を考慮し、誰にでも見分けやすい配色を行うことを何というか。",
      options: ["色覚バリアフリー", "カラーユニバーサルデザイン", "ハイコントラスト", "ダークモード"],
      correctAnswerIndex: 0,
      explanation: "色だけでなく、形や文字を併用するなどの工夫も含まれます。"
    }
  ],
  "10 アナログとデジタル": [
    {
      question: "情報の最小単位である「ビット(bit)」が集まり、8ビットになったものを何というか。",
      options: ["バイト (Byte)", "パケット", "ワード", "セル"],
      correctAnswerIndex: 0,
      explanation: "8 bits = 1 Byte です。半角英数字1文字分に相当します。"
    },
    {
      question: "情報を「連続した量」ではなく「とびとびの量（離散量）」で表現する方式を何というか。",
      options: ["デジタル", "アナログ", "バイナリ", "クオンタム"],
      correctAnswerIndex: 0,
      explanation: "アナログは連続量（時計の針など）、デジタルは離散量（数値など）で表現します。"
    },
    {
      question: "1KB（キロバイト）は何バイトか。",
      options: ["1024バイト", "1000バイト", "8バイト", "256バイト"],
      correctAnswerIndex: 0,
      explanation: "コンピュータの世界では2の10乗（1024）で単位が上がることが一般的です。"
    },
    {
      question: "16進数において、10進数の「15」を表す記号はどれか。",
      options: ["F", "E", "A", "10"],
      correctAnswerIndex: 0,
      explanation: "16進数は0-9の数字とA-Fのアルファベットを使います。A=10, B=11... F=15となります。"
    },
    {
      question: "1ビットで表現できる情報は、何通りあるか。",
      options: ["2通り", "1通り", "8通り", "10通り"],
      correctAnswerIndex: 0,
      explanation: "0と1の2通りです。"
    }
  ]
};