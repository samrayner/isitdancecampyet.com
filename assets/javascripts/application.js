function setBackgroundImage(){var g=filenames[Math.floor(Math.random()*filenames.length)],m="http://www.oxforddancecamp.info/uploads/1/0/0/4/10043810/"+g+"_orig.jpg";document.getElementById("container").style.backgroundImage="url('"+m+"')"}function startCountdown(){var g=document.getElementById("center"),m=date.getTime(),i=setInterval(function(){var e=(new Date).getTime(),n=m-e,t=Math.floor(n/oneWeek),o=Math.floor(n%oneWeek/oneDay),a=Math.floor(n%oneDay/oneHour),r=Math.floor(n%oneHour/oneMinute),u=Math.floor(n%oneMinute/oneSecond),s=[t,o,a,r,u],d=["w","d","h","m","s"];if(n<0)return clearInterval(i),void(g.innerHTML="YES!!!!!<br />\ud83d\udc6f\u200d\u2640\ufe0f\u2728\ud83c\udf8a\ud83c\udf89\ud83d\udd7a\ud83d\udc83");g.innerHTML=phrase+"<br />\ud83c\udff3\ufe0f\u200d\ud83c\udf08\u2600\ufe0f\ud83c\udfd5\ud83d\udc9a<br />";for(var f=0;f<s.length;f++)s[f]>0&&(g.innerHTML+=s[f]+d[f]+" ")},1e3)}var dates=[new Date("Aug 2, 2019 12:00:00"),new Date("Aug 7, 2020 12:00:00"),new Date("Aug 6, 2021 12:00:00"),new Date("Aug 5, 2022 12:00:00"),new Date("Aug 4, 2023 12:00:00"),new Date("Aug 2, 2024 12:00:00"),new Date("Aug 1, 2025 12:00:00"),new Date("Aug 7, 2026 12:00:00"),new Date("Aug 6, 2027 12:00:00"),new Date("Aug 4, 2028 12:00:00"),new Date("Aug 3, 2029 12:00:00"),new Date("Aug 2, 2030 12:00:00")],filenames=["mg-4700","mg-4705","mg-4706","mg-4712","mg-4717","mg-4720","mg-4722","mg-4725","mg-4726","mg-4727","mg-4729","mg-4730","mg-4731","mg-4737","mg-4740","mg-4743","mg-4761","mg-4771","mg-4774","mg-4776","mg-4777","mg-4783","mg-4784","mg-4794","mg-4798","mg-4799","mg-4800","mg-4809","mg-4810","mg-4811","mg-4813","mg-4815","mg-4819","mg-4824","mg-4832","mg-4839","mg-4843","mg-4851","mg-4854","mg-4855","mg-4856","mg-4862","mg-4865","mg-4867","mg-4868","mg-4875","mg-4877","mg-4881","mg-4885","mg-4886","mg-4892","mg-4897","mg-4898","mg-4900","mg-4901","mg-4903","mg-4908","mg-4909","mg-4914","mg-4915","mg-4917","mg-4918","mg-4923","mg-4928","mg-4930","mg-4934","mg-4936","mg-4940","mg-4941","mg-4945","mg-4947","mg-4949","mg-4953","mg-4954","mg-4956","mg-4958","mg-4960","mg-4962","mg-4963","mg-4964","mg-4967","mg-4969","mg-4975","mg-4976","mg-4977","mg-4978","mg-4981","mg-4982","mg-4986","mg-4988","mg-4990","mg-4992","mg-4994","mg-4996","mg-4998","mg-5004","mg-5008","mg-5010","mg-5011","mg-5013","mg-5015","mg-5016","mg-5018","mg-5019","mg-5026","img-6734","img-6743","img-6744","img-6745","img-6765","img-6764","img-6766","img-6767","img-6768","img-6769","img-6772","img-6776","img-6777","img-6781","img-6783","img-6786","img-6788","img-6802","img-6805","img-6809","img-6807","img-6810","img-6812","img-6813","img-6816","img-6822","img-6823","img-6824","img-6827","img-6830","img-6833","img-6834","img-6837","img-6838","img-6840","img-6841","img-6842","img-6845","img-6849","img-6851","img-6855","img-6856","img-6857","img-6861","img-6863","img-6865","img-6867","img-6868","img-6871","img-6874","img-6875","img-6877","img-6882","img-6885","img-6887","img-6889","img-6892","img-6894","img-6895","img-6897","img-6902","img-6904","img-6905","img-6910","img-6911","img-6913","img-6915","img-6916","img-6917","img-6919","img-6922","img-6923","img-6928","img-6930","img-6932","img-6936","img-6938","img-6940","img-6943","img-6944","img-6946","img-6949","img-6958","img-6962","img-6964","img-6966","img-6967","img-6974","img-6975","img-6977","img-6979","img-6984","img-6986","img-6989","img-6991","img-6993","img-6996","img-6997","img-7001","img-7002","img-7004","img-7007","img-7010","img-7013","img-7015","img-7016","img-7020","img-7022","img-7023","img-7025","img-7027","img-7031","img-7033","img-7043","img-7044","img-7045","img-7049","img-7051","img-7052","img-7071","img-7074","img-7078","img-7083","img-7088","img-7092","img-7098","img-7101","img-7108","img-7109","img-7112","img-7119","img-7120","img-7125","img-7129","img-7149","img-7154","img-7156","img-7168","img-7169","img-7188","img-7191","img-7194","img-7204","img-7207","img-7210","img-7212","img-7215","img-7216","img-7217","img-7219","img-7220","img-7222","img-7223","img-7225","img-7229","img-7230","img-7231","img-7233","img-7235","img-7238","img-7239","img-7250","img-7256","img-7257","img-7260","img-7262","img-7268","img-7270","img-7272","img-7276","img-7278","img-7282","img-7283","img-7285","img-7288","mg-5029","img-7296","img-7297","img-7299","img-7300","img-7301","img-7302","img-7304","img-7307","img-7308","img-7309","img-7313","img-7317","img-7318","img-7320","img-7321","img-7322","mg-5028","mg-5032","mg-5033","mg-5034","mg-5036","mg-5037","mg-5039","mg-5040","mg-5041","mg-5047","mg-5048","mg-5050","mg-5051","mg-5055","mg-5056","mg-5057","mg-5060","mg-5061","mg-5062","mg-5064","mg-5066","mg-5068","mg-5069","mg-5070","mg-5073","mg-5076","mg-5079","mg-5083","mg-5087","mg-5094","mg-5129","mg-5161","mg-5164","mg-5187","mg-5195","mg-5198","mg-5200","mg-5211","mg-5212","mg-5224","mg-5225","mg-5249","mg-5232","mg-5233","mg-5234","mg-5235","mg-5238","mg-5237","mg-5236","img-7330","mg-5229","mg-5231","img-7324","img-7333","img-7336","img-7337","img-7338","img-7339","img-7334","mg-5239","mg-5246","mg-5250","mg-5252","mg-5256","mg-5260","mg-5261","mg-5262","img-7343","img-7344","img-7345","img-7349","img-7352","img-7353","img-7354","img-7362","img-7368","img-7378","img-7381","img-7383","img-7386","img-7387","img-7389","img-7392","img-7395","img-7398","img-7406","img-7408","img-7412","img-7414","img-7416","img-7419","img-7424","img-7429","img-7431","img-7432","img-7434","img-7435","img-7440","img-7441","img-7443","img-7446","img-7450","img-7451","img-7457","img-7461","img-7464","img-7468","img-7471","img-7472","img-7481","img-7485","img-7490","img-7491","img-7492","img-7494","img-7497","img-7503","img-7504","img-7509","img-7515","img-7518","img-7522","img-7529","img-7530","img-7534","img-7543","img-7550","img-7552","img-7553","img-7555","img-7558","img-7562","img-7563","img-7565","img-7568","img-7569","img-7573","img-7578","img-7583","img-7587","img-7596","img-7603","mg-5264","mg-5265","mg-5266","mg-5267","mg-5269","mg-5272","mg-5274","mg-5279","mg-5280","mg-5285","mg-5286","mg-5287","mg-5290","mg-5291","mg-5292","mg-5293","mg-5295","mg-5296","mg-5297","mg-5300","mg-5301","mg-5303","mg-5305","mg-5308","mg-5309","mg-5313","mg-5314","mg-5318","mg-5319","mg-5320","mg-5323","mg-5325","mg-5327","mg-5329","mg-5331","mg-5332","mg-5333","mg-5334","mg-5335","mg-5336","mg-5339","mg-5340","img-7612","img-7613","img-7619","img-7627","img-7630","img-7634","img-7636","img-7640","img-7641","img-7642","img-7647","img-7648","img-7650","img-7652","img-7653","img-7655","img-7657","img-7659","img-7664","img-7665","img-7669","img-7672","img-7674","img-7676","img-7677","img-7679","img-7680","img-7684","img-7685","img-7689","img-7690","mg-5341","mg-5345","mg-5573","mg-5576","mg-5580","mg-5584","mg-5586","mg-5589","mg-5591","mg-5596","mg-5599","mg-5601","mg-5607","mg-5608","mg-5615","mg-5617","mg-5624","mg-5627","mg-5639","mg-5648","mg-5655","mg-5660","mg-5666","mg-5679","mg-5689","mg-5696","mg-5697","mg-5699","mg-5704","mg-5707","mg-5708","mg-5709","mg-5710","mg-5712","mg-5714","mg-5723","mg-5727","mg-5730","mg-5733","mg-5738","mg-5739","mg-5740","mg-5741","mg-5743","mg-5747","mg-5749","mg-5757","mg-5759","mg-5762","mg-5763","mg-5766","mg-5768","mg-5769","mg-5770","mg-5771","mg-5772","mg-5773","mg-5774","mg-5775","mg-5777","mg-5779","mg-5780","mg-5781","mg-5783","mg-5784","mg-5785","mg-5786","mg-5787","mg-5788","mg-5789","mg-5790","mg-5791","mg-5795","mg-5796","mg-5797","mg-5798","mg-5800","mg-5803","mg-5805","mg-5807","mg-5809","mg-5811","mg-5818","img-7771","img-7772","img-7783","img-7793","img-7805","img-7808","img-7817","img-7827","img-7833","img-7834","img-7843","img-7849","img-7856","img-7857","img-7859","img-7860","img-7861","img-7870","img-7873","img-7874","img-7879","img-7905","img-7914","img-7922","img-7941","img-7949","img-7954","img-7957","img-7961","img-7964","img-7966","img-7975","img-7989","img-8009","img-8010","img-8041","img-8046","img-8048","img-8056","img-8057","img-8061","img-8063","img-8065","img-8066","img-8074","img-8079","img-8094","img-8099","img-8116","img-8127","img-8132","img-8136","img-8163","img-8209","img-8214","img-8232","img-8247","mg-5822","mg-5823","mg-5825","mg-5827","mg-5830","mg-5840","mg-5843","mg-5848","mg-5857","mg-5861","mg-5863","mg-5865","mg-5866","mg-5868","mg-5870","mg-5878","mg-5881","mg-5888","mg-5889","mg-5893","mg-5894","mg-5895","mg-5904","mg-5907","mg-5910","mg-5911","mg-5921","mg-5922","mg-5924","mg-5942","mg-5947","mg-5953","mg-5966","mg-5967","mg-5974","mg-5988","mg-5998","mg-6000","mg-6002","mg-6011","mg-6014","mg-6016","mg-6019","mg-6020","mg-6027","mg-6028","mg-6032","mg-6035","mg-6038","mg-6043","mg-6045","mg-6046","mg-6060","mg-6061","mg-6062","mg-6064","mg-6066","mg-6073","mg-6075","mg-6080","mg-6082","mg-6086","mg-6087","mg-6088","mg-6093","mg-6094","mg-6096","mg-6099","mg-6102","mg-6105","mg-6106","mg-6108","mg-6112","mg-6119","mg-6123","mg-6125","mg-6127","mg-6129","mg-6138","mg-6139","mg-6141","mg-6143","mg-6144","mg-6145","mg-6148","mg-6155","mg-6158","mg-6165","mg-6166","mg-6169","mg-6172","mg-6173","mg-6174","mg-6176","mg-6177","mg-6180","mg-6184","mg-6188","mg-6190","mg-6194","mg-6196","mg-6198","mg-6201","mg-6202","mg-6206","mg-6207","mg-6214","mg-6216","mg-6217","mg-6225","mg-6229","mg-6231","mg-6233","mg-6243","mg-6245","mg-6254","mg-6260","mg-6263","mg-6266","mg-6269","mg-6273","mg-6274","mg-6276","mg-6280","mg-6292","mg-6295","mg-6296","mg-6298","mg-6307","mg-6309","mg-6311","mg-6312","mg-6314","mg-6322","mg-6325","mg-6328","mg-6330","mg-6333","mg-6336","mg-6337","mg-6338","mg-6345","mg-6360","mg-6364","mg-6370","mg-6371","mg-6375","mg-6376","mg-6378","mg-6381","mg-6384","mg-6389","mg-6395","mg-6396","mg-6397","mg-6403","mg-6405","mg-6407","mg-6409","mg-6410","mg-6411","mg-6413","mg-6416","mg-6417","mg-6419","mg-6420","mg-6421","mg-6424","mg-6428","img-8281","img-8282","img-8286"],phrases=["Not yet, but soon!","Almost, hang in there.","Nearly, I promise!","Not long now!","Not quite yet, sorry!"],phrase=phrases[Math.floor(Math.random()*phrases.length)],offsetDate=new Date;offsetDate.setDate(offsetDate.getDate()-9);var date=dates.find(function(g){return g>offsetDate}),oneSecond=1e3,oneMinute=60*oneSecond,oneHour=60*oneMinute,oneDay=24*oneHour,oneWeek=7*oneDay;document.addEventListener("DOMContentLoaded",function(){setBackgroundImage(),startCountdown()},!1);