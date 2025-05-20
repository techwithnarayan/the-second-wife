'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "16de4176ed1ee50cf90e0a3da016d955",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "db970b8630b87afd3a41285f41e9ccbc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c3cdba842b95f474bee1c4d4a52e59c6",
".git/logs/refs/heads/dev": "f4144437d7b35ab665c0f59b495a74d2",
".git/logs/refs/heads/master": "1b0e295c36e89e9df4214d1b8b95ed3a",
".git/logs/refs/remotes/origin/dev": "8493e0a95a47e81be1ab8f834505aa8c",
".git/objects/00/f474c0224c2f7cc71a9946cd9cc1a3afb98539": "f561f881d58e4c6f29fcfa1dc1694265",
".git/objects/02/afc042a38647c216d9580d287c24e41568cdbe": "a2b7d490f7de55d5a4fc8e77571b762c",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/09/6b090dd5f3e0ea0ccc5937c888183c32dc8f83": "3ce8450a3d177b9705a34508bac07514",
".git/objects/0a/3f25dbc77afaebcbc44fd69939e904d21f5a37": "3e2ecceab27acfd76ff502a3ceb78177",
".git/objects/10/6841aa96b58984c2c688e7196ef1cbe5e99b76": "1cba7934feffe5214941813c57ad2cba",
".git/objects/16/3f7e804d756717269b1ad0685173d3595099cb": "163b0a8e75c921a4a07927426b40b33d",
".git/objects/17/024093dc57427a385365ac5b03292f6d705a64": "5101e03ba992b1394c6a4e839ab3c5bd",
".git/objects/1b/a9789c626ab73dc94dd1cbd0216ae0a5ef1c17": "1c597a2807f08929b7cd3a3da219be50",
".git/objects/1e/af5adb471ea137d30076bcd94e588c54b47094": "43f8bf3449cc0dd58c03e528e0d5e96e",
".git/objects/20/445bc3cdccdd7b789b970bac6f04c0fcd52793": "d7cbc313801bc2df6539c80c4bce26cd",
".git/objects/22/2b6c17e13dd00059d84ea75c5ba1751c8ecf56": "821589324b6687e97735bb1203e416bd",
".git/objects/2c/a528e61b7572284d2fbc83806df264fd67fb0d": "c1bb4d06dea44cd04a6a042444c57184",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/eb52b29e055f41c53d81bc5e6115ebcd6d2843": "5ebf8fd6193349efc6eab9acb90f9b48",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/719cf5b98ae4831a138e7a5c0f977c41d42f6d": "d7563ce2b6ae3473ff0c1854746a3135",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3f/ba54987e36534c146f2ff73e0760abac870d23": "a3a07688f5cc9320da255bfe0b4dd799",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/d5fc53b6bc97c6ab8f89ed73e7c2d7d1411021": "5411612fedc14ba91220dd10dd7a4dee",
".git/objects/41/3051a4dda8b299ec7faf37cea6b73384d357d1": "d39c426b96c6f5c748dc21c5815ada88",
".git/objects/43/fc8905a15860c85749f72004ca30ed59afefe4": "34b928ea86b5ade273e6b2a6cf4c6920",
".git/objects/46/be193f3e0dfdc550e5b742c7dc851bac2fbd98": "b8c1b7e384596b23c47c9cc3e86117ab",
".git/objects/4d/a12ce969ce4fa08d7eb2e59801d38d3ec6ac59": "9970bc22c136c89aeceab97a00df33b9",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/53/5429c8b68795695a5480a818f895de535ccfaa": "f45db1f04f0acfc9297bc433670eca97",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/274a771f74fb20cc260d0d884eab6be12686bf": "71f536719204aac4bbec1de14beda844",
".git/objects/5c/c1ba30e275d6ce0da27a170db7061def545761": "9245b6bbf99da457e30b3b8febd7b8ae",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/53846d46666f515f65e22e13891cea518c216e": "ce34abf2896495dcedf07a8dc8517be3",
".git/objects/62/c3220203526c5d792ca6da9d6884a93447aca6": "21769d76463af914e2db3efa95ce1574",
".git/objects/63/4307e6c0727b7349be4a6e6470320b2e4480f4": "7c23600dff13a091ebdca61925d34ca4",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/c1a5a4208b204237c9bd9c4404a2a8203706c4": "c1bd592506791add1cca49034fad5bef",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/051a189f82451ebad49353d6f2802af6b361e4": "b026c06cae3fb2c8f7b14886e923b44f",
".git/objects/70/f8a3aabb72efabd033af24e9e8ea44364b0ab5": "49bde29eca7fcff9b606ea9f80622636",
".git/objects/84/da7bd0492575df6894582aa8f419f5a240cb82": "7f4514f556f9d2b08d89f39b1b23b6d6",
".git/objects/87/7308a82b0f9954b0083f4b3b4775428770b42a": "3313814f524e5daf6827e39ef363c94e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e008f0416e325e5b22dadd48209b30b85a8994": "d3a2a45fecd7053d44328ddc13340655",
".git/objects/8c/0e9c8022b7694235db264bbaba0211a19b5093": "186db42ab4439fabe36ecb577b5ed832",
".git/objects/8e/b0470eee0e406ac37bb56de3a75c36ad53ff41": "fb349b180813a22cc84a67441df77196",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/8da247aa34e996fa2c1117a9378875a1657acd": "d3a03fab7b9835debd0dd814a6b08e4c",
".git/objects/91/b997c50e46515dab653227d3784bd2e38887fb": "02a9a757b331827122f85659d973b7e0",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/96/808c42a7484c21fc9baa6d3151b90afbf75007": "916cb88ea1965d5ef6bc7f08e1518cdd",
".git/objects/98/4e845bd99a3e5abb2d58023fac17c21f47fd66": "41c66abf4e0aa4b57ba71e47c0d4beb0",
".git/objects/99/9518070070b54dd64678026f35e6bb99cc2787": "507c7dc98f5f79814ffff01ddbf4fedf",
".git/objects/9a/41db58fbdd5c71e16f9c7d69f217db30ac1098": "c2088533fef090d7048992101a3ce2c1",
".git/objects/9b/4840214b41607cef969f640afaa505fa448734": "bc0d27273fbda77e22cf6dc3fa6fa2a9",
".git/objects/a4/61d58fb89fea866f65ad40bacf0a845c7934a6": "2ff4052a83fea23f99d32284e1d12e61",
".git/objects/a4/c7ddb0057e4df1a476b6792b67ca9524edc007": "4e35ff7bdeaedd1052d12c92133aedba",
".git/objects/a5/ab8e747bbe7a6daa553954f626d1cc93da4414": "8964996595abde2d1d9e71728fd9a43a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/33c4a7fdc0ae1a22d1d9225b017bd96824d22f": "d00403472ea65e62206d961a0b8ebbbd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/f474f151a2bac40c0afda821e96b321c73a4d2": "dede80d420a7945bd44a2427a4bcd192",
".git/objects/c0/5290fa52d9c04f2182d1657d94faff7a070a90": "c38129f6fb42c8fbb4848820339c7812",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/3fc2eed6a3776d2b7a2f9562d78c3cc8df71d1": "841bb77966f5319f3b1cd853bdcda96e",
".git/objects/ca/a6e1af2e169de61ef804f6485018a648ec04ed": "83e7e7052af96fe5184851cc68d58a03",
".git/objects/cc/092b51b32c95e18f1a095a43c4854ab2dc2911": "b0de23e38b9865b15dcde22145a23e9c",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/cf/fe252d00cff4088ecee2c2c08c779c4bc2d3ba": "80be5efebeb384c235e7dd06be68eead",
".git/objects/d2/c3b3bdba6f9fb3100aa307c959ed6ed2c6166b": "8ea65bde9336b532ba96fb7f85a09fc6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/21a99eea6b6aed7f058d2868c43528d47bcf35": "fdda1b95d717e761ada8e3a2c3aefd74",
".git/objects/d7/9a0f5b0c1137367805372cbc17e08efc363592": "c1a40ee22a65d9bd4473bd39520d2052",
".git/objects/d8/71ecf42323d66c278d6065206ddf50c0ffa441": "b696b3d233ead15d7ef2d1291d7d8ccd",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/f748904c26cdc6eec14d5cf104a8cc665a0d86": "36caef474872c34f3d2fda8b6ecad43f",
".git/objects/de/eecbcceaaaee877b632bc6c77bc711d1706d21": "12e19833e87e6f6173f1c8a4a73a3b96",
".git/objects/e0/1d88d9eaef3c143c6a395129e06abf26a645d0": "5aaf885dea2b3016c7b577dff88ddb33",
".git/objects/e4/8bd8f6acb5fda1fde126a0ebb3590261f5cbe9": "6448ed90023fd11635a59e636c1fa1ed",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/1a05b424ae9f9102a70679305c630c7b4521ee": "26c63bcb0b54459e73df03a434815f3e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b45168353909e60100bc2d9beccfc1f2d861b4": "7ddd80792cb7ef555d94dcbbb238da9b",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/58e92e2ed883a17da96d2732c20a46e939aab3": "d49f8d9beb8ba142b34c301abddd2272",
".git/refs/heads/dev": "d177023f9c651b4d49a1a7bae1b9ce17",
".git/refs/heads/master": "d177023f9c651b4d49a1a7bae1b9ce17",
".git/refs/remotes/origin/dev": "d177023f9c651b4d49a1a7bae1b9ce17",
"assets/AssetManifest.bin": "3715164da6c6a9e43e7bbdab1d1a9318",
"assets/AssetManifest.bin.json": "4536015009faef28d6063f070f54fdf3",
"assets/AssetManifest.json": "d657b0b92d38f2a9310eafc218c9ad72",
"assets/assets/jsons/contact_us.json": "ac127d69d365e9de02b3c70e6bb51143",
"assets/assets/pngs/1.png": "89ffe67bd519266bcea992a6457cf293",
"assets/assets/pngs/1.svg": "aebe3d9c4d939c1ada9892b0757d2001",
"assets/assets/pngs/2.png": "05b5d801e748698b3a55b3d59d458c1a",
"assets/assets/pngs/2.svg": "14878ee13401fad1359c3f0aa1a29aea",
"assets/assets/pngs/3.png": "d583abfba78ed3fed1dc1b2d8f1176ab",
"assets/assets/pngs/3.svg": "4053cb37eae11fe143ab0b4486cf8a83",
"assets/assets/pngs/4.png": "b54d33bdb008e7ff7e4566da8fa96e34",
"assets/assets/pngs/4.svg": "e871abb692dfdb386724fc325ed564fe",
"assets/assets/pngs/5.png": "40b4b88f85d1ec26c0832288edc2983a",
"assets/assets/pngs/5.svg": "6339dd6358b9bb3403a837ad43b826c0",
"assets/assets/pngs/6.png": "fe1d1140c7709e5d1ccff69e0f0d3741",
"assets/assets/pngs/6.svg": "9272b405b55abf8403025fb3ad8860d1",
"assets/assets/pngs/about_img.png": "261bad4a2870c45411790529cb2718a1",
"assets/assets/pngs/hero.jpg": "cbeb879a22489d8985a82ac3ac61af0c",
"assets/assets/pngs/logo.png": "fae287400d5c528b7d6be0fceb5cf559",
"assets/assets/pngs/reserved.jpg": "5dd9f6b789c17534739429caea601331",
"assets/assets/svgs/about_us.svg": "ee1c8fe7f3133584d99125aeaa7a15e9",
"assets/assets/svgs/book_table_img.svg": "e945c7055761966e40c4f53682d25b10",
"assets/assets/svgs/chef.svg": "2a7802af1913a3d187446b359227fb98",
"assets/assets/svgs/dinner.svg": "ad00d5ee15592b9a31e0d8c07164a5a0",
"assets/assets/svgs/empty_cart.svg": "5b5beb5218d479c309ab61622d0ed1c5",
"assets/assets/svgs/extra_spicy.svg": "03239b52efa707fb1fddc74267f2d14f",
"assets/assets/svgs/gluten_free_food.svg": "840c1e7485050cebd66ccebc122dcacb",
"assets/assets/svgs/ingredients.svg": "0c9989e83c995abc50f15d8a0a522138",
"assets/assets/svgs/jain_food.svg": "d4e9b97be01bd310f21c106c462a4793",
"assets/assets/svgs/logo.svg": "c5ad7050669e795e110a377d305ab383",
"assets/assets/svgs/medium_spicy.svg": "f042f4191bd9a5c212c19c3cbc06394f",
"assets/assets/svgs/no_data_found.svg": "2efd55d819fca052715f6db39fe6cb0c",
"assets/assets/svgs/nut_free_food.svg": "ea021127b3c5215fe37ccb0771177c09",
"assets/assets/svgs/spicy.svg": "435a4f06f6ec96b9a19952821ca38987",
"assets/assets/svgs/team.svg": "0749607c9efe91570aec34179aa05533",
"assets/assets/svgs/vegan_food.svg": "aedc7637b8a8c5ce8a9f12eec31f7851",
"assets/FontManifest.json": "8d7e1d135a804466ab7d8c6d31b77b91",
"assets/fonts/MaterialIcons-Regular.otf": "3e228cf93678de10297de68f398f74cc",
"assets/NOTICES": "48b482ff95af7fc34b9bd6cf5134d94b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2352ebf23d20b4dd3eb4ab95f437f774",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ce09fc27c9e1b7f059c0d76afdc206dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4e1ca05b09669d912d13979e81edf3b0",
"/": "4e1ca05b09669d912d13979e81edf3b0",
"main.dart.js": "282ab1f1f546aed24eadac254f9ecf36",
"manifest.json": "e03b46e8a6dbd3dc3eeaf108a8612990",
"version.json": "11531eaf821780069b4339b9ab59244d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
