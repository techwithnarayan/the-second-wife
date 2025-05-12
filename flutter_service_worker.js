'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9b9d373899d17507ad1333719845cf91",
".git/config": "e83651da6c1b763218fea5966a9a2db4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7bfa5dca25a7a4436ff7b6105e9f6b1f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "cf4157c8d3c5075da256b5768ea2ab8e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "73debcc67491868706604b29ee2ccb01",
".git/logs/refs/heads/master": "73debcc67491868706604b29ee2ccb01",
".git/logs/refs/remotes/origin/dev": "1062436dce49137c3b9af0988d4a8edc",
".git/logs/refs/remotes/origin/HEAD": "d89a337bb54af0a893902af597926d07",
".git/logs/refs/remotes/origin/master": "119f3ed9f36bc495e0be04a9d2b69582",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/ca4358f76d4f5a573c1f16adb4de20d0db9e3c": "6f424093e7d2a1850d130e74dcea4a11",
".git/objects/08/80a8158304fd1b3e929874bb0fb4d475f46f0d": "7932c571e7e1f2214b87329b4cf8dd7c",
".git/objects/0a/30dd485091cef6d709775be0af74f91c91b829": "f4b7456c1e53291fe2751f4e0ae40e16",
".git/objects/0b/9d7f0a48a0f77dc946f539b143fca25f15a50b": "a1c92a375e0e154e246da270872b8fa6",
".git/objects/0b/f17557609eb13466db695864539ef72e83e5ed": "0e81bfc855a23c7c4a7dc93b58a69383",
".git/objects/10/6841aa96b58984c2c688e7196ef1cbe5e99b76": "1cba7934feffe5214941813c57ad2cba",
".git/objects/15/11bf678b8f3f27262ef5fedf45acd39f929db5": "078c8880806ace99b6214c54f6630119",
".git/objects/16/f0d6f5780985c0908a3c15dd61e35319b09ca2": "ab05ab2fcbbc8f8e928213b0a5fd2f69",
".git/objects/17/024093dc57427a385365ac5b03292f6d705a64": "5101e03ba992b1394c6a4e839ab3c5bd",
".git/objects/1b/6372fcde8bc56300eeec17b9fdec34975b5a9b": "97901743daa9c4f6307d79ea18de9246",
".git/objects/1b/a9789c626ab73dc94dd1cbd0216ae0a5ef1c17": "1c597a2807f08929b7cd3a3da219be50",
".git/objects/1e/af5adb471ea137d30076bcd94e588c54b47094": "43f8bf3449cc0dd58c03e528e0d5e96e",
".git/objects/1f/0bd5de0a52152018e8981fd470c9032e8d3f59": "e33b8d2ebcb93266c06f0ecbb7a6eef5",
".git/objects/20/445bc3cdccdd7b789b970bac6f04c0fcd52793": "d7cbc313801bc2df6539c80c4bce26cd",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/eb52b29e055f41c53d81bc5e6115ebcd6d2843": "5ebf8fd6193349efc6eab9acb90f9b48",
".git/objects/2e/7d9ba5123948944ed27025c3e9827b0d8c697c": "b349c2ec3684a429b8d426a0bbf9d4b3",
".git/objects/31/60489b44e1d206010d1f6fcb5368cd100b9d06": "2dfe0bca9bc851bdf6e00b009333d28d",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/13bb9decd35688dd2e02719f36c5dd841e3b40": "2bbff45a670de46622c9af40f68d320e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/12b10e4571a656eb103d102ed90d6bd0d71c3d": "9ad8e4771f7e56fe03c19459d6453940",
".git/objects/39/df430c5d032ee44302473c571e414a723524c0": "f333bbc1b81142fb3fe2549a8e4f051e",
".git/objects/3a/7681e98e02570bf755dc1441392a6fabbfabb5": "60bce7caa04f0d64a0dab789a45da4c8",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/fd0744b6b21fd34c109ed6c0e0486e790bb2d6": "2d5d435efd180bae23be82f72c995f5d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/7feedc9d3643cd25f7f1a959a3eba4b3329ac2": "e3bfa67dda5f1560e769dea7328c6901",
".git/objects/40/d5fc53b6bc97c6ab8f89ed73e7c2d7d1411021": "5411612fedc14ba91220dd10dd7a4dee",
".git/objects/42/ac281d19a05c3c547c0745f3f4e6abc12e4d85": "743d6d89bfd30e9c68d5f959d982738d",
".git/objects/43/391a1238b1fbaea2912bf5010c97fe260e34ac": "5fedbe491418141230fb89f9e417aebd",
".git/objects/4c/d6dc1d27d53245a8363c3c068bcb7f415e7111": "6a5bff7b4a358f4487ada50b1307ede0",
".git/objects/4d/a12ce969ce4fa08d7eb2e59801d38d3ec6ac59": "9970bc22c136c89aeceab97a00df33b9",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/53/5429c8b68795695a5480a818f895de535ccfaa": "f45db1f04f0acfc9297bc433670eca97",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/274a771f74fb20cc260d0d884eab6be12686bf": "71f536719204aac4bbec1de14beda844",
".git/objects/59/758c15e32ed7b48f30e0e590423b34f21db876": "ee8f8c9e2fa05a1bcde608dbdf9a88ad",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/c1a5a4208b204237c9bd9c4404a2a8203706c4": "c1bd592506791add1cca49034fad5bef",
".git/objects/6a/c1f9cfab2e1489bb78193dceef197290abfbc2": "fc2ba996040d2b65ead1c6c139707566",
".git/objects/6b/303ee0163ed078272ed60af14f9892e3af1853": "9c9cd7e716bc62e62f33f77f731fb803",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/76/1286f493bea4b25e419dda51b654195ac9a501": "e6f9128009905c2fcaa208bed980ea6c",
".git/objects/7c/ca319eea824b1e54563cf3bebba3922f37d348": "c31d03d635fa6ec7b68261b232ee1285",
".git/objects/7f/85b915fa61548f49cf9f3737b67bbd78858d70": "6f8ad2528a030e1f3706a80874ff534f",
".git/objects/7f/ab9bea32acacfff4dc92dc83c824695c2c6106": "3c91c98557957de056a3fb85abd7b405",
".git/objects/81/415c18e920853e9463f34027d8837f30b6d23c": "33c4ab2a854e012ed00399fe6561ee40",
".git/objects/82/cc1eb3ad404a52b66d9dfa60d551cb6f648137": "819fc37cb0f8ec3c81bcefd664dea3b2",
".git/objects/86/6284f708e39add5ef618df931b56be50832294": "d6ed4322fb0e99c15c0aed60841de578",
".git/objects/87/7308a82b0f9954b0083f4b3b4775428770b42a": "3313814f524e5daf6827e39ef363c94e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2ad70830005db4058ae548a9394b4c385d4612": "525d1ebcad865cbd8119658a6dd8a663",
".git/objects/8c/0e9c8022b7694235db264bbaba0211a19b5093": "186db42ab4439fabe36ecb577b5ed832",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/95/0275d1b2620a0542e6526fc8beecbdb9d3e8c2": "fd5d1135cbe699a77472dcae2001c373",
".git/objects/98/4e845bd99a3e5abb2d58023fac17c21f47fd66": "41c66abf4e0aa4b57ba71e47c0d4beb0",
".git/objects/a3/3e0f78932a472b883809d36c7b58c91584962f": "777444dd2c4474f854a7f34db3dc15c4",
".git/objects/a4/c7ddb0057e4df1a476b6792b67ca9524edc007": "4e35ff7bdeaedd1052d12c92133aedba",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/98125f25e0aeb4cda8c955e4877ae90acf5982": "2882d35741af03e2d547add09b405432",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/33c4a7fdc0ae1a22d1d9225b017bd96824d22f": "d00403472ea65e62206d961a0b8ebbbd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/918f697c4cec27b9595840c9ed812d0b2978ad": "68dd9a8c7c0f4563e32e942a4990cb64",
".git/objects/c3/732926211df9e1d6b07e1a0c358fc900f83e88": "f94d89537401b34f620e05e5d490e465",
".git/objects/c7/3704612086afe43f6076453e425c2316065ada": "026dc0f94c40fcc47cf957ff511bdd02",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/3fc2eed6a3776d2b7a2f9562d78c3cc8df71d1": "841bb77966f5319f3b1cd853bdcda96e",
".git/objects/c9/fa52a01512e6c48af040111b418df58e36155c": "f2505e8d1bf7d9a3fe3b031a4c5073b3",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/642621694a8a7a3cf97203025dd2c40c391831": "8c00e5f59744aae0618884ebff843878",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/cf/fe252d00cff4088ecee2c2c08c779c4bc2d3ba": "80be5efebeb384c235e7dd06be68eead",
".git/objects/d1/caaa3187a8009164ce226aa98dd212f9303798": "27e5ff4fb66bf1a54dc804fe00e4b093",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/21a99eea6b6aed7f058d2868c43528d47bcf35": "fdda1b95d717e761ada8e3a2c3aefd74",
".git/objects/d7/9a0f5b0c1137367805372cbc17e08efc363592": "c1a40ee22a65d9bd4473bd39520d2052",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dc/93afc9f335672dff89346c0e8e175d9cd4ab66": "dccf050355ff797326e3a3570bef0ca4",
".git/objects/df/43eca67b68ba1e5ac61fb3e6413aa45468ec42": "9836e4af9aec5ad2f69d8c762f6fcb11",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/1a05b424ae9f9102a70679305c630c7b4521ee": "26c63bcb0b54459e73df03a434815f3e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/cf4d705cca221e40cd87e097925cd497391906": "5b7004ed2e199e3e55c93a38a138776c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/0c65bbebc4b0fe565ae3cc2cabe503333779e4": "9734202acdf1e4ccb22b213d5cf394de",
".git/objects/fd/8e29833117beaa1a702a8ed3ef714e76660d8e": "6a38d05e4fd07169211d90c9c778c742",
".git/objects/fe/4d975020c595d46b6b0ca7103e9f13deef73a4": "afdbaa04281bc3b887bfaf4652265c12",
".git/refs/heads/master": "ec4e29faad93e689be8ada9782e9a985",
".git/refs/remotes/origin/dev": "f8a87059c595220889e12a0ab91bf8f1",
".git/refs/remotes/origin/HEAD": "ab5b7854f7f3ff71dd12c8c1178362e5",
".git/refs/remotes/origin/master": "ec4e29faad93e689be8ada9782e9a985",
"assets/AssetManifest.bin": "e11874014a14cf2e5bfb12ff6370b662",
"assets/AssetManifest.bin.json": "d5542eb4a35340198a680dd447f3489b",
"assets/AssetManifest.json": "fd826d6eb03581a92d2c85886416f527",
"assets/assets/jsons/contact_us.json": "ac127d69d365e9de02b3c70e6bb51143",
"assets/assets/pngs/1.png": "89ffe67bd519266bcea992a6457cf293",
"assets/assets/pngs/1.svg": "aebe3d9c4d939c1ada9892b0757d2001",
"assets/assets/pngs/2.png": "05b5d801e748698b3a55b3d59d458c1a",
"assets/assets/pngs/2.svg": "14878ee13401fad1359c3f0aa1a29aea",
"assets/assets/pngs/3.png": "d583abfba78ed3fed1dc1b2d8f1176ab",
"assets/assets/pngs/3.svg": "4053cb37eae11fe143ab0b4486cf8a83",
"assets/assets/pngs/4.png": "b54d33bdb008e7ff7e4566da8fa96e34",
"assets/assets/pngs/4.svg": "e871abb692dfdb386724fc325ed564fe",
"assets/assets/pngs/5.png": "b54d33bdb008e7ff7e4566da8fa96e34",
"assets/assets/pngs/5.svg": "6339dd6358b9bb3403a837ad43b826c0",
"assets/assets/pngs/6.png": "06e619d09296fd38145129182b0cb1f8",
"assets/assets/pngs/6.svg": "9272b405b55abf8403025fb3ad8860d1",
"assets/assets/pngs/hero.jpg": "cbeb879a22489d8985a82ac3ac61af0c",
"assets/assets/pngs/logo.png": "fae287400d5c528b7d6be0fceb5cf559",
"assets/assets/pngs/reserved.jpg": "5dd9f6b789c17534739429caea601331",
"assets/assets/svgs/about_us.svg": "ee1c8fe7f3133584d99125aeaa7a15e9",
"assets/assets/svgs/book_table_img.svg": "e945c7055761966e40c4f53682d25b10",
"assets/assets/svgs/chef.svg": "2a7802af1913a3d187446b359227fb98",
"assets/assets/svgs/dinner.svg": "ad00d5ee15592b9a31e0d8c07164a5a0",
"assets/assets/svgs/empty_cart.svg": "5b5beb5218d479c309ab61622d0ed1c5",
"assets/assets/svgs/ingredients.svg": "0c9989e83c995abc50f15d8a0a522138",
"assets/assets/svgs/logo.svg": "c5ad7050669e795e110a377d305ab383",
"assets/assets/svgs/no_data_found.svg": "2efd55d819fca052715f6db39fe6cb0c",
"assets/assets/svgs/team.svg": "0749607c9efe91570aec34179aa05533",
"assets/FontManifest.json": "8d7e1d135a804466ab7d8c6d31b77b91",
"assets/fonts/MaterialIcons-Regular.otf": "bd9d8be832dc9993bd74eee4541186af",
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
"flutter_bootstrap.js": "7745c694acf3e16138e886916a0ea987",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4e1ca05b09669d912d13979e81edf3b0",
"/": "4e1ca05b09669d912d13979e81edf3b0",
"main.dart.js": "ce64b486d323ab465d188773170aa10f",
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
