// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  uuid: string;
  type: number;
  userId: number;
  name: string;
  content: string;
  description: string | null;
  url: string | null;
  tag: string | null;
  createTime: string | null;
  updateTime: string | null;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
  // 如果请求参数中包含 uuid，则返回对应的皮肤信息
switch (req.query.uuid) {
  case "timing_free":
    // 返回字符串形式的皮肤信息，而不是json格式
  res
    .status(200)
    .send(JSON.stringify( {
      uuid: "timing_free",
      type: 0,
      userId: 3,
      name: "Timing",
      content:
        "<stack>\n    <script>\n      var vertical = width()<height()\n      fun radius() {\n        return width()>height()?height()*0.4:width()*0.6\n      }\n      var index = (time()-startTime()-pauseTotalTime())~/(20*60*1000);\n      if(index>23) index = 23\n      var list = [\n        {\n            name:'大爆炸',\n            description:'宇宙由这一刻诞生，你的征程也由此开始'\n         },{\n            name:'太阳系',\n            description:'太阳系正在慢慢形成，万事开头难'\n         },{\n            name:'地球',\n            description:'孕育生命的摇篮，似乎有灵感涌上心头？'\n         },{\n            name:'太古代',\n            description:'第一个生命诞生了，是否得到了某种启发呢？'\n         },{\n            name:'震旦纪',\n            description:'进化是最伟大的馈赠，在不知不觉中你正在感受进步。'\n         },{\n            name:'寒武纪',\n            description:'鱼类最活跃的时期，鱼儿水中游，时光一去不回头。'\n          },{\n            name:'奥陶纪',\n            description:'大陆板块形成，更大的挑战即将来临。'\n          },{\n            name:'泥盆纪',\n            description:'陆地的感觉好吗？，请抓紧每一分钟。'\n         },{\n            name:'石炭纪',\n            description:'山峰丛林开始形成，注意静心。'\n         },{\n            name:'三叠纪',\n            description:'火山开始爆发，大型爬行动物诞生了，是否有所收获了？'\n         },{\n            name:'侏罗纪',\n            description:'恐龙横行的年代，保持专注，克服难关。'\n          },{\n            name:'白垩纪',\n            description:'恐龙灭绝，现在可以告一段落了。'\n          },{\n            name:'古代',\n            description:'人类的祖先在这片大陆上开疆辟土，学习有时候需要互相帮助。'\n          },{\n            name:'近代',\n            description:'王国，朝代逐渐形成，注意归纳你所学的知识。'\n          },{\n            name:'现代',\n            description:'我们所生活的年代,注意劳逸结合。'\n          },{\n            name:'人群',\n            description:'人多力量大?前提是要有着共同的目标。'\n          },{\n            name:'部落',\n            description:'听说印第安人始终保持着这样的生活方式，今天的学习到这里也可以结束了。'\n         },{\n            name:'村庄',\n            description:'人类不再到处游荡，有了自己固定的“ 家”。记得回忆和巩固自己今天的学习。'\n         },{\n            name:'城市',\n            description:'繁荣时期，去做做别的事情吧。'\n         },{\n            name:'未来时期',\n            description:'人类科技的巅峰，每天的知识获取量是有限的。'\n         },{\n            name:'地球毁灭',\n            description:'世界的尽头，它必将发生。过度的学习会影响短期记忆。'\n         },{\n            name:'核爆炸',\n            description:'物极必反，人类如此，学习也是如此。'\n          },{\n            name:'太阳系毁灭',\n            description:'生命迹象消失，进入效率低下期。'\n         },{\n            name:'宇宙毁灭',\n            description:'任何事物都有它的极限，超越了极限会自我毁灭。'\n         },\n       ]\n      var progress = list[index]\n      var image = 'http://todocdn.i99yun.com/skins/timing/timing_bg' + (index+1).toString() + '.webp'\n    </script>\n    <container color='#000000'></container>\n  \n    <animation duration='100'>\n    <cliprect>\n        <translate :offsetX='vertical?Math.sin(time()/10000)*(height()-width())/2:0'  :offsetY='vertical?0:Math.sin(time()/10000)*(height()-width())/2'>\n            <fsizedbox :width='!vertical?1:(height()/width())' :height='vertical?1:(width()/height())' alignment='center'>\n               <img fit='contain' :width='width()' :height='height()' :content='image'></img>\n            </fsizedbox>\n        </translate>\n            </cliprect>\n    </animation>\n    <safeArea>\n        <column mainAxisAlignment='spaceBetween'>\n            <sizedBox height='64'></sizedBox>\n            <flex mainAxisAlignment='spaceBetween' :direction='vertical?\"vertical\":\"horizontal\"'>\n                <div></div>\n                    <stack>\n                        <Avatar></Avatar>\n                        <border shape='circle' color='#ffffff' width='2'>\n                            <square :dimension='96'></square>\n                        </border>\n                    </stack>\n                <sizedBox height='64'></sizedBox>\n                <column>\n                        <NumberTimeText></NumberTimeText>\n                    <sizedBox height='8'></sizedBox>\n                    <animation duration='1000'>\n                          <text size='24' shadowBlurRadius='5' shadowOffsetX='1' shadowOffsetY='1' shadowColor='#66000000' color='#ffffff' :content='((time()~/6000)%2==1)?name():progress.name'></text>\n                    </animation>\n               </column>\n               <div></div>\n            </flex>\n            <padding all='16'><text size='20' shadowBlurRadius='5' shadowOffsetX='1' shadowOffsetY='1' shadowColor='#66000000' color='#ffffff' :content='progress.description'></text></padding>\n            <ToolBarSimple></ToolBarSimple>\n        </column>\n    </safeArea>\n</stack>",
      description: "纪念Timing",
      url: null,
      tag: null,
      updateTime: null,
      createTime: null,
    }));
  }
  
}
