import Head from 'next/head';
import CommentModal from '../components/CommentModal';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';

export default function Home({ newsResults }) {
  const randomUsersResults = {
    results: [
      {
        name: {
          title: 'Mr',
          first: 'Dittmar',
          last: 'Klaus',
        },
        login: {
          uuid: '3791e2ef-5dc5-484c-be63-bb6864668223',
          username: 'happyduck763',
          password: 'theatre',
          salt: 'wYVvGqV0',
          md5: 'd4812ab8c848f33d2314d2bc874b080d',
          sha1: 'bac4afa8991f33af620011c5cab2808a59b63486',
          sha256:
            'e58108247de552e68382b29e3c9c313e9291b37b07d3a6ff288191ad39a6515d',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/54.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/54.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/54.jpg',
        },
      },
      {
        name: {
          title: 'Ms',
          first: 'Susan',
          last: 'Chambers',
        },
        login: {
          uuid: '76ff9872-fae2-4de6-8d7d-f14f253022c6',
          username: 'blackpeacock437',
          password: 'blades',
          salt: '7hs9ixlc',
          md5: '8f9b28e52480517f7a111dddad806ceb',
          sha1: '67529c21e3002e9e07bdb05a5d47f1ecbe544447',
          sha256:
            'dff9191a7169bebcd32c668388ad1bcd1b8dd9517711206a7d5ded5c25e97db5',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/56.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/56.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/56.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'Francisco Javier',
          last: 'Solís',
        },
        login: {
          uuid: '9dc5f72e-fe35-424d-83be-d4a35d554d70',
          username: 'lazyelephant770',
          password: 'capslock',
          salt: 'T91TplNi',
          md5: '5e14f24bdb0c8e6c93a1f0bd980045c0',
          sha1: '71cb0e2450488f675d8592544bd9ecc5a9673eea',
          sha256:
            '67f6501ea3be8fa36fc71184515074cf3d4dae4937a61a2de0a869453a0e3496',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/70.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/70.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/70.jpg',
        },
      },
      {
        name: {
          title: 'Mrs',
          first: 'Ariane',
          last: 'Brown',
        },
        login: {
          uuid: 'db33a238-3b07-4b95-9251-f12d0b8704af',
          username: 'silverzebra975',
          password: '8675309',
          salt: 'HPa5qfEC',
          md5: 'db470ed8fb3b36e0e22f13fa62d7465a',
          sha1: 'bb47ddd6294bd05314b8c4a5447fbbf4e73ed51a',
          sha256:
            '618e24b2c628f9aa917fbdc593dbaf67e54781381b2e188dc8105c98c722c87c',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/82.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/82.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/82.jpg',
        },
      },
      {
        name: {
          title: 'Ms',
          first: 'Mariel',
          last: 'Fossan',
        },
        login: {
          uuid: '36524ed0-e2e2-42a8-8684-18a0e41770cf',
          username: 'purplesnake469',
          password: 'boomer',
          salt: 'ZMiQKIQd',
          md5: 'c7a6eb106d8864da2f02fb21cf37f947',
          sha1: '645d402fcd2c0b91b7dd4d1818b3e33f9eca254e',
          sha256:
            '6b7cb73ef66c659bdbc89b6f98b036387e710e55c5b6b6e04a369b22f83eb787',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/96.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/96.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/96.jpg',
        },
      },
      {
        name: {
          title: 'Miss',
          first: 'Justine',
          last: 'Ginnish',
        },
        login: {
          uuid: '8d1f665b-c009-4bec-8141-c47b8a3d179a',
          username: 'angryladybug713',
          password: 'random',
          salt: 'iW4shFUT',
          md5: '1be85f1242c607178af01b5730fee4cc',
          sha1: '974ff4fba318fb405b93f57684dcf0ba9f07a6ad',
          sha256:
            'a46e7923e8a063bf0b025e146b3e571f4922fa329675968b5f4204947f887212',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/74.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/74.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/74.jpg',
        },
      },
      {
        name: {
          title: 'Miss',
          first: 'Rose',
          last: 'Morris',
        },
        login: {
          uuid: 'd92b98b0-2ad6-4d8f-bdc0-1134c193f146',
          username: 'bigtiger249',
          password: 'state',
          salt: 'u6vRIJRk',
          md5: '879b123df02b49dbf1c0287452d0e3bd',
          sha1: '7ec936d5092528dc09b945d3259ce3368132d214',
          sha256:
            '3bd4fb6d15f046f3037b0f76893e021d76b7c27a13deb995d1f20941f0f3f758',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/25.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/25.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/25.jpg',
        },
      },
      {
        name: {
          title: 'Ms',
          first: 'Debbie',
          last: 'Shaw',
        },
        login: {
          uuid: 'a5435890-32ce-4418-bbb0-7abbcf43da11',
          username: 'redwolf665',
          password: 'herbie',
          salt: 'VWqMy3W5',
          md5: 'cbe73b0b94df81a223239c14e36daad1',
          sha1: '5be408e5c751358b3ab490dd9535ebceb81a5cb5',
          sha256:
            '206046e6d12b56ec4de62b7cd363c52f28ee8d47b006ffd77b12f791ccf77275',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/22.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/22.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/22.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'Ethan',
          last: 'Chu',
        },
        login: {
          uuid: 'd0635c52-c06c-4ad8-bde9-9da5e5b99b2d',
          username: 'yellowfrog660',
          password: 'wassup',
          salt: 's5OYDh8q',
          md5: '641386f2c254535ae8157c78f9eca2c8',
          sha1: '0f21b4d1b6546dca537c661e717f7c9453251238',
          sha256:
            'db7c000a9e68e8c8aba2c7427204057e007d6166de6452efbe302e7e7c6af623',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/71.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/71.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/71.jpg',
        },
      },
      {
        name: {
          title: 'Ms',
          first: 'Emilie',
          last: 'Knight',
        },
        login: {
          uuid: '2344b61d-4be1-499b-a4bf-33ba07a4dd0e',
          username: 'yellowbutterfly626',
          password: 'steve1',
          salt: 'GkPcyTM6',
          md5: '6dd388f28d827e3c164fcd89e1f1947f',
          sha1: '3225439ab500d56b2d70ac268f300ad2974e2953',
          sha256:
            'f91f62aeffa784cf9ba35cf6d91574f2acd1ad768f1e00b07fb1fdafb07e19ae',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/71.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/71.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/71.jpg',
        },
      },
      {
        name: {
          title: 'Ms',
          first: 'Nalan',
          last: 'Akyüz',
        },
        login: {
          uuid: 'edcc4a6e-ce6a-4ea7-b3a9-140be0b24810',
          username: 'redbird815',
          password: '555555',
          salt: 'kM8a4jgB',
          md5: '7dc9ad9b4930601164f3534fd587dd4f',
          sha1: '51ed8ce49f93f4291c7a13cf10b218680d5f882d',
          sha256:
            '05184718ec539e02d63b47e38764ef116fad7ca05593da1e702f99b49dc69ae0',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/57.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/57.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/57.jpg',
        },
      },
      {
        name: {
          title: 'Ms',
          first: 'Cynthia',
          last: 'Kellner',
        },
        login: {
          uuid: '1f2bba24-53e3-497d-94ea-d71f4ff59e4b',
          username: 'organicwolf556',
          password: '99999',
          salt: 'UK0v0PvT',
          md5: 'acbe1e515724fd4e1396cc6993855537',
          sha1: 'bb5b6c3f29c479ba8160b69e724f0943c39b1522',
          sha256:
            'add17e7e1e01e5c863fb5a56adc6fdcc8269369de27cad6f09efb4b095c58883',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/33.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/33.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/33.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'James',
          last: 'Martin',
        },
        login: {
          uuid: '89947174-ec6d-47d7-b502-a67cd5cb8e82',
          username: 'crazykoala304',
          password: 'pepsi',
          salt: 'MjFImGLN',
          md5: '64feb9ae55de79b4cc51ee5451865355',
          sha1: 'e0feda3e6164a63f82c43c810bdc076706e08448',
          sha256:
            '42e35bee285717972ff927cc5508200b139bfe6a5f6aa755e9d2552c9aab341d',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/89.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/89.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/89.jpg',
        },
      },
      {
        name: {
          title: 'Miss',
          first: 'Lise',
          last: 'Wallin',
        },
        login: {
          uuid: '6baedf19-46b4-4b1b-84db-bb69e68b5299',
          username: 'sadmeercat180',
          password: 'test1',
          salt: '7kwihQCv',
          md5: '8369b309d7a3e51757ab44d2900fe8ca',
          sha1: 'a750e6cefbaaa32023886077917219e25f2975c5',
          sha256:
            'e67238db304d2ad15120c9064b7a1aa869b52dfb8b43286ced494443b419880a',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/61.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/61.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/61.jpg',
        },
      },
      {
        name: {
          title: 'Miss',
          first: 'غزل',
          last: 'نكو نظر',
        },
        login: {
          uuid: 'b1e50bee-829f-40e2-960b-0c44982d96e4',
          username: 'tinyduck129',
          password: 'candy1',
          salt: 'hX9FneMB',
          md5: '0d267ddf8c152427e6d685500b867dbc',
          sha1: '869e8806de6e2bea03578fa96d3047105750eefe',
          sha256:
            '94dc4cab16580f52caf557125f3051fb85ede894babfaf665cb81de156958aed',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/42.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/42.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/42.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'Arron',
          last: 'Vargas',
        },
        login: {
          uuid: '2ef3b2b0-7663-4b36-ac96-35fb9f5fa5b0',
          username: 'yellowrabbit236',
          password: 'velvet',
          salt: 'qqQAFltB',
          md5: '5e83e3c6147af8910de8542bb7f675d4',
          sha1: 'f6beedada0055015126cf157f9ad542716d84759',
          sha256:
            'ac85e1f6b4d3c455105112a47747a9756a7d6c7bf6f909dd8c2fa499a3edbe87',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/55.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/55.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/55.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'Simon',
          last: 'Jürgensen',
        },
        login: {
          uuid: '8cd55645-5d3c-4384-affc-954227a508bf',
          username: 'organicwolf416',
          password: 'hogtied',
          salt: '8aiuPfl3',
          md5: '839bebe3865c773abeff016c5b439df7',
          sha1: 'ae7ee7723ac0b08acf40e56ddbeca57d5592c92b',
          sha256:
            '7cc76ee21d443d3bfb9f765e0c8166463255ed0c1141a8f2684ac15326c0fb47',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/94.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/94.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/94.jpg',
        },
      },
      {
        name: {
          title: 'Ms',
          first: 'Mélissa',
          last: 'Roy',
        },
        login: {
          uuid: '288389aa-4638-4be1-bd23-4d93b1722cee',
          username: 'redgorilla224',
          password: 'scout',
          salt: 'aHGOXvZv',
          md5: '095b36c6f8bbda7b20fb4340aa710372',
          sha1: 'd6da030091e9e8dbb565d9153438e7c16c012b4c',
          sha256:
            'b063b15aafb9ee599774a585d6f3dd041600ed9180b331aaa0f7eceadc40eb7c',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/90.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/90.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/90.jpg',
        },
      },
      {
        name: {
          title: 'Miss',
          first: 'Ömür',
          last: 'Gönültaş',
        },
        login: {
          uuid: 'abf9e438-1894-4f25-a1a7-5eb9130a9c72',
          username: 'goldenkoala376',
          password: 'awful',
          salt: 'LzjEkthX',
          md5: 'c493b62c36899d93e4a8f80282e0b0b9',
          sha1: '66390f0a3d53e67ed61363a42ca0be6c2e4131be',
          sha256:
            '0bc154f9756e75b0a7627f7b35b2683348a9c1067adfec7e3b602037a0fd9d90',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/54.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/54.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/54.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'سینا',
          last: 'سلطانی نژاد',
        },
        login: {
          uuid: '0cc4d94e-829c-48b1-a25e-ad1cf831a73e',
          username: 'crazykoala642',
          password: 'hotties',
          salt: 'lgD4BC8B',
          md5: '2af7e6d3241937c24a00dc2d88dba3ec',
          sha1: '66722ae93fe3fcfa06bbf3a34ad1f4309f549067',
          sha256:
            'c067e8209cc5401bd196aa58295e90ee908149d710a3bfed4fb53c624f7e2531',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/28.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/28.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/28.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'Andy',
          last: 'Murphy',
        },
        login: {
          uuid: '27668aff-4482-4a8f-8ee6-57b620e87065',
          username: 'ticklishelephant286',
          password: 'rochelle',
          salt: 'TtcFWjvV',
          md5: 'edefea4936753c74cf9f1eae8c2f33cb',
          sha1: '4074bb3ab35a79da8b0fea034c3b0e178c64e969',
          sha256:
            '3b33aab8ece7e6d8af2b4f09733085e3ec3f584cb4e2f57af0b46a8e16f3aadd',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/44.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/44.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/44.jpg',
        },
      },
      {
        name: {
          title: 'Miss',
          first: 'Zoe',
          last: 'Liu',
        },
        login: {
          uuid: '4b68257f-fc26-4d8b-a696-b31932d67149',
          username: 'orangeduck808',
          password: 'babyblue',
          salt: 'RK2WXJSm',
          md5: 'd2ab2bb86222db8f1aebbafd7be6742d',
          sha1: 'f34debc24af15cae45ae9f1ceba8e6cecb28fb02',
          sha256:
            '5b6e9c03e9f65f55782c2b1f599c016ee8e8f48db90856b4d38f15e9e5dac88c',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/89.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/89.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/89.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'Roelant',
          last: 'Van Glabbeek',
        },
        login: {
          uuid: 'f025a12d-79e5-4f9f-b4f9-67a08d8f43de',
          username: 'lazypeacock773',
          password: '54321',
          salt: 'N2DJC5rY',
          md5: '14f4b17b2065ffdaf39c6d09157dc7ae',
          sha1: '0432652b74076665bfe92def0e64c1cb83521c1b',
          sha256:
            'f1b57480f7b6670536f3fcc26551c87b2196483da0f4905c72ca2c6d6548eeb9',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/93.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/93.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/93.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'حسین',
          last: 'سالاری',
        },
        login: {
          uuid: '6bdfb710-17d0-488a-85d5-cb621de58364',
          username: 'lazyfrog548',
          password: 'jiao',
          salt: 'DhBhFlpQ',
          md5: '2bc34107c5b303ab5dba6ee6d90b80d7',
          sha1: '57cedb02a41ff9655b14263d62f147f6910f91ce',
          sha256:
            'c40755b3d13b03ffc88c028e9f922c71e43b5dea9e1a6c381f5e1998fc875cde',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/26.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/26.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/26.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'Živko',
          last: 'Radanović',
        },
        login: {
          uuid: '91fe1dd7-5fef-4d64-88e4-bf9627251c14',
          username: 'bluetiger837',
          password: 'verbatim',
          salt: 'TBBKfDCH',
          md5: '6a7dc2be03c954f4901bf1942c732a59',
          sha1: '45a0833cc3e423a1ac48a5e93bda727a545069cf',
          sha256:
            'f6a839944d8d348d537136df0b49013b4c10c9214eca58248272059d9d350fc7',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/77.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/77.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/77.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'محمدطاها',
          last: 'سالاری',
        },
        login: {
          uuid: '70819f9f-106f-4bc8-b35a-c2749485144e',
          username: 'silvermouse126',
          password: 'harper',
          salt: 'H5JJqVS0',
          md5: '3f4f67bb8e0bc50ca26e0efd64ce59fa',
          sha1: '169483f895751dafd156cd7b7289d858210a578d',
          sha256:
            '94a4a10d4d45fb9ad2f76674b03828a61cc0dda45c1fc674eec428e5b5cdee3a',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/89.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/89.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/89.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'Leo',
          last: 'Roy',
        },
        login: {
          uuid: '217e77f7-7469-4214-acf1-0ba6c5a09137',
          username: 'bigpanda197',
          password: 'underdog',
          salt: 'ZuT8dEOy',
          md5: '6c6e7eb68ad5044213146da1bab276ee',
          sha1: 'c2c321a2af46d0ee17b061016c82304d7da38841',
          sha256:
            'e31d234c1fd163b90f735d75579b8a55062370b5602975e649eb945f583839c0',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/94.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/94.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/94.jpg',
        },
      },
      {
        name: {
          title: 'Madame',
          first: 'Elisabetha',
          last: 'Joly',
        },
        login: {
          uuid: '7600ad51-41bb-4408-825c-cd3368746dcc',
          username: 'organicduck221',
          password: 'tractor',
          salt: 'UzljTHqd',
          md5: '9dd264c6975239cf3fc86dea87cfbefe',
          sha1: '704794ce83ce044620d289e7559377232c01a1f1',
          sha256:
            'edd44cab2c3e6f1fc511efe6b50a9517963faf7996bf3760e06f0eca130d0c32',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/41.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/41.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/41.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'Julián',
          last: 'López',
        },
        login: {
          uuid: '162df804-ecfa-4bb9-9cc9-b3183c56ec7f',
          username: 'bigduck356',
          password: 'trojan',
          salt: 'hWb3OxyY',
          md5: '1d9775d7ae7e36f5192734f09eb49d51',
          sha1: '649ce745473591b0bc679ab9288bc56fd878f236',
          sha256:
            '7ac044be8bbebdd9212a87241b4b0dc5228cacc11f0bde98505e18540fb60dd3',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/28.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/28.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/28.jpg',
        },
      },
      {
        name: {
          title: 'Mr',
          first: 'Coşkun',
          last: 'Tüzün',
        },
        login: {
          uuid: '2a27f6bc-8cdf-452b-b3cd-0a6bf6ad797e',
          username: 'ticklishfrog992',
          password: 'getting',
          salt: 'KrV7q29n',
          md5: '1ae84e50a3c5ddd250782bd847a41ee3',
          sha1: '9c9b04704bc1527b40d53f7f97d5aa90dfdba7ea',
          sha256:
            'd2406b1f4f6eb0f7fae06619329c65637fc97bc93b02003d0f864e6bdce73396',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/61.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/61.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/61.jpg',
        },
      },
    ],
    info: {
      seed: '13da5443b98daa7e',
      results: 30,
      page: 1,
      version: '1.4',
    },
  };
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen  mx-auto ">
        {/* Slidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets
          newsResults={newsResults.articles}
          randomUsersResults={randomUsersResults.results}
        />

        {/* Modal */}
        <CommentModal />
      </main>
    </div>
  );
}

// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

export async function getServerSideProps() {
  const response = await fetch(
    `https://saurav.tech/NewsAPI/top-headlines/category/business/us.json`
  );
  const data = await response.json();
  // who to follow section
  // const randomUsers = await fetch(
  //   `https://randomuser.me/api/?results=30&inc=name,login,picture`
  // );
  // const dataUser = (await randomUsers.json()) || [];
  // randomUsersResults: dataUser
  return {
    props: { newsResults: data },
  };
}
