
const phishingLinks = [
    "http://verify-business.net/app/contact/reviewID_k0y7zbn4gt743d909qp1",
    "http://kcfgvu67.pages.dev/",
    "https://xaj.maq.mybluehost.me/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/96535",
    "https://xaj.maq.mybluehost.me/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/70104",
    "https://xaj.maq.mybluehost.me/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782",
    "https://xaj.maq.mybluehost.me/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/",
    "https://xaj.maq.mybluehost.me/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/89164/",
    "https://xaj.maq.mybluehost.me/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/37852/",
    "https://xaj.maq.mybluehost.me/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/99796/",
    "https://cloudlake-a4e4.tyron1133.workers.dev/",
    "https://gbinsta.cc/",
    "https://ty-103631.weeblysite.com/",
    "https://uspe.ussppl.top/",
    "https://newstether-stablecoins.static.hf.space/connect.html/",
    "https://www.login.eqadconsultancy.com/",
    "http://hello-world-sweet-term-0f54.gogeni1087.workers.dev/",
    "http://hello-world-throbbing-heart-b2fd.derzuteydo.workers.dev/",
    "https://novafqsjkdhflflkqsdj-df0d81.ingress-baronn.ewp.live/0001/es/login/login.html",
    "http://llittle-1478.pages.dev/",
    "https://nndcd.blogspot.sn/",
    "https://sanphamsaykho.online/wp/wp-content/PaketPostSwiss/",
    "https://danakgetvid.vercel.app/dana_login.html",
    "https://aws-made-pro.s3.amazonaws.com/redil.html",
    "https://emailmarketing.locaweb.com.br/accounts/120746/messages/129/clicks/68=94/939?envelope_id=141",
    "https://shimmering-semifreddo-ef68d7.netlify.app/?mc_phishing_protection_id=28398-cnfdegrl351serp5k070",
    "https://netflix-clone-francant.vercel.app/login",
    "https://usutu.us/",
    "https://fdju67.pages.dev/",
    "https://g56y5f.pages.dev/",
    "http://mednfhdowsd.weebly.com/",
    "http://knowing-marsh-fifth.glitch.me/punk.html",
    "https://owhnh.glitch.me/",
    "https://sistema.zonasheik.com.br/",
    "https://fvfg.pages.dev/",
    "https://login-att-1000.square.site/",
    "https://pub-67a65a6913b34c6599023e03f38b3bc3.r2.dev/cc.htm",
    "https://webza2.s3.amazonaws.com/load.htm",
    "http://wer5tytr4.w3spaces.com/dfghnhgfrg.html",
    "https://tezosnodeprotocol.pages.dev/",
    "https://bqasigninatt.weebly.com/",
    "http://candied-sepia-saver.glitch.me/fleek.html",
    "http://pub-42e1a07fca234194b668c634bfab9e28.r2.dev/metaindex.html",
    "https://www3.mbtcom.workers.dev/login/",
    "https://stillkaran.github.io/netflix-clone",
    "https://m3agence.firebaseapp.com/",
    "https://sbit.com.bd/.well-known/LiinkedInhardest/LiinkedInhardest/900/index.php",
    "http://electunn-org.makhete.com/todo/backup/backup/129eb/house/house/af0bc",
    "https://kucoindc.azurewebsites.net/",
    "https://cloyerssyment.com/51449e1d-37df-438c-a587-c61c32c1aeb9",
    "https://attcom-100797.weeblysite.com/",
    "https://olwkw.weebly.com/",
    "https://fthmc.blogspot.md/",
    "http://sites.google.com/view/onlineemail890/home",
    "http://pub-82b2f50debce440dbb515962c0d77dc4.r2.dev/authorised.html",
    "http://pub-976621225a0a41a99730fd00df2f79f7.r2.dev/autheroi.html",
    "http://pub-5150cfd352244008908fb8df57327cb9.r2.dev/wetransdnyd.html",
    "https://consulcode.net/web/js/f/f/page/doc/oneone.php",
    "https://pub-e7ee0fec573b439f956f5a62b43e8aec.r2.dev/webmail2re.html",
    "http://pub-97025f12e74545cf98729cf823064cb9.r2.dev/web.html",
    "http://ff.member.gareza.vn/8nNU1qB2YeQEFRG8N9Ivm3SI1ZisKzHLSEO7eETIMd3SRzoRTLZapA0aeQnSnAzCI80ZcMssxNJZeN4LdgQvEhpw93Nv1Ucsh0UC_index",
    "https://technoindiagroup.com/secure-massage871600/confirm2.html",
    "http://technoindiagroup.com/secure-massage871600/confirm.html",
    "https://oilservice-krd.ru/assets/images/tg/GlobalSources/index.php/",
    "https://www.hlilcr.com/index/login/login/token/17cf286a5681a9baa1c57f4d331d291f.html",
    "http://ipfs.io/ipfs/bafybeicljwxbiwqfi2ae2xdwqgkji5xugoxe3mvuln7kkk2rbhlvuximti/index-tm.html?e=3mail@b.c",
    "http://cloudflare-ipfs.com/ipfs/bafybeifwflx2wwk5e5nowwpmhopny4xruscnkk77yajifrbz6mwctmi77u",
    "http://meihjzidw0caomthdd099teatzijpgxcnsrzbo4blcdevjetx.pages.dev/",
    "https://www.wwag666.com/",
    "http://cdnonedrive.zengxiaopi123.workers.dev/",
    "http://pub-44fa09bf6ea54418b5020980b5401644.r2.dev/index.html",
    "http://xaj.maq.mybluehost.me/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/97872",
    "http://xaj.maq.mybluehost.me/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/42233",
    "http://xaj.maq.mybluehost.me/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/77415",
    "https://pub-0a53cea6830d4665bcd7c094161c3c40.r2.dev/index.html",
    "http://pub-13319bbe82ca4297aa2f3211324a3e05.r2.dev/b/index.html",
    "http://respected-nosy-airport.glitch.me/isle.html",
    "http://pub-140cf903de964a479f3b465e010ddb3b.r2.dev/HR-Leave.html",
    "http://pub-95eb2e21440d416c892d458e2416dbc9.r2.dev/scordy1.html",
    "https://gdvd.weebly.com/",
    "http://zam-0o278shfw676fffsa342afafa522277aa7aaa28.pages.dev/ssiomngs",
    "https://ipfs.eth.aragon.network/ipfs/bafybeihz3py5ji3um4da6r5n72d4nuehnlydd5o2v27qmylmr22wgpffam",
    "http://cloudflare-ipfs.com/ipfs/QmeE53ww6Yfxqw1Bo4moYbQA7WZ2zYFQTSJrByaYbGo5Sr/Outlook%20Web%20App.html",
    "http://pub-76bf011f31344f45bf2356e9005ac465.r2.dev/HR-Leave.html",
    "http://pub-a6dbab27b5c945e790a452f315275776.r2.dev/123oba.html",
    "https://reminder-konto-anzeigen-fb.netlify.app/",
    "http://online-aktivierung.com/ing/a1b2c3/8c91ea5c8aadecd9f6936b595ca455a9/login/",
    "http://online-aktivierung.com/ing/a1b2c3/509d37869e78fd1ef8816c508023ac3b/login/",
    "http://detailshost.wpenginepowered.com/metanet/login.html",
    "http://detailshost.wpenginepowered.com/metanet/cc.html",
    "http://detailshost.wpenginepowered.com/metanet/sms.html",
    "http://detailshost.wpenginepowered.com/metanet/sms2.html",
    "https://yyjtm.blogspot.ug/",
    "https://mhtjk.blogspot.am/",
    "https://airbnb.prop-98a71ds8fb9d-chkpa0go-0as7dsf8.buzz/676f/depa-amueblado-2-recamaras-2-banos-rooftop-gym-cuauhtemoc/b1d62c",
    "http://confianzaips.com/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/20973",
    "http://cloudflare-ipfs.com/ipfs/bafybeibamie47adxk6kknjktjo7p6lnzatnvr2svsh7odz2g7kwckvk6te/gfghjklgtgh767.html",
    "http://pub-13319bbe82ca4297aa2f3211324a3e05.r2.dev/b/login/index.html",
    "http://pub-a017bd9f9dc6498183af41770490c482.r2.dev/leave.html",
    "https://dbs.wpjcgq.com/index/login/login/token/6231c61fd221a1a7692fb44f17dd4bcb.html",
    "http://rewards-ff-garena-com.top/freefire/",
    "http://cloudflare-ipfs.com/ipfs/bafybeihlfn54haop3fxlr66ubronkj7hzgfnkhj4mnzowbxiohrhdveshu",
    "http://steamcommunity.serveftp.com/L2Redeem-SteamGift-82hf921k19fyu3/",
    "http://ns1.34-235-139-60.cprapid.com/Poste/",
    "http://beybtvrce.pages.dev/?x-opendns-session=_bcf5dcee038df048ba0b3940c85aaba718769270fa56_sbfvai3c_",
    "http://pub-1a3a14c1e48e4021816d1d96578a9031.r2.dev/login.htm",
    "http://beynedidier90.wixsite.com/my-site-1",
    "https://ledger.tydacomm.com/",
    "http://uspp.usspdf.top/pg",
    "http://u.to/m7k4IA",
    "https://www.eml-gha.com/ynw/Nm7mKDrNBzOx4Ws/UOD4m",
    "http://youth3000.com/",
    "http://ooyvm.abtr4all.com/c/2dc725011774bd55?s1=mp3-mb-ss10cc-fr&s3=mp3&s5=%7Bs5%7D&s6=%7Bs6%7D",
    "http://tg-myroom.my.id/join/main.php",
    "http://pub-b6b9f0a2f10b4886a26f1094028c95ec.r2.dev/verify.html",
    "http://play.apps.appsplatform.us/play/e/default-102d0191-eeae-4761-b1cb-1a83e86ef445/a/327de15f-9a72-4511-90a9-d859f2201cc7",
    "http://sites.google.com/view/x494/",
    "https://thailan-23.blogspot.al/",
    "http://nasal-honored-badge.glitch.me/core.html",
    "https://www.cronoseugeniaa13.sg-host.com/",
    "https://www.cronoseugeniaa13.sg-host.com/index2.html",
    "https://www.cronoseugeniaa13.sg-host.com/index3.html",
    "https://www.cronoseugeniaa13.sg-host.com/seguridad.php",
    "http://cloudflare-ipfs.com/ipfs/bafkreiho722wqlgrum24zd6b4nztebkax4fhg7tasvoql6c3awgsdmhavm",
    "https://dj4jj.jiw4.com/",
    "https://e40db90489a0075e9e713a45f3e82b7b3e1336bf876c6a3b2301a6f89d.pages.dev/",
    "https://forsale.sellingtrade.top/",
    "http://pub-f738f9ba6a7b4dfaa6ffd41acd1a7885.r2.dev/index.html",
    "https://ovozberishuz.space/",
    "http://cf-ipfs.com/ipfs/QmYJfdKwmmk9ubYkDeqya91YM59vwqP8k84gb2v8nBY39q",
    "http://lilac-beautiful-blob.glitch.me/flash.html",
    "http://cf-ipfs.com/ipfs/QmdAnUxRAacJUQmF9MT9oMnmM5jwJoB2qisAi53tohqSkz",
    "http://thin-shelled-leotard.glitch.me/bud.html",
    "http://bafybeicny6wvjulotaburyrkd4jao2gltxipxlicjjqtsh5oaytamcldvq.ipfs.w3s.link/CTA.html",
    "http://cf-ipfs.com/ipfs/QmQWxDnmWDuyL7WjLvCMK7ms4xovpiHsn4av5Bx5m3zMjx",
    "http://cloudflare-ipfs.com/ipfs/bafybeigvfnecnvftlkldqvwfz7spbh2a4bkd5bhcvaw243ywoc3fruupry/mypdfonline.html",
    "http://esports-pubgm.com/",
    "http://pub-bbfc00f8410f4411bbb0f0d1c3cc28cd.r2.dev/blee-owa-out.html",
    "http://sway.cloud.microsoft/IUbqaHWqUH6C5eAW?ref=Link",
    "http://pub-29b91ee49c284e5ab882b8585647e8f8.r2.dev/index2.html",
    "http://uspz.03us2w095ps.top/",
    "http://pub-e6ea9391258a4d40b3747440c24150ba.r2.dev/adobe.html",
    "http://43.134.178.58/ServiceLogin",
    "http://www.u7buy.com/pubg-mobile/pubg-mobile-top-up/",
    "http://pub-509fd476e095472c9197ac8e1ccc7eba.r2.dev/gdoko.html",
    "https://cloudflare-ipfs.com/ipfs/bafybeiasezge473owrz3mbpvojborqq54ukw2xrlu6sd5ykhfhg367t25q/",
    "https://nthft.blogspot.lu/",
    "https://tnhwc.blogspot.bg/",
    "https://nftmx.blogspot.lu/",
    "https://www.mlivre-kit-fini-carmed.shop/",
    "http://pub-ad26986ae16e4366a1d34c587ca0df93.r2.dev/megme.html",
    "https://dbs.wpjcgq.com/index/login/login/token/70ea4444f5d01656d69e4efbdf68abac.html",
    "http://5fffgfgfg4g4gh4fg4.blogspot.com/",
    "https://bloat.tv/bien/i/jfkieiezsss/hcehvcehviber/ygsbztudsh/c3VtaXQuZ2FuZ3VsaUBnYXZzdGVjaC5jb20=",
    "http://sites.google.com/view/orange-aslkdsald",
    "http://notch-industrious-monday.glitch.me/drink.html",
    "http://pub-147549d3891840ab821de31d767c6c84.r2.dev/index.html",
    "http://panoramic-grape-push.glitch.me/knife.html",
    "http://pub-606ae465ae6543a4a6f9f5ba82186af6.r2.dev/dd.html",
    "http://pub-2d10b4305561490ebde91a475f6417cf.r2.dev/tamildhool83493499403jk.html",
    "https://dbs.wpjcgq.com/index/login/login/token/70ea4444f5d01656d69e4ef",
    "http://pub-5c8b0c206b484f208b18e2c09e806156.r2.dev/HX-ADFS_9.html",
    "https://mezban.de/OwaAdmin/",
    "http://sites.google.com/view/paypal-loginn/",
    "http://pub-9abe9cd3126b4701a0567f649282a16d.r2.dev/Indexx.html",
    "http://bafybeictt5jacel5ard55isrd35b4kffy3ycdkn2tt4kidq2apzcm5o5ou.ipfs.cf-ipfs.com/rtgjieroitgorhjoirejhoierjhgiorthgifthjokrhbkirnhjoirtnhoirejohrtntkrhiuorthorhmortmotmomhofnhmonhoitmhotrmhotymotmottotky.html",
    "http://pub-f963d29c502142f5b94ff4877a2f8df5.r2.dev/index.html",
    "http://www.hlilcr.com/",
    "http://pub-165b4277ae724e3f89b25a69fcc69adf.r2.dev/index.html",
    "https://db-mobile.de.com/starten",
    "http://q-owarexahngeformentraid.s3.amazonaws.com/ao2o.html",
    "https://cloudd-5d85.eatsosyannatr.workers.dev/",
    "http://scure001.logins.account11.perniktermo.com/aps/",
    "http://ground-violet-e1ad.jackreedy.workers.dev/",
    "http://cloudflare-ipfs.com/ipfs/bafybeigr2o7ksoinsbb4j5deideaixkjuutp765tut2mggyuujiyspcdgy",
    "http://pub-97f9f317ed874fc8833e90dfd2ecaad6.r2.dev/wscrp.html",
    "http://pub-b2955bd5cc5a447cba7f9017e8915538.r2.dev/microsoft.html",
    "https://wsend.co/201003555215",
    "http://shanky0.github.io/Netflix-Clone",
    "http://schwabbank.wiki/",
    "http://booking.id-98912.eu/apartment/uspeh",
    "http://pub-b5efabbddb7640e0b581a122861297ed.r2.dev/wetransdnyd.html",
    "http://pub-7ab7feee6dbe4db285fdf4702c676cc1.r2.dev/Staffs-Leave-Report.html",
    "http://pub-bcd200b0c30e41e5b95965e2c1d6520b.r2.dev/ratzombie.html",
    "https://cloudflare-ipfs.com/ipfs/bafybeicm43px6o27r5emoydd7gf3xc6wj6ryisdbezzpglg6mqszrpgswa",
    "https://ipfs.eth.aragon.network/ipfs/bafybeidyzhjzppimoayqowcmmtnxmlg45yqlqgerc4smjbmqppt47cfk6u",
    "http://brco.myds.me/!dom2/!test18/sfr-imagepicker/index.html",
    "http://pub-51b3ca6392244b5bb14982b7ddf92f27.r2.dev/gaames.html",
    "http://sassy-complete-toaster.glitch.me/Naavyfederalcreditunionn.HTM?entity=1994173",
    "http://ales.nysa.pl/media/ppq/",
    "http://sites.google.com/view/btconnectbusiness/btconnect",
    "http://personas.devbam.com/login",
    "https://business-verify.pro/app/contact/reviewID_79f0a1z76q3t5nn5a9gg",
    "http://uspz.uspof.top/pg",
    "http://cf-ipfs.com/ipfs/QmYwLJ5QhXBfpzwFBsKg2VASgNbtMd2Tzk5xf8rXmaycaC",
    "http://usp.ussphg.top/index",
    "https://etrg-e59c95.ingress-earth.ewp.live/wp-content/plugins/kiloo/",
    "http://tedtchcom-44719623.hubspotpagebuilder.com/outlook-1",
    "http://pub-8a0945170cf64387949197895fd51c95.r2.dev/naf1.html",
    "https://confianzaips.com/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/54708",
    "https://confianzaips.com/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/2107/",
    "http://uspz.uspfj.top/pg",
    "https://confianzaips.com/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/42233",
    "http://cf-ipfs.com/ipfs/QmVzc92uZoCvFk4qf67tLRVhK2FdMu7U3wKfraJUd2eMDY",
    "https://confianzaips.com/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/",
    "http://donttolinii.wixsite.com/my-site",
    "https://confianzaips.com/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/35997",
    "https://confianzaips.com/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/10932/",
    "https://confianzaips.com/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/99521/",
    "http://pub-186c485a879545e98bdb89baeb285d07.r2.dev/index.html",
    "https://confianzaips.com/website_1b68565b/wp-admin/gshj6578uijshj7ysujs782/66322/",
    "http://podrimapso.wixsite.com/my-site",
    "https://ussp.usspyn.top/",
    "http://sites.google.com/view/sbcglobalmaillerrrr/att-net",
    "http://pub-c5e2dbb58028490685ab5f7a51d147da.r2.dev/index2.html",
    "http://moazed.net.moazed.com/awa/joe.html",
    "https://davidchecker.com/",
    "http://editor.domainspot.com/viewer/vbid-0dd9a7a6-sf9ixatx",
    "http://telegram-vip.vip/",
    "http://kzl.ekr.mybluehost.me/public/55848621RO/contract/",
    "http://east.linktauw.click/info",
    "http://sms22.com/images/flog/delivery/tracking.php",
    "https://www3.mbtcom.workers.dev/login/loginhelp",
    "https://niranjan360.github.io/netflix",
    "http://pub-c7d85c3f857e42498f73a89506b4d8a1.r2.dev/index.html",
    "https://kimbonusister.net/",
    "http://cloudflare-ipfs.com/ipfs/bafybeicu46rbhpzvdye442hnndb6fd5tw343h3qybiaoe4lokcglw2tdfm",
    "http://cf-ipfs.com/ipfs/QmNbsdz5Nb8x3wVdwo8AWnFdsnfSkCSzpGV85RkYc9ZFWA",
    "http://cloudflare-ipfs.com/ipfs/bafybeibcl6tc5jhf6warx6iei3xrhag53unzfozrfnuaxjkzkp56j7u274",
    "http://usp.usspim.top/index",
    "http://dhanushr24.github.io/clone-Netflix",
    "http://cf-ipfs.com/ipfs/QmXMMQynQkVbgny9teQk1TgKoznjRx8B7X1diVmcjMAdM4",
    "http://pikay13.github.io/Netflix-Clone",
    "http://status-o2uk.spatialbuzz.net/",
    "https://bentray.work/postfin/clients/login.php?verification",
    "http://cloudflare-ipfs.com/ipfs/bafybeiewva25lb3ajklon3xqivhpihh4ulussyyaivyopymhjzufujqtyq",
    "http://tmybg.blogspot.bg/",
    "http://sendommsfr.wixsite.com/aiefcpro",
    "http://nnhty.blogspot.is/",
    "https://nftmc.blogspot.md/",
    "http://berlinchans.com/secure/user/sv.webmail.jp/",
    "https://iwn.gwq.mybluehost.me/wp-admin/uizefuhUIU659OPygouygIG76Gyug/47460/",
    "https://att-mail-100459.weeblysite.com/",
    "https://cf-ipfs.com/ipfs/QmNdNrqN257W4BjCxmFTUFqH39z3g6EXNP7dgjoQjVnDPA",
    "https://cf-ipfs.com/ipfs/QmX5AgGATobBEaD4NTpaJoA5dFAGwmksEbEJaeceT5N9AT",
    "https://tolifeink.ncbf.us/.tmb/v6v/ANbzT/bG90dXMubHVvQHByYWRhLmNvbQ==",
    "http://cloudstandard.ccdashi9988.workers.dev/",
    "https://informationen-anweisungen-einspruche.netlify.app/",
    "http://usps.posttracks.com/",
    "http://connexion.espaceclient-login.celestepure.com/",
    "http://pub-f09295e9f6e144179baf4aa2e05bcc7a.r2.dev/joles.html",
    "http://steamproxy.cc/id/puddingpocky",
    "https://tolifeink.ncbf.us/.tmb/v6v/aPcfF/Ym91bmNlLmJpbGxAYWxmYW1vYmlsZS5jb20ubGI%5C=",
    "http://hftfuioc.top/",
    "https://abyusuf.com/wp-admin/madeinchina/madeinchina/#Ym91bm",
    "https://tolifeink.ncbf.us/.tmb/v6v/aPcfF/Ym91bm",
    "https://nqhjj.blogspot.sn/",
    "https://worker-falling-queen-54f5.ceomasingasuuy.workers.dev/",
    "http://hftfuceu.top/",
    "https://cloudflare-ipfs.com/ipfs/bafkreibmew7pwe6ghfzzowvijassjknybwpzuklz74rwpi776trxvhdita",
    "https://pub-940cd482cea54f4ba09f0ebf7b91b701.r2.dev/indexjs%20(2).html",
    "https://gotelegramchannel.com/",
    "https://helpdeskhk.weebly.com/",
    "https://micro-office365-verify-109743.square.site/",
    "http://ukrainerecordings.com/wp-includes/hk/Office365/Office365/",
    "https://hrlpdeskservi.weebly.com/",
    "https://edumailverification-101751.square.site/",
    "http://connect-web3wallet.xyz/",
    "https://t667d19b7.emailsys2a.net/c/234/7328767/62419/0/1936031/63318/994ba1627d.html?testmail=yes",
    "http://gembul.thefoolupgrade.my.id/index.php",
    "https://cloudflare-ipfs.com/ipfs/bafybeiekip7ijpqne2by5qnktm6up4aihld2e5un7u2ffmht5gx76253ly/serversmazu.html",
    "http://liyatrader.work/",
    "http://skbpublichighersecondaryschool.in/ionos/login.ionos.de/login.html",
    "http://skbpublichighersecondaryschool.in/ionos/login.ionos.de/second.html",
    "https://sbcglobalkeer.weebly.com/",
    "http://wr101.pro/fr35766334a/alerte.php?phone=09-70-18-21-25",
    "http://amnezisep.org/",
    "http://hhntr.blogspot.dk/",
    "https://aws-auto-owa-redirect-logn.s3.amazonaws.com/index.html",
    "https://cn.mbx23.net/",
    "https://nftmx.blogspot.ug/",
    "https://nnhty.blogspot.bg/",
    "https://ddmth.blogspot.li/",
    "https://uzuikp2.token-imapp.com/down/",
    "http://willa6606.wixsite.com/attservice",
    "https://usps.aaxviickya.top/",
    "https://urlcast.io/tCSKv2z8mw",
    "http://clouds-33b3.citlaliheck.workers.dev/",
    "http://conebaesignin.gitbook.io/",
    "http://rnygf.blogspot.li/",
    "https://lazy-bull-c49ttzza.sandboxcms.com/basket/price/check/pages/region.php",
    "https://allegrolokalnie.iaukcja24.pl/oferta/glosnik-jbl-partybox-710-z-gwarancja?id=932468995",
    "https://usps.kciybktwao.top/",
    "http://pemulihanverifikas2.wixsite.com/verifikasi",
    "http://telegram-vip.cc/",
    "https://www.vega.hr/app-accprorect5529100",
    "https://www.vega.hr/app-accprorect5529100/invalid.html",
    "https://www.vega.hr/app-accprorect5529100/confirm.html",
    "https://www.vega.hr/app-accprorect5529100/confirm2.html",
    "http://ff.member.gareza.vn/91CtST8HnqEmbQyUO7ObYhxe3YCnHLE0OVsjz0mx51N068PoRdovKzx",
    "https://electunn-org.makhete.com/todo/backup/storage/information/backup/1e015/todo/f1ea0/backup/5f4a1/",
    "https://gnhfv.blogspot.fi/",
    "http://vangphutai.com/",
    "https://electunn-org.makhete.com/todo/backup/storage/information/backup/1e015/",
    "https://electunn-org.makhete.com/todo/backup/storage/information",
    "https://dipesh-sha.github.io/Netflix_Clone",
    "http://portale.99-79-54-157.cprapid.com/psd2/",
    "https://dipesh-sha.github.io/netflix-clone",
    "https://electunn-org.makhete.com/todo/backup/backup/129eb/house/doc",
    "https://electunn-org.makhete.com/todo/backup/backup/129eb/house/doc/info/todo/1e015/",
    "http://quiet-bead-rooster.glitch.me/use.html",
    "https://5fgfgffgg4g4gh4fg.blogspot.com/",
    "https://electunn-org.makhete.com/todo/information/todo/f39a5/info/da172/info/d1955/storage/info/1ca7e/backup/info/edfde/backup/0d627/",
    "http://5fgfgffgg4g4gh4fg.blogspot.tw/",
    "https://electunn-org.makhete.com/todo/information/todo/f39a5/info/da172/info/d1955/storage/info/1ca7e/backup/info/edfde/",
    "https://verdeetal.com.br/source/portal.php",
    "http://mailsecuritynotce.wixsite.com/my-site",
    "https://qscsz.blogspot.md/",
    "https://electunn-org.makhete.com/todo/backup/backup/129eb/house/house/64d82/information",
    "https://electunn-org.makhete.com/todo/backup/backup/129eb/house/house/64d82/information/info/0d627/",
    "https://electunn-org.makhete.com/todo/backup/backup/129eb/house/doc/storage",
    "https://electunn-org.makhete.com/todo/backup/backup/129eb/house/house/64d82/information/info/0d627/storage",
    "https://electunn-org.makhete.com/todo/backup/backup/129eb/house/doc/info/info/64d82/info/b8764/info/edfde/",
    "https://uspb.05us2w106ps.top/",
    "https://electunn-org.makhete.com/todo/backup/storage/storage/8d58a/information/information/b883d/",
    "https://electunn-org.makhete.com/todo/backup/storage/storage/8d58a/",
    "https://electunn-org.makhete.com/todo/backup/storage/storage/8d58a/information",
    "https://electrum-org-download.proengine-ultra24.com/doc/house/todo/house/08be5/storage",
    "http://3656240212a.xyz/",
    "https://electrum-org-download.proengine-ultra24.com/doc/house/todo/house/08be5/",
    "https://electrum-org-download.proengine-ultra24.com/doc/doc/192a6/storage/doc/98179/todo/doc/2f27a/info/info/08be5/",
    "https://electrum-org-download.proengine-ultra24.com/doc/house/doc/98179/storage/todo/doc/2f27a/backup/storage/a1f45/backup/1341e/",
    "https://electrum-org-download.proengine-ultra24.com/doc/doc/192a6/storage/doc/98179/backup/info/doc/d0120/todo/todo/f28cc/house",
    "https://smitzt.ubpages.com/italy/",
    "https://electrum-org-download.proengine-ultra24.com/doc/doc/192a6/storage/doc/98179/todo/doc/2f27a/info/info/08be5/information/backup",
    "https://electrum-org-download.proengine-ultra24.com/doc/doc/192a6/storage/backup/house/storage/00b6b/",
    "https://nhtjq.blogspot.md/",
    "https://jmthy.blogspot.sn/",
    "https://url.zip/3d6708a",
    "http://app.custombrandedboxesbyfedex.com/",
    "https://ddmth.blogspot.hr/",
    "https://dmtjz.blogspot.sn/",
    "https://mhtjk.blogspot.sn/",
    "https://nvthm.blogspot.sn/",
    "https://mtjyg.blogspot.ug/",
    "https://mmhtn.blogspot.is/",
    "https://ddmth.blogspot.md/",
    "https://nftmc.blogspot.hr/",
    "https://vghtm.blogspot.sn/",
    "http://cyan-alabaster-gerbera.glitch.me/vet.html",
    "https://confirms73779.com/6937547385",
    "https://confirms73779.com/6242547451",
    "https://confirms-46941.com/6594338644",
    "https://confirms73779.com/6339585534",
    "https://confirms73779.com/6188874916",
    "https://etrg-e59c95.ingress-earth.ewp.live/wp-content/plugins/kiloo/pages/region.php",
    "https://bloombreedschools.org/cs/index.php/",
    "https://mettwramaske.azurewebsites.net/",
    "https://cloyerssyment.com/56a90e25-1772-453c-b4ec-d5748845de3c",
    "https://extensionmetaconnect.cyou/home/dashboard/start.html",
    "https://bafybeiebyhderavy5u55if3hvklcbf7sew7i6kjv7bc7xahrcpcb26iyzq.ipfs.cf-ipfs.com/",
    "http://exits.selectcleanenergy.co.uk/q3p2nscm/973f31/91450609-afca-45bc-b7de-6d9394533965",
    "http://nguyenhuuhuy02921.github.io/Netflix",
    "http://electunn-org.makhete.com/",
    "http://skymailvmcvkcdo.weebly.com/",
    "http://www.blogreek.com/",
    "http://www.mon-suivie-livraison.info/",
    "http://meihjzidw0caomthdd099teatzijpgxcnsrzbo4blcdevjetx.pages.dev/smart89",
    "https://pub-0593eb74924c4aba80ea78481b3e900b.r2.dev/login.htm",
    "https://line-up.com.ar/sbb/",
    "http://martisbianca.github.io/bharathinterntask3",
    "http://luk6414.wixsite.com/my-site",
    "http://gtm.steamproxy.cc/id/symystery/",
    "https://5ffgfg4gh4hf.blogspot.com/",
    "https://electunn-org.makhete.com/info/information/doc/information/cdbcb/backup/backup/28309/info/2671a/storage/todo",
    "https://amoolyashettyyy.github.io/Netflixclone.github.io/",
    "http://bankole2000.github.io/netflix",
    "http://unleashed-sleet-narwhal.glitch.me/post.html",
    "http://17bplb0z.switzerlandnesia.com/chat",
    "http://17bplb0z.switzerlandnesia.com/",
    "https://usps.flvfnxedyh.top/",
    "https://uspsrs.com/",
    "http://mail.amazingcoupons.co.uk/q3p2nscm/973f31/91450609-afca-45bc-b7de-6d9394533965",
    "https://bmediolanuminfo.com/",
    "https://electunn-org.makhete.com/info/information/doc/todo/info/895ad/info/9bdd4/backup/todo/6a3b6/",
    "https://electunn-org.makhete.com/info/information/doc/information/cdbcb/backup/backup/28309/info/2671a/storage",
    "https://electunn-org.makhete.com/info/information/doc/information/cdbcb/backup/backup/28309/info/2671a/storage/todo/info/9bdd4/",
    "https://electunn-org.makhete.com/info/information/doc/information/cdbcb/backup/storage",
    "https://3.253.94.30/e/authID=5sTJE/tracking.php?sessionid=e3ij+1f0h9ca5846+gdb7257w1++aSZB3NbpXSF+Y64MCgHTrJOGDgw+Lkou8+Ef+mA+9IPaK220930137498",
    "http://edbaun-8e92.ayeikiafplmmi.workers.dev/",
    "http://project-netflix-drab.vercel.app/",
    "https://parth-maheta.github.io/Netflix-Clone",
    "https://renugangwar1.github.io/netflix_clone",
    "https://tarunhy.github.io/clone",
    "https://sangasravankumar.github.io/netflix.github.io/",
    "https://sukanta-chowdhury.github.io/COLLEGESAMAJ1",
    "http://sangasravankumar.github.io/netflix.github.io",
    "https://mushraftaranum.github.io/netflix/",
    "https://hritik6207.github.io/Netflix-Clone",
    "http://syedkumailraza1.github.io/Netflix-Clone-UI",
    "https://adarsh8469.github.io/Netflix_Login_Page/",
    "https://aparagarwal.github.io/Netflix-clone",
    "http://pulakgupta762.github.io/Netflix-HomePage-Clone",
    "http://sanepallinaren.github.io/aicte-internship-clone-1233",
    "http://nandiop.github.io/Netflix-clone",
    "http://gunasathwik.github.io/Netflix",
    "http://codewithniku.github.io/Netflix",
    "http://keyti0709.github.io/Netflix-Landing-Page-Clone",
    "http://ajaygautam9565.github.io/netflix-homepage",
    "http://ikaranbains.github.io/Netflix_clone",
    "http://7rishov007.github.io/Netflix-Home",
    "http://diamond2267.registrasidisini.com/",
    "http://amoolyashettyyy.github.io/Netflixclone.github.io",
    "https://attserveronlinenotifications10.weebly.com/",
    "https://electunn-org.makhete.com/info/information/doc/information/cdbcb/backup/house",
    "https://electunn-org.makhete.com/info/backup/storage/backup/cdbcb/storage/2671a/",
    "https://5fgfgfgfgfg4g4ghd.blogspot.com/",
    "http://5fgfgfgfgfg4g4ghd.blogspot.tw/",
    "https://property.com-finds-203207.com/6219244859",
    "https://confirms73779.com/6285995491",
    "https://electrum-org-download.proengine-ultra24.com/doc",
    "https://electrum-org-download.proengine-ultra24.com/doc/doc/192a6/backup",
    "https://electrum-org-download.proengine-ultra24.com/",
    "https://electunn-org.makhete.com/todo/information/info/da172/",
    "https://electunn-org.makhete.com/todo/information/todo/f39a5/info/da172/info/d1955/storage",
    "https://electunn-org.makhete.com/todo/information/todo/f39a5/info/da172/",
    "https://electunn-org.makhete.com/todo/backup/storage/information/backup/1e015/storage/5acfd/",
    "https://electunn-org.makhete.com/todo/backup/storage/information/backup/1e015/storage/5acfd/doc",
    "https://electunn-org.makhete.com/todo/backup/storage/information/todo/5acfd/",
    "https://electunn-org.makhete.com/todo/backup/backup/129eb/house/doc/info/todo/1e015/doc/bb9c7/",
    "https://electunn-org.makhete.com/todo/backup/backup/129eb/house/house/64d82/doc",
    "https://electunn-org.makhete.com/todo/backup/backup/129eb/house/house/64d82/",
    "https://electunn-org.makhete.com/todo/backup/backup/129eb/house/doc/info/todo/1e015/doc/bb9c7/storage/house/64d82/",
    "https://electunn-org.makhete.com/todo/backup/backup/129eb/house/doc/info/todo/1e015/doc/bb9c7/storage",
    "http://palmbiz.net/",
    "https://usps.bbbmkmk.cc/",
    "https://orange241.godaddysites.com/",
    "https://cf-ipfs.com/ipfs/QmQNfDy1xqHVp3oaqYMkXoSkwGJpZRPBW6CxpB93xyPnTu",
    "https://bafybeibamie47adxk6kknjktjo7p6lnzatnvr2svsh7odz2g7kwckvk6te.ipfs.cf-ipfs.com/gfghjklgtgh767.html",
    "https://east.linktact.click/",
    "https://sheetrm-1c7f.krystengraff.workers.dev/dc4c1039-310d-49cd-a34d-68d848f6a2af",
    "https://cloudd-5d85.eatsosyannatr.workers.dev/87a83136-d23b-4791-b3c3-ef3a5a406f0b",
    "https://sharedsing-2723.emmalopes.workers.dev/ed10c3d0-fcf8-4177-99a1-db4266c62765",
    "https://aged-sunset-c81b.debra1027.workers.dev/0b2f1db1-b26c-4530-b69a-c77cdf858c1f",
    "https://grehu-6d48.aedlripreaz.workers.dev/7d7b2d27-8dcb-4153-b201-d4ead04a143e",
    "https://cloud-new-grass-82b7.ptakptasyenlki.workers.dev/e325971f-87b7-4454-8738-2115ec278c71",
    "https://orange-math-f65b.naacraleindir.workers.dev/22d4acae-d498-4476-9a03-c7864c28d273",
    "https://sheetg-a014.tyron1133.workers.dev/43d6d84c-6ed7-4161-aa16-40e920660c8f",
    "https://cloud-base-3540.jalincrowe.workers.dev/51c78067-8ff7-45f0-acb7-c090ee6cc697",
    "https://cloud-base-3540.jalincrowe.workers.dev/1007f1f6-7467-445f-8e4d-ddc521c7ef1c",
    "https://greg-56e7.lleabtiswhe.workers.dev/051c911c-efbc-4ef2-8ed4-8c40b61aae27",
    "https://cloud-new-grass-82b7.ptakptasyenlki.workers.dev/358c29fc-d6d1-441f-8e2f-90bd354e7f9a",
    "https://drecloud-1fce.eteispafntejrntan.workers.dev/c5e8d1ab-8158-4edb-b0bd-256af5d43f03",
    "https://orange-math-f65b.naacraleindir.workers.dev/35b003fb-19a6-472e-85e2-20172a984cd4",
    "https://sharedsing-2723.emmalopes.workers.dev/a9c5c768-a9ca-4a60-9775-ee0500fa15e0",
    "https://cloud-new-grass-82b7.ptakptasyenlki.workers.dev/352ee46d-72c4-425c-89f1-3422ee7b55da",
    "https://cloud-base-3540.jalincrowe.workers.dev/d1e0246a-47a2-4346-a507-aafe97855119",
    "https://sharedsing-2723.emmalopes.workers.dev/aaf74706-cfad-43f1-bc90-ff036af61af9",
    "https://clous-lab-662a.tlavaeonryersvs.workers.dev/1ff0ff56-ccb0-4985-b117-9aac63433a11",
    "https://hycloud-c6f3.ylunndoiclrdaa.workers.dev/8834b760-5554-42d7-91ba-ec1bad372324",
    "https://cloud-base-3540.jalincrowe.workers.dev/ebe6ee18-1b81-4a6a-9961-0bf3ede7470c",
    "https://hycloud-c6f3.ylunndoiclrdaa.workers.dev/2592dcef-01de-40ad-9ac7-b384053aa522",
    "https://cloud-new-grass-82b7.ptakptasyenlki.workers.dev/75ff25fe-3661-41bb-ac39-35da316a6f22",
    "https://coreplesk-cake-7dbf.leacshlenmmdgza.workers.dev/a910b951-648c-42a9-957f-4f7f8cd3f468",
    "https://greg-56e7.lleabtiswhe.workers.dev/fcd37bc8-3caa-4c0b-af0f-8a2e8050fc00",
    "https://clous-lab-662a.tlavaeonryersvs.workers.dev/fe1fe264-7c5c-40aa-a084-52c8e212a1f8",
    "https://cloudd-9bd4.endaonyadn.workers.dev/e8547a1c-c8f8-4ea5-a469-7c4183f830b2",
    "https://grehu-6d48.aedlripreaz.workers.dev/0b59337b-820e-4065-8ae6-94b54bb2f17c",
    "https://cloud-base-3540.jalincrowe.workers.dev/11f65ece-bef6-4676-bb59-a7c54192f64a",
    "https://orange-math-f65b.naacraleindir.workers.dev/3c07a7e9-c009-4c1f-97b2-ca1e2aff4bd3",
    "https://nhtjq.blogspot.sn/",
    "https://hycloud-c6f3.ylunndoiclrdaa.workers.dev/5c132f93-eb92-4732-b47f-6e8fdbae35f2",
    "https://sheetg-a014.tyron1133.workers.dev/fd22ce66-73f1-4200-91dc-7c5a80b69fa9",
    "https://dark-river-79b4.jamar1026.workers.dev/e7c8522a-9984-44c7-a6f6-6b9ebc738fab",
    "https://clouds-bird-906f.inlukbatehret.workers.dev/9df0b635-0a5f-49c2-9ad9-236a2c665352",
    "https://sharedsing-2723.emmalopes.workers.dev/8fe778c3-4df9-44dd-a3d8-019ddc1227e0",
    "https://clous-lab-662a.tlavaeonryersvs.workers.dev/d3d257b3-d0cc-49f2-86e8-4f81e967850e",
    "https://hycloud-c6f3.ylunndoiclrdaa.workers.dev/b5154b34-69b0-4cf9-864f-bb7b750ff9b9",
    "https://coreplesk-cake-7dbf.leacshlenmmdgza.workers.dev/4e1a5687-40c0-49f7-a57b-a9f84986f928",
    "https://sheeetss-99b3.sbretasaheliba.workers.dev/42ee665c-31f2-49a8-bf6c-2ce62778334c",
    "https://cloud-new-grass-82b7.ptakptasyenlki.workers.dev/c11770fd-84c2-44e4-acb3-a888732e3c0f",
    "https://sharedsing-2723.emmalopes.workers.dev/e19c2418-bead-4780-b82c-b9cd6dfe664c",
    "https://aged-sunset-c81b.debra1027.workers.dev/43207cb4-4833-48d5-b864-7ee5eabd3771",
    "https://falling-hall-35ca.bzefiragnloe1965.workers.dev/0cfaa940-f384-40d3-b301-b14323fe27e1",
    "https://sheetg-a014.tyron1133.workers.dev/2efd926d-c870-4a17-960a-893b5b0fc6c9",
    "https://cloudl-191c.aoapuulz.workers.dev/9c18120a-194f-4c9e-aca0-64a484925b30",
    "https://cloud-new-grass-82b7.ptakptasyenlki.workers.dev/3f37d794-dfa9-4a85-9ed9-afdb124b4337",
    "https://drecloud-1fce.eteispafntejrntan.workers.dev/4b7818ad-ad66-4c0f-a1e8-1cc9eab7b7b7",
    "https://sharedsing-2723.emmalopes.workers.dev/7d53df18-3ee0-4f8f-bcc3-f0996d153ccb",
    "https://vesperintl.com/ionos/login.ionos.de/second.html",
    "https://sheetg-a014.tyron1133.workers.dev/302b398b-5349-4815-b058-470400606de0",
    "https://clouud-1ea1.ehebarotnittk.workers.dev/22058670-f48c-4ff4-951f-f72d484f1d81",
    "https://cloud-new-grass-82b7.ptakptasyenlki.workers.dev/ca08ba0f-f5fc-4d2d-bbe9-e7ca89cec8c0",
    "https://clous-lab-662a.tlavaeonryersvs.workers.dev/e73bf29c-66ac-4b5e-8b81-c0f6f373a16e",
    "https://cloud-new-grass-82b7.ptakptasyenlki.workers.dev/cdcb99a5-7784-4631-a1e5-f54c6a23ce68",
    "https://egfyua-winter-sea-8755.smilingpurple.workers.dev/84c5c1b4-e8fd-441d-95fe-146491e83310",
    "https://enjucm-6424.anotudhoeah.workers.dev/f6322d7a-afb4-4476-bd69-0d3645077966",
    "https://orange-math-f65b.naacraleindir.workers.dev/f0d5278d-258f-474e-addf-08ea20e0956f",
    "https://sharedsing-2723.emmalopes.workers.dev/34aacbb2-1b15-4271-a0ca-91d21f0db6f7",
    "https://cloud-new-grass-82b7.ptakptasyenlki.workers.dev/bcb05542-be3a-49ad-8eab-2430414f216a",

];

export default phishingLinks;