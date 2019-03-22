const data = {
  works: [
    {
      id: 1,
      kind: 'Work',
      title: 'ポートフォリオ',
      shortDetail: 'Vue.jsで書かれたこのポートフォリオ',
      detail: `自身の活動を外在化するために開発したポートフォリオです。<br />
              プログラムはVue.jsで書いてFirebaseでホスティングしています。<br />
              技術力・学習能力をアピールするために、普段利用していないVue.jsを利用して開発しました。`,
      repository: 'https://github.com/shoMMKS/my-portfolio',
      image: 'background.jpg',
      url: 'https://github.com'
    },
    {
      id: 2,
      kind: 'Work',
      title: '株式会社ドルフホームズ ホームページ',
      shortDetail: '株式会社ドルフホームズさんのホームページ',
      detail: `インターンシップ先の企業でこのホームページを開発するプロジェクトに参加させていただきました。<br />
                pugというHTMLを効率的に書くためのテンプレートエンジンを用いて書きました。<br />
                他にもjQueryやsassなどの技術も用いました。`,
      repository: '',
      image: 'dolf-homes.png',
      url: 'https://dorf-web.net/'
    },
    {
      id: 3,
      kind: 'Work',
      title: 'fourierTransformation',
      shortDetail: 'フーリエ変換と、その逆変換を利用して、画像を編集できるアプリケーション',
      detail: `学校の課題で開発したJavaアプリケーションです。<br />
                アプリケーションソフトウェアを実装するためのデザインパターンであるMVCを利用して開発しました。<br />
                チーム開発を行い、チームで開発する力とチームリーダーとしてのマネジメント力を鍛えることができました。`,
      repository: 'https://github.com/shoMMKS/fourier',
      image: 'JosephFourier2.jpg',
      url: ''
    },
    {
      id: 4,
      kind: 'Hobby',
      title: 'SimpleBlog',
      shortDetail: 'シンプルなブログ',
      detail: `PHPの基礎を学ぶために作成したシンプルなブログです。<br />
                記事の作成、閲覧、削除がすべてできるようになっています。<br />`,
      repository: 'https://github.com/shoMMKS/simpleBlog',
      image: 'no-image.svg',
      url: ''
    },
    {
      id: 5,
      kind: 'Hobby',
      title: 'LessonManager',
      shortDetail: '時間割共有サービスのバックエンドアプリケーション',
      detail: `友人と作成した時間割共有サービスのバックエンドアプリケーションです。<br />
                larabelを用いたバックエンドアプリケーション開発を教えながら、自分で開発しました。<br />
                フロントが未完成のため、一般公開はされていません。`,
      repository: 'https://github.com/shoMMKS/lesson-manager',
      image: 'no-image.svg',
      url: ''
    },
    {
      id: 6,
      kind: 'Hobby',
      title: 'calculator',
      shortDetail: 'Reactで作った電卓',
      detail: `Reactで作成した電卓です。<br />
                reducerなどは一切使わずJavascriptのみで動いています。<br />`,
      repository: 'https://github.com/shoMMKS/calculator',
      image: 'no-image.svg',
      url: ''
    }
  ]
}

export default data
