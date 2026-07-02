// 人教PEP三上、三下复习 + 四上预习课程池。每题记录册次、单元和学习类型。
const curriculumUnits=[
{g:'三上复习',u:'U1 Making friends',w:[['朋友','friend'],['名字','name'],['你好','hello'],['好的','fine'],['新的','new'],['一起','together']],d:[["What's your name?",'My name is Amy.'],['Nice to meet you.','Nice to meet you, too.']]},
{g:'三上复习',u:'U2 Different families',w:[['家庭','family'],['爸爸','father'],['妈妈','mother'],['兄弟','brother'],['姐妹','sister'],['祖母','grandmother']],d:[["Who's that woman?",'She is my mother.'],['Is he your brother?','Yes, he is.']]},
{g:'三上复习',u:'U3 Amazing animals',w:[['动物','animal'],['熊猫','panda'],['猴子','monkey'],['老虎','tiger'],['大象','elephant'],['长颈鹿','giraffe']],d:[["What's this?",'It is a panda.'],['Do you like animals?','Yes, I do.']]},
{g:'三上复习',u:'U4 Plants around us',w:[['植物','plant'],['树','tree'],['花','flower'],['草','grass'],['种子','seed'],['水','water']],d:[["What's this?",'It is a flower.'],['What do plants need?','They need water.']]},
{g:'三上复习',u:'U5 The colourful world',w:[['红色','red'],['蓝色','blue'],['黄色','yellow'],['绿色','green'],['黑色','black'],['白色','white']],d:[['What colour is it?','It is blue.'],['I like red.','Me too.']]},
{g:'三上复习',u:'U6 Useful numbers',w:[['一','one'],['二','two'],['三','three'],['五','five'],['十','ten'],['数字','number']],d:[['How many books?','Three books.'],['How old are you?','I am nine.']]},
{g:'三下复习',u:'U1 Meeting new people',w:[['中国','China'],['英国','UK'],['加拿大','Canada'],['美国','USA'],['学生','student'],['老师','teacher']],d:[['Where are you from?',"I'm from China."],['Are you a student?','Yes, I am.']]},
{g:'三下复习',u:'U2 Expressing yourself',w:[['高兴的','happy'],['难过的','sad'],['大的','big'],['小的','small'],['长的','long'],['短的','short']],d:[['How are you?','I am happy.'],['Look at the giraffe.','It is so tall.']]},
{g:'三下复习',u:'U3 Family and friends',w:[['男人','man'],['女人','woman'],['男孩','boy'],['女孩','girl'],['朋友','friend'],['婴儿','baby']],d:[["Who's that man?",'He is my father.'],['Is she your sister?','No, she is my friend.']]},
{g:'三下复习',u:'U4 Around us',w:[['在里面','in'],['在上面','on'],['在下面','under'],['椅子','chair'],['书桌','desk'],['盒子','box']],d:[["Where is my bag?",'It is under the desk.'],['Is it in the box?','Yes, it is.']]},
{g:'三下复习',u:'U5 Food and fruit',w:[['苹果','apple'],['香蕉','banana'],['橙子','orange'],['梨','pear'],['葡萄','grape'],['西瓜','watermelon']],d:[['Do you like pears?','Yes, I do.'],['Can I have an apple?','Here you are.']]},
{g:'三下复习',u:'U6 Numbers and toys',w:[['十一','eleven'],['十二','twelve'],['十三','thirteen'],['十五','fifteen'],['二十','twenty'],['玩具','toy']],d:[['How many kites do you see?','I see twelve.'],['How many crayons?','I have fifteen.']]},
{g:'四上预习',u:'U1 Helping at home',w:[['帮助','help'],['打扫','clean'],['洗','wash'],['烹饪','cook'],['盘子','dish'],['房间','room']],d:[['Can you help me?','Yes, I can.'],['What are you doing?','I am cleaning my room.']]},
{g:'四上预习',u:'U2 My friends',w:[['友好的','friendly'],['安静的','quiet'],['强壮的','strong'],['高的','tall'],['短发','short hair'],['眼镜','glasses']],d:[["What's his name?",'His name is John.'],['What is she like?','She is friendly and quiet.']]},
{g:'四上预习',u:'U3 Places we live in',w:[['卧室','bedroom'],['客厅','living room'],['厨房','kitchen'],['浴室','bathroom'],['书房','study'],['家','home']],d:[['Where is Amy?','She is in the study.'],['Is she in the kitchen?','No, she is not.']]},
{g:'四上预习',u:'U4 Helping in the community',w:[['社区','community'],['医院','hospital'],['学校','school'],['公园','park'],['医生','doctor'],['警察','police officer']],d:[['Where is the hospital?','It is near the park.'],['How can I help?','Please clean the park.']]},
{g:'四上预习',u:'U5 The weather and us',w:[['天气','weather'],['晴朗的','sunny'],['多雨的','rainy'],['多云的','cloudy'],['多风的','windy'],['寒冷的','cold']],d:[["What's the weather like?",'It is sunny.'],['Can I go outside?','Yes, you can.']]},
{g:'四上预习',u:'U6 Changing for the seasons',w:[['春天','spring'],['夏天','summer'],['秋天','autumn'],['冬天','winter'],['温暖的','warm'],['凉爽的','cool']],d:[['Which season do you like?','I like spring.'],['What do you wear in winter?','I wear a warm coat.']]}
];
const curriculumBank=[];
curriculumUnits.forEach(unit=>{
  unit.w.forEach(([cn,word])=>curriculumBank.push({grade:unit.g,unit:unit.u,type:'spell',cn,word,hint:`${word[0]} 开头，共 ${word.replace(/ /g,'').length} 个字母`}));
  unit.d.forEach(([q,a])=>curriculumBank.push({grade:unit.g,unit:unit.u,type:'talk',q,options:[a,'I do not know.','It is on the moon.'],a:0}));
});
