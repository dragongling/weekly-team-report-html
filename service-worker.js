if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,a,s)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(a.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=s(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"545.js",revision:"4f408d42077b67385f6b1a19dc9940ec"},{url:"big-title-brush-background.png",revision:"ed79cfe6a2ef080a4157614c6f162ffa"},{url:"edit-profile.html",revision:"85a056a467b1e49a9da2332f92e693a9"},{url:"edit-profile.js",revision:"4183d149fa4bb1895614c616c21ca53d"},{url:"edit_members.html",revision:"89f444b69783e4b68a1381c61c356534"},{url:"edit_members.js",revision:"00c906f61b801227a033cc65de476f93"},{url:"fill-out-report.html",revision:"e16c5c136c3601450ecfebeb110186ad"},{url:"fill-out-report.js",revision:"392f4aea8239615f6945afc6fe72c712"},{url:"happy-greyed-out.svg",revision:"3b2d0ab608fe59b13e725e95b7ab927a"},{url:"happy.svg",revision:"9e8f9160445c1e81a4104b988ebbac2e"},{url:"index.html",revision:"aa76b04badfca0e80a38889b2ca73a40"},{url:"index.js",revision:"e04cf684d5380ddea896ca5eafa7fc01"},{url:"invite_your_team.html",revision:"c85313bddb6881427976976ebc59882b"},{url:"invite_your_team.js",revision:"fc4f28340b182d4fb51983fa346ea526"},{url:"invite_your_team_success_info.html",revision:"8b71f322441cbb3b62f300714384b817"},{url:"invite_your_team_success_info.js",revision:"73766254d04b24b158c2e8b69156cec9"},{url:"launch_guide_encourage.png",revision:"b98b7dc065fd1c942b119afb01ef68a5"},{url:"launch_guide_invite.png",revision:"36168b18c6cb4513c8e00e0e0ac4ab4a"},{url:"launch_guide_read.png",revision:"dbdde2d1067b6b3da2642aa33087d0ce"},{url:"launch_guide_remind.png",revision:"5f831ca8759430ae2208f95f3aa3c06e"},{url:"logo.png",revision:"39b4e49262e3d8aaedd4cb7bfc47032f"},{url:"my_company.html",revision:"9b84f401c0893796411c27fbb4805838"},{url:"my_company.js",revision:"59f8e0ee8e8715a17c64209ab488bc54"},{url:"my_reports.html",revision:"7619355f1b1c17f96f3722547eb76a91"},{url:"my_reports.js",revision:"7201c4df7d4ce48c520a0b035383b519"},{url:"neutral-greyed-out.svg",revision:"4ebf05c1918e86f7174e423d54a62032"},{url:"neutral.svg",revision:"c24eb728e96fa6e9e88cecb11e2b01a0"},{url:"sad-greyed-out.svg",revision:"4753e04f8434f8d3a22c5e0744078162"},{url:"sad.svg",revision:"76d6d9d43868c00174a2414549e72123"},{url:"team_members.html",revision:"eb30cce45314a3e2d60bef22b4b006c8"},{url:"team_members.js",revision:"46caa24ac7b855442dc1d83a6e2bee43"},{url:"team_reports.html",revision:"4e56c26c10e2b4af9508bf8071fe8e2b"},{url:"team_reports.js",revision:"5606a955569e92693875985f668841f6"},{url:"unmarked.svg",revision:"20888d719ec3d2a0e23c082237fcb888"},{url:"very-happy-greyed-out.svg",revision:"9288a5ad211374200aa87fd275c8b0c1"},{url:"very-happy.svg",revision:"9861bfa0cc3ca83bce8b96b50569c134"},{url:"very-sad-greyed-out.svg",revision:"cbf9fad3e2a6f9278c2679e9d22ac661"},{url:"very-sad.svg",revision:"58039ef71ff745e058ea4ec1524f06ac"},{url:"weekly_report_history.html",revision:"b74985318dc83210c76ad203def8fd72"},{url:"weekly_report_history.js",revision:"7c3a7cea147d7d8ae87efeb92abda01f"}],{})}));
