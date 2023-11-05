const itemJson = [
    /*
    { "index": "", "name": "", "link": "" },
    */
    { "index": "gacha-ticket_zokusei-fire", "name": "火属性★5確定ガチャチケット", "link": "ticket/?index=zokusei-fire" },
    { "index": "gacha-ticket_zokusei-water", "name": "水属性★5確定ガチャチケット", "link": "ticket/?index=zokusei-water" },
    { "index": "gacha-ticket_zokusei-wind", "name": "風属性★5確定ガチャチケット", "link": "ticket/?index=zokusei-wind" },
    { "index": "gacha-ticket_zokusei-light", "name": "光属性★5確定ガチャチケット", "link": "ticket/?index=zokusei-light" },
    { "index": "gacha-ticket_zokusei-dark", "name": "闇属性★5確定ガチャチケット", "link": "ticket/?index=zokusei-dark" },
    { "index": "memoria_312_evolution", "name": "癒しの露天風呂：ピース", "link": "" },
    { "index": "memoria_312_awakening", "name": "癒しの露天風呂：ジェム", "link": "" },
    { "index": "memoria_348_evolution", "name": "お姉様の水難：ピース", "link": "" },
    { "index": "memoria_348_awakening", "name": "お姉様の水難：ジェム", "link": "" },
    { "index": "memoria_363_evolution", "name": "晴れときどきサンオイル：ピース", "link": "" },
    { "index": "memoria_363_awakening", "name": "晴れときどきサンオイル：ジェム", "link": "" },
    { "index": "memoria_523_evolution", "name": "吐息の距離：ピース", "link": "" },
    { "index": "memoria_523_awakening", "name": "吐息の距離：ジェム", "link": "" },
    { "index": "memoria_571_evolution", "name": "朝寝坊のススメ：ピース", "link": "" },
    { "index": "memoria_571_awakening", "name": "朝寝坊のススメ：ジェム", "link": "" }
]

const itemByTypeJson = {
    /*
    { index: "", name: "", link: false },
    */

    costume_sozai: [ // ガチャボーナス衣装・ペンダント
        { index: "costume_287_pendant-ex", name: "鶴紗/望月兎着のペンダントEX", link: false },
        { index: "costume_301_before", name: "一柳結梨/百合ヶ丘訓練制服", link: false },
        { index: "costume_301_pendant-1", name: "結梨/百合ヶ丘訓練制服のペンダントLv.1", link: false },
        { index: "costume_301_pendant-2", name: "結梨/百合ヶ丘訓練制服のペンダントLv.2", link: false },
        { index: "costume_301_pendant-ex", name: "結梨/百合ヶ丘訓練制服のペンダントEX", link: false },
        { index: "costume_331_pendant-ex", name: "楓/おやすみスタイルのペンダントEX", link: false },
        { index: "costume_332_pendant-ex", name: "神琳/おやすみスタイルのペンダントEX", link: false },
        { index: "costume_339_before", name: "石塚藤乃/神庭女子標準制服", link: false },
        { index: "costume_355_before", name: "賀川蒔菜/エレンスゲ標準制服", link: false },
        { index: "costume_370_before", name: "三好夏凜/百合ヶ丘標準制服", link: false },
        { index: "costume_370_pendant-ex", name: "夏凜/百合ヶ丘標準制服のペンダントEX", link: false },
        { index: "costume_371_pendant-ex", name: "梨璃/ハピネスブーケαのペンダントEX", link: false },
        { index: "costume_372_pendant-ex", name: "楓/ブリリアントスピカαのペンダントEX", link: false },
        { index: "costume_377_before", name: "犬吠埼風/百合ヶ丘標準制服", link: false },
        { index: "costume_377_pendant-ex", name: "風/百合ヶ丘標準制服のペンダントEX", link: false },
        { index: "costume_378_pendant-ex", name: "夢結/ハピネスブーケαのペンダントEX", link: false },
        { index: "costume_379_pendant-ex", name: "ミリアム/レゾナンスオブハートαのペンダントEX", link: false },
        { index: "costume_391_before", name: "松村優珂/エレンスゲ標準制服", link: false },
        { index: "costume_391_pendant-ex", name: "優珂/エレンスゲ標準制服のペンダントEX", link: false },
        { index: "costume_394_pendant-ex", name: "神琳/リリティカルサマーαのペンダントEX", link: false },
        { index: "costume_395_pendant-ex", name: "雨嘉/リリティカルサマーαのペンダントEX", link: false },
        { index: "costume_406_before", name: "一柳結梨/リリティカルサマー", link: false },
        { index: "costume_406_pendant-ex", name: "結梨/リリティカルサマーのペンダントEX", link: false },
        { index: "costume_407_pendant-ex", name: "紅巴/リリティカルサマーαのペンダントEX", link: false },
        { index: "costume_408_pendant-ex", name: "藍/リリティカルサマーαのペンダントEX", link: false },
        { index: "costume_421_pendant-ex", name: "千香瑠/涼風の浴衣αのペンダントEX", link: false },
        { index: "costume_422_pendant-ex", name: "叶星/涼風の浴衣αのペンダントEX", link: false },
        { index: "costume_431_before", name: "白井黒子/メイドスタイル", link: false },
        { index: "costume_431_pendant-ex", name: "黒子/メイドスタイルのペンダントEX", link: false },
        { index: "costume_432_pendant-ex", name: "恋花/マリンセーラーαのペンダントEX", link: false },
        { index: "costume_433_pendant-ex", name: "瑤/マリンセーラーαのペンダントEX", link: false },
        { index: "costume_439_before", name: "苅谷緋紅/エレンスゲ標準制服", link: false },
        { index: "costume_439_pendant-ex", name: "緋紅/エレンスゲ標準制服のペンダントEX", link: false },
        { index: "costume_440_pendant-ex", name: "灯莉/マルチカラードフラワーαのペンダントEX", link: false },
        { index: "costume_441_pendant-ex", name: "姫歌/マルチカラードフラワーαのペンダントEX", link: false },
        { index: "costume_448_before", name: "早川弥宏/ピュアリティプロミス", link: false },
        { index: "costume_448_pendant-ex", name: "弥宏/ピュアリティプロミスのペンダントEX", link: false },
        { index: "costume_449_pendant-ex", name: "楓/星花の浴衣αのペンダントEX", link: false },
        { index: "costume_453_pendant-ex", name: "一葉/ブリッツアングリフαのペンダントEX", link: false },
        { index: "costume_457_pendant-ex", name: "高嶺/プリンセスナイトαのペンダントEX", link: false },
        { index: "costume_465_before", name: "幼少期レム/幼少期レムの着物", link: false },
        { index: "costume_465_pendant-ex", name: "幼少期レム/幼少期レムの着物のペンダントEX", link: false },
        { index: "costume_466_pendant-ex", name: "二水/アーセナリーローズαの着物のペンダントEX", link: false }
    ],
    memoria_sozai: [ // メモリア素材
        { index: "memoria_312_evolution", name: "癒しの露天風呂：ピース", link: false },
        { index: "memoria_312_awakening", name: "癒しの露天風呂：ジェム", link: false },
        { index: "memoria_348_evolution", name: "お姉様の水難：ピース", link: false },
        { index: "memoria_348_awakening", name: "お姉様の水難：ジェム", link: false },
        { index: "memoria_363_evolution", name: "晴れときどきサンオイル：ピース", link: false },
        { index: "memoria_363_awakening", name: "晴れときどきサンオイル：ジェム", link: false },
        { index: "memoria_523_evolution", name: "吐息の距離：ピース", link: false },
        { index: "memoria_523_awakening", name: "吐息の距離：ジェム", link: false },
        { index: "memoria_571_evolution", name: "朝寝坊のススメ：ピース", link: false },
        { index: "memoria_571_awakening", name: "朝寝坊のススメ：ジェム", link: false },
        { index: "memoria_628_evolution", name: "伝わる鼓動：ピース", link: false },
        { index: "memoria_628_awakening", name: "伝わる鼓動：ジェム", link: false },
        { index: "memoria_661_evolution", name: "楽しいを探して：ピース", link: false },
        { index: "memoria_661_awakening", name: "楽しいを探して：ジェム", link: false },
        { index: "memoria_708_evolution", name: "ねこさんこちら：ピース", link: false },
        { index: "memoria_708_awakening", name: "ねこさんこちら：ジェム", link: false }
    ],
    gacha_ticket: [ // ガチャチケット
        { index: "gacha-ticket_lily-passport", name: "リリィパスポート★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_11kai", name: "11回ガチャチケットVer.2", link: true },
        { index: "gacha-ticket_5kakutei", name: "★5確定ガチャチケットVer.2", link: true },
        { index: "gacha-ticket_cost17", name: "コスト17以上★5ガチャチケットⅡ", link: true },
        { index: "gacha-ticket_cost18", name: "コスト18以上★5ガチャチケット", link: true },
        { index: "gacha-ticket_cost19", name: "コスト19以上★5ガチャチケット", link: true },
        { index: "gacha-ticket_cost20", name: "コスト20以上★5ガチャチケット", link: true },
        { index: "gacha-ticket_awakening", name: "覚醒メモリア★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost17awakening", name: "コスト17以上覚醒★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost18awakening", name: "コスト18以上覚醒★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost18zenei", name: "前衛コスト18以上ガチャチケット", link: true },
        { index: "gacha-ticket_cost18kouei", name: "後衛コスト18以上ガチャチケット", link: true },
        { index: "gacha-ticket_costume", name: "衣装開放★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost18costume", name: "コスト18以上衣装開放★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_zokusei-fire", name: "火属性★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_zokusei-water", name: "水属性★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_zokusei-wind", name: "風属性★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_zokusei-light", name: "光属性★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_zokusei-dark", name: "闇属性★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost18tsuujou", name: "コスト18以上通常前衛★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost18tokushu", name: "コスト18以上特殊前衛★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost18shien", name: "コスト18以上支援★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost18bougai", name: "コスト18以上妨害★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost18kaifuku", name: "コスト18以上回復★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost20tsuujou-lcs", name: "LCSコスト20以上通常前衛★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost20tokushu-lcs", name: "LCSコスト20以上特殊前衛★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost20shien-lcs", name: "LCSコスト20以上支援★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost20bougai-lcs", name: "LCSコスト20以上妨害★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cost20kaifuku-lcs", name: "LCSコスト20以上回復★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_tsuujou-creators", name: "クリエイターズコラボ通常前衛★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_tokushu-creators", name: "クリエイターズコラボ特殊前衛★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_shien-creators", name: "クリエイターズコラボ支援★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_bougai-creators", name: "クリエイターズコラボ妨害★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_kaifuku-creators", name: "クリエイターズコラボ回復★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_zakuzaku", name: "★5 100%!!ざくざく11回ガチャチケット", link: true },
        { index: "gacha-ticket_odaiba", name: "御台場女学校★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_ludojyo", name: "私立ルドビコ女学院★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_hervarar_2", name: "ヘルヴォル★5確定ガチャチケットⅡ", link: true },
        { index: "gacha-ticket_coupling-challenge", name: "★5 100%!!カップリングチャレンジ2回ガチャチケット", link: true },
        { index: "gacha-ticket_ririsama-2", name: "2.5周年トロピカルナイト記念★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_ririsama-3", name: "2.5周年ギガントウェーブ記念★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_lohengrin", name: "ローエングリン登場記念★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_cuelebre", name: "クエレブレ登場記念★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_halloween", name: "ハッピー！ハロウィン記念★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_hitotsuyanagi-tai_coupling", name: "一柳隊★5 100%!!カップリング2回ガチャチケット", link: true },
        { index: "gacha-ticket_emotional", name: "エモーショナルメモリア★5確定ガチャチケット", link: false },
        // イベントガチャチケット
        { index: "gacha-ticket_202212-event-1", name: "聖夜へ捧ぐサプライズ★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202212-event-2", name: "凍て空の流星★5確定ガチャチケットⅡ", link: false },
        { index: "gacha-ticket_collabo-prisma-illya-1", name: "シスターズ・カラミティ★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_collabo-prisma-illya-2", name: "シスターズ・カラミティⅡ★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202301-event-1-1", name: "年始めに想い重ねて★5確定ガチャチケットⅠ", link: false },
        { index: "gacha-ticket_202301-event-1-2", name: "年始めに想い重ねて★5確定ガチャチケットⅡ", link: false },
        { index: "gacha-ticket_202301-event-2", name: "凍て空の流星★5確定ガチャチケットⅢ", link: false },
        { index: "gacha-ticket_202302-event-1", name: "花々集う大宴会★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202302-event-1-2", name: "アニバーサリー大宴会★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202302-event-1-3", name: "アニバーサリー大宴会Ⅱ★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202302-event-2-1", name: "カラフルデイズ・エンド★5確定ガチャチケットⅠ", link: false },
        { index: "gacha-ticket_202302-event-2-2", name: "カラフルデイズ・エンド★5確定ガチャチケットⅡ", link: false },
        { index: "gacha-ticket_202302-event-3", name: "楯のメイドとバレンタイン★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202302-event-4", name: "凍て空の流星★5確定ガチャチケットⅣ", link: false },
        { index: "gacha-ticket_202302-daienkai", name: "ラスバレ2周年祭り★5確定ガチャチケット", link: true },
        { index: "gacha-ticket_collabo-madoka-magica-1", name: "マギカ☆ワンダーワールド★5確定ガチャチケットⅠ", link: false },
        { index: "gacha-ticket_collabo-madoka-magica-2", name: "マギカ☆ワンダーワールド★5確定ガチャチケットⅡ", link: false },
        { index: "gacha-ticket_202303-event-1", name: "ハンドメイド・ギフト★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202303-event-2", name: "紅蓮の聖乙女★5確定ガチャチケットⅠ", link: false },
        { index: "gacha-ticket_202304-zenei-1", name: "スプリングバケーション前衛★5ガチャチケット", link: false },
        { index: "gacha-ticket_202304-kouei-1", name: "スプリングバケーション後衛★5ガチャチケット", link: false },
        { index: "gacha-ticket_202304-event-1-1", name: "マルチカラード・ティアーズ★5確定ガチャチケットⅠ", link: false },
        { index: "gacha-ticket_202304-event-1-2", name: "マルチカラード・ティアーズ★5確定ガチャチケットⅡ", link: false },
        { index: "gacha-ticket_202304-event-2", name: "魅惑のバニーセレクション★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202304-event-3", name: "紅蓮の聖乙女★5確定ガチャチケットⅡ", link: false },
        { index: "gacha-ticket_202305-event-1-1", name: "竜のシャナと楯の乙女★5確定ガチャチケットⅠ", link: false },
        { index: "gacha-ticket_202305-event-1-2", name: "竜のシャナと楯の乙女★5確定ガチャチケットⅡ", link: false },
        { index: "gacha-ticket_202305-event-2", name: "Mirage Mariage★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202305-event-3", name: "紅蓮の聖乙女★5確定ガチャチケットⅢ", link: false },
        { index: "gacha-ticket_collabo-yuyuyu-1", name: "白百合の章★5確定ガチャチケットⅠ", link: false },
        { index: "gacha-ticket_collabo-yuyuyu-2", name: "白百合の章★5確定ガチャチケットⅡ", link: false },
        { index: "gacha-ticket_collabo-yuyuyu-3", name: "絆の章★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202306-event-1", name: "紅蓮の聖乙女★5確定ガチャチケットⅣ", link: false },
        { index: "gacha-ticket_202307-event-1", name: "深炎のスキャルドメール★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202307-event-2", name: "覚醒のスキャルドメール★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202307-event-3", name: "サマー・フェアリーテール★5確定ガチャチケットⅠ", link: false },
        { index: "gacha-ticket_202308-event-1", name: "Summer Lilies Vacation★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202308-event-2", name: "Twinkle Lilies Party★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202308-event-3", name: "サマー・フェアリーテール★5確定ガチャチケットⅡ", link: false },
        { index: "gacha-ticket_202308-event-4", name: "エレガンス・セッション★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_collabo-toaru-1", name: "とある科学と楯の乙女★5確定ガチャチケットⅠ", link: false },
        { index: "gacha-ticket_collabo-toaru-2", name: "とある科学と楯の乙女★5確定ガチャチケットⅡ", link: false },
        { index: "gacha-ticket_202309-event-1-1", name: "竜の生まれた日★5確定ガチャチケットⅠ", link: false },
        { index: "gacha-ticket_202309-event-1-2", name: "竜の生まれた日★5確定ガチャチケットⅡ", link: false },
        { index: "gacha-ticket_202309-event-2", name: "サマー・フェアリーテール★5確定ガチャチケットⅢ", link: false },
        { index: "gacha-ticket_202310-event-1", name: "双星のコントラスト★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202310-event-2", name: "モンスターズ・パニック★5確定ガチャチケット", link: false },
        { index: "gacha-ticket_202310-event-3", name: "ゴシック・ノスタルジカ★5確定ガチャチケットⅠ", link: false },
        { index: "gacha-ticket_collabo-rezero-1", name: "百合ヶ丘に咲う紫紺の花★5確定ガチャチケットⅠ", link: false },
        { index: "gacha-ticket_collabo-rezero-2", name: "百合ヶ丘に咲う紫紺の花★5確定ガチャチケットⅡ", link: false }
    ],
    exchange_pendant_ex: [ // EX交換券
        { index: "exchange_pendant-ex_202212-1", name: "聖夜へ捧ぐサプライズペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202212-2", name: "凍て空の流星ⅡペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_collabo-prisma-illya-1", name: "シスターズ・カラミティペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_collabo-prisma-illya-2", name: "シスターズ・カラミティⅡペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202301-1-1", name: "年始めに想い重ねてペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202301-2", name: "凍て空の流星ⅢペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202302-1", name: "花々集う大宴会ペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202302-1-2", name: "アニバーサリー大宴会ペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202302-1-3", name: "アニバーサリー大宴会ⅡペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202302-2-1", name: "カラフルデイズ・エンドⅠペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202302-2-2", name: "カラフルデイズ・エンドⅡペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202302-3", name: "楯のメイドとバレンタインペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202302-4", name: "凍て空の流星ⅣペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_collabo-madoka-magica-1", name: "マギカ☆ワンダーワールドペンダントEX交換券Ⅰ", link: false },
        { index: "exchange_pendant-ex_collabo-madoka-magica-2", name: "マギカ☆ワンダーワールドペンダントEX交換券Ⅱ", link: false },
        { index: "exchange_pendant-ex_202303-1", name: "ハンドメイド・ギフトペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202303-2", name: "紅蓮の聖乙女ⅠペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202304-1-1", name: "マルチカラード・ティアーズⅠペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202304-1-2", name: "マルチカラード・ティアーズⅡペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202304-2", name: "魅惑のバニーセレクションペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202304-3", name: "紅蓮の聖乙女ⅡペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202305-gw", name: "ラスバれ！GWペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202305-1-1", name: "竜のシャナと楯の乙女ⅠペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202305-1-2", name: "竜のシャナと楯の乙女ⅡペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202305-2", name: "Mirage MariageペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202305-3", name: "紅蓮の聖乙女ⅢペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_collabo-yuyuyu-1", name: "白百合の章ペンダントEX交換券Ⅰ", link: false },
        { index: "exchange_pendant-ex_collabo-yuyuyu-2", name: "白百合の章ペンダントEX交換券Ⅱ", link: false },
        { index: "exchange_pendant-ex_collabo-yuyuyu-3", name: "絆の章ペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202306-1", name: "紅蓮の聖乙女ⅣペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202306-holiday", name: "メモリアルホリデイペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202307-1", name: "深炎のスキャルドメールペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202307-2", name: "覚醒のスキャルドメールペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202307-3", name: "サマー・フェアリーテールⅠペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202308-1", name: "Summer Lilies VacationペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202308-2", name: "Twinkle Lilies PartyペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202308-3", name: "サマー・フェアリーテールⅡペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202308-4", name: "エレガンス・セッションペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_collabo-toaru-1", name: "とある科学と楯の乙女ペンダントEX交換券Ⅰ", link: false },
        { index: "exchange_pendant-ex_collabo-toaru-2", name: "とある科学と楯の乙女ペンダントEX交換券Ⅱ", link: false },
        { index: "exchange_pendant-ex_202309-1-1", name: "竜の生まれた日ペンダントEX交換券Ⅰ", link: false },
        { index: "exchange_pendant-ex_202309-1-2", name: "竜の生まれた日ペンダントEX交換券Ⅱ", link: false },
        { index: "exchange_pendant-ex_202309-2", name: "サマー・フェアリーテールⅢペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202310-1", name: "双星のコントラストペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202310-2", name: "モンスターズ・パニックペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_202310-3", name: "ゴシック・ノスタルジカⅠペンダントEX交換券", link: false },
        { index: "exchange_pendant-ex_collabo-rezero-1", name: "百合ヶ丘に咲う紫紺の花ペンダントEX交換券Ⅰ", link: false },
        { index: "exchange_pendant-ex_collabo-rezero-2", name: "百合ヶ丘に咲う紫紺の花ペンダントEX交換券Ⅱ", link: false }
    ],
    exchange_costume: [ // 衣装引換券
        { index: "exchange_costume_toumei-diary", name: "トウメイダイアリーCD発売記念！衣装引換券", link: true },
        { index: "exchange_costume_7-2-live-bd", name: "7/2ライブBD発売記念！衣装引換券", link: true },
        { index: "exchange_costume_unmei-no-trinity", name: "CD「運命のトリニティ」発売記念！衣装引換券", link: true },
        { index: "exchange_costume_202309", name: "9月衣装引換券", link: true },
        { index: "exchange_costume_202211", name: "衣装引換券11月", link: true },
        { index: "exchange_costume_202301", name: "衣装引換券1月", link: true },
        { index: "exchange_costume_2nd-aniv", name: "2周年祭り衣装引換券", link: true },
        { index: "exchange_costume_gw", name: "GW2023衣装引換券", link: true },
        { index: "exchange_costume_202306", name: "6月衣装引換券", link: true },
        { index: "exchange_costume_202309", name: "9月衣装引換券", link: true },
        { index: "exchange_costume_202311", name: "11月衣装引換券", link: true },
        { index: "exchange_costume_gran-eple", name: "グラン・エプレ衣装引換券", link: true },
        { index: "exchange_costume_hervarar", name: "ヘルヴォル衣装引換券", link: true },
        { index: "exchange_costume_yuyu", name: "白井夢結衣装引換券", link: true },
        { index: "exchange_costume_renka", name: "飯島恋花衣装引換券", link: true },
        { index: "exchange_costume_takane", name: "宮川高嶺衣装引換券", link: true },
        { index: "exchange_costume_kureha", name: "土岐紅巴衣装引換券", link: true },
        { index: "exchange_costume_riri", name: "一柳梨璃衣装引換券", link: true },
        { index: "exchange_costume_mai", name: "吉村・Thi・梅衣装引換券", link: true },
        { index: "exchange_costume_kazuha", name: "相澤一葉衣装引換券", link: true },
        { index: "exchange_costume_akari", name: "丹羽灯莉衣装引換券", link: true },
        { index: "exchange_costume_chikaru", name: "芹沢千香瑠衣装引換券", link: true },
        { index: "exchange_costume_kanaho", name: "今叶星衣装引換券", link: true },
        { index: "exchange_costume_koukainama-202301", name: "公開生放送記念!!衣装交換チケット", link: true },
        { index: "exchange_costume_ririsama", name: "2.5周年リリサマ!!衣装引換券", link: true },
        { index: "exchange_costume_gigant", name: "ギガント級ヒュージ討伐衣装引換券", link: true },
        { index: "exchange_costume_gigant_202308", name: "ギガント級ヒュージ討伐衣装引換券 (8月)", link: true },
        { index: "exchange_costume_gigant_202309", name: "ギガント級ヒュージ討伐衣装引換券 (9月)", link: true },
        { index: "exchange_costume_gigant_202310", name: "ギガント級ヒュージ討伐衣装引換券 (10月)", link: true },
        { index: "exchange_costume_ririsama-1", name: "GO!GO!スプラッシュ衣装引換券", link: true },
        { index: "exchange_costume_ririsama-2", name: "トロピカルナイト衣装引換券", link: true },
        { index: "exchange_costume_ririsama-3", name: "ギガントウェーブ衣装引換券", link: true }
    ],
    exchange: [ // メモリア引換券
        { index: "exchange_memoria_toumei-diary", name: "トウメイダイアリーCD発売記念！★5メモリア引換券", link: true },
        { index: "exchange_memoria_7-2-live-bd", name: "7/2ライブBD発売記念！メモリア引換券", link: true },
        { index: "exchange_memoria_unmei-no-trinity", name: "ミニアルバム「運命のトリニティ」発売記念！メモリア引換券", link: true },
        { index: "exchange_summer-live-bd", name: "コスト18以上★5セレクトチケットⅠ(サマーライブBD)", link: true },
        { index: "exchange_new-year-2023-1", name: "★5メモリア引換券(プラチナ)", link: true },
        { index: "exchange_new-year-2023-2", name: "★5メモリア引換券(ゴールド)", link: true },
        { index: "exchange_new-year-2023-3", name: "★5メモリア引換券(シルバー)", link: true },
        { index: "exchange_new-year-2023-4", name: "★5メモリア引換券(ブロンズ)", link: true },
        { index: "exchange_memoria_2nd-anniversary-1", name: "2周年祭りぽかぽか★5メモリア引換券", link: true },
        { index: "exchange_memoria_2nd-anniversary-2", name: "2周年祭りどきどき★5メモリア引換券", link: true },
        { index: "exchange_memoria_2nd-anniversary-3", name: "2周年祭りあまあま★5メモリア引換券", link: true },
        { index: "exchange_premium", name: "プレミア★5メモリア引換券", link: true },
        { index: "exchange_premium-gw", name: "プレミア★5メモリア引換券", link: true },
        { index: "exchange_premium-ririsama", name: "プレミア★5メモリア引換券", link: true },
        { index: "exchange_memoria_gran-eple", name: "グラン・エプレ★5メモリア引換券", link: true },
        { index: "exchange_memoria_hervarar", name: "ヘルヴォル★5メモリア引換券", link: true },
        { index: "exchange_memoria_yuyu", name: "白井夢結★5メモリア引換券", link: true },
        { index: "exchange_memoria_renka", name: "飯島恋花★5メモリア引換券", link: true },
        { index: "exchange_memoria_takane", name: "宮川高嶺★5メモリア引換券", link: true },
        { index: "exchange_memoria_kureha", name: "土岐紅巴★5メモリア引換券", link: true },
        { index: "exchange_memoria_riri", name: "一柳梨璃メモリア引換券", link: true },
        { index: "exchange_memoria_mai", name: "吉村・Thi・梅メモリア引換券", link: true },
        { index: "exchange_memoria_kazuha", name: "相澤一葉★5メモリア引換券", link: true },
        { index: "exchange_memoria_akari", name: "丹羽灯莉★5メモリア引換券", link: true },
        { index: "exchange_memoria_chikaru", name: "芹沢千香瑠★5メモリア引換券", link: true },
        { index: "exchange_memoria_kanaho", name: "今叶星★5メモリア引換券", link: true },
        { index: "exchange_memoria-with-costume", name: "衣装付きメモリアコレクション引換券", link: true },
        { index: "exchange_memoria_zokusei-fire", name: "火属性★5メモリア引換券 (4月)", link: true },
        { index: "exchange_memoria_zokusei-wind", name: "風属性★5メモリア引換券 (4月)", link: true },
        { index: "exchange_memoria_zokusei-fire_202305", name: "火属性★5メモリア引換券 (5月)", link: true },
        { index: "exchange_memoria_zokusei-water_202305", name: "水属性★5メモリア引換券 (5月)", link: true },
        { index: "exchange_memoria_zokusei-wind_202305", name: "風属性★5メモリア引換券 (5月)", link: true },
        { index: "exchange_memoria_zokusei-fire_202306", name: "火属性★5メモリア引換券 (6月)", link: true },
        { index: "exchange_memoria_zokusei-water_202306", name: "水属性★5メモリア引換券 (6月)", link: true },
        { index: "exchange_memoria_zokusei-wind_202306", name: "風属性★5メモリア引換券 (6月)", link: true },
        { index: "exchange_memoria_zokusei-fire_202308", name: "火属性★5メモリア引換券 (8月)", link: true },
        { index: "exchange_memoria_zokusei-water_202308", name: "水属性★5メモリア引換券 (8月)", link: true },
        { index: "exchange_memoria_zokusei-wind_202308", name: "風属性★5メモリア引換券 (8月)", link: true },
        { index: "exchange_memoria_zokusei-fire_202309", name: "火属性★5メモリア引換券 (9月)", link: true },
        { index: "exchange_memoria_zokusei-water_202309", name: "水属性★5メモリア引換券 (9月)", link: true },
        { index: "exchange_memoria_zokusei-wind_202309", name: "風属性★5メモリア引換券 (9月)", link: true },
        { index: "exchange_refrain", name: "リフレインセレクトチケット", link: true },
        // イベントガチャ交換券
        { index: "exchange_event-gacha-special", name: "イベントガチャスペシャル交換券", link: true },
        { index: "exchange_event-gacha-special-2", name: "イベントガチャスペシャル交換券", link: true },
        { index: "exchange_event-gacha-special-gw", name: "ラスバれ！GWイベントガチャスペシャル交換券", link: true },
        { index: "exchange_event-gacha-special-ririsama", name: "2.5周年イベントガチャスペシャル交換券", link: true },
        { index: "exchange_event-gacha-special-3", name: "イベントガチャスペシャル交換券", link: true },
        // アルティメット交換券
        { index: "exchange_ultimate-select-zenei", name: "アルティメットメモリア前衛交換券", link: false },
        { index: "exchange_ultimate-select-kouei", name: "アルティメットメモリア後衛交換券", link: false },
        { index: "exchange_ultimate-select-zenei-2", name: "アルティメットメモリア前衛交換券", link: false },
        { index: "exchange_ultimate-select-kouei-2", name: "アルティメットメモリア後衛交換券", link: false },
        { index: "exchange_ultimate2-select-zenei", name: "2.5周年アルティメットメモリア前衛交換券", link: false },
        { index: "exchange_ultimate2-select-kouei", name: "2.5周年アルティメットメモリア後衛交換券", link: false },
        { index: "exchange_ultimate-select-zenei-3", name: "アルティメットメモリア前衛交換券", link: false },
        { index: "exchange_ultimate-select-kouei-3", name: "アルティメットメモリア後衛交換券", link: false },
        // 新メモリア交換券
        { index: "exchange_brand-new", name: "BRAND-NEW★5メモリア引換券", link: false },
        { index: "exchange_brand-new_202310-2", name: "BRAND-NEW★5メモリア引換券10月Ⅱ", link: false },
        { index: "exchange_brand-new_202310-3", name: "BRAND-NEW★5メモリア引換券10月Ⅲ", link: false },
        { index: "exchange_brand-new_202311-1", name: "BRAND-NEW★5メモリア引換券11月", link: false },
        // その他
        { index: "exchange_emotional-sozai", name: "エモーショナルメモリア素材引換券", link: false },
        { index: "exchange_creators-gacha", name: "クリエイターズコラボガチャチケット引換券", link: false }
    ],
    medal_bonus: [ // ボーナスメダル
        { index: "medal_bonus_202212", name: "ボーナスメダルⅫ", link: false },
        { index: "medal_bonus_202301", name: "ボーナスメダルⅠ", link: false },
        { index: "medal_bonus_202302", name: "ボーナスメダルⅡ", link: false },
        { index: "medal_bonus_202303", name: "ボーナスメダルⅢ", link: false },
        { index: "medal_bonus_202304", name: "ボーナスメダルⅣ", link: false },
        { index: "medal_bonus_202305", name: "ボーナスメダルⅤ", link: false },
        { index: "medal_bonus_202306", name: "ボーナスメダルⅥ", link: false },
        { index: "medal_bonus_202307", name: "ボーナスメダルⅦ", link: false },
        { index: "medal_bonus_202308", name: "ボーナスメダルⅧ", link: false },
        { index: "medal_bonus_202309", name: "ボーナスメダルⅨ", link: false },
        { index: "medal_bonus_202310", name: "ボーナスメダルⅩ", link: false },
        { index: "medal_bonus_202311", name: "ボーナスメダルⅪ", link: false },
        { index: "medal_bonus_collabo-prisma-illya", name: "シスターズ・カラミティボーナスメダル", link: false },
        { index: "medal_bonus_collabo-madoka-magica", name: "マギカ☆ワンダーワールドボーナスメダル", link: false },
        { index: "medal_bonus_collabo-yuyuyu", name: "白百合の章ボーナスメダル", link: false },
        { index: "medal_bonus_collabo-yuyuyu-2", name: "絆の章ボーナスメダル", link: false },
        { index: "medal_bonus_collabo-toaru", name: "とある科学と楯の乙女ボーナスメダル", link: false },
        { index: "medal_bonus_collabo-rezero", name: "百合ヶ丘に咲う紫紺の花ボーナスメダル", link: false },
        { index: "medal_bonus_202212-costume", name: "衣装交換メダル12月", link: true },
        { index: "medal_bonus_202303-costume", name: "衣装交換メダル3月", link: true },
        { index: "medal_bonus_202304-costume", name: "衣装交換メダル4月", link: true },
        { index: "medal_bonus_202305-costume", name: "衣装交換メダル5月", link: true },
        { index: "medal_bonus_202306-costume", name: "衣装交換メダル6月", link: true },
        { index: "medal_bonus_202307-costume", name: "衣装交換メダル7月", link: true },
        { index: "medal_bonus_202308-costume", name: "衣装交換メダル8月", link: true },
        { index: "medal_bonus_202212-yakuwari", name: "レギオンリーグ開催記念役割ガチャメダル12月", link: true },
        { index: "medal_bonus_202301-yakuwari", name: "レギオンリーグ開催記念役割ガチャメダル1月", link: true },
        { index: "medal_bonus_202302-yakuwari", name: "レギオンリーグ開催記念役割ガチャメダル2月", link: true },
        { index: "medal_bonus_202303-yakuwari", name: "役割ガチャメダル3月", link: true },
        { index: "medal_bonus_202212-zokusei", name: "レギオンリーグ開催記念属性ガチャメダル12月", link: true },
        { index: "medal_bonus_202302-zokusei", name: "レギオンリーグ開催記念属性ガチャメダル2月", link: true },
        { index: "medal_bonus_202304-season", name: "リリィズシーズンガチャメダル4月", link: true },
        { index: "medal_bonus_202305-season", name: "リリィズシーズンガチャメダル5月", link: true },
        { index: "medal_bonus_202306-season", name: "リリィズシーズンガチャメダル6月", link: true },
        { index: "medal_bonus_202307-season", name: "リリィズシーズンガチャメダル7月", link: true },
        { index: "medal_bonus_202308-season", name: "リリィズシーズンガチャメダル8月", link: true },
        { index: "medal_bonus_202310-season", name: "リリィズシーズンガチャメダル10月", link: true },
        { index: "medal_bonus_emotional-4", name: "エモーショナルメモリアボーナスメダルⅣ", link: true },
        { index: "medal_bonus_emotional-5", name: "エモーショナルメモリアボーナスメダルⅤ", link: true },
        { index: "medal_bonus_emotional-6", name: "エモーショナルメモリアボーナスメダルⅥ", link: true },
        { index: "medal_bonus_emotional-7", name: "エモーショナルメモリアボーナスメダルⅦ", link: true },
        { index: "medal_bonus_emotional-8", name: "エモーショナルメモリアボーナスメダルⅧ", link: true },
        { index: "medal_bonus_peta-max", name: "ペタMAXボーナスメダル", link: true },
        { index: "medal_bonus_gw", name: "ラスバれ！GWボーナスメダル", link: true },
        { index: "medal_bonus_premium", name: "プレミアボーナスメダル", link: true },
        { index: "medal_bonus_ririsama", name: "2.5周年リリサマ!!ボーナスメダル", link: true },
        { index: "medal_bonus_new-ch-gran-eple", name: "新章グラン・エプレ編ボーナスメダル", link: true },
        { index: "medal_bonus_premium-2", name: "プレミアボーナスメダル", link: true },
        { index: "medal_bonus_skill", name: "スキル特化メモリアボーナスメダル", link: true },
        { index: "medal_bonus_skill_202310", name: "スキル特化メモリアボーナスメダル10月", link: true }
    ],
    other: [
        { index: "coin_sell", name: "無垢なる黄金", link: false },
        { index: "goggle-3", name: "アーセナルゴーグルⅢ", link: false },
        { index: "jewel", name: "マギジュエル", link: false },
        { index: "medal_memoria", name: "メモリアメダル", link: false },
        { index: "medal_order", name: "オーダーメダル", link: false },
        { index: "medal_legendary-battle", name: "レジェンダリーバトルメダル", link: false },
        { index: "medal_pendant-normal", name: "ペンダントメダル", link: false },
        { index: "medal_pendant-premium", name: "プレミアムペンダントメダル", link: false },
        { index: "medal_pendant-royal", name: "ロイヤルペンダントメダル", link: false },
        { index: "memoria-level-3", name: "少女の日記Ⅲ", link: false },
        { index: "moon", name: "メモリアムーン", link: false },
        { index: "moon-fire", name: "火のメモリアムーン", link: false },
        { index: "moon-water", name: "水のメモリアムーン", link: false },
        { index: "moon-wind", name: "風のメモリアムーン", link: false },
        { index: "moon-light", name: "光のメモリアムーン", link: false },
        { index: "moon-dark", name: "闇のメモリアムーン", link: false },
        { index: "pack_fukubukuro-2023-sp", name: "三賀日限定スペシャル福袋", link: false },
        { index: "pack_fukubukuro-2023-1", name: "金の福袋", link: false },
        { index: "pack_fukubukuro-2023-2", name: "赤の福袋", link: false },
        { index: "pack_fukubukuro-2023-3", name: "白の福袋", link: false },
        { index: "pack_fukubukuro-2023-3_no-pay", name: "白の福袋 (無課金)", link: false },
        { index: "parts_legendary", name: "レジェンダリーパーツⅢ", link: false },
        { index: "ramune", name: "ラムネ", link: false },
        { index: "skill-vshuge-3", name: "対敵の記憶Ⅲ", link: false },
        { index: "skill-lm-3", name: "切磋の記憶Ⅲ", link: false },
        { index: "skill-hojo-3", name: "錬成の記憶Ⅲ", link: false },
        { index: "skill-all-3", name: "武功の記憶Ⅲ", link: false },
        { index: "skip-ticket", name: "スキップチケット", link: false },
        { index: "charm_durandal_hy", name: "デュランダルSP.HY", link: false }
    ]
}