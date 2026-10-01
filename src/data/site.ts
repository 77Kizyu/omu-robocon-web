/**
 * サイト全体の設定・固定コンテンツ。
 * 文面の修正や連絡先の追加は、基本的にこのファイルだけで完結する。
 * 空文字（''）や空配列（[]）の項目は、ページ上では自動的に非表示になる。
 */

export const site = {
	name: '大阪公立大学ロボットコンテストクラブ',
	shortName: 'OMU ロボコン部',
	english: 'Osaka Metropolitan University Robot Contest Club',
	tagline: 'つくって、動かして、競う。',
	description: '大阪公立大学ロボットコンテストクラブの公式サイト。機械・回路・ソフトの3分野で、ロボコン出場を目指してロボットを作っています。',

	// ---- 所在地 ----
	address: {
		postal: '599-8531',
		lines: ['大阪府堺市中区学園町1番1', 'ロボットコンテストクラブ'],
	},

	// ---- 連絡先・SNS（分かったら埋める。空なら表示されない）----
	contact: {
		email: 'sk25677i@st.omu.ac.jp', // 仮。部の共用アドレスを作ったら差し替える
		x: '', // 例: 'https://x.com/xxxxx'
		xHandle: '', // 例: '@xxxxx'
		youtube: '',
		github: '',
		instagram: '',
	},

	// 新歓情報ページの公開フラグ。false の間は「現在準備中」と表示する（2月頃に true にする）
	joinOpen: false,

	// 入部届の Googleフォーム 回答用URL（createNyubuForm 実行後のログに出るもの）
	joinFormUrl: '',
	// 紙の入部届（public/downloads 以下に置いてある）
	joinPaperUrl: '/downloads/nyubu-todoke.pdf',
};

export const nav = [
	{ href: '/join', label: '新歓情報' },
	{ href: '/about', label: '部紹介' },
	{ href: '/news', label: '活動記事' },
	{ href: '/results', label: '活動成績' },
	{ href: '/support', label: 'スポンサー・ご支援' },
];

/** 3つの分野。トップ・部紹介・新歓で共通利用 */
export const divisions = [
	{
		id: 'mechanical',
		no: '01',
		en: 'Mechanical',
		name: '機械',
		lead: 'ロボットの「体」をつくる',
		body: '3D CAD で機構を設計し、アルミ材や樹脂を工作機械・3Dプリンタで加工して、実際に動く機体に仕上げます。',
		items: ['3D CAD による設計', '旋盤・フライス盤などでの加工', '3Dプリンタ・板金'],
	},
	{
		id: 'circuit',
		no: '02',
		en: 'Circuit',
		name: '回路',
		lead: 'ロボットの「神経」をつくる',
		body: 'モータドライバやセンサ基板など、機体の中で電力と信号をやり取りする電子回路を設計・製作します。',
		items: ['基板CADでの回路設計', 'モータ駆動・電源まわり', 'センサ・無線通信'],
	},
	{
		id: 'software',
		no: '03',
		en: 'Software',
		name: 'ソフト',
		lead: 'ロボットの「頭脳」をつくる',
		body: 'マイコンのファームウェアから、操縦・自動制御・画像処理まで。動きを決めるプログラムを書きます。',
		items: ['マイコン（Arduino など）の制御', '操縦系・通信', '自動制御・画像処理'],
	},
];

/** ロボットができるまで（一般的な製作の流れ） */
export const process = [
	{ title: '企画', body: 'ルールを読み込み、勝つための戦略と機体の方針を決める。' },
	{ title: '設計', body: 'CAD・回路図・ソフト構成を並行して設計し、部員同士でレビューする。' },
	{ title: '製作', body: '部品を加工し、基板を作り、機体を組み上げる。' },
	{ title: '調整', body: '走らせて、壊して、直す。制御パラメータを詰めていく。' },
	{ title: '本番', body: '大会に持ち込み、結果を次の代へつなぐ。' },
];

/** 主な大会（紹介文。出場実績は results.ts に書く） */
export const contests = [
	{
		name: 'キャチロボコンテスト',
		note: '物品を早く丁寧に運ぶマテリアルハンドリング技術を競う',
	},
	{
		name: '関西春ロボコン',
		note: '関西の大学ロボコンの新人戦',
	},
];

export const joinSteps = [
	{ title: '見学・体験に来る', body: '活動を見に来て、気になったら気軽に話しかけてください。' },
	{ title: '入部届を出す', body: 'Google フォーム、または紙の入部届のどちらか一方で OK です。' },
	{ title: 'Slack / Notion に参加', body: '連絡・情報共有はこの2つで行います。入部届のメールアドレス宛に招待を送ります。' },
	{ title: '規約の確認と安全講習', body: '工具・機械・電池を安全に扱うための講習を受けます。' },
	{ title: '練習キットを借りる', body: '部の備品としてキットを貸し出します。まずは手を動かしてみましょう。' },
];

export const faq = [
	{
		q: '経験がなくても入れますか？',
		a: 'もちろん大歓迎です！ほとんどの部員が未経験から始めています！',
	},
	{
		q: '複数の分野を兼ねてもいいですか？',
		a: '入部届の「やってみたい分野」は複数選択できます。ロボットは3分野が噛み合って動くので、他の分野を知っていると強みになります。',
	},
	{
		q: '学部・学科や学年の指定はありますか？',
		a: '上回生や工学部以外の入部も歓迎しています！',
	},
	{
		q: '普段はどのキャンパスにいますか？',
		a: '部室のある中百舌鳥キャンパスで活動しています。',
	},
	{
		q: '活動写真をウェブサイトに載せられたくないのですが。',
		a: '入部届で「顔が写ってもよい／写らなければよい／掲載しない」から選べます。選んだ内容に従います。',
	},
];

/** 活動成績。実績が決まったら追記する（新しいものを上に） */
export type Result = {
	year: string; // 例: '2026'
	contest: string; // 例: 'NHK学生ロボコン2026'
	result: string; // 例: '一回戦敗退' / 'アイデア賞'
	note?: string;
};
export const results: Result[] = [];

/** スポンサー。ロゴは public/sponsors/ に置き、logo に '/sponsors/xxx.svg' を書く */
export type Sponsor = { name: string; url?: string; logo?: string };
export const sponsors: Sponsor[] = [];
