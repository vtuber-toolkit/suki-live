// ============================================================
//  歌曲数据（22首，风格统一为“古风”或“流行”）
// ============================================================
const songs = [
{ title: '36.5℃', artist: '音阙诗听/李佳思', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '99次我爱他', artist: '元若蓝', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: 'Always Online', artist: '林俊杰', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: 'Letting Go', artist: '蔡健雅', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: 'NEW BOY', artist: '朴树', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: 'Virtual to LIVE', artist: 'VirtuaReal', language: '国语', genre: '流行', sc: 0, remarks: '太多无奈和心酸' },
{ title: 'YES！OK！', artist: '青春有你2', language: '国语', genre: '流行', sc: 0, remarks: '回不来了……' },
{ title: 'おどるポンポコリン', artist: 'B.B.Queens', language: '日语', genre: '流行', sc: 0, remarks: '' },
{ title: 'クルマレテ', artist: 'KOKIA', language: '日语', genre: '流行', sc: 0, remarks: '' },
{ title: '阿拉斯加海湾', artist: '蓝心羽', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '阿嬷', artist: '周林枫', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '爱错', artist: '王力宏', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '爱的供养', artist: '杨幂', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '爱的华尔兹', artist: '严艺丹', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '爱的回归线', artist: '陈韵若/陈每文', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '爱的双重魔力', artist: 'BY2', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '爱你不是两三天', artist: '梁静茹', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '爱情讯息', artist: '郭静', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '爱殇', artist: '小时姑娘', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '爱丫爱丫', artist: 'BY2', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '爱一点', artist: '莫艳琳', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '爸爸妈妈听我说', artist: '彭野新儿歌/段丽阳', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '白狐', artist: '陈瑞', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '白石溪', artist: '洛天依/乐正绫', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '白衣渡我', artist: '司夏', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '百万个吻', artist: '陈明真', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '拜无忧', artist: '萧忆情Alex', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '拜月', artist: '邓寓君(等什么君)', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '半壶纱', artist: '郁可唯/金晨', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '帮主夫人', artist: '少年霜', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '贝加尔湖畔', artist: '李健', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '背对背拥抱', artist: '林俊杰', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '碧海问舟', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '壁上观', artist: '张晓涵', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '别赋', artist: '慕寒', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '别看我只是一只羊', artist: '古倩敏', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '卜卦', artist: '崔子格', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '不凡2024', artist: '王铮亮', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '不分手的恋爱', artist: '汪苏泷', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '不及', artist: '陈亦洺', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '不老梦', artist: '银临', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '不染', artist: '毛不易', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '不谓侠', artist: '萧忆情Alex', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '不羡明月知', artist: '封茗囧菌', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '不需等天晴', artist: 'hanser', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '彩虹', artist: '周杰伦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '彩色复活券', artist: '黄龄', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '参商', artist: '茉莉', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '藏', artist: '徐梦圆/双笙 (陈元汐)', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '茶花开了', artist: '王睿卓', language: '国语', genre: '流行', sc: 0, remarks: '太阳严选' },
{ title: '吵架歌', artist: '汪苏泷/Hari荷莉', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '魑魅魍魉', artist: '周林枫', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '赤伶', artist: 'HITA', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '虫儿飞', artist: '儿歌', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '宠爱', artist: 'TFBOYS', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '出山', artist: '花粥/王胜娚', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '吹梦到西洲', artist: '昭爻tsuki/千世', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '吹灭小山河', artist: '国风堂/司南', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '春三月', artist: '司南', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '春庭雪', artist: '等什么君', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '春意红包', artist: '祖娅纳惜/泠鸢yousa/小缘/洛萱/蔡明希-不才/三无Marblue', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '纯妹妹', artist: '单依纯', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '蠢货', artist: '喻言', language: '国语', genre: '流行', sc: 0, remarks: '风酱严选' },
{ title: '匆匆那年', artist: '王菲', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '凑热闹', artist: 'By2', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '寸心笑傲', artist: '绯村柯北', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '达尔文', artist: '蔡健雅', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '大家一起喜羊羊', artist: '周笔畅', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '大氿歌', artist: 'ilem/洛天依', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '大喜', artist: '泠鸢yousa/音阙诗听', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '大小姐的复仇生涯', artist: 'JUSF周存/洛天依', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '大小姐的逃亡生涯', artist: 'JUSF周存/洛天依', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '大小姐和大少爷的反派生涯', artist: 'JUSF周存/洛天依', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '大鱼', artist: '周深', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '带我去找夜生活', artist: '告五人', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '丹青客', artist: 'HITA/小曲儿', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '胆小鬼', artist: '梁咏琪', language: '国语', genre: '流行', sc: 0, remarks: '风酱严选' },
{ title: '当你', artist: '林俊杰', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '盗将行', artist: '花粥/马雨阳', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '得了吧张小姐', artist: '李想Evelyn', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '等到世界颠倒', artist: '王小帅', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '等风也等卿', artist: '兔裹煎蛋卷', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '等你的季节', artist: '刘诗诗', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '笛月', artist: '封茗囧菌/双笙', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '第57次取消发送', artist: '菲菲公主（陆绮菲）', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '第二杯半价', artist: '纳豆nado', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '典狱司', artist: '音频怪物', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '定玄', artist: '鸣潮先约电台/黄霄雲/杨秉音', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '东京不太热', artist: '封茗囧菌', language: '国语', genre: '流行', sc: 0, remarks: '风酱严选' },
{ title: '东西', artist: '林俊呈', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '冬眠', artist: '司南', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '冬日', artist: 'SNH48', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '都要好好的', artist: '小沈阳/沈春阳', language: '国语', genre: '流行', sc: 0, remarks: '有改词版' },
{ title: '独りんぼエンヴィー', artist: '初音未来', language: '日语', genre: '流行', sc: 0, remarks: '' },
{ title: '独家记忆', artist: '陈小春', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '多情岸', artist: '忘川风华录/洛天依', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '多情种', artist: '胡杨林', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '多幸运', artist: '韩安旭', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '多远都要在一起', artist: 'G.E.M. 邓紫棋', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '恶作剧', artist: '王蓝茵', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '凡人', artist: '程响呀', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '繁花', artist: '董真', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '繁华唱遍', artist: '泠鸢yousa', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '繁华梦', artist: '黄龄', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '方圆几里', artist: '薛之谦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '芳华旧', artist: '银临/蔡翊昇', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '飞机场', artist: '徐良/小凌', language: '国语', genre: '流行', sc: 0, remarks: '阿盏是垫的！' },
{ title: '风度', artist: '汪苏泷', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '风铃', artist: '白允y', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '枫叶城', artist: '单循', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '风筝误', artist: '刘珂矣', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '風，霧，陽光和你', artist: 'Dewi毛毛', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '凤凰花开的路口', artist: '林志炫', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '拂雪', artist: '蔡明希-不才', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '浮生辞', artist: '银临', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '浮生未歇', artist: '音频怪物', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '腐草为萤', artist: '银临', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '伽蓝经', artist: '子弥', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '幹物女(WeiWei)', artist: '洛天依/乐正绫', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '刚好遇见你', artist: '李玉刚', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '告白气球', artist: '周杰伦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '搁浅', artist: '周杰伦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '给我一首歌的时间', artist: '周杰伦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '勾指起誓', artist: 'ilem/洛天依', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '孤单北半球', artist: '欧得洋', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '谷底有花', artist: '画久', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '故梦', artist: '橙翼', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '故人泪', artist: '麦小兜', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '故人叹', artist: '吴琼', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '关山酒', artist: '邓寓君(等什么君)', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '广寒宫', artist: '丸子呦', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '归期', artist: '钱润玉Runyu', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '归去来兮', artist: '叶炫清', language: '国语', genre: '古风', sc: 0, remarks: '每次都认错是你吧' },
{ title: '归去来兮', artist: '花粥', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '皈依', artist: '皈依小能手', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '哈哈哈', artist: '孟慧圆', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '还是你的笑容最可爱', artist: '音阙诗听/泠鸢yousa/王梓钰', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '海绵宝宝', artist: '回音哥', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '海屿你', artist: '马也_Crabbit', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '好想好想', artist: '古巨基', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '好运来', artist: '祖海', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '合拍', artist: '许嵩', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '何必诗债换酒钱', artist: '赵景旭（Winky诗）', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '何而安', artist: '小曲儿', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '何日重到苏澜桥', artist: '三无Marblue', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '何以歌', artist: 'Aki阿杰', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '红尘', artist: '小曲儿', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '红尘客栈', artist: '周杰伦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '红豆', artist: '王菲', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '红色高跟鞋', artist: '蔡健雅', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '红山果', artist: '安与骑兵', language: '国语', genre: '古风', sc: 0, remarks: '太阳严选' },
{ title: '红颜旧', artist: '刘涛', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '红叶寺', artist: '苏玮', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '红昭愿', artist: '音阙诗听', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '虹之间', artist: '金贵晟', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '后会无期', artist: 'G.E.M. 邓紫棋', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '呼吸决定', artist: 'Fine乐团', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '狐言', artist: '洛天依/河图', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '胡广生', artist: '任素汐', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '花', artist: '鞠婧祎', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '花灯游', artist: '封茗囧菌/洛少爷', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '花鼓摇', artist: 'hanser', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '花海', artist: '周杰伦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '花开忘忧', artist: '周深', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '花头台', artist: '洛天依', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '花亦山', artist: '音阙诗听/赵方婧', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '花月成双', artist: '三无Marblue', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '花枝春野', artist: '鹿予/初夏小溪', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '化身孤岛的鲸', artist: '周深', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '画心', artist: '张靓颖', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '坏女孩', artist: '徐良/小凌', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '环游星空', artist: 'Gifty', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '回る空うさぎ', artist: 'Orangestar', language: '日语', genre: '流行', sc: 0, remarks: '' },
{ title: '回马枪', artist: '张晓棠', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '回音如果', artist: '黄霄雲', language: '国语', genre: '流行', sc: 0, remarks: '风酱严选' },
{ title: '会呼吸的痛', artist: '梁静茹', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '吉祥话', artist: 'hanser/泠鸢yousa/祖娅纳惜/鹿乃', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '寄明月', artist: 'SING女团', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '寄清风于归途', artist: '泽典', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '霁夜茶', artist: '小曲儿', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '加油鸭', artist: '好好（张轩睿）', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '甲乙丙丁 (你我怎么两清)', artist: '李佳薇', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '假装', artist: '陈雪凝', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '煎熬', artist: '李佳薇', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '剑魂', artist: '汪苏泷', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '江湖少年', artist: '东篱', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '江山雪', artist: '小爱的妈', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '交换余生', artist: '林俊杰', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '交织together', artist: 'DMYoung/泠鸢yousa/hanser', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '姐就是女王', artist: '王莎莎', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '解药', artist: '颜小健/郑国锋', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '借月', artist: '王天阳', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '金陵谣', artist: '小久', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '锦鲤抄', artist: '银临/云之泣', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '惊鹊', artist: '海伊/星尘Minus', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '静悄悄', artist: '陈泫孝', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '九万字', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '九张机', artist: '叶炫清', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '酒醉的蝴蝶', artist: '崔伟立', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '就让这大雨全都落下', artist: '容祖儿', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '菊花台', artist: '周杰伦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '倔强', artist: '五月天', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '开心往前飞', artist: '李薇薇', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '可不可以', artist: '张紫豪', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '可能否', artist: '木小雅', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '刻在我心底的名字', artist: '卢广仲', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '客官请进', artist: '少司命', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '空山新雨后', artist: '音阙诗听/锦零', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '快乐的扑满', artist: '邵丽棠', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '快乐女孩', artist: '刘惜君', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '快乐星猫', artist: '牛奶咖啡', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '懒洋洋当大厨', artist: '李紫昕', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '老公天下第一', artist: '叶洛洛', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '乐游记', artist: '银临/徐梦圆', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '离歌', artist: '信乐团', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '离开我的依赖', artist: '王艳薇', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '离人赋', artist: '云汐', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '李白', artist: '李荣浩', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '恋爱画板', artist: '锦零', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '恋爱困难少女', artist: 'ChiliChili', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '恋人心', artist: '魏新雨', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '良辰夜', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '两小无猜', artist: '洛天依/乐正绫', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '灵猫传', artist: '汪苏泷', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '流光记', artist: '银临', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '流星雨', artist: 'F4', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '路过人间', artist: '郁可唯', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '落（我拈来一缕春风）', artist: '艾辰', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '落花雨', artist: '蒋蒋', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '落了白', artist: '蒋雪儿Snow.J', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '落梅笺', artist: '银临', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '绿色', artist: '陈雪凝', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '马步谣', artist: '双笙 (陈元汐)', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '慢冷', artist: '梁静茹', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '慢慢喜欢你', artist: '莫文蔚', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '芒种', artist: '音阙诗听/赵方婧', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '盲选', artist: '黄霄雲', language: '国语', genre: '流行', sc: 30, remarks: '搬起石头砸自己脚' },
{ title: '眉间雪', artist: 'HITA', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '眉南边', artist: '银临', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '美女主播', artist: '枫子/叶子', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '门没锁', artist: '品冠', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '梦幻诛仙', artist: '张碧晨', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '梦回还', artist: '呦猫UNEKO', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '梦太晚', artist: '董真', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '梦望断', artist: '赵景旭（Winky诗）', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '免我蹉跎苦', artist: '黄龄', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '明明', artist: '阿YueYue/小时姑娘', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '明月天涯', artist: '五音Jw', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '命运', artist: '汪苏泷/张碧晨', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '莫愁乡', artist: '亚细亚旷世奇才', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '莫名其妙爱上你', artist: '朱主爱', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '墨衣', artist: '蔡明希-不才', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '默', artist: '那英', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '慕容雪', artist: '薛凯琪', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '那么骄傲', artist: '金海心', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '那时雨', artist: '徐良', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '那些你很冒险的梦', artist: '林俊杰', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '南半球与北海道', artist: '范倪Liu', language: '国语', genre: '流行', sc: 0, remarks: 'mdzz学歌真快吧' },
{ title: '南山南', artist: '马頔', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '难得真兄弟', artist: '何流/宋晓峰', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '闹哄哄', artist: '郁可唯', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '你', artist: '林依晨', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '你被写在我的歌里', artist: '苏打绿/Ella陈嘉桦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '你的世界', artist: '单依纯', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '你若三冬', artist: '阿悠悠', language: '国语', genre: '流行', sc: 0, remarks: '点歌请提醒阿盏变身' },
{ title: '你之于我', artist: '丁禹兮', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '年轮', artist: '张碧晨', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '孽海记', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '宁夏', artist: '梁静茹', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '凝眸', artist: '丁禹兮', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '牛奶香槟', artist: '三无Marblue', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '弄舌', artist: '王子健', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '暖暖', artist: '梁静茹', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '女儿心如水', artist: '邓福如 AFÜ', language: '国语', genre: '流行', sc: 0, remarks: '女儿侵入谁！？' },
{ title: '哦天爷呀', artist: '苏二零', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '欧若拉', artist: '张韶涵', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '泊秦淮', artist: '祝青（G2er）', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '泼墨漓江', artist: '泠鸢yousa', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '七秒钟的记忆', artist: '徐良/孙羽幽', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '栖凰', artist: '三无Marblue', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '骑士', artist: '黄龄', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '千里邀月', artist: '泠鸢yousa', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '芊芊', artist: '回音哥', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '牵丝戏', artist: '银临/Aki阿杰', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '前尘卷', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '亲爱的，那不是爱情', artist: '张韶涵', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '亲爱的旅人啊', artist: '周深', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '青春修炼手册', artist: 'TFBOYS', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '青花瓷', artist: '周杰伦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '青花引', artist: 'Ace组合', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '青媚狐', artist: '玄觞', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '青柠', artist: '徐秉龙/桃十五', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '青衫薄', artist: 'KBShinya', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '青丝', artist: '时光胶囊', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '清欢怅', artist: '赵景旭（Winky诗）', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '清明上河图', artist: '李玉刚', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '清明雨上', artist: '许嵩', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '清平误', artist: '小曲儿', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '情动', artist: 'YEHAIYAHAN', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '情歌', artist: '梁静茹', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '情话', artist: '徐良/孙羽幽', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '情书不包邮', artist: '后弦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '晴', artist: '汪苏泷', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '晴空一尾鲤', artist: 'hanser', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '请不要带我走', artist: '奥莉安多幻想曲/诗岸', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '请和这样的我恋爱吧', artist: '王澳楠EVE', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '求佛', artist: '誓言', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '求神呐', artist: '柏鹿', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '去追一只鹿', artist: '万象凡音/小时姑娘', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '圈住你', artist: '一口甜', language: '国语', genre: '流行', sc: 0, remarks: '圈住米！？' },
{ title: '鹊引桥', artist: 'hanser', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '人间不值得', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '人间惊鸿客', artist: '叶里', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '人间烂漫', artist: 'hanser', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '人是猫', artist: '张卡斯/洛天依', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '日不落', artist: '蔡依林', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '如果爱忘了', artist: '戚薇', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '如果可以', artist: '韦礼安', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '如果有来生', artist: '谭维维', language: '国语', genre: '流行', sc: 0, remarks: '风酱严选' },
{ title: '如寄', artist: '萧忆情Alex', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '如见青山', artist: '忘川风华录/心华', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '如梦令', artist: '音谋论/音阙诗听', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '如是我闻', artist: '赵景旭（Winky诗）', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '如愿', artist: '王菲', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '若风起时', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '弱水三千', artist: '石头/张晓棠', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '三拜红尘凉', artist: '尹昔眠', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '三寸天堂', artist: '严艺丹', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '三过门', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '三月雨', artist: '洛天依', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '伞下铭', artist: '洛天依/言和', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '山鬼', artist: '赵景旭（Winky诗）', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '山花寻海树', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '山僧', artist: '小曲儿', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '山上雪', artist: '万象凡音/黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '山外小楼夜听雨', artist: '任然', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '山有木兮', artist: '橙光音乐', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '山止川行', artist: '黎予奚/慕皓轩', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '伤心的人别听慢歌 (贯彻快乐)', artist: '五月天', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '上邪', artist: '小曲儿', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '少侠不用刀', artist: '双笙 (陈元汐)', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '舍得', artist: '王唯旖', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '舍离去', artist: '王子健', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '涉川', artist: '蔡明希-不才', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '身骑白马', artist: '徐佳莹', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '神曼波', artist: '月底没钱君', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '神女劈观·唤情 Devastation and Redemption', artist: 'HOYO-MiX', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '盛世回首', artist: '慕寒/马里奥', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '盛夏的果实', artist: '莫文蔚', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '失落沙洲', artist: '徐佳莹', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '十二月的奇迹 (Miracles in December)', artist: 'EXO', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '十世镜', artist: '银临', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '石楠小札', artist: '蔡翊昇', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '时光盲盒', artist: 'ChiliChill乐团', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '时候', artist: '苏运莹', language: '国语', genre: '古风', sc: 0, remarks: '这不设sc我不认可' },
{ title: '时间煮雨', artist: '郁可唯', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '食通万物 修心修身', artist: 'hanser/HOYO-MiX', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '世界上的另一个我', artist: '阿肆/郭采洁', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '世界赠予我的', artist: '王菲', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '世界之大', artist: '迟里乌布', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '世末歌者', artist: 'COP/乐正绫', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '是风动', artist: '银临/河图', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '手掌心', artist: '丁当', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '书里说', artist: '鱼儿七', language: '国语', genre: '古风', sc: 0, remarks: '公子兜不住！？' },
{ title: '蜀绣', artist: '李宇春', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '霜降', artist: '音阙诗听/赵方婧', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '霜雪千年', artist: '洛天依/乐正绫', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '四万秋', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '松烟入墨', artist: '赵景旭（Winky诗）', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '送别', artist: '朴树', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '苏公堤', artist: '杨一歌', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '苏州河', artist: '薛凯琪', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '苏州慢', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '岁岁亦安', artist: '刘宇', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '岁月神偷', artist: '王源/金玟岐', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '他的猫', artist: '徐良/杨曦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '踏浪', artist: '徐怀钰', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '太聪明', artist: '陈绮贞', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '探故知', artist: '浅影阿/汐音社', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '叹云兮', artist: '鞠婧祎', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '探窗', artist: '浮生梦', language: '国语', genre: '古风', sc: 0, remarks: '有改词版' },
{ title: '探清水河', artist: '张云雷', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '棠梨煎雪', artist: '银临', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '桃花庵', artist: '音阙诗听/封茗囧菌', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '桃花诺', artist: 'G.E.M. 邓紫棋', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '桃花笑', artist: '洛天依/言和/乐正绫', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '天地缓缓(纯阳)', artist: '伦桑', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '天地龙鳞', artist: '王力宏', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '天灵灵地灵灵 feat.小可学妹', artist: '小可学妹', language: '国语', genre: '古风', sc: 0, remarks: '燕云严选' },
{ title: '天若灵犀', artist: '小曲儿/银临', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '天下', artist: '张杰', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '天真的橡皮', artist: '白水寒', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '天知河', artist: '说说Crystal', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '迢迢', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '跳楼机', artist: 'LBI利比（时柏尘）', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '听海', artist: '张惠妹', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '听说你', artist: '于冬然', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '听夜雨', artist: '礼越', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '嗵嗵', artist: 'DOUDOU', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '童话镇', artist: '暗杠', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '童年', artist: '罗大佑', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '菟园', artist: '兰音Reine', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '娃娃脸', artist: '后弦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '外婆桥', artist: '任然', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '晚安喵', artist: '艾索', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '晚婚', artist: '谭维维', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '晚夜微雨问海棠', artist: '镜予歌/陈亦洺/喧笑', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '万疆', artist: '李玉刚', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '万梦星', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '万有引力', artist: '汪苏泷', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '妄语人间', artist: '忘川风华录/星尘', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '忘川·镇命歌', artist: '若以止白', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '忘记拥抱', artist: '潘玮柏', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '唯一', artist: 'G.E.M. 邓紫棋', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '为你写诗', artist: '汪苏泷/周洁琼', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '问剑江湖', artist: '双笙 (陈元汐)', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '窝是妈妈的保镖', artist: '永雏塔菲', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我大步向前', artist: '九三', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我的悲伤是水做的', artist: 'ChiliChill乐团/洛天依', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我的猫狂奔了一整夜', artist: 'hanser', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我的一个道姑朋友', artist: '王雨桐', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我好想你', artist: '苏打绿', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我会等', artist: '承桓', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我会自己上厕所', artist: '宝宝巴士', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我们用彩虹的颜色', artist: 'JungMoon珍珠鼠', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我是你的小狗', artist: '西彬', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我想，我想', artist: '洪启', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我想念', artist: '汪苏泷', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我心似你', artist: '双笙 (陈元汐)', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '我要变好看', artist: '周思涵', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我要你', artist: '任素汐', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '我知道', artist: 'BY2', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '乌兰巴托的夜', artist: '谭维维', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '乌梅子酱', artist: '李荣浩', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '乌篷谣', artist: '小曲儿', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '无情画', artist: '王唯旖', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '舞女泪', artist: '韩宝仪', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '西厢寻他', artist: '伯爵Johnny/唐伯虎Annie', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '昔言', artist: 'hita', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '喜欢你', artist: '陈洁仪', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '下等马', artist: 'ChiliChill乐团', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '下个，路口，见', artist: '李宇春', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '下山', artist: '徐泽（要不要买菜）', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '下一秒', artist: '张碧晨', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '夏日尽头的我们', artist: '少年霜', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '夏天的风', artist: '温岚', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '夏天味道有点甜', artist: '水龙儿', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '仙瑶', artist: '叶里', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '香水有毒', artist: '胡杨林', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '相思遥', artist: '魏玉慧', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '想见你想见你想见你', artist: '八三夭乐团', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '想你时风起', artist: '单依纯', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '逍遥戏', artist: '酒禾.', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '小城夏天', artist: 'LBI利比（时柏尘）', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '小城谣', artist: '胡碧乔', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '小哥哥', artist: '胡艾彤喂猪吗', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '小酒窝', artist: '林俊杰', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '小美满', artist: '周深', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '小模样', artist: '张小只ya', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '小棋童', artist: '不纯君', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '小青呱', artist: 'hanser', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '小神仙', artist: '郭斯', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '小仙童', artist: '郭斯', language: '国语', genre: '古风', sc: 0, remarks: '哎bms，哎……' },
{ title: '小小', artist: '容祖儿', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '小幸运', artist: '田馥甄', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '小宇', artist: '张震岳', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '小雨', artist: '黄龄', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '屑屑', artist: 'ChiliChill乐团', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '谢却荼蘼', artist: '银临/慕寒', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '心墙', artist: '郭静', language: '国语', genre: '流行', sc: 0, remarks: '你的心有一道墙' },
{ title: '心情', artist: '陈晓/赵丽颖', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '心无所扰', artist: '兰音Reine', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '心愿便利贴', artist: '元若蓝/大Q秉洛', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '星星在唱歌', artist: '司南', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '星月神话', artist: '金莎', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '杏花弦外雨', artist: 'CRITTY/司夏', language: '国语', genre: '古风', sc: 0, remarks: '风酱严选' },
{ title: '修炼爱情', artist: '林俊杰', language: '国语', genre: '流行', sc: 0, remarks: '风酱严选' },
{ title: '雪落下的声音', artist: '陆虎', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '寻常歌', artist: '钰潇Jannifer', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '胭脂妆', artist: '树屋女孩', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '烟花易冷', artist: '周杰伦', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '烟雨行舟', artist: '司南', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '嫣橙色', artist: '封茗囧菌', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '雁城雪', artist: '小爱的妈', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '燕无歇', artist: '蒋雪儿Snow.J', language: '国语', genre: '古风', sc: 0, remarks: '我不会？我会！？' },
{ title: '杨花落尽子规啼', artist: '祝青（G2er）/黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '痒', artist: '黄龄', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '遥遥', artist: '周深', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '野心家', artist: '张靓颖', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '夜奔', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '夜空中最亮的星', artist: '逃跑计划', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '夜宴风波', artist: '音阙诗听/王梓钰', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '夜夜夜夜', artist: '林志炫', language: '国语', genre: '流行', sc: 0, remarks: '就这个转音爽' },
{ title: '一程山路', artist: '毛不易', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '一分钟恋人', artist: '何昕芸', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '一克拉月光', artist: '唐九夏', language: '国语', genre: '流行', sc: 0, remarks: '太阳严选' },
{ title: '一身诗意千寻瀑', artist: '蔡明希-不才', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '一笑倾城', artist: '汪苏泷', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '一样的月光', artist: '徐佳莹', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '一直很安静', artist: '阿桑', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '沂蒙山小调', artist: '彭丽媛', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '易安难安', artist: '忘川风华录/赤羽', language: '国语', genre: '古风', sc: 0, remarks: '烟男来了！' },
{ title: '阴阳先生', artist: '洛天依/言和', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '隐形的翅膀', artist: '张韶涵', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '樱花草', artist: 'Sweety', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '咏春', artist: '七朵组合', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '永不失联的爱', artist: '单依纯', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '勇敢爱', artist: 'Mi2', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '勇气', artist: '梁静茹', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '由此去', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '有点甜', artist: '汪苏泷/BY2', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '有何不可', artist: '许嵩', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '有美人兮', artist: '赵方婧/王梓钰', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '有一种悲伤', artist: 'A-Lin', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '幼时', artist: '泽典', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '鱼玄机', artist: 'hanser', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '鱼仔', artist: '卢广仲', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '雨爱', artist: '杨丞琳', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '雨打芭蕉', artist: '小曲儿', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '遇见', artist: '孙燕姿', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '遇见你的时候所有星星都落到我头上', artist: '高姗', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '遇萤', artist: '橙光音乐', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '鸳鸯戏', artist: 'Babystop_山竹/伊笑', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '原点', artist: '西单女孩', language: '国语', genre: '古风', sc: 0, remarks: '最感谢的一首歌' },
{ title: '愿', artist: '艾辰', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '愿与愁', artist: '林俊杰', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '月光', artist: '胡彦斌', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '月无眠', artist: '酒禾', language: '国语', genre: '流行', sc: 0, remarks: '她好可爱！' },
{ title: '月下', artist: '蔡明希-不才', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '月牙湾', artist: 'F.I.R.飞儿乐团', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '越长大越孤单', artist: '牛奶咖啡', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '云垂萝莉的卖萌日常', artist: 'Tacke竹桑', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '云梦谣', artist: '银临/慕寒', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '云水谣', artist: 'en (王翊恩)', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '云烟成雨', artist: '房东的猫', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '云之羽', artist: '张杰', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '再见深海 (微亮的瞬间)', artist: '唐汉霄', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '在加纳共和国离婚 (你还爱我吗)', artist: '菲道尔/DIOR大颖', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '怎样', artist: '戴佩妮', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '长相思', artist: '郁可唯', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '仗着', artist: '艾晟', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '这条小鱼在乎', artist: '王OK/洪佩瑜', language: '国语', genre: '流行', sc: 0, remarks: '薯来薯ki！？' },
{ title: '之子于归', artist: '银临', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '知否知否', artist: '胡夏/郁可唯', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '只对你有感觉', artist: '林俊杰', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '至少还有你', artist: '林忆莲', language: '国语', genre: '流行', sc: 0, remarks: '风酱严选' },
{ title: '珠玉', artist: '单依纯', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '竹林间', artist: '三无Marblue', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '专属味道', artist: '汪苏泷/林希儿', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '追光者', artist: '岑宁儿', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '紫禁城里的似水流年', artist: '黄诗扶', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '自娱自乐', artist: '金志文', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '最长的电影', artist: '周杰伦', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '最后一页', artist: '江语晨', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '醉世客', artist: '小曲儿', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '昨夜风今宵月', artist: '庄淇玟29', language: '国语', genre: '古风', sc: 0, remarks: '' },
{ title: '左手右手', artist: '杨沛宜', language: '国语', genre: '流行', sc: 0, remarks: '' },
{ title: '左手指月', artist: '萨顶顶', language: '国语', genre: '古风', sc: 0, remarks: '' },
];

// ============================================================
//  工具函数
// ============================================================
function getUniqueValues(key) {
    const vals = songs.map(s => s[key]).filter(v => v && v.trim());
    return [...new Set(vals)].sort((a, b) => a.localeCompare(b));
}

const filterConfig = [
    { key: 'artist', label: '歌手' },
    { key: 'language', label: '语言' },
    { key: 'genre', label: '风格' },
];

let filtered = [...songs];
let scOnly = false;
let currentHighlight = null;

const songListEl = document.getElementById('songList');
const countDisplay = document.getElementById('countDisplay');
const searchInput = document.getElementById('searchInput');
const filterContainer = document.getElementById('filterContainer');
const randomBtn = document.getElementById('randomBtn');
const ancientBtn = document.getElementById('ancientBtn');
const popBtn = document.getElementById('popBtn');
const updateTime = document.getElementById('updateTime');

// Toast 相关
const toast = document.getElementById('toast');
let toastTimer = null;

function showToast(text) {
    if (toastTimer) {
        clearTimeout(toastTimer);
        toastTimer = null;
    }
    toast.className = 'toast';
    toast.textContent = text;
    void toast.offsetWidth;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        toastTimer = setTimeout(() => {
            toast.className = 'toast';
            toastTimer = null;
        }, 300);
    }, 1000);
}

function copyText(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(successMsg);
        }).catch(() => {
            fallbackCopy(text, successMsg);
        });
    } else {
        fallbackCopy(text, successMsg);
    }
}

function fallbackCopy(text, successMsg) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast(successMsg);
    } catch (e) {
        alert('复制失败，请手动复制：' + text);
    }
    document.body.removeChild(textarea);
}

// ============================================================
//  自定义下拉相关
// ============================================================
const filterValues = {};

function createCustomSelect(key, label, options) {
    const currentValue = filterValues[key] || '全部';
    const wrapper = document.createElement('div');
    wrapper.className = 'filter-select';
    wrapper.dataset.key = key;

    const labelSpan = document.createElement('span');
    labelSpan.className = 'filter-label';
    labelSpan.textContent = label;
    wrapper.appendChild(labelSpan);

    const customSelect = document.createElement('div');
    customSelect.className = 'custom-select';

    const valueSpan = document.createElement('span');
    valueSpan.className = 'select-value';
    valueSpan.textContent = currentValue === '全部' ? '全部' + label : currentValue;
    customSelect.appendChild(valueSpan);

    const arrowSpan = document.createElement('span');
    arrowSpan.className = 'select-arrow';
    arrowSpan.textContent = '▾';
    customSelect.appendChild(arrowSpan);

    const dropdown = document.createElement('div');
    dropdown.className = 'select-dropdown';

    options.forEach(opt => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'select-option';
        if (opt === currentValue || (currentValue === '全部' && opt === '全部')) {
            optionDiv.classList.add('selected');
        }
        optionDiv.textContent = opt === '全部' ? '全部' + label : opt;
        optionDiv.dataset.value = opt;

        optionDiv.addEventListener('click', function(e) {
            e.stopPropagation();
            const val = this.dataset.value;
            dropdown.querySelectorAll('.select-option').forEach(el => {
                el.classList.remove('selected');
            });
            this.classList.add('selected');
            const displayText = val === '全部' ? '全部' + label : val;
            valueSpan.textContent = displayText;
            filterValues[key] = val;
            dropdown.classList.remove('open');
            arrowSpan.classList.remove('open');
            render();
        });

        dropdown.appendChild(optionDiv);
    });

    customSelect.appendChild(dropdown);
    wrapper.appendChild(customSelect);

    // ===== 判断是否为移动端（宽度 < 820px） =====
    function isMobile() {
        return window.innerWidth < 820;
    }

    customSelect.addEventListener('click', function(e) {
        e.stopPropagation();

        document.querySelectorAll('.select-dropdown.open').forEach(el => {
            if (el !== dropdown) {
                el.classList.remove('open');
                el.parentElement.querySelector('.select-arrow').classList.remove('open');
            }
        });

        const isOpen = dropdown.classList.toggle('open');
        arrowSpan.classList.toggle('open', isOpen);

        if (isOpen) {
            const rect = customSelect.getBoundingClientRect();

            if (isMobile()) {
                // ===== 手机端：使用 fixed 定位 =====
                const spaceBelow = window.innerHeight - rect.bottom - 20;
                const spaceAbove = rect.top - 20;
                const menuHeight = Math.min(310, Math.max(150, Math.max(spaceBelow, spaceAbove)));

                dropdown.style.position = 'fixed';
                dropdown.style.top = (rect.bottom + 12) + 'px';
                dropdown.style.left = rect.left + 'px';
                dropdown.style.bottom = 'auto';
                dropdown.style.right = 'auto';
                dropdown.style.minWidth = Math.max(rect.width, 160) + 'px';
                dropdown.style.maxHeight = menuHeight + 'px';

                if (rect.left + 200 > window.innerWidth) {
                    dropdown.style.left = (window.innerWidth - 200) + 'px';
                }
            } else {
                // ===== 电脑端：使用 absolute 定位（自然跟随父容器） =====
                dropdown.style.position = 'absolute';
                dropdown.style.top = 'calc(100% + 6px)';
                dropdown.style.left = '0';
                dropdown.style.bottom = 'auto';
                dropdown.style.right = 'auto';
                dropdown.style.minWidth = '100%';
                dropdown.style.maxHeight = '310px';
                // 清除手机端可能残留的样式
                dropdown.style.transformOrigin = '';
            }
        }
    });

    document.addEventListener('click', function() {
        dropdown.classList.remove('open');
        arrowSpan.classList.remove('open');
    });

    return wrapper;
}

// ============================================================
//  随机抽取函数（盲盒用）
// ============================================================
function pickRandomSong(songList) {
    if (!songList || songList.length === 0) return null;
    const idx = Math.floor(Math.random() * songList.length);
    return songList[idx];
}

function handleRandomPick(songArray) {
    if (!songArray || songArray.length === 0) {
        alert('当前没有符合条件的歌曲');
        return;
    }
    const song = pickRandomSong(songArray);
    if (song) {
        const copyTextStr = '点歌 ' + song.title;
        copyText(copyTextStr, '已随机复制歌曲名');
    }
}

// ============================================================
//  渲染
// ============================================================
function escapeHtml(str) {
    if (!str) return '';
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return str.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function getFilterValue(key) {
    return filterValues[key] || '全部';
}

function render() {
    let result = [...songs];

    if (scOnly) {
        result = result.filter(s => s.sc && s.sc > 0);
    }

    const keyword = searchInput.value.trim().toLowerCase();
    if (keyword) {
        result = result.filter(s =>
            s.title.toLowerCase().includes(keyword) ||
            s.artist.toLowerCase().includes(keyword) ||
            (s.remarks && s.remarks.toLowerCase().includes(keyword)) ||
            (s.sc && String(s.sc).includes(keyword))
        );
    }

    const artistVal = getFilterValue('artist');
    const languageVal = getFilterValue('language');
    const genreVal = getFilterValue('genre');

    if (artistVal !== '全部') {
        result = result.filter(s => s.artist === artistVal);
    }
    if (languageVal !== '全部') {
        result = result.filter(s => s.language === languageVal);
    }
    if (genreVal !== '全部') {
        result = result.filter(s => s.genre === genreVal);
    }

    filtered = result;
    countDisplay.textContent = `共 ${filtered.length} 首歌曲`;

    songListEl.innerHTML = '';

    if (filtered.length === 0) {
        songListEl.innerHTML = '<div class="empty">🎵 没有找到匹配的歌曲</div>';
        return;
    }

    filtered.forEach((song, index) => {
        const div = document.createElement('div');
        div.className = 'song-item';
        div.dataset.index = index;
        div.dataset.title = song.title;

        div.innerHTML = `
                <span class="song-title">${escapeHtml(song.title)}</span>
                <span class="song-artist">${escapeHtml(song.artist)}</span>
                <span class="song-language">${escapeHtml(song.language || '-')}</span>
                <span class="song-genre">${escapeHtml(song.genre || '-')}</span>
                <span class="song-sc">${song.sc ? song.sc : '-'}</span>
                <span class="song-remarks">${escapeHtml(song.remarks || '')}</span>
            `;

        div.addEventListener('click', function(e) {
            e.stopPropagation();
            const title = this.dataset.title;
            if (title) {
                copyText('点歌 ' + title, '已复制歌曲名');
            }
        });

        songListEl.appendChild(div);
    });
}

// ============================================================
//  筛选器生成
// ============================================================
function buildFilters() {
    filterContainer.innerHTML = '';
    filterConfig.forEach(cfg => {
        const values = getUniqueValues(cfg.key);
        const allValues = ['全部', ...values];
        if (!filterValues[cfg.key]) {
            filterValues[cfg.key] = '全部';
        }
        const wrapper = createCustomSelect(cfg.key, cfg.label, allValues);
        filterContainer.appendChild(wrapper);
    });
}

// ============================================================
//  “随机一首”的高亮功能
// ============================================================
function getRandomSongFromFiltered() {
    if (filtered.length === 0) return null;
    const idx = Math.floor(Math.random() * filtered.length);
    return { song: filtered[idx], index: idx };
}

function highlightSong(index) {
    if (currentHighlight) {
        currentHighlight.classList.remove('highlight');
    }
    const items = songListEl.querySelectorAll('.song-item');
    if (index >= 0 && index < items.length) {
        const el = items[index];
        el.classList.remove('highlight');
        void el.offsetWidth;
        el.classList.add('highlight');
        currentHighlight = el;
        el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
}

function handleRandomHighlight() {
    const result = getRandomSongFromFiltered();
    if (!result) {
        alert('当前筛选结果为空，请调整筛选条件');
        return;
    }
    highlightSong(result.index);
}

// ============================================================
//  盲盒按钮事件
// ============================================================
function handleAncientPick() {
    const ancientSongs = songs.filter(s => s.genre === '古风');
    handleRandomPick(ancientSongs);
}

function handlePopPick() {
    const popSongs = songs.filter(s => s.genre === '流行');
    handleRandomPick(popSongs);
}

// ============================================================
//  初始化
// ============================================================
function init() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    //updateTime.textContent = `${y}-${m}-${d}`;

    buildFilters();
    render();

    randomBtn.addEventListener('click', handleRandomHighlight);
    ancientBtn.addEventListener('click', handleAncientPick);
    popBtn.addEventListener('click', handlePopPick);

    searchInput.addEventListener('input', render);
}

document.addEventListener('DOMContentLoaded', init);
